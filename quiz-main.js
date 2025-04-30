// --- DATA: 125 Quranic Words ---
const words = [
    // Word list remains the same as previous versions...
   { arabic: "الله", meaning: "Allah" }, { arabic: "الشَّيْطن", meaning: "Satan" }, { arabic: "هُوَ", meaning: "he" }, { arabic: "هُمْ", meaning: "they" }, { arabic: "أَنْتَ", meaning: "you (sg. m.)" }, { arabic: "أَنَا", meaning: "I" }, { arabic: "أَنْتُمْ", meaning: "you all" }, { arabic: "نَحْنُ", meaning: "we" }, { arabic: "مَنْ", meaning: "who / whoever" }, { arabic: "هَلْ", meaning: "Is / Do / Are...?" }, { arabic: "خَيْر", meaning: "best / good" }, { arabic: "اسْم", meaning: "Name" }, { arabic: "الرَّحْمن", meaning: "the Most Gracious" }, { arabic: "الرَّحِيم", meaning: "the Most Merciful" }, { arabic: "الْكَرِيم", meaning: "the Generous" }, { arabic: "الْحَمْد", meaning: "All praises and thanks" }, { arabic: "لِله", meaning: "for Allah / to Allah" }, { arabic: "الْعَالَمِين", meaning: "the worlds" }, { arabic: "مُسْلِم", meaning: "Muslim / one who submits" }, { arabic: "مُؤْمِن", meaning: "believer" }, { arabic: "مُشْرِك", meaning: "polytheist / idolator" }, { arabic: "كَافِر", meaning: "disbeliever / one who rejects faith" }, { arabic: "صَالِح", meaning: "righteous" }, { arabic: "يَوْم", meaning: "day" }, { arabic: "الدِّين", meaning: "The Religion" }, { arabic: "إِيَّاكَ", meaning: "You Alone" }, { arabic: "رَبّ", meaning: "Lord" }, { arabic: "مَا", meaning: "what / that which / not" }, { arabic: "الصِّرَاط", meaning: "the path" }, { arabic: "الْمُسْتَقِيم", meaning: "the straight" }, { arabic: "الَّذِينَ", meaning: "(of) those who" }, { arabic: "غَيْر", meaning: "other than / not" }, { arabic: "لَا", meaning: "no / not" }, { arabic: "الضَّالِّين", meaning: "those who go astray" }, { arabic: "هِيَ", meaning: "she / it (f.)" }, { arabic: "كِتَاب", meaning: "book" }, { arabic: "أَنْزَلْنَا", meaning: "We revealed / sent down" }, { arabic: "آيَة", meaning: "sign / verse" }, { arabic: "الْأَرْض", meaning: "the earth" }, { arabic: "السَّمَاء", meaning: "the heaven / the sky" }, { arabic: "أُولُو", meaning: "those of / possessors of" }, { arabic: "لَوْ", meaning: "if (hypothetical)" }, { arabic: "لِ", meaning: "for / to" }, { arabic: "مِنْ", meaning: "from / of" }, { arabic: "عَنْ", meaning: "from / about" }, { arabic: "قَدْ", meaning: "indeed / certainly / has / had" }, { arabic: "الْقُرْآن", meaning: "the Qur’an" }, { arabic: "إِنْ", meaning: "if (conditional) / not" }, { arabic: "شَاءَ", meaning: "He willed" }, { arabic: "إِنَّ", meaning: "indeed / verily / surely" }, { arabic: "إِنَّمَا", meaning: "only" }, { arabic: "عَمَل", meaning: "deed / work / action" }, { arabic: "بِ", meaning: "in / with / by" }, { arabic: "فِي", meaning: "in / into / concerning" }, { arabic: "السَّبِيل", meaning: "the way / the path" }, { arabic: "عَلَى", meaning: "on / upon / against" }, { arabic: "الَّذِي", meaning: "(the one) who" }, { arabic: "أَيّ", meaning: "which / whichever / any" }, { arabic: "أَحْسَن", meaning: "best / most beautiful" }, { arabic: "إِلَى", meaning: "to / towards" }, { arabic: "مَعَ", meaning: "with" }, { arabic: "عِنْدَ", meaning: "with / near / in the presence of" }, { arabic: "إِنْسَان", meaning: "human being / mankind" }, { arabic: "إِلَّا", meaning: "except / but / only" }, { arabic: "آمَنُوا", meaning: "they believed" }, { arabic: "الْحَقّ", meaning: "the truth / the right" }, { arabic: "أَوْ", meaning: "or" }, { arabic: "هَذَا", meaning: "this (m.)" }, { arabic: "هَذِهِ", meaning: "this (f.)" }, { arabic: "ذَلِكَ", meaning: "that (m.)" }, { arabic: "تِلْكَ", meaning: "that (f.) / those" }, { arabic: "هَؤُلَاءِ", meaning: "these" }, { arabic: "أُولَئِكَ", meaning: "those" }, { arabic: "إِذْ", meaning: "when (past) / since / because" }, { arabic: "إِذَا", meaning: "when (future/conditional) / if / behold" }, { arabic: "جَاءَ", meaning: "he came / it came" }, { arabic: "النَّاس", meaning: "the people / mankind" }, { arabic: "فَعَلَ", meaning: "he did / he acted" }, { arabic: "جَعَلَ", meaning: "he made / he appointed / he placed" }, { arabic: "فَتَحَ", meaning: "he opened / he revealed / he conquered" }, { arabic: "قُلْ", meaning: "Say!" }, { arabic: "أَحَد", meaning: "One (Unique)" }, { arabic: "لَمْ", meaning: "not (negation for past jussive)" }, { arabic: "لَنْ", meaning: "never (negation for future subjunctive)" }, { arabic: "نَصْر", meaning: "help / victory" }, { arabic: "خَلَقَ", meaning: "he created" }, { arabic: "ذَكَرَ", meaning: "he remembered / he mentioned" }, { arabic: "عَبَدَ", meaning: "he worshipped / he served" }, { arabic: "شَيْء", meaning: "thing / something / anything" }, { arabic: "ضَرَبَ", meaning: "he struck / he set forth (example)" }, { arabic: "سَمِعَ", meaning: "he heard / he listened" }, { arabic: "عَلِمَ", meaning: "he knew" }, { arabic: "عَمِلَ", meaning: "he did / he worked" }, { arabic: "حَدِيث", meaning: "speech / story / narration" }, { arabic: "إِلَه", meaning: "a god / deity" }, { arabic: "صَدْر", meaning: "chest / bosom" }, { arabic: "مَلَك", meaning: "angel" }, { arabic: "جِنّ", meaning: "Jinn" }, { arabic: "يَا", meaning: "O!" }, { arabic: "قَوْم", meaning: "people / nation" }, { arabic: "أَيُّهَا", meaning: "O you who..." }, { arabic: "أَنْ", meaning: "that (conjunction) / to (with verb)" }, { arabic: "أَنَّ", meaning: "that (introduces noun clause)" }, { arabic: "مُحَمَّد", meaning: "Muhammad" }, { arabic: "رَسُول", meaning: "Messenger" }, { arabic: "الصَّلَاة", meaning: "the prayer" }, { arabic: "شَرِيك", meaning: "partner / associate" }, { arabic: "مَاذَا", meaning: "what?" }, { arabic: "سُبْحَان", meaning: "Glory be to / Exalted is" }, { arabic: "عَظِيم", meaning: "great / magnificent" }, { arabic: "طَيِّبَات", meaning: "good things / pure things" }, { arabic: "سَلَام", meaning: "Peace" }, { arabic: "النَّبِيّ", meaning: "the Prophet" }, { arabic: "رَحْمَة", meaning: "mercy" }, { arabic: "عِبَاد", meaning: "servants / slaves (of Allah)" }, { arabic: "سَوْفَ", meaning: "soon / will (future particle)" }, { arabic: "إِبْرَاهِيم", meaning: "Abraham" }, { arabic: "نَفْس", meaning: "soul / self / person" }, { arabic: "كَثِير", meaning: "much / many" }, { arabic: "ذَنْب", meaning: "sin / fault" }, { arabic: "غَفُور", meaning: "Oft-Forgiving / All-Forgiving" }, { arabic: "الدُّنْيَا", meaning: "the world / this life" }, { arabic: "الْآخِرَة", meaning: "the Hereafter / the next life" }, { arabic: "عَذَاب", meaning: "punishment / torment" }, { arabic: "النَّار", meaning: "the Fire (Hell)" }
];

