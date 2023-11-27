const lables = document.querySelectorAll('.form-control label')

lables.forEach(lable =>{
     lable.innerHTML = lable.innerText
     .split('')
     .map((letter, idx) =>`<span style="tarnsition-delay:${idx * 50 }ms">${letter}</span>`)
     .join('')
});

async function isValidUser(){
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     if(username == "" || password == ""){
          alert("please fill all the fields");
          return;
     }
     try{
          const response = await fetch(`http://localhost:8000/userdata/${username}`);
          const data = await response.json();
          console.log(data);
          if(data.length == 0){
               alert("user not found");
               return;
          }
          if(data[0].password == password){
               alert("login successful");
               window.location.href = "../main_body/index.html";
          }
          else{
               alert("password is incorrect");
          }
     }catch(err){
          alert("user not found");
     }
     
}
