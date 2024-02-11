/* eslint-disable prettier/prettier */
import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  timestamps: true,
})
export class Task extends Model {
  @Column
  taskInfo: string;

  @Column
  isCompleted: boolean;
}
