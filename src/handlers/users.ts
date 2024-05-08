import { Request, Response } from "express";
import { createUserDto } from "../dtos/CreateUser.dto";
import { request } from "http";
import { CreateUsersQueryParams } from "../types/query-params";
import { User } from "../types/response";

export const UsersList = [
  { id: 1, name: "Frik", email: "frik1@gmail.com" },
  { id: 2, name: "Daun", email: "frik2@gmail.com" },
  { id: 3, name: "Loh", email: "frik3@gmail.com" },
  { id: 777, name: "Ghoul", email: "zxc123@kiss.com" },
];

export function getUsers(req: Request, response: Response) {
  response.send(UsersList);
}

export function getUsersbyId(req: Request, response: Response) {
  console.log(req.params);
  const parsedId = parseInt(req.params.id);
  console.log(parsedId);
  if (isNaN(parsedId))
    return response.status(400).send("Bad Request. Invalid Id. Wrong.");
  const findUser = UsersList.find((user) => user.id == parsedId);
  if (!findUser) return response.sendStatus(404);
  return response.send(findUser);
}

export function PostStatusGood(req: Request, response: Response) {
  console.log(req.body);
  return response.sendStatus(200);
}

export function createUser(
  req: Request<{}, {}, createUserDto, CreateUsersQueryParams>,
  response: Response<User>
) {
  return response.status(201).send({
    id: 1,
    name: "Makaq",
    email: "makaq@123.com",
  });
}

// export function GetUsersList(req: Request, response: Response) {
//   response.send(UsersList);
// }
