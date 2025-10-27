import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateLoginDto, RegisterDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: CreateLoginDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    register(@Body() signInDto: RegisterDto) {
        return this.authService.register(signInDto);
    }
}
// curl -X POST http://localhost:3000/auth/login -d '{"email": "torresender5@gmail.coom", "password": "test123"}' -H "Content-Type: application/json"
