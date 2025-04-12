// script.js
document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('image-grid');
    const submitBtn = document.getElementById('submit-btn');
    const resultMessage = document.getElementById('result-message');
    const nextLevelButton = document.getElementById('next-level-button');

    // Array of 9 images (replace with actual image URLs)
    const images = [
        { src: 'red1.jpg', isGreen: false }, // Red
        { src: 'green1.jpg', isGreen: true }, // Green
        { src: 'blue1.jpg', isGreen: false }, // Blue
        { src: 'green2.jpg', isGreen: true }, // Green
        { src: 'yellow1.png', isGreen: false }, // Yellow
        { src: 'green3.jpg', isGreen: true }, // Green
        { src: 'voilet1.jpg', isGreen: false }, // voilet
        { src: 'green4.jpg', isGreen: true }, // Green
        { src: 'pink1.jpg', isGreen: false }, // pink
    ];

    // Dynamically insert images into the grid
    images.forEach((image, index) => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.dataset.index = index;
        imgElement.dataset.isGreen = image.isGreen;
        imgElement.addEventListener('click', () => {
            imgElement.classList.toggle('selected');
        });
        imageGrid.appendChild(imgElement);
    });

    // Submit button logic
    submitBtn.addEventListener('click', () => {
        const selectedImages = document.querySelectorAll('.image-grid img.selected');
        let correctSelections = 0;

        selectedImages.forEach(img => {
            if (img.dataset.isGreen === 'true') {
                correctSelections++;
            }
        });

        const totalGreenImages = images.filter(img => img.isGreen).length;

        if (correctSelections === totalGreenImages && selectedImages.length === totalGreenImages) {
            resultMessage.textContent = 'Correct! You may proceed to the next level.';
            nextLevelButton.style.display = 'block'; // Show the next level button
        } else {
            resultMessage.textContent = 'Incorrect selection. Please try again.';
            nextLevelButton.style.display = 'none'; // Hide the next level button
        }
    });

    // Next level button logic
    nextLevelButton.addEventListener('click', () => {
        window.location.href = 'index4.html'; // Redirect to Google
    });
});

// You can use JavaScript to disable the right-click context menu:
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});