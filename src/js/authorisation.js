// import firebase from '/firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { app } from './db-firebase';

const refs = {
    form: document.querySelector('#auth-form'),
    name: document.querySelector('#auth-name'),
    password: document.querySelector('#auth-password'),
}

// ========Login in=========== 

const db = getDatabase(app);

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    const dbRef = ref(db,`/users/${Math.floor(Math.random * 8)}`)
    const dbSet = set(dbRef, {
        name: refs.name.value,
        password: refs.password.value
    })
})
