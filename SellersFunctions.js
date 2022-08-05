

let linkButtonAdd = document.getElementById(`addSellButton`);
let linkForm = document.getElementById(`adderForm`);



class CreateNewSeller {
    constructor (id, name, sells){
        this.id = id;
        this.name = name;
        this.sells = sells;
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

   sellerObject.changeSells(input);
    console.log(sellerObject.sells, input)
    localStorage.setItem(`${sellerObject.name}`, JSON.stringify(sellerObject))
}




function generateARecord () {
   
        
        let id = document.getElementsByClassName(`selectSeller`);
        let sells = document.getElementById(`numberOfSells`);
        let submitList = [];

        submitList.push(id[0].value, sells.value)
        console.log(submitList);

        let listOfReapeated = [];
        if (localStorage.length > 0) {
            for(let i=0 ; i < localStorage.length; i++){
                let ObjectBykey = localStorage.key(i);
                let StoragedObject = JSON.parse(localStorage.getItem(ObjectBykey));
                StoragedObject.id === submitList[0] && listOfReapeated.push(StoragedObject);
            }
        };
        console.log(listOfReapeated)

        listOfReapeated.length === 1 ? addSell(listOfReapeated[0], submitList[1]) : createSellerData(id[0].className, submitList[1], submitList[0]);
        
   
}

// ___________________________________________________PROGRAMA___________________________________________________________________
// localStorage.clear();

linkForm.onsubmit = (e) => {
    e.preventDefault();
    generateARecord();
}