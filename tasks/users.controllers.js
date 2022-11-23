const usersDB = [];

/*
Structure: 

{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}

*/ 

let id = 1; 

const findAllUsers = () => { 
    return usersDB
}

const findUserById = (id) => {
    const user = usersDB.find(user => user.id == id)
    return user
}

const createUser = (obj) => { 
    const newUser = {
        id: id++,
        first_name: obj.first_name,
        last_name: obj.last_name,
        email: obj.email,
        password: obj.password,
        birthday: obj.birthday

    }

    usersDB.push(newUser)
    return newUser
}

const deleteUser = (id) => {

    let index = 5;
  
    let arrOfIndex = usersDB.map(user => {
      if (user.id == id) {
        index = usersDB.indexOf(user)
      }
    })

    if (index >= 0 && index < usersDB.length) {
    const removeUser = usersDB.splice(index, 1)
    return usersDB
    } else {
    return undefined
    }
   
  }

module.exports = { 
    findAllUsers,
    findUserById,
    createUser,
    deleteUser,
}