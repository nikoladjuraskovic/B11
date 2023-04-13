function promeniPrognozu()
{
    var grad=document.getElementById("izborGrada").value;
    document.getElementById("link").src="http://www.naslovi.net/vremenska-prognoza/"+grad;
    var title="<title>Planinar | Obilazak</title>";
    var cssLink="<link rel='stylesheet' href='dizajn.css'/>";
    switch(grad)
    {
        case "beograd":
            tekst="<h1>Beograd</h1><p>Kalemegdan, Tašmajdan, Ada, Hram Svetog Save, Avala...</p>";
            break;
        case "novi-sad":
           tekst="<h1>Novi Sad</h1><p>Katedrala, mostovi, Dunavska ulica, Štrand, Petrovaradinska tvrđava...</p>";
            break;
        case "subotica":
           tekst="<h1>Subotica</h1><p>Subotička Sinagoga, Palićko jezero, Zoološki vrt Palić, Gradska kuća, Gradski muzej, Palata Rajhl...</p>";
           break;
        case "nis":
            tekst="<h1>Niš</h1><p>Niška tvrđava, spomenik na brdu Čegar, Ćele kula, Narodni muzej, Galerija Sinagoga, spomenici Stevanu Sremcu i Kalči, Niška banja...</p>";
            break;
        case "kragujevac":
            tekst="<h1>Kragujevac</h1><p>Stara crkva, Amidžin konak, Šumarice, Akvarijum, Avantura park, Muzeji i galerije, ..</p>";
            break;
        case "valjevo":
           tekst="<h1>Valjevo</h1><p>Tešnjar, Gradac, Divčibare, Petnica, manastir Lelić i Ćelije...</p>";
           break;
        case "leskovac":
            tekst="<h1>Leskovac</h1><p>Spomenik Hisar, Pašina česma, Muzej Leskovac, Gradska kuća, Šop Đokićeva kuća, Crkva Svete Trojice...</p>";
            break;
        case "cacak":
            tekst="<h1>Čačak</h1><p>Ovčarsko-kablarska klisura, Rimske terme, Umetnička galerija 'Nadežda Petrović', konak Jovana Obrenovića</p>";
            break;
        case "sabac":
            tekst="<h1>Šabac</h1><p>Tvrđava Stari grad, Gospodar Jeveremova ulica, Narodni muzej, Hipodrom, Plaža Stari grad...</p>";
            break;
        case "uzice":
            tekst="<h1>Užice</h1><p>Stari grad, Spomen obeležje Kadinjača, Zlatibor, Potpećka pećina...</p>";
            break;
    }
    var p1=window.open('','','width=400,height=400,top=400,left=150');
    p1.document.write(title+cssLink+tekst);
}