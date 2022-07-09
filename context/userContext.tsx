import * as React from 'react';
import type { NextPage } from 'next'
// import { TodoContextType, ITodo } from '../@types/todo';
import {useContext} from 'react'
import { isNumberObject } from 'util/types';

export interface IUser {
    id: number;
    name: string;
    taken: string;
    status: boolean;
  }
export type UserContextType = {
    user: IUser;
    saveUser: (user: IUser) => void;
    cleanUser: () => void;
};

export const UserContext = React.createContext<UserContextType | null>(null);

export const useUserContext = () => {
  return useContext(UserContext)
}

type UserProviderProps = {
    children : React.ReactNode,
}

const UserProvider:NextPage<UserProviderProps> = ({ children }) => {
    const [user, setUser] = React.useState<IUser>(
        {
        id: 1,
        name: 'David',
        taken: '',
        status: false,
        }
    );
    const saveUser = (user: IUser) => {
        const newUser: IUser = {
          id: user.id, // not really unique - but fine for this example
          name: user.name,
          taken: user.taken,
          status: user.status,
        }
        setUser(newUser)
    }
      
    const cleanUser = () => {
      setUser(
        {
        id: 1,
        name: '',
        taken: '',
        status: false,
        }
      )
      // React.useEffect(() => {
        localStorage.removeItem('id')
      // }, [])
    }
    return (
        <UserContext.Provider value={{ user, saveUser, cleanUser }}>
          {children}
        </UserContext.Provider>
    );
};
    
export default UserProvider;