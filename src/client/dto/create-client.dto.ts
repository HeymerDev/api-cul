import { IsEmail } from "class-validator";

export class CreateClientDto {
    @IsEmail()
    email: string;
}
