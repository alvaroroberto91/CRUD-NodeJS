import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";

class DeleteUserController {
    async delete(request: Request, response: Response) {
        const { id } = request.params;

        await getRepository(User).delete(id)

        return response.json("User deleted");
    }

}

export { DeleteUserController };