// --- DOM Elements ---
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const reviewScreen = document.getElementById('review-screen');
const quizSelectionContainer = startScreen.querySelector('.grid');
const overallScoresContainer = document.getElementById('overall-scores');
const scoreList = document.getElementById('score-list');
const noScoresMessage = document.getElementById('no-scores');
const resetScoresButton = document.getElementById('reset-all-scores');
const muteButton = document.getElementById('mute-button'); // Mute button element
const toggleScoresButton = document.getElementById('toggle-scores-button'); // Add this

const quizTitleEl = document.getElementById('quiz-title');
const scoreEl = document.getElementById('score');
const arabicWordEl = document.getElementById('arabic-word');
const optionsContainer = document.getElementById('options-container');
const feedbackMessageEl = document.getElementById('feedback-message');
const submitAnswerButton = document.getElementById('submit-answer');
const backToMenuButton = document.getElementById('back-to-menu');

const finalScoreEl = document.getElementById('final-score');
const resultsMessageEl = document.getElementById('results-message');
const reviewQuizButton = document.getElementById('review-quiz');
const backToMenuResultsButton = document.getElementById('back-to-menu-results');

const reviewContainer = document.getElementById('review-container');
const backToResultsButton = document.getElementById('back-to-results');

// --- Quiz State ---
const NUM_QUIZZES = 13;
const WORDS_PER_QUIZ = Math.ceil(words.length / NUM_QUIZZES);
let quizSets = [];
let currentQuizIndex = -1;
let currentQuestionIndex = 0;
let currentQuizQuestions = [];
let userAnswers = [];
let score = 0;
let quizScores = {}; // Object to store scores like { quiz_1: 10, quiz_2: 8 }
let answerSubmitted = false;
let reviewQuestions = [];
let reviewUserAnswers = [];
let isMuted = false; // State variable for mute status

