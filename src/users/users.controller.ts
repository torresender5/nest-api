import { Controller, Get, UseGuards, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';

@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService) {}
    private readonly logger = new Logger(UsersController.name);
    
    @UseGuards(AuthGuard)
    @Get()
    findAll(){
        this.logger.log('Starting UsersController find all')
        return this.usersService.findAllUsers()
    }
    
}
