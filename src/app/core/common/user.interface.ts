export interface UserAuth {
  token: string;
}

export interface UserCredentials {
  username: string;
  password: string;
}

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

export const TOKEN_STORAGE_KEY: string = 'token';
