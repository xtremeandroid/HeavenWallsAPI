import expesss from "express";
const router = expesss.Router();
import {
  loginUser,
  registerUser,
  getUserInfoById,
  updateUserInfo,
  logoutUser,
  deleteUserId,
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").post(protect, logoutUser);
router
  .route("/profile/:id")
  .get(protect, getUserInfoById)
  .put(protect, updateUserInfo)
  .delete(protect, deleteUserId);

export default router;
