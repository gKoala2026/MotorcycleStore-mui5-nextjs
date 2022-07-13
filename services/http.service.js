import axios from 'axios';
import * as config from '../config/config';
import * as storageService from './storage.service';
export const httpService = {
    get,
    post,
    put,
    deleteDetail
};
function get(apiEndpoint, token){
    token = storageService.getStorage('token');
    return axios.get(config.baseUrl+apiEndpoint, {headers:{
      'authorization': token
    }}).then((response)=>{
       return response;
    }).catch((err)=>{
      return err.response;
      //  console.log(err);
    })
}

function post(apiEndpoint, payload, token){
  token = storageService.getStorage('token');
  console.log('url', config.baseUrl+apiEndpoint, payload)
    return axios.post(config.baseUrl+apiEndpoint, payload, {headers:{
      'authorization': token
    }
    }).then((response) => {
      console.log('reponse', response);
        return response;
    }).catch((err)=>{
      console.log('err',err);
        return err.response;
    })
}
function put(apiEndpoint, payload, token){
  token = storageService.getStorage('token');
    return axios.put(config.baseUrl+apiEndpoint, payload, {headers:{
      'authorization': token
    }}).then((response)=>{
        return response;
    }).catch((err)=>{
      return err.response;
      // console.log(err);
    })
}
function deleteDetail(apiEndpoint, token){
  token = storageService.getStorage('token');
    return axios.delete(config.baseUrl+apiEndpoint, {headers:{
      'authorization': token
    }}).then((response)=>{
        return response;
    }).catch((err)=>{
      return err.response;
        // console.log(err);
    })
}