// app.controller.ts
import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { PhoneDto } from './phone.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get()
  @Render('index')
  getHello(): object {
    return {};
  }

  @Post()
  @Render('color')
  handleColor(@Body() body: PhoneDto): object {
    if (body.allatNev.length < 1) {
      throw new Error(`Az állat neve nem lehet üres`);
    }
    if ( body.allatEletkor < 0){
      throw new Error(`Az állat életkora nem lehet negatív`);
    }
    return body;
  }
}
