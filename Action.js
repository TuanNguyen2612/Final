function myFunction() {
        if (localStorage.getItem('loggedin')=='false')
        {
            alert("Please login first")
           
        }
        else{
            let answer = prompt("Are you sure that you want to donate", "Yes/No");
    
            if (answer == "yes" || answer == "Yes") {
                alert("Donate successfully.Very thankful for your donation")
                } else if(answer == "no" || answer == "No") {
                    alert("Thank you for looking at this")
            }else{
                alert("yes or no only")
            }  
        }
      ;
}


$(document).ready( function() {
    if (localStorage.getItem('loggedin')=='false')
    {
      let html1=''
        let htmlSegment1 = `
        <a class="nav-link active" href="About-us.html">About us <span class="sr-only">(current)</span></a>
      <a class="nav-link" href="#">Details</a>
      <a href="Action.html" class="nav-link">Take Action</a>
      
      <a class="nav-link" href="Form.html" id="id01">Signup</a>
      <a class="nav-link" href="Login-Form.html" id="id02">Login</a>

                    `;

    html1 += htmlSegment1;
;

let container = document.querySelector('.navbar-nav');
container.innerHTML = html1;
      
    }
    else{
      let user = JSON.parse(localStorage.getItem('users'))
      console.log(user[0].username)
        let html=''
        let htmlSegment = `<a class="nav-link active" href="About-us.html">About us <span class="sr-only">(current)</span></a>
        <a class="nav-link" href="#">Details</a>
        <a href="Action.html" class="nav-link">Take Action</a>
        
      
        <a class="nav-link">${user[0].username}</a>
        <a class="nav-link" onclick="thisfunction()">Logout</a>

                    `;

    html += htmlSegment;
;

let container = document.querySelector('.navbar-nav');
container.innerHTML = html;
    }
  ;

})
    
function thisfunction(){
localStorage.setItem('loggedin',false);
location.reload();
}