
let linkMarkers = document.getElementsByClassName(`position`);
let linkInput = document.getElementById(`addSellButton`)


// ___________________________________________________GENERACIÓN DE CAMBIOS EN EL DOM ___________________________________________________________________


function generateAMarker() {

    // let listOfSellersToMark = [];
    
    for(let i=0 ; i < localStorage.length; i++){
        let Objectkey = localStorage.key(i);
        let StorageObject = JSON.parse(localStorage.getItem(Objectkey));
        markCreator(StorageObject.sells);
    }
}


function markCreator(number){
    let marker = document.createElement(`div`);
    linkMarkers[number].appendChild(marker);

    marker.className = `component`;
    marker.innerHTML = `<div class="square"><div class="triangle"></div></div>`;

}
//--------------------------------------------------------------------------------------------------------------------------

generateAMarker();


linkInput.onclick = () => setTimeout(() => {
    let takeLastElement = document.getElementsByClassName(`component`);
    await for (const el of takeLastElement){
        el.remove();
    }
    generateAMarker();

}, 200);
