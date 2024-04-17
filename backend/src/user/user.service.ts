import { Injectable } from '@nestjs/common';
import { SaveUserDto } from './dto/save-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}
  async save(saveUserDto: SaveUserDto) {
    const existingUser = await this.userRepository.findOne({
      where: {
        firebase_uid: saveUserDto.firebase_uid,
        email: saveUserDto.email,
      },
    });
    if (existingUser !== null) {
      const user = {
        email: saveUserDto.email,
        firebase_uid: saveUserDto.firebase_uid,
        last_login: new Date(),
      };
      return await this.userRepository.save(user);
    } else {
      const user: User = new User();
      user.email = saveUserDto.email;
      user.firebase_uid = saveUserDto.firebase_uid;
      user.last_login = new Date();
      return await this.userRepository.save(user);
    }
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
