import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { UserRepositories } from "../repositories/UsersRepositories";


class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id } = request.params;

        const updateRepository = await getRepository(User).update(id, request.body);
        
        return response.status(200).json({message: ""});
    }

}

export { UpdateUserController }