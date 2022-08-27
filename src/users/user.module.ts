import { Module } from '@nestjs/common';
import { UserController } from './controllers/user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UserRepository } from './interfaces/repositories/user-repository';
import { ImplUserRepository } from './repositories/impl-user-repository';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: UserRepository, // Used as a symbol
      useClass: ImplUserRepository,
    },
  ],
  controllers: [UserController],
  exports: [TypeOrmModule],
})
export class UserModule {}
