import { IsEmail, IsNotEmpty } from 'class-validator';

// const passwordRegEx =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,20}$/;

export class SaveUserDto {
  @IsNotEmpty()
  @IsEmail(null, { message: 'Please provide valid Email.' })
  email: string;

  firebase_uid: string;
  last_login: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
