import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:3001/api/v1/user',
    timeout: 1000,
});

const getList = (subscriber: any) => {
    instance.get('/')
    .then((res)=>{
        subscriber(res.data);
    })
}

const getOne = (subscriber: any, id: number) => {
    instance.get('/' + id)
    .then((res)=>{
        subscriber(res.data);
    })
}

const getUser = (subscriber: any, email: string) => {
    instance.get('/' + email)
    .then((res)=>{
        subscriber(res.data);
    })
}

const getUser12 = (subscriber: any, email: string, password: string) => {
    instance.get('/' + {email, password})
    .then((res)=>{
        subscriber(res.data);
    })
}

const create = (subscriber: any, user: any) => {
    instance.post('/', user)
    .then((res)=>{
        subscriber(res.data);
    })
}
const remove = (subscriber: any, ids: Array<number>) => {
    if ( ids.length == 0 ) return;
    instance.delete('/' + ids.join(','))
    .then((res)=>{
        subscriber(res.data);
    })
}

const UserApi = {
    instance, getList, getOne, getUser, remove, create
}

export default UserApi;