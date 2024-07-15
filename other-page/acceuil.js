function Get(params) {
   return document.getElementById(params)
}

/****** Animation d'apparition */
const boxes = document.querySelectorAll('.boxy');
const containerSection = Get("container-section")
const checkBoxes = () => {
    const triggerBottom = window.innerHeight / 6 * 4;
  console.log(triggerBottom);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}
containerSection.addEventListener('scroll', checkBoxes);
checkBoxes(); 

const btnMenu = Get('menu-burger')
const sideBar = Get("side-bar")
const section2  = Get("section-2")
const close = Get("close")
const ulSides = document.querySelectorAll(".ul-side")

let estVisible = true
btnMenu.addEventListener('click', () =>{
   if (estVisible) {
      sideBar.style.display = "block"
      section2.style.width = "80%"
   } else {
      sideBar.style.display = "none"
      section2.style.width = "100%"
   }
   estVisible = !estVisible
})

close.addEventListener('click', () =>{
  sideBar.style.display = "none"
  section2.style.width = "100%"
})

ulSides.forEach(element => {
  element.addEventListener('click', () =>{
    sideBar.style.display = "none"
    section2.style.width = "100%"
  })
});

//ajout étudiant 
const btnAjouter = Get("btn-ajouter")
const myTable = document.querySelector("#myTable")
const inputAjout = document.querySelector(".input-ajout")
btnAjouter.addEventListener("click", ()=>{
      inputAjout.classList.add('inputAddAjout')
})


const btnValider = document.querySelector(".btn-valider")
btnValider.addEventListener("click", (e)=>{
  e.preventDefault()
  const nomEtud = Get("nom-etud").value
  const prenomEtud = Get("prenom-etud").value
  const classeEtud = Get("classe-etud").value
  const MatriculeEtud = Get("Filiere-etud").value
  const nouvelleLigne = myTable.insertRow()
  const nouvelleCelluleNom = nouvelleLigne.insertCell()
  const nouvelleCellulePrenom = nouvelleLigne.insertCell()
  const nouvelleCelluleClasse = nouvelleLigne.insertCell()
  const nouvelleCelluleMatricule = nouvelleLigne.insertCell()
  nouvelleCelluleNom.textContent = nomEtud
  nouvelleCellulePrenom.textContent = prenomEtud
  nouvelleCelluleClasse.textContent = classeEtud
  nouvelleCelluleMatricule.textContent = MatriculeEtud
 })
const btnAnnuler = document.querySelector(".btn-annuler")
btnAnnuler.addEventListener("click" , ()=>{
  inputAjout.classList.remove('inputAddAjout')
})

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
