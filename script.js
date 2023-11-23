function signup() {
  Swal.fire({
    title: 'Sign Up',
    html: `<input type="text" class="swal2-input" placeholder="Username" id="login">
    <input type="email" class="swal2-input" name="Mail" placeholder="johndoe@example.com" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <input type="password" class="swal2-input" placeholder="Password" id="password">
    <input type="password" class="swal2-input" name="ConfirmPassword" placeholder="Confirm Password" id="con_password">`,
    confirmButtonText: 'Sign Up',
    focusConfirm: false,
    preConfirm: () => {
      //Variables of fields in sign up
      const username = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      const email = Swal.getPopup().querySelector('#email').value
      const conpass = Swal.getPopup().querySelector('#con_password').value

      //Variables for proper characters
      var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      var strongPass = /^[A-Za-z]\w{7,14}$/;

      //empty fields
      if(!username || !password || !email || !conpass) {

        Swal.showValidationMessage(`Please Fill in all the fields!`)
      } else if(!email.match(validRegex)) {

        Swal.showValidationMessage(`Please use a valid email!`)
      } else if (!password.match(strongPass)) {

        Swal.showValidationMessage(`Password must contain at least one NUMBER, one UPPERCASE and LOWERCASE letter, and at least 7 to 14 characters`)

      } else if (password != conpass) {
        Swal.showValidationMessage(`Passwords don't match!`)
      } 

      else {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully!',
          text: 'You have signed up!',
          button: 'Continue'
        })
      }
    } 
  })
}

function toggleLogin() {
  Swal.fire({
    title: 'Login',
    html: `<input type="text" id="login" class="swal2-input" placeholder="Username">
    <input type="password" id="password" class="swal2-input" placeholder="Password">`,
    confirmButtonText: 'Sign in',
    focusConfirm: false,
    preConfirm: () => {
      const username = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value

      if (username == "admin" && password == "Admin123" || username == "volunteer" && password == "volunteer") {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Logged in successfully'
        })
        window.location.href = "Home.html";
      } else if (username == "trike1" && password == "toda1triker1"){
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        Toast.fire({
          icon: 'success',
          title: 'Logged in successfully'
        })
        window.location.href = "triker/dashboard.html";
      }
      else {
        Swal.showValidationMessage(`Please enter correct Log In Information`)
      } 
    }
  })
}

function notlog() {
  Swal.fire({
    icon: 'error',
    title: 'Oops!',
    text: 'You Must be Logged In',
    button: 'Continue'
  })
}

function logout() {
  Swal.fire({
    title: 'Are you sure you want to Log Out?',
    showDenyButton: true,
    showCancelButton: false,
    confirmButtonText: 'Yes',
    denyButtonText: 'No',
  }).then((result) => {
    if (result.isConfirmed) {
      
      Swal.fire('Log Out Successful!', '', 'success');
      window.location.href = "../index.html";
    } 
  })
  
}

function trikesign() {
  Swal.fire({
    title: 'Sign Up',
    html: `<input type="text" class="swal2-input" placeholder="Full Name" id="login">
    
    <input type="email" class="swal2-input" name="Mail" placeholder="johndoe@example.com" id="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
    <input type="password" class="swal2-input" placeholder="Password" id="password">
    <input type="password" class="swal2-input" name="ConfirmPassword" placeholder="Confirm Password" id="con_password">`,
    confirmButtonText: 'Sign Up',
    focusConfirm: false,
    preConfirm: () => {
      //Variables of fields in sign up
      const username = Swal.getPopup().querySelector('#login').value
      const password = Swal.getPopup().querySelector('#password').value
      const email = Swal.getPopup().querySelector('#email').value
      const conpass = Swal.getPopup().querySelector('#con_password').value

      //Variables for proper characters
      var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
      var strongPass = /^[A-Za-z]\w{7,14}$/;

      //empty fields
      if(!username || !password || !email || !conpass) {

        Swal.showValidationMessage(`Please Fill in all the fields!`)
      } else if(!email.match(validRegex)) {

        Swal.showValidationMessage(`Please use a valid email!`)
      } else if (!password.match(strongPass)) {

        Swal.showValidationMessage(`Password must contain at least one NUMBER, one UPPERCASE and LOWERCASE letter, and at least 7 to 14 characters`)

      } else if (password != conpass) {
        Swal.showValidationMessage(`Passwords don't match!`)
      } 

      else {
        Swal.fire({
          icon: 'success',
          title: 'Registered Successfully!',
          text: 'You have signed up!',
          button: 'Continue'
        })
        window.location.href = "user/checkout.html";
      }
    } 
  })
}

function payment() {
  window.location.href = "user/checkout.html";
}
function loginUser() {
  document.getElementById('userIcon').classList.add('logged-in');
  setTimeout(loginUser, 2000);
}


function profile() {
  Swal.fire({
    position: "top-start",
    html: `<img id="userIcon" src="/assets/defaultimage.jpg" alt="User Avatar"><br> Name: Juan Dela Cruz <br> Address: Poblacion Baliwag, Bulacan <br> Contact No.: 0912 345 6789`,
    title: "Profile Info",
    showConfirmButton: false
  });
}

