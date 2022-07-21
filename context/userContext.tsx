import * as React from 'react'; 

export interface IUser {
  username: string;
  email: string;
}
export type UserContextType = {
  list: IUser,
  push: (msg: IUser) => void
};

export const UserContextDefaultValues: UserContextType = {
  list: {
    username:'',
    email:'',
  },
  push: (users: IUser) => {}
}
export const UserContext = React.createContext<UserContextType>(UserContextDefaultValues);