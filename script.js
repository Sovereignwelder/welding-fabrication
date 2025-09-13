document.querySelector('form').addEventListener('submit', function(e) {
    const phone = document.querySelector('input[type="tel"]').value;
    if (!phone.match(/^\d{10}$/)) {
        e.preventDefault();
        alert('Please enter a valid 10-digit phone number');
    }
});
