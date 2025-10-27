import { ApiProperty, ApiSchema } from '@nestjs/swagger';
import { IsString, IsOptional } from 'class-validator';


@ApiSchema({ name: 'Login' })
export class CreateLoginDto {
    @ApiProperty({ description: 'Email' })
    @IsString()
    email: string;

    @ApiProperty({ description: 'Password' })
    @IsString()
    password: string;
}


@ApiSchema({ name: 'Register' })
export class RegisterDto {
    @ApiProperty({ description: 'Email' })
    @IsString()
    email: string;

    @ApiProperty({ description: 'Password' })
    @IsString()
    password: string;

    @ApiProperty({ description: 'Name' })
    @IsString()
    name: string;
}