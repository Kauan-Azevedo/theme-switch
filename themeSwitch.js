<<<<<<< HEAD:themeSwitch.ts
// const toggleSwitch = <HTMLInputElement> document.querySelector('#checkbox')
// const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'

// if(currentTheme){
//     document.documentElement.setAttribute('data-theme', currentTheme);

//     if(currentTheme === 'dark'){
//         toggleSwitch.checked = true;
//     }
// }

// // e: {target: HTMLButtonElement}
// function switchTheme(e: {target: HTMLInputElement}){
//     if(e.target.checked) {
//         document.documentElement.setAttribute('data-theme', 'dark');
//         localStorage.setItem('theme', 'dark');
//     } else {
//         document.documentElement.setAttribute('data-theme', 'light');
//         localStorage.setItem('theme', 'light');
//     }
// }
// toggleSwitch.addEventListener('click', () => switchTheme);
=======
const toggleSwitch = document.querySelector('#checkbox');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}

function switchTheme(e) {
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('click', switchTheme);


>>>>>>> 758fc86f226579f33d7aac70485c822f0141cde1:themeSwitch.js