// --- Tone.js Synth Initialization ---
let synth;
try {
     if (typeof Tone !== 'undefined') {
         synth = new Tone.Synth().toDestination();
         console.log("Tone.js Synth initialized.");
     } else {
          console.warn("Tone.js not loaded yet.");
     }
} catch (e) {
    console.error("Could not initialize Tone.js:", e);
    synth = null;
}

// --- Sound Playing Functions ---
async function startAudioContext() {
     // No changes needed here
     if (Tone && Tone.context && Tone.context.state !== 'running') {
         try { await Tone.start(); console.log("Audio context started by Tone.start()"); }
         catch (e) { console.error("Error starting Tone context:", e); }
     }
}

// Modified to check mute state
function playCorrectSound() {
    if (isMuted) return; // Don't play if muted
    startAudioContext().then(() => {
        if (synth) {
            try { synth.triggerAttackRelease("C5", "8n"); }
            catch (e) { console.error("Error playing correct sound:", e); }
        } else { console.warn("Synth not available for correct sound."); }
    });
}

// Modified to check mute state
function playIncorrectSound() {
         if (isMuted) return; // Don't play if muted
         startAudioContext().then(() => {
             if (synth) {
                 try { synth.triggerAttackRelease("E2", "8n"); }
                 catch (e) { console.error("Error playing incorrect sound:", e); }
             } else { console.warn("Synth not available for incorrect sound."); }
         });
}

