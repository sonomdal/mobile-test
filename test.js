document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('toggleButton');
    const body = document.body;
    let isLarge = false;

    toggleButton.addEventListener('click', function() {
        if (isLarge) {
            body.style.fontSize = '';
            isLarge = false;
        } else {
            body.style.fontSize = '1.2em';
            isLarge = true;
        }
    });
});
