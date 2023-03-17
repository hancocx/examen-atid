export type Roles = 'ROL-A' | 'ROL-B';

export interface LoginInterface {
  username: string;
  password: string;
}

export interface LoginResponseInterface {
  status: string;
  response: string;
  token: string;
  rol: Roles;
  password: string;
}
