import { FactorizedAttrs, Factory } from '@jorgebodega/typeorm-seeding';
import { faker } from '@faker-js/faker';
import { User } from '../../users/entities/user.entity';

export class UserFactory extends Factory<User> {
  protected entity = User;
  protected attrs(): FactorizedAttrs<User> {
    return {
      id: faker.datatype.uuid,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
    };
  }
}
