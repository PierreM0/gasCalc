let distance = document.getElementById("distance");
let consomation = document.getElementById("consommation");
let total_consomme = document.getElementById("total_consomme");
let prix_au_litre = document.getElementById("prix_au_litre");
let total_paye = document.getElementById("total_paye");

function calculateVal() {
    total_consomme.value = distance.value * consomation.value / 100;
    total_paye.value = prix_au_litre.value * total_consomme.value;
}

