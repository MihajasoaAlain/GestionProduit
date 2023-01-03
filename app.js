const onglets = document.querySelectorAll('.onglet');
const contenu = document.querySelectorAll('.contenu');
let index =0;
let nbr =0;

onglets.forEach(onglet =>{

    onglet.addEventListener('click',()=>
    {
        if (onglet.classList.contains('active')){
        return;
         }
        else{
        onglet.classList.add('active');
        }
        index = onglet.getAttribute('data-anim')
        for (i=0 ; i < onglets.length ; i++){
            if(onglets[i].getAttribute('data-anim')!=index){
                onglets[i].classList.remove('active');
            }
        }
        for (j = 0;j <contenu.length;j++){
            if (contenu[j].getAttribute('data-anim')==index){
                contenu[j].classList.add('activeContenu');
                contenu[j].classList.remove('hide')
            }
            else{
                contenu[j].classList.remove('activeContenu');
                contenu[j].classList.add('hide');
            }
        }
    })
});
// Ajout de nouveau produit
const nbrProduit =0;
const bouton = document.querySelector('.imageAdd');
const tabContainer = document.querySelector('#productList');
bouton.addEventListener('click',()=>{
    const nom = document.querySelector('#nom').value;
    const identif = document.querySelector('#numeroId').value;
    const stock = document.querySelector('#stock').value;
        const product =[nom,identif,stock];
        if (product[0]!=''&& product[1]!=''&&product[2]!=''){
            if (!localStorage.getItem(nom)){
                localStorage.setItem(nom,JSON.stringify(product));
                alert('ajout effectuer');
              let item = JSON.parse(localStorage.getItem(nom));
                creation(item,localStorage.length);
                                nbr++;
            }
            else{
                alert('ce produit existe deja');
            }
          
                                    }
        });
const navStock = document.querySelector('#navStock');
navStock.addEventListener('click',()=>{
   if(nbr == 0){
    for (let i =0; i<localStorage.length; i++){
        let key = localStorage.key(i);
        let item = JSON.parse(localStorage.getItem(key));
           creation(item,i);
    }
   }
        nbr =1;
});
function creation(item,i){
    const produitData = document.querySelector('.produitData');
    const donnerStock = document.createElement('div');
    const productItems = document.createElement('div');
    const num = document.createElement('div');
    const nom = document.createElement('div');
    const stock = document.createElement('div'); 
        const textContenu1 = document.createElement('p');
        textContenu1.textContent =i;
        const textContenu2 = document.createElement('p');
        textContenu2.textContent =item[0];
        const textContenu3 = document.createElement('p');
        textContenu3.textContent =item[2];
        num.textContent = "N°";
    nom.textContent = "NOM :";
    stock.textContent ="STOCK :";
    num.classList.add('identif');
    nom.classList.add('identif');
    stock.classList.add('identif');
    productItems.classList.add('productItems');
    donnerStock.classList.add('donnerStock');
    const box1 = document.createElement('div');
    box1.classList.add('suppr');
    const box2 = document.createElement('div');
    box2.classList.add('modif');

    productItems.appendChild(num);
    productItems.appendChild(textContenu1)
    productItems.appendChild(nom);
    productItems.appendChild(textContenu2)
    productItems.appendChild(stock);
    productItems.appendChild(textContenu3);
    donnerStock.appendChild(productItems);
    produitData.appendChild(donnerStock);
    donnerStock.appendChild(box1);
    donnerStock.appendChild(box2);
}
//////RECHERCHER UN PRODUIT

    const loupe = document.querySelector('.loupe');

     loupe.addEventListener('click',()=>{
        const barSearch = document.querySelector('#recherche').value;
        const ProductSearch = document.querySelector('.ProductSearch');
        if (localStorage.getItem(barSearch)){
            let item = JSON.parse(localStorage.getItem(barSearch));
          const donnerStock = document.createElement('div');
          const productItems = document.createElement('div');
          const num = document.createElement('div');
          const nom = document.createElement('div');
          const stock = document.createElement('div'); 
              const textContenu1 = document.createElement('p');
              textContenu1.textContent =i;
              const textContenu2 = document.createElement('p');
              textContenu2.textContent =item[0];
              const textContenu3 = document.createElement('p');
              textContenu3.textContent =item[2];
              num.textContent = "N°";
          nom.textContent = "NOM :";
          stock.textContent ="STOCK :";
          num.classList.add('identif');
          nom.classList.add('identif');
          stock.classList.add('identif');
          productItems.classList.add('productItems');
          donnerStock.classList.add('donnerStock');
          const box1 = document.createElement('div');
          box1.classList.add('suppr');
          const box2 = document.createElement('div');
          box2.classList.add('modif');
          productItems.appendChild(num);
          productItems.appendChild(textContenu1)
          productItems.appendChild(nom);
          productItems.appendChild(textContenu2)
          productItems.appendChild(stock);
          productItems.appendChild(textContenu3);
          donnerStock.appendChild(productItems);
          ProductSearch.appendChild(donnerStock);
          donnerStock.appendChild(box1);
          donnerStock.appendChild(box2);
        }
        else{
            alert ("produit don't existe");

        }
     });


     /*bond */
     const bond = document.querySelector('.bond');
        bond.addEventListener('click',selectProduct());
function selectProduct(){
    const listeProduct = querySelector('.listeProduct');
    for(let i = 0 ; i<localStorage.length ; i++){
        let key = localStorage.key(i);
        let data = document.createElement('option');
        let product= JSON.parse(localStorage.getItem(key));
        data.textContent = product[0];
        console.log(data);
        listeProduct.appendChild(data);
    }
}

    