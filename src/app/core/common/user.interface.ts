export interface UserEntity {
  id: string;
  fakeToken: string;
  name: {
    first: string;
    last: string;
  };
  login: string;
  password: string;
}
