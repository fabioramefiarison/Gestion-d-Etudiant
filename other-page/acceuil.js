function Get(params) {
   return document.getElementById(params)
}

const btnMenu = Get('menu-burger')
const sideBar = Get("side-bar")
const section2  = Get("section-2")

let estVisible = true
btnMenu.addEventListener('click', () =>{
   if (estVisible) {
      sideBar.style.display = "block"
      section2.style.width = "75%"
   } else {
      sideBar.style.display = "none"
      section2.style.width = "100%"
   }
   estVisible = !estVisible
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
