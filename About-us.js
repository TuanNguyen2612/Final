fetch("person.json", {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  })
    .then((response) => response.json())
    .then((Data) => {
        console.log(Data);
        let html='';
        for(i = 0; i < Data.length; i++) {
            let htmlSegment = `
            <div class="team-member">
        <img src="${Data[i].image}">
        <h3>${Data[i].name}</h3>
        <p>${Data[i].position}</p>
      </div>`;

        html += htmlSegment;
    };

    let container = document.querySelector('.team-container');
    container.innerHTML = html;
    console.log(html)
    });


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