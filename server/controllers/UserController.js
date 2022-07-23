const env = require('dotenv');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/User');

var users = [
	{
		id: Date.now(),
		username: 'piglet',
		email: 'piglet@gmail.com',
		password: 'node street',
	},

	{
		id: Date.now()+1,
		username: 'smartdev',
		email: 'smartdev@gmail.com',
		password: 'express street',
	},

	{
		id: Date.now()+1,
		username: 'David',
		email: 'fli.dreamDev@gmail.com',
		password: '123123',
	}
]
exports.getList = (req, res, next) => {
	res.send(users);
};

exports.getOne = (req, res, next) => {
	res.send(users.find(user=>user.id==req.params.id));
};

exports.getUser = (req, res, next) => {
	let user = users.find(user=>user.token==req.params.token)
	if(user){
			res.send({ username:user.username, email:user.email })
	}
};

exports.login = async(req, res, next) => {
	const { email, password } = req.body
	if( !email || !password) return res.status(400).send('All input is required!')

	const user = await UserModel.findOne({ email });
	if ( !user ) {
		return res.status(409).send('User not found');
	}
	
	const validate = await user.isValidPassword(password);
	if (!validate) {
		return res.status(409).send('Wrong Password');
	}
	
	const body = { _id: user._id, email: user.email };
	const token = jwt.sign({ user: body }, process.env.TOKEN_KEY);

	user.password = '';
	return res.json({ user, token });
};

exports.register = async(req, res, next) => {
	const { name, email, password } = req.body
	if( !name || !email || !password) return res.status(400).send('All input is required!')
	
	const oldUser = await UserModel.findOne({ email });
	if (oldUser) {
		return res.status(409).send("User Already Exist. Please Login");
	}
	const user = await UserModel.create({
		name,
		email,
		password,
	});

	user._id = null;
	user.password = '';
	res.json(user);

};

exports.createOne = (req, res, next) => {
	let newUser = {...req.body};
	if ( newUser.id )
	{
		let index = users.findIndex(user=>user.id==newUser.id);
		users[index] = newUser;
	}
	else
	{
		newUser.id = Date.now();
		users.push(newUser);
	}
	res.send(newUser);
};

exports.delete = (req, res, next) => {
	users = users.filter(user=>req.params.ids.split(',').findIndex(id=>id==user.id)==-1);
	res.send(users);
};