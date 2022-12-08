
$(document).ready(function () {
    precioDolar();
})

function precioDolar() {
    fetch("https://mindicador.cl/api/dolar")
        .then(function (response) {
            if (response.status != 200) {
                alert("Imposible conectar")
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                let dolar = data.serie[0].valor;
                console.log("precio Dolar es:" + dolar);
                document.getElementById("dolar").innerHTML = dolar;
            })
        })
}

$(document).ready(function () {
    precioEuro();
})

function precioEuro() {
    fetch("https://mindicador.cl/api/euro")
        .then(function (response) {
            if (response.status != 200) {
                alert("Imposible conectar")
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                let euro = data.serie[0].valor;
                console.log("precio euro es:" + euro);
                document.getElementById("euro").innerHTML = euro;
            })
        })
}

$(document).ready(function () {
    precioUtm();
})

function precioUtm() {
    fetch("https://mindicador.cl/api/utm")
        .then(function (response) {
            if (response.status != 200) {
                alert("Imposible conectar")
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                let utm = data.serie[0].valor;
                console.log("precio UTM es:" + utm);
                document.getElementById("utm").innerHTML = utm;
            })
        })
}

$(document).ready(function () {
    precioIpc();
})

function precioIpc() {
    fetch("https://mindicador.cl/api/ipc")
        .then(function (response) {
            if (response.status != 200) {
                alert("Imposible conectar")
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                let ipc = data.serie[0].valor;
                console.log("precio IPC es:" + ipc);
                document.getElementById("ipc").innerHTML = ipc;
            })
        })
}

$(document).ready(function () {
    precioUf();
})

function precioUf() {
    fetch("https://mindicador.cl/api/uf")
        .then(function (response) {
            if (response.status != 200) {
                alert("Imposible conectar")
                return;
            }
            response.json().then(function (data) {
                console.log(data);
                let uf = data.serie[0].valor;
                console.log("precio uf es:" + uf);
                document.getElementById("uf").innerHTML = uf;
            })
        })
}
