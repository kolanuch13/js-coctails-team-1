// import firebase from '/firebase';
import { ref, set, get, child } from 'firebase/database';
import { db, dbRefCheck } from './db-firebase';

const refs = {
    form: document.querySelector('#auth-form'),
    name: document.querySelector('#auth-name'),
    password: document.querySelector('#auth-password'),
    // ================================================MODAL_AUTH
    modal: document.querySelector("[data-auth-modal]"),
    openModalBtn: document.querySelectorAll("[data-auth-modal-open]"),
    closeModalBtn: document.querySelector("[data-auth-modal-close]"),
}

// ========Login in=========== 
let user = {
    userId: "",
    favoriteCoctails: "",
    favoriteIngredients: "",
}

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    
    get(child(dbRefCheck, `/users`)).then((snapshot) => {
        const usersDataBase = snapshot.val();
        // REGISTRATION
        user.userId = refs.name.value;
        if(Object.keys(usersDataBase).indexOf(user.userId) > -1) {
            console.log("Success to found the user");

            localStorage.setItem("user", user.userId)

            if (usersDataBase[user.userId].password=== refs.password.value) {
                console.log(`Welcome ${user.userId}!`);
                user.favoriteCoctails = usersDataBase[user.userId].coctails;
                user.favoriteIngredients = usersDataBase[user.userId].ingredients;
                refs.modal.classList.toggle("is-hidden");
                } else {
                    console.log("Unncorrect password, please, try again.");
                }
        } else {
            const dbRef = ref(db,`/users/${user.userId}`)
            const dbSet = set(dbRef, {
                password: refs.password.value,
                cocktails: [`11007`, `13690`],
                ingredients: [`552`],
            })
            refs.modal.classList.toggle("is-hidden");
        }            
    })
})

export {user};

// ========Coctails===============
