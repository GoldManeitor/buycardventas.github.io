

let linkButtonAdd = document.getElementById(`addSellButton`);
let linkForm = document.getElementById(`adderForm`);

let sellersName = [`Alexandra`, `Evelyn`, `Francisco`, `Eugenia`, `Mariana`];
let photoList = [`../CALL CENTER IMG/Alexandra.jpg`,`../CALL CENTER IMG/Evelyn.jpg`, `../CALL CENTER IMG/Francisco.jpg`, `../CALL CENTER IMG/Eugenia.jpg`, `../CALL CENTER IMG/Mariana.jpg`]




class CreateNewSeller {
    constructor (id, name, sells){
        this.id = id;
        this.name = name;
        this.sells = sells;
        this.photo = photoList[parseInt(id[2]) - 1];
    }

    changeSells(input){
        this.sells += input;
    }
}

// ___________________________________________________GENERACIÓN DE CAMBIOS EN EL STORAGE ___________________________________________________________________


function createSellerData (name, sells, idvalue) {
    localStorage.setItem(`${idvalue}`, JSON.stringify(new CreateNewSeller(idvalue, name, sells)));

}

function addSell (sellerObject, input){

    sellerObject.sells = input;
    localStorage.setItem(`${sellerObject.id}`, JSON.stringify(sellerObject))
}




function generateARecord () {
   
        
        let id = document.getElementsByClassName(`selectSeller`);
        let sells = document.getElementById(`numberOfSells`);
        let submitList = [];

        submitList.push(id[0].value, sells.value)
        
        let listOfReapeated = [];
        if (localStorage.length > 0) {
            for(let i=0 ; i < localStorage.length; i++){
                let ObjectBykey = localStorage.key(i);
                let StoragedObject = JSON.parse(localStorage.getItem(ObjectBykey));
                StoragedObject.id === submitList[0] && listOfReapeated.push(StoragedObject);
            }
        };

        listOfReapeated.length === 1 ? addSell(listOfReapeated[0], submitList[1]) : createSellerData(sellersName[((id[0].value)[2])-1], submitList[1], submitList[0]);
        
        
}

// ___________________________________________________PROGRAMA___________________________________________________________________

linkForm.onsubmit = (e) => {
    e.preventDefault();
    generateARecord();
}
