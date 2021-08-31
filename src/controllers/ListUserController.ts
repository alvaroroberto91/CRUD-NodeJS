import { Request, Response } from "express";
import { ListUserServise } from "../services/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {

        const listUserController = new ListUserServise();

        const user = await listUserController.execute();

        return response.json(user);
    }
}

export { ListUserController };