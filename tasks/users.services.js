const taskControllers = require('./users.controllers')


const getAllUsers = (request, response) => {
    const data= taskControllers.findAllUsers()
    response.status(200).json(data)
}

const getUserById = (request, response) => {
    const id = request.params.id
    const data = taskControllers.findUserById()

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

module.exports = {
    getAllUsers,
    getUserById,
    postUser,
}