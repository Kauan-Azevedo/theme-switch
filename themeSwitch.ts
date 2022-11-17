const toggleSwitch = <HTMLInputElement> document.querySelector('#theme-switch');
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';


if(currentTheme){
    document.documentElement.setAttribute('data-theme', currentTheme);

    if(currentTheme === 'dark'){
        toggleSwitch.checked = true;
    }
}

// e: {target: HTMLButtonElement}
function switchTheme(e: {target: HTMLInputElement}){
    if(e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}
toggleSwitch.addEventListener('click', () => switchTheme);