import { Request, Response } from "express";
import { ListUserService } from "../services/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {

        const listUserController = new ListUserService();

        const user = await listUserController.execute();

        console.log(user);

        return response.json(user);
    }
}

export { ListUserController };