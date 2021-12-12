// Aquí se obtiene el elemento link donde se referencia el css
// y se cambia el href, sustituyendo light por dark.

const darkMode = () => {
    let modo = document.querySelector("#stylesheet");

    if (modo.href.search("dark") !== -1) {
        modo.href = modo.href.replace("dark", "light", "gi");
    } else {
        modo.href = modo.href.replace("light", "dark", "gi");
    }
}
