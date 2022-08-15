import { Controller, Get } from '@nestjs/common';

@Controller()
export class UserController {
  @Get('/test')
  async test() {
    return { message: 'test' };
  }
}
