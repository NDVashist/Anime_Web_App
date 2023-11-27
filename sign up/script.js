const lables = document.querySelectorAll('.form-control label')

lables.forEach(lable =>{
     lable.innerHTML = lable.innerText
     .split('')
     .map((letter, idx) =>`<span style="tarnsition-delay:${idx * 50 }ms">${letter}</span>`)
     .join('')
});


async function saveUser(){
     const username = document.getElementById('username').value;
     const password = document.getElementById('password').value;
     const email = document.getElementById('email').value;
     if(username == "" || password == "" || email == ""){
          alert("please fill all the fields");
          return;
     }
     // send data to backend
     try{
          const response = await fetch('http://localhost:8000/saveuser', {
               method: 'POST',
               headers: {
                    'Content-Type': 'application/json'
               },
               body: JSON.stringify({
                    username: username,
                    password: password,
                    email: email
               })
          });
          const data = await response.json();
          if(data.code == 'ER_DUP_ENTRY'){
               alert("user already exists");
               return;
          }
          if(data.affectedRows == 1){
               alert("user saved successfully");
               window.location.href = "../sign in/index.html";
          }
          else{
               alert("user not saved");
          }
     }catch(err){
          alert("user not saved");
     }     
}