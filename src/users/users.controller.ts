import { CacheInterceptor, CacheKey, CacheTTL, Controller, UseInterceptors, UsePipes } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ValidationPipe } from './../pipes/validation.pipe';
import { MessagePattern } from '@nestjs/microservices';


@Controller('users')
export class UsersController {
    
    constructor(private usersService: UsersService) {}

    //GET request
    @UseInterceptors(CacheInterceptor)
    @CacheKey('Get all users')
    @CacheTTL(300)
    @MessagePattern('Getting all users...')
    getAll() {
        return this.usersService.getAllUsers()
    }

    //GET request by ID
    @UseInterceptors(CacheInterceptor)
    @CacheKey('Get user by ID')
    @CacheTTL(300)
    @MessagePattern('Getting by ID...')
    getOneById(id: any) {
        return this.usersService.getUserById(id.text)
    }

    //GET Request by Email
    @UseInterceptors(CacheInterceptor)
    @CacheKey('Get user by email')
    @CacheTTL(300)
    @MessagePattern('Getting by email...')
    getOneByEmail(email: any) {
        return this.usersService.getUserByEmail(email.text)
    }


    //POST Request
    @UsePipes(ValidationPipe)
    @MessagePattern('POST request by user...')
    create(userDto: CreateUserDto) {
        return this.usersService.createUser(userDto)
    }
    

    //DELETE request by ID
    @UseInterceptors(CacheInterceptor)
    @CacheKey('Delete user by ID')
    @CacheTTL(300)
    @MessagePattern('DELETE request by user...')
    remove(id: any) {
        return this.usersService.removeUser(id.text)
    }


    //PUT request by ID
    @UsePipes(ValidationPipe)
    @MessagePattern('PUT request by user...')
    update(message: any) {
        return this.usersService.updateUser(message.text, message.text1)
    }


}


