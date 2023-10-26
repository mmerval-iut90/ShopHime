document.addEventListener('DOMContentLoaded', function () {
    const toggleText = document.getElementById('retour');
    const hiddenText = document.querySelector('.texte-retour');
    let isHidden = true;

    toggleText.addEventListener('click', function () {
        if (isHidden) {
            hiddenText.style.display = 'block';
            toggleText.textContent = 'Politique de retour -';
        } else {
            hiddenText.style.display = 'none';
            toggleText.textContent = 'Politique de retour +';
        }
        isHidden = !isHidden;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleText = document.getElementById('livraison');
    const hiddenText = document.querySelector('.texte-livraison');
    let isHidden = true;

    toggleText.addEventListener('click', function () {
        if (isHidden) {
            hiddenText.style.display = 'block';
            toggleText.textContent = 'Politique de retour -';
        } else {
            hiddenText.style.display = 'none';
            toggleText.textContent = 'Politique de retour +';
        }
        isHidden = !isHidden;
    });
});