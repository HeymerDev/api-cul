import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsInt, Max, MaxLength, Min, MinLength, IsOptional } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'El nombre del usuario' })
    @MinLength(3, {
        message: 'Name is too short (minimum is 3 characters)'
    })
    name: string;

    @IsOptional()
    @IsInt()
    @Min(18, {
        message: 'Age must be greater than or equal to 18'
    })
    @Max(65, {
        message: 'Age must be less than or equal to 65'
    })
    age?: number;

    @IsEmail()
    email: string;

    @IsOptional()
    @MinLength(10, {
        message: 'Address is too short (minimum is 10 characters)'
    })
    address?: string;

    @MinLength(6, {
        message: 'Password is too short (minimum is 6 characters)'
    })
    @MaxLength(15, {
        message: 'Password is too long (maximum is 15 characters)'
    })
    password: string;

}
