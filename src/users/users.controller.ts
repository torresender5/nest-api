import { Controller, Get, Post, UseGuards,  Body, HttpCode, HttpStatus, Inject} from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthGuard } from '../auth/auth.guard';
import { UserCreateDto } from './dto/user.dto';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';


@Controller('users')
export class UsersController {
    constructor(private usersService: UsersService, @Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {}
    // private readonly logger = new Logger(UsersController.name);
    
    // @UseGuards(AuthGuard)
    @Get()
    findAll(){
        this.logger.info('Starting UsersController find all')
        // this.logger.log('Starting UsersController find all')
        return this.usersService.findAllUsers()
    }

    @HttpCode(HttpStatus.OK)
    @Post('register')
    createUser(@Body() data: UserCreateDto) {
        return this.usersService.createUser(data);
    }
}
