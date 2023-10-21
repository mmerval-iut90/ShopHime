document.addEventListener('DOMContentLoaded', function() {
    const dropdownBtn = document.getElementById('dropdownBtn');
    const dropdownContent = document.getElementById('dropdownContent');

    dropdownBtn.addEventListener('click', function() {
        dropdownContent.classList.toggle('visible');
    });
});