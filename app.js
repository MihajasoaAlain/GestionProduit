const homeMenu = document.querySelectorAll('.box');
const contenuHome = document.querySelector('.home');
const ajout = document.querySelector('.ajout');
const acceuil = document.querySelector('#acceuil');
const AddItems = document.querySelector('.imageAdd');
let compteur =0;
let data={};
acceuil.addEventListener('click',function(){changePage(ajout,contenuHome)});
homeMenu.forEach(menu =>{
    menu.addEventListener('click',function(){changePage(contenuHome,ajout)})
});
function changePage(initial,final){
    if(final.classList.contains('hide')){
        initial.classList.remove('activeContenu');
        final.classList.remove('hide');
        final.classList.add('activeContenu');
        initial.classList.add('hide');
    }
   
}
            // pour faire un petite stockage offline

AddItems.addEventListener('click',()=>{

    const DataNom = document.querySelector('#nom').value;
    const DataNumID = document.querySelector('#numeroId').value;
    const DataStock = document.querySelector('#stock').value;
    const produit ={
        Nom : DataNom ,
        numeroId : DataNumID,
        stock : DataStock
    };

    const produit1 =JSON.stringify(produit);
    compteur++;
    localStorage.setItem("nom["+compteur+"]",produit1);
    data = localStorage.getItem("nom["+compteur+"]");
console.log(data);
});

for(let i = 0 ; i<compteur;i++){
    data = localStorage.getItem("nom["+i+"]");
    console.log(data);
}

