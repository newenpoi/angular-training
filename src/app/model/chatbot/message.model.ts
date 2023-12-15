import { User } from "./user.model";

export class Message {
    id!: number;
    user!: User;
    content!: string;
    created!: string;
}