// Modified to check mute state
function playCongratsSound() {
         if (isMuted) return; // Don't play if muted
         startAudioContext().then(() => {
             if (synth) {
                 try {
                     const now = Tone.now();
                     synth.triggerAttackRelease("C4", "16n", now);
                     synth.triggerAttackRelease("G4", "16n", now + 0.15);
                     synth.triggerAttackRelease("C5", "8n", now + 0.30);
                     synth.triggerAttackRelease("E5", "16n", now + 0.50);
                     synth.triggerAttackRelease("G5", "4n", now + 0.65);
                 } catch (e) { console.error("Error playing congrats sound:", e); }
             } else { console.warn("Synth not available to play congrats sound."); }
         });
}

// --- Cookie Helper Functions ---
/* // Commenting out cookie functions as we are switching to localStorage
function setCookie(name, value, days) { let expires = ""; if (days) { const date = new Date(); date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000)); expires = "; expires=" + date.toUTCString(); } document.cookie = name + "=" + (value || "") + expires + "; path=/; SameSite=Lax"; }
function getCookie(name) { const nameEQ = name + "="; const ca = document.cookie.split(';'); for (let i = 0; i < ca.length; i++) { let c = ca[i]; while (c.charAt(0) === ' ') c = c.substring(1, c.length); if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length); } return null; }
function deleteCookie(name) { document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax;'; }
*/

// --- Utility Functions ---
function shuffleArray(array) { let currentIndex = array.length, randomIndex; while (currentIndex !== 0) { randomIndex = Math.floor(Math.random() * currentIndex); currentIndex--; [array[currentIndex], array[randomIndex]] = [ array[randomIndex], array[currentIndex]]; } return array; }
function getIncorrectOptions(correctMeaning, count = 3) { const incorrectOptions = new Set(); const allMeanings = words.map(w => w.meaning); while (incorrectOptions.size < count) { const randomIndex = Math.floor(Math.random() * allMeanings.length); const randomMeaning = allMeanings[randomIndex]; if (randomMeaning !== correctMeaning) { incorrectOptions.add(randomMeaning); } } return Array.from(incorrectOptions); }
function updateScoreDisplay() {
    if (!scoreList || !overallScoresContainer) { // Removed noScoresMessage check here, handle inside
        console.error("Score display elements (scoreList or overallScoresContainer) not found!");
        return; // Exit if elements aren't ready
    }
    scoreList.innerHTML = ''; // Clear previous scores
    const completedQuizzes = Object.keys(quizScores).length;

    if (completedQuizzes === 0) {
        // Create and append the 'no scores' message dynamically
        const li = document.createElement('li');
        li.id = 'no-scores';
        li.className = 'text-center text-gray-500 italic'; // Match HTML classes
        li.textContent = 'No scores recorded yet.';
        li.style.backgroundColor = 'transparent'; // Ensure no background
        li.style.border = 'none'; // Ensure no border
        li.style.justifyContent = 'center';
        scoreList.appendChild(li);
        // Hide reset button if it exists
        if (resetScoresButton) resetScoresButton.classList.add('hidden');
    } else {
         // Remove 'no scores' message if it exists from a previous state
         const existingNoScores = scoreList.querySelector('#no-scores');
         if (existingNoScores) existingNoScores.remove();

         Object.keys(quizScores)
            .sort((a, b) => parseInt(a.split('_')[1]) - parseInt(b.split('_')[1]))
            .forEach(quizKey => {
                const quizNum = parseInt(quizKey.split('_')[1]);
                const quizIndex = quizNum - 1;
                // Ensure quizSets is populated before accessing length
                const totalQuestions = (quizSets && quizSets.length > quizIndex && quizSets[quizIndex]) ? quizSets[quizIndex].length : WORDS_PER_QUIZ;
                const scoreValue = quizScores[quizKey];
                const li = document.createElement('li');
                // Use innerHTML carefully or create elements programmatically
                li.innerHTML = `<span>Quiz ${quizNum}</span> <span class="font-medium">${scoreValue} / ${totalQuestions}</span>`;
                scoreList.appendChild(li);
         });
         // Show reset button if it exists
         if (resetScoresButton) resetScoresButton.classList.remove('hidden');
    }
}

