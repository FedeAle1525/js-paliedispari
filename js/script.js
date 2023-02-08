// ESERCIZIO 1 - Palindroma

// 1. Richiamare Elemento HTML "Pulsante Parola" e creare evento "click"
const wordBtnEl = document.getElementById('parola');
wordBtnEl.addEventListener('click', function(){

  // 2. Chiedere parola a Utente con prompt
  let wordUser = prompt('Inserisci una parola ;)');

  // 2.1 - Trasformo la parola inserita in minuscolo per controllo
  wordUser = wordUser.toLocaleLowerCase();
  // console.log('Parola: ' + word);

  // 3. Invoco la Funzione "isPalindrome"
  const result = isPalindrome(wordUser);
  
  // 4. Comunico Esito a Utente
  const mexResultEl = document.getElementById('esito');

  if (result === true){
    mexResultEl.innerHTML = `La parola "${wordUser}" E' PALINDROMA`;
  } else {
    mexResultEl.innerHTML = `La parola "${wordUser}" NON E' PALINDROMA`;
  }

});



// ***********************
// FUNZIONE "isPalindrome"
// **********************

function isPalindrome(word){

  // 3. Creo un Array contenente (come elementi) i Caratteri della Parola inserita
  let listCharsWord = [];
  listCharsWord = word.split('');
  // console.log(listCharsWord);

  // 4. Creo un Array contenente la Lista di Caratteri invertita
  let listCharsWordReverse = [];
  listCharsWordReverse = listCharsWord.reverse();
  // console.log(listCharsWordReverse);

  // 5. Confronto i due Array con un ciclo e se ogni elemento risulta uguale, allora la Parola e' PALINDROMA

  //Creo un contantore per tenere traccia dei controlli avvenuti con successo
  let countTrue = 0;

  for (let i=0; i < listCharsWordReverse.length; i++){

    // console.log(`Char Word: ` + word[i]);
    // console.log(`Char Word Reverse: ` + listCharsWordReverse[i]);

    if (word[i]===listCharsWordReverse[i]){
      countTrue++;
    } 

  }

  if (countTrue === listCharsWordReverse.length){
    return true;
  } else {
    return false;
  }

}

