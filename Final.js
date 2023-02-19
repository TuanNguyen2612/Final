// async function getDatas() {
//     let url = 'api.json';
//     try {
//         let res = await fetch(url);
//         return await res.json();
//     } catch (error) {
//         console.log(error);
//     }
// }
// async function renderDatas() {
//     let Datas = await getDatas();
//     let html = '';
//     Datas.forEach(Data => {
//         let htmlSegment = `
//                         <div class="col-md-3">
//             <div class="card card-decorate " style="width: 18rem;">
//               <div class="${Data.class}">
//                 <img
//                   src="${Data.image}"
//                   class="card-img-top" alt="">
//               </div>
//               <div class="card-body">
//                 <h5 class="card-title">${Data.title}</h5>
//                 <p class="card-text">${Data.detail} </p>
//                 <a href="${Data.href}"
//                   class="btn btn-primary">Read more here</a>
//               </div>
//             </div>
//           </div>`;

//         html += htmlSegment;
//     });

//     let container = document.querySelector('.row');
//     container.innerHTML = html;
// }

// renderDatas();

fetch("api.json", {
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
            <div class="col-md-3">
            <div class="card card-decorate " style="width: 18rem;">
              <div class="${Data[i].class}">
                <img
                  src="${Data[i].image}"
                  class="card-img-top" alt="">
              </div>
              <div class="card-body">
                <h5 class="card-title">${Data[i].title}</h5>
                <p class="card-text">${Data[i].detail} </p>
                <a href="${Data[i].href}"
                  class="btn btn-primary">Read more here</a>
              </div>
            </div>
          </div>
                        `;

        html += htmlSegment;
    };

    let container = document.querySelector('.row');
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
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}