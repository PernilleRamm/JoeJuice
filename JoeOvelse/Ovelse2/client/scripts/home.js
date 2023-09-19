let responseDOM = document.getElementById("response")


function getUsers(){
    axios.get('http://localhost:3000')
    .then(function (response) {
      // handle success
      console.log(response.data);
      responseDOM.innerHTML = response.data
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .finally(function () {
      // always executed
    });
}

function saveUser(){
  let username = document.getElementById("username").value
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  let user = {}

  user.username = username
  user.email = email
  user.password = password

  console.log(user)


  axios.get('http://localhost:3000')
  .then(function (response) {
    // handle success
    console.log(response.data);
    responseDOM.innerHTML = response.data
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  
  

}