import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { LoginUserDto } from './dto/login-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async register(registerUserDto: RegisterUserDto) {
    const user: User = new User();
    user.email = registerUserDto.email;
    user.firebase_uid = registerUserDto.firebase_uid;
    user.last_login = new Date();
    return await this.userRepository.save(user);
  }

  async login(loginUserDto: LoginUserDto) {
    const foundUser = await this.userRepository.findOne({
      where: {
        firebase_uid: loginUserDto.firebase_uid,
        email: loginUserDto.email,
      },
    });
    return await this.userRepository.update(foundUser.id, {
      last_login: new Date(),
    });
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOneBy({ id });
  }

  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
