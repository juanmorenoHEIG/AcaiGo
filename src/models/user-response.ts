export class UserResponse {
  _id: string;
  firstname: string;
  name: string;
  email: string;
  password: string;
  address: UserResponseAddress;
}

export class UserResponseAddress {
  street: string;
  NPA: number;
  City: string;
}
