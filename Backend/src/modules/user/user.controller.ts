import { Request, Response } from "express";
import { userService } from "./user.service";
const UserService = new userService();

export class userController {
  public async areaOfstudies(req: Request, res: Response) {
    try {
      const courseName: string = String(req.query.courseName);
      const geminiRes = await UserService.main(courseName);

      res.status(200).json(geminiRes);
    } catch (err) {
      console.log(err, ":err on controller file ");
      const message =
        err instanceof Error ? err.message : "Something went wrong";
      res.status(400).json({ status: "fail", message });
    }
  }
}
