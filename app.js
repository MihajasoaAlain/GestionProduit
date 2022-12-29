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
const bouton = document.querySelector('.imageAdd');
const tabContainer = document.querySelector('#productList');
bouton.addEventListener('click',()=>{
    const nom = document.querySelector('#nom').value;
    
    const identif = document.querySelector('#numeroId').value;
    const stock = document.querySelector('#stock').value;
        const product =[nom,identif,stock];
        if (product[0]!=''&& product[1]!=''&&product[2]!=''){
             localStorage.setItem(nom,JSON.stringify(product));
            for (let i = 1; i<localStorage.length;i++){
                const key =localStorage.key(i);
                console.log(key)
                const item = JSON.parse(localStorage.getItem(key));
                console.log(item);
                    //Affichage du contenu du tableau

                            const row = document.createElement('tr');
                            const cell_Nom = document.createElement('td');
                            const cell_id = document.createElement('td');
                            const cell_Stock = document.createElement('td');
                            cell_Nom.textContent =item[0];
                            cell_id.textContent = item[1];
                            cell_Stock.textContent =item[2];
                            row.appendChild(cell_Nom);
                            row.appendChild(cell_id);
                            row.appendChild(cell_Stock);
                            tabContainer.appendChild(row);
                        }
                        console.log('ajout effectuer');
        }
});


