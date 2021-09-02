import { Entity, PrimaryColumn, Column, JoinColumn, ManyToOne } from "typeorm";
import { v4 as uuid } from "uuid";
import { User } from "./User";

@Entity("contacts")
class Contact {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_id: string;

    @JoinColumn({name: "user_id"})
    @ManyToOne(() => User, user => user.id)
    user: User;

    @Column()
    value: string;

    @Column()
    type: string;

    @Column()
    primary: boolean; 
    
    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

}

export { Contact }