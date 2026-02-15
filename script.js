const forma = document.querySelector("form");
const izborGrada = document.querySelector("#grad");
const iframe = document.querySelector("iframe");
const title = "<title>Planinar | Obilazak-</title>";
const cssLink = "<link rel='stylesheet' href='style.css'/>";
const body = "<body id='prozor'></body>";

forma.addEventListener("change", function () {
    let izabraniGrad = izborGrada.value;
    iframe.src = `http://www.naslovi.net/vremenska-prognoza/${izabraniGrad}`;
    let grad = "";
    let znamenitosti = "";

    if (izabraniGrad === "beograd") {
        grad = "Beograd";
        znamenitosti = "Kalemegdan, Hram Svetog Save, Pobednik";
    }
    else if (izabraniGrad === "novi-sad") {
        grad = "Novi Sad;"
        znamenitosti = "Petrovaradinska tvrđava, Dunavski park, Muzej Vojvodine";
    }

    else if (izabraniGrad === "subotica") {
        grad = "Subotica";
        znamenitosti = "Gradski muzej, Palićko jezero, Subotička sinagoga";
    }

    else if (izabraniGrad === "nis") {
        grad = "Niš";
        znamenitosti = "...";
    }

    else if (izabraniGrad === "kragujevac") {
        grad = "Kragujevac";
        znamenitosti = "...";
    }

    else if (izabraniGrad === "valjevo") {
        grad = "Valjevo";
        znamenitosti = "...";
    }

    else if (izabraniGrad === "leskovac") {
        grad = "Leskovac";
        znamenitosti = "...";
    }

    else if (izabraniGrad === "cacak") {
        grad = "Čačak";
        znamenitosti = "...";
    }

    else if (izabraniGrad === "sabac") {
        grad = "Šabac";
        znamenitosti = "...";
    }

    else if (izabraniGrad === "uzice") {
        grad = "Užice";
        znamenitosti = "...";
    }

    let tekst = `<h3 id="naslov">${grad}</h3><p class="opis">${znamenitosti}</p>;`;
    let prozor = window.open("", "", "width=400,height=400, top=500, left=1200");
    prozor.document.querySelector("html").innerHTML = title + cssLink + body + tekst;
});
