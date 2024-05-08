import { Router, request } from "express";
import {
  PostStatusGood,
  UsersList,
  createUser,
  getUsers,
  getUsersbyId,
} from "../handlers/users";

const router = Router();

router.get("/", getUsers).post("/", PostStatusGood);

router.get("/:id", getUsersbyId);

router.post("/", createUser);

//router.get("/", GetUsersList);

export default router;
