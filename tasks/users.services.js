const { response } = require('express')
const taskControllers = require('./users.controllers')


const getAllUsers = (request, response) => {
    const data= taskControllers.findAllUsers()
    response.status(200).json(data)
}

const getUserById = (request, response) => {
    const id = request.params.id
    const data = taskControllers.findUserById(id)

    if (data) {
        response.status(200).json(data)
    } else {
        response.status(404).json({message: 'Invalid ID'})
    }
}

const postUser = (request, response) => {
    const {first_name, last_name, email, password, birthday} = request.body

    if (first_name && last_name && email) {
        const data = taskControllers.createUser(request.body)
        response.status(201).json(data) 
    } else {
        response.status(400).json({message: 'Invalid data', fields: {first_name: 'String', last_name:'String', email:'String'}})
    }
}

const removeUser = (request, response) => {
    const id = request.params.id
    
    const data = taskControllers.deleteUser(id)

    if (data) {
        response.status(200).json(data)
    } else {
        response.status(404).json({message: 'Invalid ID'})
    }
   
}

const updateU = (request, response) => { //Note to self: This is a bug need fixing. 
    const id = request.params.id

    const obj = request.body

    const data = taskControllers.updateUser(obj, id)

    if (data) {
        response.status(200).json(data)
    } else {
        response.status(404).json({message: 'Id must match / Invalid ID'})
    }


}

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
    removeUser,
    updateU,
}