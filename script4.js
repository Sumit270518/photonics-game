// script.js
const questions = [
    {
        question: "If optical fibers use total internal reflection to transmit light, what would happen if the fiber core and cladding had the same refractive index?",
        options: [
            "Light would travel through the fiber normally",
            "Light would get absorbed and not propagate",
            "Light would escape from the fiber instead of being guided",
            "The fiber would become more efficient in transmitting signals"
        ],
        correctAnswer: "Light would escape from the fiber instead of being guided"
    },
    {
        question: "If a laser beam were sent into space without any obstacles, would it spread out or remain a narrow beam indefinitely?",
        options: [
            "It would remain perfectly collimated forever",
            "It would eventually spread out due to diffraction",
            "It would get absorbed by the vacuum of space",
            "It would change into a different wavelength over time"
        ],
        correctAnswer: "It would eventually spread out due to diffraction"
    },
    {
        question: "If you were designing an optical communication system for an underwater environment, what factors would you consider in choosing the wavelength of light to use?",
        options: [
            "The water's absorption and scattering characteristics",
            "The availability of waterproof optical fibers",
            "The need for visible light to make the system user-friendly",
            "The ability of light to penetrate different water depths"
        ],
        correctAnswer: "The water's absorption and scattering characteristics"
    },
    {
        question: "Suppose you have a material that slows down light to half its speed in a vacuum. How would this affect its refractive index and potential applications?",
        options: [
            "The refractive index would be 2, and it could be useful for optical delay lines",
            "The refractive index would be 0.5, making it useful for faster communication",
            "The material would absorb all light and not be useful for optical applications",
            "The material would increase the speed of light beyond its natural limit"
        ],
        correctAnswer: "The refractive index would be 2, and it could be useful for optical delay lines"
    },
    {
        question: "If you were designing a secure communication system using photonics, what strategy would you use to prevent eavesdropping?",
        options: [
            "Use high-power lasers to make interception difficult",
            "Use quantum key distribution (QKD) to detect any interference",
            "Encode messages using multiple laser colors",
            "Transmit signals through air instead of fiber optics"
        ],
        correctAnswer: "Use quantum key distribution (QKD) to detect any interference"
    }
];

let currentQuestionIndex = 0;
let timer;
let timeLeft = 40;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const timerElement = document.getElementById('timer');
const timeElement = document.getElementById('time');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement('div');
        button.classList.add('option');
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(option));
        optionsElement.appendChild(button);
    });

    // Reset timer for each new question
    timeLeft = 40;
    timerElement.style.display = 'none';
    optionsElement.style.pointerEvents = 'auto'; // Enable clicking options
}

function checkAnswer(selectedOption) {
    const currentQuestion = questions[currentQuestionIndex];
    const options = document.querySelectorAll('.option');

    if (selectedOption === currentQuestion.correctAnswer) {
        options.forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('correct');
            }
        });
        setTimeout(() => {
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                loadQuestion(); // Load the next question
            } else {
                // Redirect to Google after all questions are answered correctly
                window.location.href = "index5.html";
            }
        }, 1000); // Move to next question after 1 second
    } else {
        options.forEach(option => {
            if (option.textContent === selectedOption) {
                option.classList.add('incorrect');
            }
        });
        startTimer();
    }
}

function startTimer() {
    timerElement.style.display = 'block';
    optionsElement.style.pointerEvents = 'none'; // Disable clicking options

    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            timerElement.style.display = 'none';
            optionsElement.style.pointerEvents = 'auto'; // Re-enable clicking options
            timeLeft = 40;
            loadQuestion(); // Reload the same question
        }
    }, 1000);
}

// Load the first question
loadQuestion();

// You can use JavaScript to disable the right-click context menu:
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});