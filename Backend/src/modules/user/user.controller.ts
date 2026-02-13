import { Request, Response } from "express";
import { userService } from "./user.service";
const UserService = new userService();

export class userController {
  public areaOfstudies(req: Request, res: Response) {
    UserService.main()
  }
}
