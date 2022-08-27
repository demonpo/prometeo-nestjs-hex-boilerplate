import { UserRepository } from '../interfaces/repositories/user-repository';
import { User } from '../entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class ImplUserRepository implements UserRepository {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}
  async find(): Promise<User[]> {
    return await this.userRepository.find();
  }
}
