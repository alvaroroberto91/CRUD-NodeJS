import { getCustomRepository } from "typeorm";
import { ContactsRepositories } from "../repositories/ContactsRepositories";

interface IContactsRequest {
    user_id: string;
    value: string;
    type: string;
    primary?: boolean;
}

class CreateContactService {
    async execute({user_id, value, type, primary = false} : IContactsRequest){
        const contactsRepositories = getCustomRepository(ContactsRepositories);

        const contact = contactsRepositories.create({
            user_id,
            value,
            type,
            primary
        });

        await contactsRepositories.save(contact);

        return contact;
    }
}

export { CreateContactService };