// --- Score Persistence (Using localStorage) ---
function loadScores() {
    const storedScores = localStorage.getItem('quranQuizScores'); // Use localStorage.getItem
    if (storedScores) {
        try {
            quizScores = JSON.parse(storedScores);
        } catch (e) {
            console.error("Error parsing scores from localStorage:", e);
            quizScores = {};
        }
    } else {
        quizScores = {};
    }
    updateScoreDisplay();
}

function saveScores() {
    try {
        const scoresString = JSON.stringify(quizScores);
        localStorage.setItem('quranQuizScores', scoresString); // Use localStorage.setItem
    } catch (e) {
        console.error("Error stringifying scores for localStorage:", e);
    }
    updateScoreDisplay();
}

function resetAllScores() {
     if (confirm("Are you sure you want to reset all your scores? This cannot be undone.")) {
         localStorage.removeItem('quranQuizScores'); // Use localStorage.removeItem
         quizScores = {};
         updateScoreDisplay();
     }
}

// --- Mute State Persistence (Using localStorage) ---
function loadMuteState() {
    const mutedState = localStorage.getItem('quizMuted'); // Use localStorage.getItem
    isMuted = mutedState === 'true'; // localStorage stores strings
    updateMuteButtonIcon();
}

function saveMuteState() {
    localStorage.setItem('quizMuted', isMuted); // Use localStorage.setItem
}

function updateMuteButtonIcon() {
    const muteIcon = muteButton ? muteButton.querySelector('i') : null; // Find icon safely
    if (!muteButton || !muteIcon) return; // Exit if elements not found

    if (isMuted) {
        muteIcon.classList.remove('fa-volume-high');
        muteIcon.classList.add('fa-volume-xmark');
    } else {
        muteIcon.classList.remove('fa-volume-xmark');
        muteIcon.classList.add('fa-volume-high');
    }
}

// --- Quiz Logic ---
function createQuizSets() {
    const shuffledWords = shuffleArray([...words]);
    quizSets = [];
    for (let i = 0; i < NUM_QUIZZES; i++) {
        const start = i * WORDS_PER_QUIZ;
        const end = start + WORDS_PER_QUIZ;
        quizSets.push(shuffledWords.slice(start, Math.min(end, words.length)));
    }
     quizSets = quizSets.filter(set => set.length > 0);
}

function startQuiz(quizNum) {
    currentQuizIndex = quizNum - 1;
    if (quizSets.length === 0) createQuizSets();
     if (currentQuizIndex < 0 || currentQuizIndex >= quizSets.length) {
         console.error("Invalid quiz number selected:", quizNum); alert("An error occurred. Please select a valid quiz."); backToMenu(); return;
    }
    currentQuizQuestions = shuffleArray([...quizSets[currentQuizIndex]]);
     if (currentQuizQuestions.length === 0) {
         console.error("Selected quiz set is empty:", quizNum); alert("This quiz appears empty. Please select another."); backToMenu(); return;
    }
    currentQuestionIndex = 0; score = 0; userAnswers = new Array(currentQuizQuestions.length).fill(null); answerSubmitted = false;
    startScreen.classList.add('hidden'); resultsScreen.classList.add('hidden'); reviewScreen.classList.add('hidden'); quizScreen.classList.remove('hidden');
    quizTitleEl.textContent = `Quiz ${quizNum}`; feedbackMessageEl.classList.add('hidden'); submitAnswerButton.classList.add('hidden');
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestionIndex >= currentQuizQuestions.length) { showResults(); return; }
    answerSubmitted = false;
    const question = currentQuizQuestions[currentQuestionIndex];
    const correctMeaning = question.meaning;
    const incorrectOptions = getIncorrectOptions(correctMeaning, 3);
    const options = shuffleArray([correctMeaning, ...incorrectOptions]);
    arabicWordEl.textContent = question.arabic;
    scoreEl.textContent = `Question: ${currentQuestionIndex + 1} / ${currentQuizQuestions.length}`;
    optionsContainer.innerHTML = ''; feedbackMessageEl.classList.add('hidden'); submitAnswerButton.classList.remove('hidden'); submitAnswerButton.disabled = true;
    options.forEach((option, index) => {
        const optionId = `option-${currentQuestionIndex}-${index}`;
        const itemDiv = document.createElement('div'); itemDiv.classList.add('option-item'); itemDiv.classList.remove('disabled-quiz');
        const radioInput = document.createElement('input'); radioInput.type = 'radio'; radioInput.id = optionId; radioInput.name = `quran-option-${currentQuestionIndex}`; radioInput.value = option; radioInput.disabled = false;
        radioInput.addEventListener('change', () => { submitAnswerButton.disabled = false; });
        const label = document.createElement('label'); label.htmlFor = optionId; label.textContent = option;
        itemDiv.appendChild(radioInput); itemDiv.appendChild(label); optionsContainer.appendChild(itemDiv);
    });
}

