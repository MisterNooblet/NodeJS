import uniqid from 'uniqid';
import fs from 'fs'

const loadUsers = () => {
    try {
        const data = fs.readFileSync('users.json').toString()
        const parsedData = JSON.parse(data)
        return parsedData
    } catch (error) {
        return []
    }
}


const addUser = (name, email) => {
    const users = loadUsers()
    const newUser = {
        id: uniqid(),
        userName: name,
        email: email,
    }
    users.push(newUser)
    const usersJSON = JSON.stringify(users)
    console.log('User added!', newUser);
    fs.writeFileSync('./users.json', usersJSON)
}

const saveUsers = (users) => {
    const usersJSON = JSON.stringify(users)

    fs.writeFileSync('./users.json', usersJSON)
}

const findUser = (id) => {
    const users = loadUsers()
    if (users.length > 0) {
        console.log(users.find(user => user.id === id));
    } else {
        console.log('No users');
    }

}

const createPassword = (id, password) => {
    const users = loadUsers()
    if (users.length > 0) {
        users.find((user, idx) => {
            if (user.id === id) {
                const userWithPassword = {
                    ...user, password: password
                }
                users[idx] = userWithPassword
            }

        })
        saveUsers(users)

    } else {
        console.log('No users');
    }
}

const updatePassword = (id, oldPassword, newPassword) => {
    const users = loadUsers()
    if (users.length > 0) {
        users.find((user, idx) => {
            if (user.id === id && user.password === oldPassword) {
                const userWithPassword = {
                    ...user, password: newPassword
                }
                users[idx] = userWithPassword
            } else if (user.id === id && user.password !== oldPassword) {
                console.log('Wrong password!')
            } else {
                console.log('User not found')
            }

        })
        saveUsers(users)
    } else {
        console.log('No users');
    }
}

const deleteUser = (id) => {
    const users = loadUsers()
    if (users.length > 0) {
        const withoutUser = users.filter(user => user.id !== id)
        saveUsers(withoutUser)
    } else {
        console.log('No users');
    }
}

export { deleteUser, addUser, createPassword, updatePassword, findUser }