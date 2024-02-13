
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
        img:"angela-caroll-chief-editor.jpg",
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




// const listElement = document.querySelector("ul")
const listElement = document.querySelectorAll(".col-4 .card");



for (let i=0; i < worker.length; i++){

    
    // qui prende gli elementi dell'array
    let workerElement = worker[i];

    let cardElement = listElement[i];

    let userWorker = cardElement.querySelector(".workerName");

    let taskWorker = cardElement.querySelector(".workerRole");

    let imgWorker = cardElement.querySelector(".card-img-top");
    



    


    
  userWorker.innerHTML = workerElement.name
  taskWorker.innerHTML = workerElement.task
  imgWorker.src = `img/${workerElement.img}`
}





// listElement.innerHTML += `<li> ${printElement} </li> <br> `;

/*

        // for (let obj in printElement){

        //     console.log(obj + ": " + printElement["name"])

        //     specificElement += `${obj} : ${printElement["name"]}`

        //     console.log(specificElement["name"])
        // }

*/
/*

  // for (let key in workerElement){
    //     // qui gli oggetti dell'array

    //     console.log(key + ": " + workerElement[key])
        
    //     printElement += `${key}:  ${workerElement[key]} <br>`;

        
    // }

    */