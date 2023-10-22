function submitEmail() {
    var email = document.getElementById('email').value;
    
    if (isValidEmail(email)) {
        alert('Adresse e-mail soumise : ' + email);
        document.getElementById('error-message').style.display = 'none';
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

function isValidEmail(email) {
    // Utilisation d'une expression régulière pour valider l'adresse e-mail
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}