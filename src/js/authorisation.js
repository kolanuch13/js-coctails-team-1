import { firebase } from '@firebase/app';

const refs = {
    form: document.querySelector('#auth-form'),
    name: document.querySelector('#auth-name'),
    password: document.querySelector('#auth-password'),
}

// ========Login in=========== 

const database = firebase.database();

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    database.ref('/users/' + Math.floor(Math.random * 8)).set({
        name: refs.name.value,
        password: refs.password.value
    })
})
