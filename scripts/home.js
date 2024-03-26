document.addEventListener("DOMContentLoaded", function () {
    const favElements = document.querySelectorAll('.fav');

    // Add click event listener to each .fav element to toggle animation
    favElements.forEach(function (favElement) {
        favElement.addEventListener('click', function () {
            // Toggle the 'animate' class for this specific favElement
            favElement.classList.toggle('animate');
        });
    });
});
