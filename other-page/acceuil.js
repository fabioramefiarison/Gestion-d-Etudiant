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
  if (nomEtud != null && prenomEtud!= null && classeEtud!= null && MatriculeEtud!= null) {
    const nouvelleLigne = myTable.insertRow()
    const nouvelleCelluleNom = nouvelleLigne.insertCell()
    const nouvelleCellulePrenom = nouvelleLigne.insertCell()
    const nouvelleCelluleClasse = nouvelleLigne.insertCell()
    const nouvelleCelluleMatricule = nouvelleLigne.insertCell()
    const nouvelleCelluleControl = nouvelleLigne.insertCell() 
    nouvelleCelluleNom.textContent = nomEtud
    nouvelleCellulePrenom.textContent = prenomEtud
    nouvelleCelluleClasse.textContent = classeEtud
    nouvelleCelluleMatricule.textContent = MatriculeEtud
    nouvelleCelluleControl.innerHTML = "<i class='fa-solid fa-pen-to-square' style='color: green;'></i><i class='fa-solid fa-trash' style='color: red;'></i>" 
    inputAjout.classList.remove('inputAddAjout')
  }

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

/*note*/
function limitInput(input) {
  // Limite le nombre de caractères à 2
          if (input.value.length > 2) {
              input.value = input.value.slice(0, 2);
          }
  // Limite la valeur à 20
          if (parseInt(input.value) > 20) {
              input.value = 20;
          }
      }
      document.getElementById('notesForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nom = document.getElementById('nom').value;
        const classe = document.getElementById('classe').value;
        const matricule = document.getElementById('matricule').value;
        const mvc = document.getElementById('mvc').value;
        const ts = document.getElementById('ts').value;
        const java = document.getElementById('java').value;
        const elec = document.getElementById('elec').value;
        const iart = document.getElementById('iart').value;
        const devops = document.getElementById('devops').value;
        const csharp = document.getElementById('csharp').value;
        const is = document.getElementById('is').value;
        
        const listContainer = document.getElementById('listContainer');
        const notesList = document.getElementById('notesList');
        
        notesList.innerHTML = `
            <li>Nom : ${nom}</li>
            <li>Classe : ${classe}</li>
            <li>Matricule : ${matricule}</li>
            <li>Structures MVC : ${mvc}/20</li>
            <li>Typescript : ${ts}/20</li>
            <li>Java : ${java}/20</li>
            <li>Electronique : ${elec}/20</li>
            <li>Intelligence Artificielle : ${iart}/20</li>
            <li>DevOps : ${devops}/20</li>
            <li>C# : ${csharp}/20</li>
            <li>Info Scientifique : ${is}/20</li>
        `;
        
        listContainer.style.display = 'block';
    });