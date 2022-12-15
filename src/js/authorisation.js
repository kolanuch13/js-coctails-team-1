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
    userPass: "",
    favoriteCocktails: "",
    favoriteIngredients: "",
}

refs.form.addEventListener('submit', event => {
    event.preventDefault();
    
    get(child(dbRefCheck, `/users`)).then((snapshot) => {
        const usersDataBase = snapshot.val();
        // REGISTRATION
        user.userId = refs.name.value;
        if(Object.keys(usersDataBase).indexOf(user.userId) > -1) {
            alert("Success to found the user");
            
            user.userPass = refs.password.value;

            localStorage.setItem("userId", `${user.userId}`);
            localStorage.setItem("userPass", `${user.userPass}`)
            
            if (usersDataBase[user.userId].password=== refs.password.value) {
                alert(`Welcome ${user.userId}!`);
                user.favoriteCocktails = usersDataBase[user.userId].cocktails;
                user.favoriteIngredients = usersDataBase[user.userId].ingredients;
                localStorage.setItem("favoriteCocktails", `${user.favoriteCocktails}`)
                localStorage.setItem("favoriteIngredients", `${user.favoriteIngredients}`)
                refs.modal.classList.toggle("is-hidden");
                } else {
                    alert("Unncorrect password, please, try again.");
                }
        } else {
            const dbRef = ref(db,`/users/${user.userId}`)
            const dbSet = set(dbRef, {
                password: refs.password.value,
                cocktails: [`11007`],
                ingredients: [`552`],
            })

            localStorage.setItem("user", {
                "userId": `${user.userId}`,
                "userPass": `${user.userPass}`,
                "favoriteCoctails": `${user.favoriteCocktails}`,
                "favoriteIngredients": `${user.favoriteIngredients}`,
            })

            refs.modal.classList.toggle("is-hidden");
        }            
    })
})

export {user};

// ========Coctails===============
