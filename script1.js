
const HowToPlay = document.getElementById('HowToPlay');

HowToPlay.addEventListener('click', () => {
    // Add start game functionality
    alert('THE GAME PHOTO RECUE CONSISTS OF 3 LEVELS.\n🔴  LEVEL 1: LAZER MAZE GAME \n Redirect a laser beam to reach the target while avoiding obstacles and bombs.\n🟢 LEVEL 2: PHOTONICS CAPTCHA GAME \n Identify and select all images that match the given condition. \n🔵 LEVEL 3: MULTIPLE CHOICE QUIZ ON PHOTONICS \n Answer simple questions related to photonics \n \n Step into the world of light and lasers! 🌀⚡ Solve mind-bending puzzles, master the power of photons, and unlock the secrets of the lab. Are you ready to rescue the light? 🌟🔬');
    // Add your game start logic here
});


// Hover effects
document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});

// Add ripple effect to buttons
document.querySelectorAll('.menu-item').forEach(button => {
    button.addEventListener('click', function (e) {
        let ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '20px';
        ripple.style.height = '20px';
        ripple.style.background = 'rgba(0, 247, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.pointerEvents = 'none';
        ripple.style.left = e.clientX - this.offsetLeft + 'px';
        ripple.style.top = e.clientY - this.offsetTop + 'px';
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 500);
    });
});


