import { Injectable, UnauthorizedException, BadRequestException} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
    constructor(private usersService: UsersService, private jwtService: JwtService) {}
    
    
    async verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compareSync(password, hashedPassword);
    }

    async signIn(email: string, pass: string): Promise<any> {
        const user = await this.usersService.findByEmail(email);
        console.log(user)
        
        if (!user) {
            throw new UnauthorizedException();
        }
        let isValid = await this.verifyPassword(pass, user?.password);
        console.log(isValid)
        if (!isValid) {
            throw new UnauthorizedException();
        }
        const payload = { sub: user.id, name: user.name, email: user.email };
        console.log(payload)
        
        return {
            access_token: await this.jwtService.signAsync(payload),
        };
    }


    async register(data:any ){
        try{
            const user = await this.usersService.createUser(data)
        } catch (error){
            throw new BadRequestException('Error trying to create a user', {
                cause: new Error(),
                description: 'Error trying to create a user',
            });
        }
    }

}
