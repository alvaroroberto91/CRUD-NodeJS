import { Router } from "express";
import { CreateContactController } from "./controllers/CreateContactController";
import { CreateUserController} from "./controllers/CreateUserController";
import { ListUserController } from "./controllers/ListUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";


const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const createContactController = new CreateContactController();
const updateUserController = new UpdateUserController();
const deleteUserController = new DeleteUserController();

router.get("/user", listUserController.handle);

router.post("/user", createUserController.handle);
router.post("/contacts", createContactController.handle);

router.put("/update/:id",  updateUserController.handle);
router.delete("/user/:id", deleteUserController.delete);


export {router};