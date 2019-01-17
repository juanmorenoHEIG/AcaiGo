import {UserResponseAddress} from './address';

export class UserResponse {
  _id = String;
  firstname: string;
  name: string;
  email: string;
  password: string;
  address: UserResponseAddress;
}


