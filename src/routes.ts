import {Router} from "express";
import { CreateContactController } from "./controllers/CreateContactController";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";

const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const createContactController = new CreateContactController();

router.post("/user", createUserController.handle);
router.post("/contacts", createContactController.handle);

router.get("/list", listUserController.handle);


export {router};