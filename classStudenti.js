// costruisco l'oggetto studente generico
let studente = {
    nome : "",
    cognome : "",
    eta : 1,

    // funzione sotto forma di attributo per stampare i dati dell'oggetto
    printIntroduction: function() {
        console.log(`Ciao! Io mi chiamo ${this.nome} ${this.cognome}. Ho ${this.eta} anni.`);
    }
}

// chiedo all'utente quanti studenti vuole inserire e creo l'array di oggetti chiamato classe
const numStudenti = prompt("Benvenuto! Quanti studenti vuoi inserire?");
let classe = [];
let tmp = numStudenti - 1;

// ciclo per far inserire all'utente i dati degli 
// studenti e poi, una volta istanziato l'oggetto, lo aggiungo all'array
do {
    let nuovoStudente = Object.create(studente);
    let counter = numStudenti - tmp;
    nuovoStudente.nome = prompt(`Inserisci il nome dello studente ${counter} :`);
    nuovoStudente.cognome = prompt(`Inserisci il cognome dello studente ${counter}:`);
    nuovoStudente.eta = prompt(`Infine inserisci l'eta dello studente ${counter}:`);
    classe.push(nuovoStudente);
    tmp--;
}while(tmp > (-1));

// ciclo per stampare i dati degli studenti
for (let i = 0; i < classe.length; i++){
    classe[i].printIntroduction();
}