/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Task } from './task.model';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(Task)
    private readonly taskModel: typeof Task,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async newTask(info: any) {
    await this.taskModel.create(info);
  }
}
