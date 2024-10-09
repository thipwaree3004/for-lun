// Function to register the user
function register() {
    const email = document.getElementById('registerEmail').value;
    const username = document.getElementById('registerUsername').value;
    const password = document.getElementById('registerPassword').value;
    const firstname = document.getElementById('registerFirstname').value;
    const lastname = document.getElementById('registerLastname').value;

    if (email && username && password && firstname && lastname) {
        // Create user object
        const user = { username, password, email, firstname, lastname };
        
        // Save user to localStorage
        localStorage.setItem('user', JSON.stringify(user));

        alert("Registration successful! Now log in.");
        document.getElementById('registerForm').reset();
        window.location.href = "login.html"; // ไปที่หน้าล็อกอินหลังจากลงทะเบียนสำเร็จ
    } else {
        alert("Please fill all fields.");
    }
}

// Function to login the user
function login() {
    const loginUsername = document.getElementById('loginUsername').value;
    const loginPassword = document.getElementById('loginPassword').value;

    // Get stored user from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // Check if the username and password match
    if (storedUser && storedUser.username === loginUsername && storedUser.password === loginPassword) {
        window.location.href = "success.html"; // ไปที่หน้าสำเร็จหลังจากล็อกอินสำเร็จ
    } else {
        alert("Invalid username or password. Please try again.");
    }
}
