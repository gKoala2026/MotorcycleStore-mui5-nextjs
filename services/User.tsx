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
    console.log('lkjhgds', email)
    instance.get('/' + email)
    .then((res)=>{
        subscriber(res.data);
    })
}

const login = (subscriber: any, email: string, password: string) => {
    instance.post('/login', {email, password})
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
    instance, getList, getOne, getUser, login, remove, create
}

export default UserApi;