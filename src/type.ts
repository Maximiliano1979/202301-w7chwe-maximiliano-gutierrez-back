export interface UserCredentials {
  username: string;
  password: string;
}

export interface UserRegister extends UserCredentials {
  name: string;
  email: string;
  avatar: string;
}

export interface UserStructure extends UserCredentials {
  avatar: string;
  aboutMe: string;
  friends: [UserCredentials];
  foes: [UserCredentials];
}
