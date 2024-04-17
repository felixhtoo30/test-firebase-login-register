import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*
   * POST http://localhost:3000/user/register
   */
  @Post('/register')
  register(@Body() registerUserDto: RegisterUserDto) {
    return this.userService.register(registerUserDto);
  }

  /*
   * POST http://localhost:3000/user/login
   */
  @Post('/login')
  login(@Body() loginUserDto: LoginUserDto) {
    return this.userService.login(loginUserDto);
  }

  /*
   * GET http://localhost:3000/user
   */
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  /*
   * GET http://localhost:3000/user/:id
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  /*
   * DELETE http://localhost:3000/user/:id
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
