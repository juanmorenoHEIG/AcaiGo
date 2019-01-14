export class User {
  id: string;
  firstname: string;
  name: string;
  email: string;
  password;
  address: {
    street: string;
    NPA: number;
    City: string;
  }
}
