

let chkusers = JSON.parse(localStorage.getItem('users'))
const allUsers= []
// console.log(users,'users')
localStorage.setItem('loggedin',false);


const signup =  function () {
     let users2 =  chkusers? JSON.parse(localStorage.getItem('users')):[]

     const username = document.getElementById('username').value 
     const email = document.getElementById('email').value 
     const password = document.getElementById('password').value
     const confirmpass = document.getElementById('confirm-pvv').value
     const user = {
        username,
        email,
        password
     }
     var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;  //Javascript reGex for Email Validation.
     console.log(users2)
     if (user !== null && password==confirmpass&& password.length >8  && email !== "" && regEmail.test(email) ){
          allUsers?.push(user, ...users2)
          alert('User Signup Successfully')
      }
      
    else{
        alert("Please check the information");
        allUsers?.push(users2);
        
    }

       localStorage.setItem('users' , JSON.stringify(allUsers))
      
}
const login = function() {
  let users =  chkusers? JSON.parse(localStorage.getItem('users')):[];
  console.log(users);
  const email=document.getElementById('loginemail');
  console.log(email.value);
  const pass=document.getElementById('loginpassword');

  for(let i=0;i<users.length;i++){
  if(users[i].email==email.value && users[i].password==pass.value){
    navigate('Final.html')
      localStorage.setItem('loggedin',true);
  }else{
    alert("Login failed")
  }
  }
}
function navigate(target){
  window.location.href=`./${target}`
}

