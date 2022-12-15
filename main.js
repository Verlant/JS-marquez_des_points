const SUBMIT_BTN = document.querySelector("#submit");
const REPONSE_1_VALIDE = document.querySelector("#question_1-reponse_1");
const REPONSE_2_VALIDE = document.querySelector("#question_2-reponse_3");
const REPONSE_3_VALIDE = document.querySelector("#question_3-reponse_2");
const REPONSE_4_VALIDE = document.querySelector("#question_4-reponse_1");
const REPONSE_5_VALIDE = document.querySelector("#question_5-reponse_1");

/**
 * Calcul le résultat du quizz
 * @param {int} int
 * @returns int
 */
function verifie_resultat(int) {
  if (REPONSE_1_VALIDE.checked) {
    int++;
  }
  if (REPONSE_2_VALIDE.checked) {
    int++;
  }
  if (REPONSE_3_VALIDE.checked) {
    int++;
  }
  if (REPONSE_4_VALIDE.checked) {
    int++;
  }
  if (REPONSE_5_VALIDE.checked) {
    int++;
  }
  console.log(int);
  return int;
}

SUBMIT_BTN.addEventListener("click", (e) => {
  e.preventDefault();
  let resultat = 0;
  alert(verifie_resultat(resultat) + " bonnes réponses");
});
