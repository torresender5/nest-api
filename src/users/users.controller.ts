import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
        @Get()
        findAll(){
            return "esto es una prueba"
        }
    
}
