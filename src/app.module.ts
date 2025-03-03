import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fleet } from './Infra/Entities/Fleet.entity';
import { Vehicle } from './Infra/Entities/Vehicle.entity';
import { VehicleRepositoryModule } from './infra/repository/vehicle-repository/vehicle-repository.module';
import { FleetRepositoryModule } from './Infra/repository/fleet-repository/fleet-repository.module';
import { RegisterModule } from './app/register/register.module';
import { ParkModule } from './app/park/park.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make the ConfigModule globally available
      envFilePath: '.env', // Define the path to the .env file
    }),
    // Setup TypeORM module using ConfigService to get environment variables
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'mariadb',
        host: configService.get<string>('DB_HOST'),
        port: configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USERNAME'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_NAME'),
        entities: [Fleet, Vehicle], // Add your entities here
        synchronize:
          configService.get<string>('NODE_ENV') === 'development'
            ? true
            : false, // Set to `false` in production
      }),
    }),
    VehicleRepositoryModule,
    FleetRepositoryModule,
    RegisterModule,
    ParkModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
