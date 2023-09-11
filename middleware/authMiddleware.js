import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

// User auth middleware
const protect = async (req, res, next) => {
  let token;

  //Read the JWT from cookie
  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({
        message: "Not authorized, token failed",
      });
    }
  } else {
    res.status(401).json({
      message: "Not Authorized, no token",
    });
  }
};

//Admin middleware
const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({
      message: "Not authorized as admin",
    });
  }
};

export { protect, admin };
