import { IsEmail, IsInt, Max, Min, MinLength } from "class-validator";

export class CreateUserDto {

    @MinLength(3, {
        message: 'Name is too short (minimum is 3 characters)'
    })
    name: string;

    @IsInt()
    @Min(18, {
        message: 'Age must be greater than or equal to 18'
    })
    @Max(65, {
        message: 'Age must be less than or equal to 65'
    })
    age: number;

    @IsEmail()
    email: string;

    @MinLength(10, {
        message: 'Address is too short (minimum is 10 characters'
    })
    address: string;

}
