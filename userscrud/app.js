import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import { deleteUser, addUser, createPassword, updatePassword, findUser } from './userManager.js'

const y = yargs(hideBin(process.argv))

y.version('1.0.0')


y.command({
    command: 'add',
    desribe: 'Add a new user',
    builder: {
        userName: {
            desribe: 'Username',
            demandOption: true,
            type: 'string'
        },
        email: {
            desribe: 'Email',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        addUser(argv.userName, argv.email)
    }
})

y.command({
    command: 'findUser',
    desribe: 'Find a user by id',
    builder: {
        id: {
            desribe: 'id',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        findUser(argv.id)
    }
})

y.command({
    command: 'deleteUser',
    desribe: 'Delete a user by ID',
    builder: {
        id: {
            desribe: 'id',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        deleteUser(argv.id)
    }
})

y.command({
    command: 'addPassword',
    desribe: 'Add a password',
    builder: {
        id: {
            desribe: 'id',
            demandOption: true,
            type: 'string'
        },
        password: {
            desribe: 'password',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        createPassword(argv.id, argv.password)
    }
})
y.command({
    command: 'changePassword',
    desribe: 'Change a users password',
    builder: {
        id: {
            desribe: 'id',
            demandOption: true,
            type: 'string'
        },
        currentPassword: {
            desribe: 'Current password',
            demandOption: true,
            type: 'string'
        },
        newPassword: {
            desribe: 'New password',
            demandOption: true,
            type: 'string'
        },
    },
    handler: function (argv) {
        updatePassword(argv.id, argv.currentPassword, argv.newPassword)
    }
})

y.parse()