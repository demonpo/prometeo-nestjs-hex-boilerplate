import { User } from '../../entities/user.entity';

export interface UserRepository {
  find(): Promise<User[]>;
}

export const UserRepository = Symbol('UserRepository');
