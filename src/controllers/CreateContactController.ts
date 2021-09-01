import { Request, Response } from "express";
import { CreateContactService } from "../services/CreateContactService";


class CreateContactController {
    async handle(request: Request, response: Response) {
        const { user_id, value, type, primary} = request.body;

        const createContactService = new CreateContactService();

        const contact = await createContactService.execute({
            user_id,
            value,
            type,
            primary
        });
        
        return response.json(contact);
    }
}

export { CreateContactController }