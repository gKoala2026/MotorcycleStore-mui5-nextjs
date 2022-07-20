import * as React from 'react'; 

export interface IUser {
  id: number;
  username: string;
  email: string;
  password: string;
}
export type UserContextType = {
  list: IUser,
  push: (msg: IUser) => void
};

export const UserContextDefaultValues: UserContextType = {
  list: {
    id: 0,
    username:'',
    email:'',
    password:''
  },
  push: (users: IUser) => {}
}
export const UserContext = React.createContext<UserContextType>(UserContextDefaultValues);