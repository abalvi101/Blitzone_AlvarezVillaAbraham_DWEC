// Esto añade un div con la clase de las fichas de los campeones para que no se desajuste por
// el justify-content: space-between cuando hayan dos elementos

let champions = document.querySelectorAll(".champions__champion");
if (champions.length % 3 === 2) {
    champions[champions.length - 1].insertAdjacentHTML("afterend",
        "<div class='champions__champion--fill'></div>")
}

// Funcionalidad del buscador

const buscador = () => {
    let busqueda = document.querySelector("#nombre").value;
    if (document.querySelector("#resultado")) {
        document.querySelector("#resultado").parentNode.removeChild(document.querySelector("#resultado"));
    }
    if (!busqueda) {
        document.querySelector("#champions").style.display = "flex";
    } else {
        let campeones = document.querySelectorAll("#champions > .champions__champion");
        let resultado = [];
        for (let campeon of campeones) {
            if (campeon.children[1].children[0].textContent.search(busqueda.toUpperCase()) !== -1) {
                resultado.unshift(campeon)
            }
        }
        if (resultado) {
            let lista = document.querySelector("#champions");
            lista.insertAdjacentHTML("afterend",
                "<section class='main__champions' id='resultado'></section>");
            lista.style.display = "none";
            for (let campeon of resultado) {
                document.querySelector("#resultado").insertAdjacentElement("afterbegin", campeon.cloneNode(true))
            }

            //Aquí se hace el ajuste del que hablo al inicio del documento
            let champions = document.querySelectorAll("#resultado .champions__champion");
            if (champions.length % 3 === 2) {
                champions[champions.length - 1].insertAdjacentHTML("afterend",
                    "<div class='champions__champion--fill'></div>")
            }
        }
    }
}