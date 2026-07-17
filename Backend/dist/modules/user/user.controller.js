"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const user_service_1 = require("./user.service");
const UserService = new user_service_1.userService();
class userController {
    areaOfstudies(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log("here is in area of studies ");
                const courseName = String(req.query.courseName);
                const geminiRes = yield UserService.main(courseName);
                console.log(geminiRes, "fake data");
                res.status(200).json(geminiRes);
            }
            catch (err) {
                console.log(err, ":err on controller file ");
            }
        });
    }
}
exports.userController = userController;
