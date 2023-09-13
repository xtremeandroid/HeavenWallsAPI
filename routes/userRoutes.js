import expesss from "express";
const router = expesss.Router();
import {
  loginUser,
  registerUser,
  getUserInfoById,
  updateUserInfo,
  logoutUser,
  deleteUserId,
  likeUnlikeWall,
  fetchLikedWallpapers,
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
router.post("/like/:id", protect, likeUnlikeWall);
router.get("/liked", protect, fetchLikedWallpapers);

export default router;
