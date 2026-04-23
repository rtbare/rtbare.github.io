// Mobile Menu


// Dark modern

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener(
    'click', () => {
        document.body.classList.toggle('dark')

        if(document.body.classList.
        contains("dark")) {
            themeToggle.textContent = "🌕";
            // try using '🔆' or '☀' or '💡'
        }else{
            themeToggle.textContent = "🌙"; 
        }
    }
)


// Typing Effect

const words = [
    'Frontend Developer', 'UI Designer', 'Javascript Enthusiast'
];

let i=0;
let j=0;
let currentWord = "";
let isDeleting = false;

function type() {
    currentWord = words[i];

    if (isDeleting){
        document.getElementById("typing").textContent =
        currentWord.substring(0,j+1);
        j--;
    }else{
        document.getElementById("typing").textContent =
        currentWord.substring(0,j+1);
        j++;
    }

    if (!isDeleting && j === currentWord.length){
        isDeleting = true;
        setTimeout(type, 1000);
    }else if (isDeleting && j === 0){
        isDeleting = false;
        i = (i+1) % words.length;
        setTimeout(type, 300);
    }else{
        setTimeout(type,
        isDeleting ? 50 : 100);
    }
}

// Start Typing Animation Process

type();
