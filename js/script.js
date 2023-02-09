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

// ESERCIZIO 2 - Pari/Dispari

// 1. Richiamare Elemento HTML "Pulsante Pari/Dispari" e creare evento "click"
const pdBtnEl = document.getElementById('pari-dispari');
pdBtnEl.addEventListener('click', function(){

  // 2. Chiedere scelta a Utente con prompt e controllo che parola sia effetivamente 'pari' o 'dispari'
  let choiseUser;

  do {

    choiseUser = prompt('Scegli Pari o Dispari ;)');

    // 2.1 - Trasformo la scelta inserita in minuscolo per controllo
    choiseUser = choiseUser.toLocaleLowerCase();
    document.getElementById('scelta').innerHTML = `La TUA scelta e' ${choiseUser} `;
    console.log(`La scelta dell'Utente e': ` + choiseUser);

  } while (choiseUser!=='pari' && choiseUser!=='dispari');

  // 3. Chiedere a Utente di inserire un Numero da 1 a 5 (controllo se Utente inserisce un Numero Valido)
  let numberUser;
  
  do{
    
    numberUser = parseInt(prompt('Inserisci un numero compreso tra 1 e 5 ;)'));

  } while(isNaN(numberUser) || numberUser<=0 || numberUser>=6)

  document.getElementById('numero-utente').innerHTML = `Il TUO numero e': ${numberUser}`;
  console.log(`Il numero scelto dall'Utente e': ` + numberUser);
  
  // 4. Generare un Numero Random da 1 a 5 per il PC con funzione
  let numberPC = numberRandomBetweenValuesIncluse(1,5);
  document.getElementById('numero-pc').innerHTML = `Il numero del PC e': ${numberPC}`;
  console.log(`Il numero scelto per il PC e': ` + numberPC);

  // 5. Invocare Funzione per capire se la Somma e' un Numero Pari o Dispari
  const result = sumEvenOrOdd(numberUser,numberPC);
  document.getElementById('somma').innerHTML = `La somma dei numeri e': ${result}`;
  console.log(`La somma dei numeri e': ` + result);

  // 6. Stampare Messaggio con risultato per Utente
  if (result === choiseUser){
    document.getElementById('risultato').innerHTML = `<h3>Hai Vinto! :)</h3>`;
  } else {
    document.getElementById('risultato').innerHTML = `<h3>Hai Perso! :(</h3>`;
  }

});


// ****************************************************************************************************************

// ***********************
// FUNZIONE "sumEvenOrOdd"
// **********************

function sumEvenOrOdd (num1,num2){
  const sum = num1 + num2;

  // console.log('La somma dei numeri è:' + sum);

  if (isEven(sum) === true){
    return 'pari';
  }

  if (isOdd(sum) === true){
    return 'dispari';
  }
}

// ***********************
// FUNZIONE "numberRandom"
// **********************

function numberRandomBetweenValuesIncluse(min,max){

  const number = Math.floor(Math.random() * (max - min + 1) + min);

  return number;
}

// ***********************
// FUNZIONE "isEven"
// **********************

function isEven (num){
  const rem = num % 2;
  if (rem === 0){
    return true;
  } else {
    return false;
  }
}

// ***********************
// FUNZIONE "isOdd"
// **********************

function isOdd (num){
  const rem = num % 2;
  if (rem === 1){
    return true;
  } else {
    return false;
  }
}


// ***********************
// FUNZIONE "isPalindrome"
// **********************

function isPalindrome(word){

  // 1* Creo un Array contenente (come elementi) i Caratteri della Parola inserita
  // let listCharsWord = [];
  // listCharsWord = word.split('');
  // console.log(listCharsWord);

  // 2* Creo un Array contenente la Lista di Caratteri invertita
  // let listCharsWordReverse = [];
  // listCharsWordReverse = listCharsWord.reverse();

  // 1. Uso la funzione wordReverse per ricevere la Parola Invertita
  const wordRev = wordReverse(word);
  // console.log(listCharsWordReverse);

  // 2. Confronto i due Array con un ciclo e se ogni elemento risulta uguale, allora la Parola e' PALINDROMA

  //Creo un contantore per tenere traccia dei controlli avvenuti con successo
  let countTrue = 0;

  for (let i=0; i < wordRev.length; i++){

    // console.log(`Char Word: ` + word[i]);
    // console.log(`Char Word Reverse: ` + listCharsWordReverse[i]);

    if (word.charAt(i) === wordRev.charAt(i)){
      countTrue++;
    } 

  }

  // 3. Valore di Ritorno della Funzione 
  if (countTrue === wordRev.length){
    return true;
  } else {
    return false;
  }

}

// ***********************
// FUNZIONE "wordReverse"
// **********************

function wordReverse(word){

  let wordReverse = '';

  // Creo Ciclo Invertito per leggere parola al contrario e creare Parola Invertita
  for (i = word.length-1; i>=0; i--){
    wordReverse += word.charAt(i);
  }

  return wordReverse;
}