// Ensure clicking anywhere on .option-item checks the radio button

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', (event) => {
        const optionItem = event.target.closest('.option-item');
        if (optionItem) {
            const radioInput = optionItem.querySelector('input[type="radio"]');
            if (radioInput) {
                radioInput.checked = true;
                radioInput.dispatchEvent(new Event('change')); // Trigger change event
            }
        }
    });
});

function handleSubmitAnswer() {
     if (answerSubmitted) return;
    const selectedRadio = optionsContainer.querySelector(`input[name="quran-option-${currentQuestionIndex}"]:checked`);
    if (!selectedRadio) { alert("Please select an answer."); return; }
     startAudioContext(); // Ensure audio context is ready
    answerSubmitted = true;
    const selectedOption = selectedRadio.value;
    const correctMeaning = currentQuizQuestions[currentQuestionIndex].meaning;
    userAnswers[currentQuestionIndex] = selectedOption;
    if (selectedOption === correctMeaning) {
        score++;
        playCorrectSound();
    } else {
        playIncorrectSound();
    }
    if (currentQuestionIndex < currentQuizQuestions.length - 1) {
        currentQuestionIndex++;
        setTimeout(displayQuestion, 150);
    } else {
        setTimeout(showResults, 150);
    }
}

function showResults() {
    quizScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
    reviewScreen.classList.add('hidden');

    const totalQuestions = currentQuizQuestions.length;
     if (totalQuestions === 0) {
         finalScoreEl.textContent = "No questions in this quiz.";
         resultsMessageEl.textContent = "";
         return;
     }

    finalScoreEl.textContent = `Your score: ${score} / ${totalQuestions}`;

    const percentage = (score / totalQuestions) * 100;
    if (percentage >= 70) {
        resultsMessageEl.textContent = "Congrats! You passed the quiz";
        resultsMessageEl.className = 'text-lg font-semibold mb-2 passed';
        if (typeof confetti === 'function') {
             confetti({ particleCount: 150, spread: 100, origin: { y: 0.6 }, zIndex: 1000 });
        }
    } else {
        resultsMessageEl.textContent = "Keep practicing!";
         resultsMessageEl.className = 'text-lg font-semibold mb-2 failed';
    }

     if (percentage >= 80) {
         playCongratsSound();
     }

    const quizKey = `quiz_${currentQuizIndex + 1}`;
    quizScores[quizKey] = score;
    saveScores();

    reviewQuestions = [...currentQuizQuestions];
    reviewUserAnswers = [...userAnswers];
}

