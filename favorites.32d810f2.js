let e=localStorage.getItem("darkMode");const d=document.querySelector(".dn"),o=()=>{document.body.classList.remove("dark-mode"),localStorage.setItem("darkMode",null)};o(),d.addEventListener("change",(()=>{e=localStorage.getItem("darkMode"),"enabled"!==e?(document.body.classList.add("dark-mode"),localStorage.setItem("darkMode","enabled")):o()}));
//# sourceMappingURL=favorites.32d810f2.js.map
