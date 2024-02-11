/* eslint-disable prettier/prettier */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/task')
  async newTask(@Body() taskInfo): Promise<any> {
    console.log(taskInfo);
    return await this.appService.newTask(taskInfo);
  }
}
