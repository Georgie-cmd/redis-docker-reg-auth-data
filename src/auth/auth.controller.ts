import { Controller, Post, UsePipes } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { ApiTags } from '@nestjs/swagger';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { AuthService } from './auth.service';

@ApiTags('Authorization')
@Controller('auth')
export class AuthController {

    constructor(private authService: AuthService) {}

    //POST request with login method
    @UsePipes(ValidationPipe)
    @MessagePattern('Login...')
    @Post('/login')
    login(userDto: any) {
        return this.authService.login(userDto.text)
    }

    //POST request with registration method
    @UsePipes(ValidationPipe)
    @MessagePattern('Registration...')
    @Post('/registration')
    registration(userDto: any) {
        return this.authService.registration(userDto.text)
    }

}
