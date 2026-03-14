import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsString, IsOptional, IsEmail} from 'class-validator';


@ApiSchema({ name: 'Create' })
export class UserCreateDto {
    @ApiProperty({ description: 'Email' })
    @IsEmail()
    email: string;

    @ApiProperty({ description: 'Password' })
    @IsString()
    password: string;

    @ApiProperty({ description: 'User' })
    @IsString()
    user: string;
}