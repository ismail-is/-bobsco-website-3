window.addEventListener('scroll', function() {
    // Get the modal element
    const modal = document.getElementById('Default-Modal');

    // Define the scroll point at which the modal should open (e.g., 500px)
    const scrollPoint = 500;

    // Check if the scroll point has been reached
    if (window.scrollY >= scrollPoint) {
        $(modal).modal('show'); // Use Bootstrap's modal method to show the modal
        window.removeEventListener('scroll', arguments.callee); // Remove the scroll event listener after modal is triggered
    }
});
