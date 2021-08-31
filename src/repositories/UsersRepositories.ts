import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/User";

@EntityRepository(User)
class UserRepositories extends Repository<User> {
    static find() {
        throw new Error("Method not implemented.");
    }
}

export {UserRepositories};