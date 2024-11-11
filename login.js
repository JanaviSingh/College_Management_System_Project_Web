function openLogin(role) {
    document.getElementById('loginModal').style.display = 'flex';
    document.getElementById('loginTitle').textContent = `Login as ${role.charAt(0).toUpperCase() + role.slice(1)}`;
    document.getElementById('login-form').dataset.role = role; // Store role for later use
}

function closeLogin() {
    document.getElementById('loginModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('loginModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = event.target.dataset.role; // Get role from dataset

    // Dummy authentication logic
    if ((role === 'student' && username === 'student' && password === 's123') ||
        (role === 'teacher' && username === 'teacher' && password === 't123') ||
        (role === 'admin' && username === 'admin' && password === 'a123')) {

        // Redirect to respective dashboard
        window.location.href = `${role}_dashboard.html`;
    } else {
        alert('Invalid credentials');
    }
});
