import User from "../models/userModel.js ";
import generateToken from "../utils/generateToken.js";

// @desc auth user and get token
// @route POST /api/users/login
// @access PUBLIC

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({
      email,
    });
    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);

      res.status(200).json({
        message: "Account Logged in Successfully",
      });
    } else {
      res.status(401).json({
        message: "Wrong User Credentials",
      });
    }
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// @desc Register user
// @route POST /api/users/register
// @access PUBLIC

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(401).json({
      message: "user already exists",
    });
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    generateToken(res, user._id);

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(400).json({
      message: "Invalid user data",
    });
  }
};

// @desc Logout user
// @route POST /api/users/logout
// @access Private

const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({
    message: "logged out succesfully",
  });
};

// @desc get user info
// @route GET /api/users/profile
// @access Private

const getUserInfoById = async (req, res) => {
  const user = await User.findById(req.params.id);
  if (user) {
    res.status(200).json({
      id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404).json({
      message: "User not found",
    });
  }
};

// @desc update user info
// @route PUT /api/users/profile
// @access Private

const updateUserInfo = async (req, res) => {
  res.send(" updated user info ");
};

const deleteUserId = async (req, res) => {
  res.send("deleted user");
};

export {
  loginUser,
  registerUser,
  logoutUser,
  getUserInfoById,
  updateUserInfo,
  deleteUserId,
};
