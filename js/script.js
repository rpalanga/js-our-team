
/*

MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite. V

MILESTONE 1:
Stampare su console, per ogni membro del team,
 le informazioni di nome, ruolo e la stringa della foto V

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe 

BONUS 1:
Trasformare la stringa foto in una immagine effettiva

BONUS 2:
Organizzare i singoli membri in card/schede

*/

const worker = [
    {
        name: "Wayne Barnett",
        task:"Founder & CO",
        img:"wayne-barnett-founder-ceo.jpg",
    },
    {
        name:"Angela Caroll",
        task:"Chief Editor",
        img:"angela-carrol-chief-editor.jpg",
    },
    {
        name:"Walter Gordon",
        task:"Office Manager",
        img:"walter-gordon-office-manager.jpg",
    },
    {
        name:"Agela Lopez",
        task:"Social Media Manager",
        img:"angela-lopez-social-media-manager.jpg",
    },
    {
        name:"Scott Estrada",
        task:"Developer",
        img:"scott-estrada-developer.jpg",
    },
    {
        name:"Barbara Ramos",
        task:"Graphic Designer",
        img:"barbara-ramos-graphic-designer.jpg",
    }
];

console.log(worker)

const listElement = document.querySelector("ul")

for (let i=0; i < worker.length; i++){

    // console.log(worker[i])
    let workerElement = worker[i];

    let printElement = "";
    
    for (let key in workerElement){

        console.log(key + ": " + workerElement[key])
        
        printElement += `${key}: ${workerElement[key]}, `;
    }

    listElement.innerHTML += `<li> ${printElement} <br> </li> <br> `;
}


