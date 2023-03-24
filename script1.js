const form = document.getElementById("form");


document.addEventListener("submit", callvalue)
function callvalue(e) {
   e.preventDefault()
   var name = document.getElementById('fname').value,
      email = document.getElementById("mail").value,
      mob = document.getElementById("num").value,
      gender = document.querySelector('input[name="gender"]:checked').value,
      locat = document.getElementById("loca").value,
      degree = document.getElementById('degree').value,
      lang = document.getElementById('lang').value;

   let obj = {
      name,
      email,
      mob,
      gender,
      locat,
      degree,
      lang
   };
 
addData();

   
   function getData() {
      let data = localStorage.getItem("userdata");
      return JSON.parse(data);
   }


   function addData() {
      let newArray = getData() ?? [];
      let newuser = [...newArray]
      newuser.push(obj);
      // console.log(data);
      localStorage.setItem("userdata", JSON.stringify(newuser));
      //console.log(userdata);
      console.log(newuser);
   }

   
    function displayFunction(){
            console.log('data')
            let data = localStorage.getItem("userdata");
            data.map((item) => {
              console.log(item)
            })
         }
       }
      
      
       document.getElementById("show").addEventListener("click",function(){
         console.log('data')
         let dataa = localStorage.getItem("userdata");
         data = JSON.parse(dataa)
         console.log(data);
         n1.innerHTML = '<h3 class="user-detail">User Details</h3>'
         data.map((item, idx) => {
            n1.innerHTML += `<p class="user-title">User ${idx+1}</p>`;
            for (const key in item) {
               n1.innerHTML += `<p>${key} : ${item[key]}</p>`;
            }
         })
      })
      

   // newObj(){

   // }
   



// function show(){
//    if (localStorage.getItem('obj') !=null){
//       document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('obj'))
//    }
// }

document.getElementById("show").addEventListener("click",function(){

   localStorage.clear();
})


// document.addEventListener("clear", clearAll)
// function clearAll(e) {
//    e.preventDefault()
//    if (localStorage.getItem('obj') !=null){
//       document.getElementById('output').innerHTML = JSON.parse(localStorage.getItem('obj'))
//    }
// }


//onblur, onfocus


//regex for mail and phone number