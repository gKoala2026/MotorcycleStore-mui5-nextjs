import { httpService } from './http.service'
import * as storageService  from './storage.service'

export const register = ({ username, email, password, role}) => {
   //   console.log(login, password)
  return httpService.post('auth/signup', {
    username, email, password, role
  })

}

export const logIn = ({ email, password }) => {
  console.log('postdata',email, password)
//  return httpService.post('login', {
//     email, password
//  })
httpService.post('login', {
  email, password
}).then(res => {
  console.log(res, '================')
}).catch(err => {
  console.log(err, '[[[[[[[[[[[[[[')
})
}

export const getUser = () => {
  return httpService.post('auth/get_user')

}
  
export const logOut = () => {
  return storageService.removeStorage('token')
}

export const passwordReset = () => {
  return httpService.put('users/password')
}

export const getCompany = ({ identify }) => {
  return httpService.post('auth/get_company', {identify})
}