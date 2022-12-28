const onglets = document.querySelectorAll('.onglet');
const contenu = document.querySelectorAll('.contenu');
let index =0;
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
const produit = {};

const bouton = document.querySelector('.imageAdd');
const boxProduit = document.querySelector('#productList');

bouton.addEventListener('click',()=>{
    const nom = document.querySelector('#nom');
    const identif = document.querySelector('#numeroId');
    const stock = document.querySelector('#stock');
        const product ={
            productNom : nom,
            productID :identif,
            productStock : stock
        };
        localStorage.setItem(product.productNom,JSON.stringify(product));
            for (let i = 0; i<localStorage.length;i++){
                const key =localStorage.key(i);
                const item = JSON.parse(localStorage.getItem(key));
                creation(item);
            }
});
    function creation(item){
        const row = document.createAttribute('tr');
        const name = document.createElement('td');
        const identification = document.createElement('td');
        const stock = document.createElement('td');
        const suppr = document.createElement('td');
        const ajoutP = document.createElement('td');
        name.textContent = item.productNom;
        identification.textContent= item.productID;
        stock.textContent = item.productStock;
        // name.appendChild(row);
        // identification.appendChild(row);
        // stock.appendChild(row);
        // suppr.appendChild(row);
        // ajoutP.appendChild(row);
        // row.appendChild(boxProduit);
    }



