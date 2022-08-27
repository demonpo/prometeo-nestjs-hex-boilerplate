import { Controller, Get, Inject } from '@nestjs/common';
import { UserRepository } from '../interfaces/repositories/user-repository';

@Controller()
export class UserController {
  constructor(
    @Inject(UserRepository)
    private readonly userRepository: UserRepository,
  ) {}

  @Get('/test')
  async test() {
    return { message: 'test' };
  }

  @Get('/users')
  async findAll() {
    return {
      data: await this.userRepository.find(),
    };
  }
}
