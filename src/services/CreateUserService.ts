import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
}

class CreateUserService {
    async execute({name} : IUserRequest){
        const userRepositories = getCustomRepository(UserRepositories);

        // if(!email) {
        //     throw new Error("Incorrect Email");
        // }

        // const userAlredyExists = await userRepositories.findOne({
        //     email,
        // });

        // if(userAlredyExists){
        //     throw new Error("User alredy exists!");
        // }

        const user = userRepositories.create({
            name
        });

        await userRepositories.save(user);

        return user;
    }
}

export {CreateUserService}