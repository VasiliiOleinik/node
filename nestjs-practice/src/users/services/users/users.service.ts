import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
    private users = [
        {
            username: "John 1",
            email: "mail@mail.com",
        },
        {
            username: "Jane 2",
            email: "mail2@mail.com",
        },
        {
            username: "Jane 3",
            email: "mail4@mail.com",
        },
    ]
    fetchUsers() {
        return this.users
    }
    
    createUser(userData: CreateUserType) {
        return this.users.push(userData)
    }

    fetchUserById(id: string) {
        console.log('fetchUserById', id)
        return {username: "John Doe", email: ""}
    }
}
