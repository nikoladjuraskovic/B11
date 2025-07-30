const forma = document.querySelector("form");
const izborGrada = document.querySelector("#grad");
const iframe = document.querySelector("iframe");

forma.addEventListener("change", function () {
    let izabraniGrad = izborGrada.value;
    iframe.src = "http://www.naslovi.net/vremenska-prognoza/" + izabraniGrad;

    let title = "<title>Planinar | Obilazak-</title>";
    let cssLink = "<link rel='stylesheet' href='style.css'/>";
    let body = "<body id='prozor'></body>";
    let tekst;

    if (izabraniGrad === "beograd")
        tekst = '<h3 id="naslov">Beograd</h3><p class="opis">Kalemegdan, Hram Svetog Save, Pobednik...</p>';

    else if (izabraniGrad === "novi-sad")
        tekst = '<h2 id="naslov">Novi Sad</h2><p class="opis">Katedrala, mostovi, Dunavska ulica, Štrand, Petrovaradinska tvrđava...</p>';

    else if (izabraniGrad === "subotica")
        tekst = '<h3 id="naslov">Subotica</h3><p class="opis">...</p>';

    else if (izabraniGrad === "nis")
        tekst = '<h3 id="naslov">Niš</h3><p class="opis">...</p>';

    else if (izabraniGrad === "kragujevac")
        tekst = '<h3 id="naslov">Kragujevac</h3><p class="opis">...</p>';

    else if (izabraniGrad === "valjevo")
        tekst = '<h3 id="naslov">Valjevo</h3><p class="opis">...</p>';

    else if (izabraniGrad === "leskovac")
        tekst = '<h3 id="naslov">Leskovac</h3><p class="opis">...</p>';

    else if (izabraniGrad === "cacak")
        tekst = '<h3 id="naslov">Čačak</h3><p class="opis">...</p>';

    else if (izabraniGrad === "sabac")
        tekst = '<h3 id="naslov">Šabac</h3><p class="opis">...</p>';

    else if (izabraniGrad === "uzice")
        tekst = '<h3 id="naslov">Užice</h3><p class="opis">...</p>';


    let prozor = window.open("", "", "width=400,height=400, top=500, left=1200");
    prozor.document.querySelector("html").innerHTML =
        title + cssLink + body + tekst;
});
