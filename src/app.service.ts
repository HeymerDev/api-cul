import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'La version 1 de la api, potenciada por NestJS';
  }
}