// --- Review Logic ---
function displayReview() {
    resultsScreen.classList.add('hidden');
    reviewScreen.classList.remove('hidden');
    reviewContainer.innerHTML = '';

    reviewQuestions.forEach((question, index) => {
        const reviewItem = document.createElement('div'); reviewItem.classList.add('review-item');
        const questionDiv = document.createElement('div'); questionDiv.classList.add('review-question');
        questionDiv.innerHTML = `<p class="text-sm text-gray-500 mb-1">Question ${index + 1}</p><div class="arabic-text">${question.arabic}</div>`;
        const optionsList = document.createElement('div'); optionsList.classList.add('review-options-list');
        const correctMeaning = question.meaning; const userAnswer = reviewUserAnswers[index];
        const incorrectOptions = getIncorrectOptions(correctMeaning, 3); const allOptions = shuffleArray([correctMeaning, ...incorrectOptions]);
        allOptions.forEach(option => {
            const optionDiv = document.createElement('div'); optionDiv.classList.add('review-option');
            let iconClass = 'fa-regular fa-circle'; let textClass = 'not-selected';
            const isCorrect = (option === correctMeaning); const isUserAnswer = (option === userAnswer);
            if (isCorrect && isUserAnswer) { iconClass = 'fa-solid fa-check-circle text-green-600'; textClass = 'correct-answer'; }
            else if (isCorrect && !isUserAnswer) { iconClass = 'fa-solid fa-check text-green-600'; textClass = 'correct-answer'; }
            else if (!isCorrect && isUserAnswer) { iconClass = 'fa-solid fa-xmark text-red-600'; textClass = 'user-incorrect'; }
            optionDiv.classList.add(textClass);
            optionDiv.innerHTML = `<i class="${iconClass}"></i><span>${option}</span>`;
            optionsList.appendChild(optionDiv);
        });
        reviewItem.appendChild(questionDiv); reviewItem.appendChild(optionsList); reviewContainer.appendChild(reviewItem);
    });
}

function backToResultsScreen() {
    reviewScreen.classList.add('hidden');
    resultsScreen.classList.remove('hidden');
}

// Go back to the main menu
function backToMenu() {
    quizScreen.classList.add('hidden'); resultsScreen.classList.add('hidden'); reviewScreen.classList.add('hidden');
    startScreen.classList.remove('hidden'); updateScoreDisplay();
}

// --- Initialization ---
function init() {
    if (!quizSelectionContainer) {
        console.error("Quiz selection container not found!");
        return;
    }
    quizSelectionContainer.innerHTML = '';
    createQuizSets();
    loadScores(); // Load scores
    loadMuteState(); // Load mute state

    for (let i = 1; i <= quizSets.length; i++) {
        const button = document.createElement('button');
        button.textContent = `Quiz ${i}`;
        // Apply base button styles and the light blue style to all quiz buttons
        button.classList.add('btn', 'btn-quiz-1'); // Assuming btn-quiz-1 is defined in CSS

        button.onclick = () => startQuiz(i);
        quizSelectionContainer.appendChild(button);
    }
    // Event listeners
    if(submitAnswerButton) submitAnswerButton.addEventListener('click', handleSubmitAnswer);
    if(backToMenuButton) backToMenuButton.addEventListener('click', backToMenu);
    if(backToMenuResultsButton) backToMenuResultsButton.addEventListener('click', backToMenu);
    if(resetScoresButton) resetScoresButton.addEventListener('click', resetAllScores);
    if(reviewQuizButton) reviewQuizButton.addEventListener('click', displayReview);
    if(backToResultsButton) backToResultsButton.addEventListener('click', backToResultsScreen);

    // Add listener for the new toggle scores button
    if (toggleScoresButton && overallScoresContainer) {
        toggleScoresButton.addEventListener('click', () => {
            const isVisible = overallScoresContainer.classList.toggle('scores-visible');
            toggleScoresButton.textContent = isVisible ? 'Hide My Scores' : 'Show My Scores';
        });
    } else {
        console.error("Toggle scores button or overall scores container not found!");
    }

    // Ensure muteButton exists before adding listener
    if (muteButton) {
        muteButton.addEventListener('click', toggleMute); // Add listener for mute button
    } else {
        console.error("Mute button element not found!");
    }

    updateScoreDisplay(); // Update display on initial load
}

document.addEventListener('DOMContentLoaded', init);

