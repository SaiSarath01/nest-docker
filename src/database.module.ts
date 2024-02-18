/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
// import { ConfigService } from '@nestjs/config';
import config from './configuration/config';
import { SequelizeModule, SequelizeModuleOptions } from '@nestjs/sequelize';

// const configService = new ConfigService();

const sequelizeConfig: SequelizeModuleOptions = {
  dialect: 'mysql',
  host: config().host,
  port: config().database.port,
  username: config().database.username,
  password: config().database.password,
  database: 'test',
  autoLoadModels: true, // Automatically discover and load models from the models directory
  synchronize: true, // Automatically synchronize database schema with models (not recommended for production)
};

@Module({
  imports: [SequelizeModule.forRoot(sequelizeConfig)],
  providers: [],
})
export class DatabaseModule {}
