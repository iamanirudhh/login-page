// Wait for DOM to load

document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    const usernameInput = loginForm.querySelector('input[type="text"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
  
    const forgotPasswordLink = document.querySelector('a[href="#"]:first-child');
    const forgotUsernameLink = document.querySelector('a[href="#"]:last-child');


  
    // Handle form submission

    loginForm.addEventListener('submit', function (e) {
      e.preventDefault(); // Prevent actual form submission
  
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
  
      if (username === '' || password === '') {
        alert('Please enter both username and password.');
      } else {
        // You can replace this with real authentication logic
        alert(`Logged in as: ${username}`);
        // Optionally, redirect: window.location.href = "/dashboard.html";
      }
    });


  
    // Handle "Forgot Password?"

    forgotPasswordLink.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Redirecting to password recovery...');
      // You can add: window.location.href = '/forgot-password.html';
    });


  
    // Handle "Forgot Username?"
     
    forgotUsernameLink.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Redirecting to username recovery...');
      // You can add: window.location.href = '/forgot-username.html';
    });
  });
  