document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    // Load the JSON file with accepted usernames and passwords
    fetch('accepted_users.json')
      .then(response => response.json())
      .then(data => {
        const user = data.find(user => user.username === username && user.password === password);
        if (user) {
          alert('Login Successful!');
          // Redirect to home page (replace with your actual home page URL)
          window.location.href = 'index.html';
        } else {
          alert('Try Again - Invalid username or password.');
        }
      })
      .catch(error => console.error('Error loading JSON file:', error));
  });
  