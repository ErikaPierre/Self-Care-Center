let positiveAffirmations = [
  "Je m’accepte tel que je suis et je m’aime profondément et complètement.",
  "Je suis unique. Je me sens bien en étant vivant et en étant moi-même.",
  "Je me fais confiance et je sais que ma sagesse intérieure est mon meilleur guide.",
  "Je suis intègre. Je suis totalement fiable. Je fais ce que je dis.",
  "J’agis en toute sécurité.",
  "Je m’accepte pleinement et je sais que je suis digne des meilleures choses dans la vie.",
  "Je choisis d’être fier de moi-même.",
  "J’éprouve une profonde paix intérieure.",
  "Je me remplis l’esprit de pensées positives et nourrissantes.",
  "Confiance, estime de soi et sagesse intérieure croissent chaque jour.",
  "Mon système immunitaire est très fort et peut éliminer n’importe quel type de bactéries, de germes et de virus.",
  "Quand je respire, j’inspire la confiance et j’expire la timidité.",
  "J’adore rencontrer des étrangers et les aborder avec enthousiasme.",
  "Je vis au présent et je suis confiant dans l’avenir.",
  "Je fais preuve de confiance. Je suis audacieux et sociable.",
  "Je suis autonome, créatif et persévérant dans tout ce que je fais.",
  "Je suis énergique et enthousiaste. La confiance est ma seconde nature.",
  "Je n’attire que les meilleures opportunités et les personnes positives dans ma vie.",
  "Je suis un spécialiste en résolution de problème. Je me concentre sur les solutions et je trouve toujours la meilleure.",
  "J’aime le changement et je m’adapte facilement aux nouvelles situations.",
  "Je suis soigné, sain et confiant. Mon apparence est assortie à mon bien-être intérieur.",
  "Je développe ma confiance en moi. Rien n’est impossible et la vie est géniale.",
  "Je ne vois toujours que le bien chez les autres. J’attire uniquement des personnes confiantes et positives.",
  "Le bonheur est mon droit imprescriptible. J’accepte que le bonheur devienne le cœur de mon existence.",
  "Je ressens de la joie et de la satisfaction en ce moment précis.",
  "Je me réveille chaque matin en me sentant heureux et enthousiaste à l’égard de ma vie.",
  "Je peux exploiter ma source de bonheur intérieur chaque fois que je le souhaite.",
  "En me permettant d’être heureux, j’incite les autres à être heureux aussi.",
  "Je m’amuse de tous mes efforts, même les plus banals.",
  "Je regarde le monde autour de moi et je ne peux qu’empêcher de sourire et de ressentir de la joie.",
  "Je trouve de la joie et du plaisir dans les choses les plus simples de la vie.",
  "J’ai le sens de l’humour et j’aime partager des rires avec les autres.",
  "Mon cœur déborde de joie.",
  "Je m’endors dans le bonheur, car je sais que tout va bien dans mon univers. ",
];

