import {Router} from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

router.post("/user", createUserController.handle);

router.get("/list", listUserController.handle);


export {router};