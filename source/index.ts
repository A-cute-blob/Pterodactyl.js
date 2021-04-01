import fetch from 'node-fetch'
import Error from './error'
import events from './event'
let api;

/**
 * @class User
 */
class User extends events {
  api='bla-bla';
  domain="example.com";

	    static instance: User;

	/**
	 * Creates user instance
	 * @constructor
	 * @param {object} ops The options of constructor
	 * @param {string} ops.domain The domain
	 *  @param {string} ops.api The api
	 * @example const { User } = require('ptero.js')
	 * const user = new User({ domain: 'abc.com', api: 'abc'})
	 */
    constructor(ops: { domain: String, api: String}) {
super();
			if(typeof ops !== 'object') throw new Error('Expected options to be object recieved' + typeof ops)
if(!ops.domain) throw new Error('No domain given in the constructor')
if(typeof ops.domain !== 'string')  throw new Error('Expected domain to be string recieved' + typeof ops.domain)
const httpregex = new RegExp(`/(https?:\/\/[^\s]+)/g`)
 if (!ops.domain.match(httpregex)) {
    throw new Error('Not a valid domain')
  }
if(!ops.api) throw new Error('No api key found')
if(typeof ops.api !== 'string')  throw new Error('Expected domain to be string recieved' + typeof ops.api)
this.api = ops.api
this.domain = ops.domain
				
		}
/**
 * Creates a account in the panel
 * @param {object} ops The options used in creating
 * @param {string} ops.username The username of the User
 * @param {string} ops.email The email of the user
 * @param {string} ops.password The password of the User
 * @param {string} ops.first_name The first name of the User
 * @param {string} ops.last_name The last name of the User
 * @param {boolean} ops.root_admin Whether the user is admin or Not
 * @param {string} ops.language The default language of the user
 * @example user.create({ username: 'abc', email: 'abc@gmail.com', password: 'abc', first_name: 'bla bla', last_name: 'bla-bla', root_admin: false, language: 'en' })
 * @returns {any} res The response from the ptero api

 */
		static async create(ops: { username:  String, email: String, password: String ,first_name: String, last_name: String,root_admin: Boolean,language: String}, user: User) {
								if(typeof ops !== 'object') throw new Error('Expected options to be object recieved' + typeof ops)
			if(!ops.username) throw new Error('No username given')
				if(typeof ops.username !== 'string')  throw new Error('Expected username to be string recieved' + typeof ops.username)
			if(!ops.email) throw new Error('No email given')
				if(typeof ops.email !== 'string')  throw new Error('Expected email to be string recieved' + typeof ops.email)
					if(!ops.password) throw new Error('No password given')
				if(typeof ops.password !== 'string')  throw new Error('Expected password to be string recieved' + typeof ops.password)
						if(!ops.first_name) throw new Error('No first name given')
				if(typeof ops.first_name !== 'string')  throw new Error('Expected first name to be string recieved' + typeof ops.first_name)
					if(!ops.last_name) throw new Error('No first name given')
				if(typeof ops.last_name !== 'string')  throw new Error('Expected last name to be string recieved ' + typeof ops.last_name)
					if(!ops.root_admin) throw new Error('No first name given')
				if(typeof ops.root_admin !== 'boolean')  throw new Error('Expected last name to be boolean recieved ' + typeof ops.root_admin)
                            let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!EMAIL_REGEX.test(ops.email)) throw new Error('Not a valid email')
const auth = { Bearer: user.api}
const bearer = JSON.stringify(auth)
await fetch(`${user.domain}/api/application/users`, {
	        method: 'post',
          body:    JSON.stringify(ops),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', "Authorization":  bearer },

}).then(res => {
	if(res.status === 403) throw new Error('Not a valid api')
user.emit('accountCreate', res)
	return res

}).catch(e => { throw new Error(e.message) })

		}
		/**
 * Updates a account in the panel
 * @param {number} id The id of the user
 * @param {object} ops The options used in updating
 * @param {string} ops.username The username of the User
 * @param {string} ops.email The email of the user
 * @param {string} ops.password The password of the User
 * @param {string} ops.first_name The first name of the User
 * @param {string} ops.last_name The last name of the User
 * @param {boolean} ops.root_admin Whether the user is admin or Not
 * @param {string} ops.language The default language of the user
 * @example user.update(1, { username: 'abc', email: 'abc@gmail.com', password: 'abc', first_name: 'bla bla', last_name: 'bla-bla', root_admin: false, language: 'en' })
 * @returns {any} res The response from the ptero api
 */
		static async update(id: 1, ops: { username:  String, email: String, password: String ,first_name: String, last_name: String,root_admin: Boolean,language: String}, user: User) {
			if(typeof id !== 'number') throw new Error('Id must be a number')
			if(isNaN(id)) throw new Error('The id is not a number')
			if(!id) throw new Error('Please give us a id')
			if(!ops) throw new Error('Provide the options')
			
								if(typeof ops !== 'object') throw new Error('Expected options to be object recieved' + typeof ops)
			if(!ops.username) throw new Error('No username given')
				if(typeof ops.username !== 'string')  throw new Error('Expected username to be string recieved' + typeof ops.username)
			if(!ops.email) throw new Error('No email given')
				if(typeof ops.email !== 'string')  throw new Error('Expected email to be string recieved' + typeof ops.email)
					if(!ops.password) throw new Error('No password given')
				if(typeof ops.password !== 'string')  throw new Error('Expected password to be string recieved' + typeof ops.password)
						if(!ops.first_name) throw new Error('No first name given')
				if(typeof ops.first_name !== 'string')  throw new Error('Expected first name to be string recieved' + typeof ops.first_name)
					if(!ops.last_name) throw new Error('No first name given')
				if(typeof ops.last_name !== 'string')  throw new Error('Expected last name to be string recieved ' + typeof ops.last_name)
					if(!ops.root_admin) throw new Error('No first name given')
				if(typeof ops.root_admin !== 'boolean')  throw new Error('Expected last name to be boolean recieved ' + typeof ops.root_admin)
      let EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
if(!EMAIL_REGEX.test(ops.email)) throw new Error('Not a valid email')
const auth = { Bearer: user.api}
const bearer = JSON.stringify(auth)
await fetch(`${user.domain}/api/application/users/${id}`, {
	        method: 'patch',
          body:    JSON.stringify(ops),
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', "Authorization":  bearer },

}).then(res => {
	if(res.status === 403) throw new Error('Not a valid api')
user.emit('accountUpdate', res)
	return res

}).catch(e => { throw new Error(e.message) })
		};
		/**
		 * Deletes a account in the panel
		 * @param {number} id The id of the user
		 * @example user.delete(1)
		 * @returns {any} res The response from the ptero api
		 */
		static async delete(id: number, user: User) {
			if(!id) throw new Error('Please provide a id')
			if(typeof(id) !== 'number') throw new Error('The id is not a number')
const auth = { Bearer: user.api}
const bearer = JSON.stringify(auth)
await fetch(`${user.domain}/api/application/users/${id}`, {
	        method: 'delete',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', "Authorization":  bearer },

}).then(res => {
	if(res.status === 403) throw new Error('Not a valid api')
user.emit('accountDelete', res)
	return res

}).catch(e => { throw new Error(e.message) })
		}
				/**
		 * Checks a account in the panel
		 * @param {number} id The id of the user
		 * @example user.details(1)
		 * @returns {any} res The response from the ptero api
		 */
				static async details(id: number, user: User) {
							if(!id) throw new Error('Please provide a id')
			if(typeof(id) !== 'number') throw new Error('The id is not a number')
			const auth = { Bearer: user.api}
const bearer = JSON.stringify(auth)
await fetch(`${user.domain}/api/application/users/external/${id}`, {
	        method: 'get',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', "Authorization":  bearer },

}).then(res => {
		if(res.status === 403) throw new Error('Not a valid api')
user.emit('accountCheck', res)
return res
				})
				}
				/**
				 * Emitted when account is created
				 * @event User#accountCreate
				 * @param {any} res The response Emitted
				 * @example user.on('accountCreate', async res => {
				 * console.log(res)
				 * })
				 */
								/**
				 * Emitted when account is updated
				 * @event User#accountUpdate
				 * @param {any} res The response Emitted
				 * @example user.on('accountUpdate', async res => {
				 * console.log(res)
				 * })
				 */
								/**
				 * Emitted when account is deleted
				 * @event User#accountDelete
				 * @param {any} res The response Emitted
				 * @example user.on('accountDelete', async res => {
				 * console.log(res)
				 * })
				 */
								/**
				 * Emitted when account is checked
				 * @event User#accountCheck
				 * @param {any} res The response Emitted
				 * @example user.on('accountCheck', async res => {
				 * console.log(res)
				 * })
				 */
}
export default User;