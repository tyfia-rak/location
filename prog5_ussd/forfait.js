const prompt = require("prompt-sync")();

const forfaits = {
  Telma: [
    {
      nom: "Forfait Internet 1Go",
      prix: 9500,
      duree: "30 jours",
      description: "1Go de données internet",
    },
    {
      nom: "Forfait Internet 3Go",
      prix: 20000,
      duree: "30 jours",
      description: "3Go de données internet",
    },
    {
      nom: "Forfait Appels",
      prix: 4500,
      duree: "7 jours",
      description: "Appels illimités vers Telma",
    },
  ],
};

function afficherForfaits() {
  console.log("\nForfaits disponibles Telma:");
  forfaits["Telma"].forEach((forfait, index) => {
    console.log(`${index + 1}. ${forfait.nom}`);
  });
}

function acheterForfait() {
  console.log("Bienvenue dans le système d'achat de forfaits Telma!");

  afficherForfaits();

  const choixForfait = prompt(
    `Entrez le numéro du forfait que vous souhaitez acheter (1-${forfaits["Telma"].length}): `
  );
  const indexForfait = parseInt(choixForfait) - 1;

  if (indexForfait < 0 || indexForfait >= forfaits["Telma"].length) {
    console.log("Choix de forfait invalide!");
    return;
  }

  const forfaitChoisi = forfaits["Telma"][indexForfait];

  console.log(`\nVous avez choisi: ${forfaitChoisi.nom}`);
  console.log(`Prix: ${forfaitChoisi.prix} Ar`);
  console.log(`Durée: ${forfaitChoisi.duree}`);

  const confirmation = prompt("Confirmez-vous l'achat? (oui/non): ");

  if (confirmation.toLowerCase() === "oui") {
    console.log("\nAchat confirmé!");
    console.log(`Votre forfait ${forfaitChoisi.nom} a été activé.`);
    console.log(`Il sera valable pendant ${forfaitChoisi.duree}.`);
    console.log("Merci de votre achat!");
  } else {
    console.log("\nAchat annulé.");
  }
}
acheterForfait();
