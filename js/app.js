
const form = document.getElementById('studentform');
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  getDataFromInputs();
});

getDataFromInputs = () =>{
  const name  = document.getElementById("name").value
  const city  = document.getElementById("city").value
  const email = document.getElementById("email").value
  const level = document.getElementById("level").value
  createObj(name,city,email,level);
}

createObj = (name,city,email,level) =>{
  const studentData = {
    name,
    city,
    email,
    level
}
  const studata = JSON.stringify(studentData)
  console.log(studata);
  createAjaxReq(studata);
}
createAjaxReq = (studata) =>{
   //AJAX story
   const http = new XMLHttpRequest();

   http.onreadystatechange = () =>{

   }
   http.open("POST","http://localhost:8080/studentmanage/student",true);
   http.setRequestHeader('Content-Type','application/json');
   http.send(studata);
}






