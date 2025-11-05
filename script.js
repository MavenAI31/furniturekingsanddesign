// JavaScript code for the website
document.addEventListener('DOMContentLoaded', function () {
    // Code to execute when the DOM is ready
    console.log('DOM is ready');

    // Add event listener to the "Add to Cart" buttons
    var addToCartButtons = document.querySelectorAll('.product button');
    addToCartButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            alert('Product added to cart!');
        });
    });
});
