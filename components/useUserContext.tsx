import {useContext} from 'react'
import { UserContext } from '../context/userContext'


export const useUserContext = () => {
  return useContext(UserContext)
}