import { Controller, Get, Post, Req, Res, Body, Param, Query, UsePipes, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users') // api route
export class UsersController {

    constructor(private usersService: UsersService) {}

    // @Get('fetch') //route for this endpoint users/fetch. It can be empty string as well
    // getUsers() {
    //     return [{username: "John Doe", email: "mail@mail.com"}]
    // }

    // @Get('fetch') 
    // @Query('sortDesk', ParseBoolPipe) sortDesk: boolean
    // getUsers(@Query('sortBy') sortBy: string) { // Get query parameters
    //     console.log(sortBy)
    //     return [{username: "John Doe", email: "mail@mail.com"}]
    // }

    @Get()
    getUsers() {
        return this.usersService.fetchUsers()
    }

    @Get('posts')
    getUsersPosts() {
        return [{title: "Post 1", content: "Content 1"}, {title: "Post 2", content: "Content 2"}]
    }

    @Get('comments')
    getUsersComments() {
        return [{comment: "Comment 1"}, {comment: "Comment 2"}]
    }

    // @Post('create')
    // createUser(@Req() request: Request, @Res() response: Response) {
    //    console.log(request.body)

    //     response.send({message: "User created successfully"})
    // }

    // Typesafety with DTO
    // @Post('create')
    // createUser(@Body() userData: CreateUserDto, @Res() response: Response) {
    //    console.log(userData)

    //     response.send({message: "User created successfully"})
    // }
    @Post('create')
    @UsePipes(new ValidationPipe())
    createUser(@Body() userData: CreateUserDto, @Res() response: Response) {
    //    console.log(userData)
    //     response.send({message: "User created successfully"})

        this.usersService.createUser(userData)
        response.send({message: "User created successfully"})
    }

    // @Get(':id')
    // getUserById(@Req() request: Request, @Res() response: Response) {
    //     console.log(request.params)
    //     response.send({message: "User fetched successfully"})
    // }

    @Get(':id')
    getUserById(@Param('id' ) id: string, @Res() response: Response) {
        // console.log(id)
        // response.send({message: "User fetched successfully"})

        console.log('ID', id)
        return this.usersService.fetchUserById(id)
    }

    @Get(':id/:postId')
    // ParseIntPipe - to convert string to number
    getUserPostById(@Param('id', ParseIntPipe) id: number, @Param('postId' ) postId: string, @Res() response: Response) {
        console.log(id)
        console.log(postId)
        response.send({message: "User fetched successfully"})
    }

}
