import axios from "axios";

let instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3001/'
})

export const usersAPI = {
    getUserData(userId) {
        return instance.get('users/' + userId)
    },
    getUsers(page, limit) {
        return instance.get('users?_page=' + page + '&_limit=' + limit)
    },
    getUsersCount() {
        return instance.get('usersCount')
    },
    getPages() {
        return instance.get('usersCount')
    }

}

let basicHeroes = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "strength": 0,
        "agility": 0,
        "intelligence": 0,
        "charisma": 0
    },
    {
        "id": 2,
        "name": "user22",
        "strength": 0,
        "agility": 0,
        "intelligence": 0,
        "charisma": 0
    }
]

export const loginAPI = {
    checkUserInDB(login, password) {
        return instance.get('users').then(response => {
                let pos = response.data.map(e => e.login).indexOf(login)
                let res = response.data.map(e => e.password)[pos] === password
                let userId = response.data.map(e => e.id)[pos]
                if (res) {
                    return userId
                }
                return -1
            }
        )
    },
    regUser(login, password, email) {
        let id = randomInteger(3, 100000000);
        return instance.post('users', {id, login, password, email, heroes: basicHeroes})
    },
    getLogins(setLogins) {
        instance.get('users').then(response => {
            let pos = response.data.map(e => e.login)
            setLogins(pos)
        })
    }
}

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

function getLastId(s) {
    console.log(instance.get('users'), 1);
    return instance.get('users').then(response => {
        console.log(response.data[response.data.length - 1].id, 2)
        s(response.data[response.data.length - 1].id)
    })
}