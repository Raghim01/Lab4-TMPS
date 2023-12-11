import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TasksModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'ep-flat-thunder-72057510.us-east-1.postgres.vercel-storage.com',
      port: 5432,
      username: 'default',
      password: 'T41LVWFPCnws',
      database: 'verceldb',
      ssl: true, // Ensure SSL is enabled for Vercel
      extra: {
        ssl: {
          rejectUnauthorized: false, // For self-signed certificates, remove it in production
        },
      },
      synchronize: true, // It's recommended to disable synchronize in production
      autoLoadEntities: true,
    }),
    AuthModule,
  ],
})
export class AppModule {}
