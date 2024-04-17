import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { SaveUserDto } from './dto/save-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  /*
   * POST http://localhost:3000/user/save
   */
  @Post('/save')
  save(@Body() saveUserDto: SaveUserDto) {
    return this.userService.save(saveUserDto);
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