let mantras = [
  "Je sais ce que je vaux, je suis capable !",
  "Ce n’est pas la première fois que j’ai peur, et je suis toujours là. Je peux !",
  "Rien ne m’arrêtera. Je suis douée !",
  "Ça va marcher, car ça me fait vibrer !",
  "Je suis donc je peux.",
  "Mon existence seule prouve ma valeur.",
  "Je suis une belle personne, je mérite le bonheur !",
  "Rien ni personne ne peut m’enlever ma valeur inestimable.",
  "J’ai de la valeur, je mérite d’être moi !",
  "J’existe, je vaux, je m’autorise.",
  "Je mérite d’exister car j’existe.",
  "Je ne suis pas mes malheurs, ils n’ont pas d’emprise sur mon être.",
  "Peu importe le négatif, ma vie ne s’arrête pas.",
  "Je ne suis pas mes angoisses, mes angoisses ne sont pas moi.",
  "Le stress est passager, les problèmes se résolvent, les préoccupations disparaissent.",
  "Je ne suis pas mes émotions négatives, je les laisse passer.",
  "Je ferme la porte au négatif, j’ouvre mon cœur au positif !",
  "J’inspire le positif, j’expire le négatif.",
  "Je m’émerveille devant la beauté du monde et de la vie.",
  "Je suis la joie, je suis l’enthousiasme, je suis l’amour !",
  "La vie vaut la peine d’être vécue pleinement.",
  "Je me laisse envahir de joie, de paix et d’amour.",
  "Je mérite une belle vie, heureuse, joyeuse, amoureuse !",
  "Merci à la vie d’être aussi belle.",
  "Je suis remplie de gratitude pour la vie que j’ai.",
  "Je vis de belles choses, de beaux moments, merci.",
  "Je suis reconnaissante des merveilles que j’ai pu voir dans ma vie.",
  "Je suis tombée plusieurs fois et j’ai su me relever. Ça sera le cas encore cette fois !",
  "Rien ne pourra arrêter ma passion. Tôt ou tard j’y arriverai !",
  "Je ne suis pas l’échec, l’échec n’est pas moi.",
  "Je ne suis pas mes erreurs, j’apprends, je vais de l’avant.",
  "Je ne suis pas parfaite, j’ai le droit à l’erreur.",
  "Je tombe, je me relève, je recommence.",
  "Personne n’est parfait, et moi je suis unique.",
  "Mon corps est mon ami, il ne me veut que du bien.",
  "Je me réconcilie avec mon corps, car il m’aime, il ne me veut que du bien.",
  "Je ne suis pas ce que les autres ont dit de moi. Je suis ce que je veux être.",
  "Il n’existe aucune loi sur « être soi-même ». Je m’autorise à être ce que je veux.",
  "Personne ne décide de ma valeur. J’existe donc je vaux.",
  "Je suis une belle personne, je suis intéressante, je mérite.",
];

//récupérer la valeur du boutton
function recoverValue() {
  let choosenValue;
  let _choiceAffirmation = document.getElementById("Affirmation").value;
  let _choiceMantra = document.getElementById("Mantra").value;
  let selectedButtonRadio = document.querySelector(
    'input[name="Choix"]:checked'
  ).id;

  if (selectedButtonRadio) {
    if (selectedButtonRadio.id === "Affirmation") {
      choosenValue = _choiceAffirmation;
    } else {
      choosenValue = _choiceMantra;
    }
  } else {
    return ErrorMessage();
  }

  console.log("La valeur choisie est : " + choosenValue);

  // return choosenValue;
}

//Ecouter le boutton
const buttonReceive = document.getElementById("button_Receive");
buttonReceive.addEventListener("click", function (e) {
  e.preventDefault();
  recoverValue();
  showMessage(randomQuote());
});

//Afficher un texte dans l'emplacement au question
const positivMessages = document.querySelector(".div_messages");
function showMessage(value) {
  positivMessages.innerHTML = value;
}

//Effacer le message
function clearMessage() {
  positivMessages.innerHTML =
    '<img src="assets/meditate.svg" alt="Icon représentant un Buddha" />';
}

//Afficher un message d'erreur
const ErrMessage = document.querySelector(".ErrMessage");

function ErrorMessage() {
  let _choiceAffirmation = document.getElementById("Affirmation").value;
  let _choiceMantra = document.getElementById("Mantra").value;
  if (!_choiceAffirmation && !_choiceMantra) {
    ErrMessage.innerHTML = "Veuillez sélectionner une option";
  }
}

// Générer un message aléatoire
function randomQuote() {
  let selectedButtonRadio = document.querySelector(
    'input[name="Choix"]:checked'
  ).id;
  if (selectedButtonRadio === "Affirmation") {
    let randomIndexPa = Math.floor(Math.random() * positiveAffirmations.length);
    let randomValue = positiveAffirmations[randomIndexPa];
    return randomValue;
  } else {
    let randomIndexMantra = Math.floor(Math.random() * mantras.length);
    let randValue = mantras[randomIndexMantra];
    return randValue;
  }
}
