const quizData = [
  {
    question: "Ποια είναι μια βασική αρχή της ηθικής στην Τεχνητή Νοημοσύνη;",
    options: [
      "Η διαφάνεια στη λήψη αποφάσεων",
      "Η απόκρυψη δεδομένων από τους χρήστες",
      "Η προώθηση προκαταλήψεων",
      "Η αγνόηση των συνεπειών"
    ],
    answer: 0,
    tip: "Η διαφάνεια βοηθά τους ανθρώπους να κατανοούν πώς και γιατί η ΤΝ παίρνει αποφάσεις."
  },
  {
    question: "Τι πρέπει να αποφεύγουν οι δημιουργοί ΤΝ;",
    options: [
      "Την αξιολόγηση των αλγορίθμων",
      "Την ενσωμάτωση προκαταλήψεων στα δεδομένα",
      "Τη διασφάλιση της ιδιωτικότητας",
      "Τη λήψη ανατροφοδότησης από χρήστες"
    ],
    answer: 1,
    tip: "Οι προκαταλήψεις στα δεδομένα οδηγούν σε άδικες αποφάσεις."
  },
  {
    question: "Ποιος είναι υπεύθυνος για τις αποφάσεις που παίρνει ένα σύστημα ΤΝ;",
    options: [
      "Οι προγραμματιστές και οι οργανισμοί που το ανέπτυξαν",
      "Το ίδιο το σύστημα ΤΝ",
      "Οι χρήστες μόνο",
      "Κανείς"
    ],
    answer: 0,
    tip: "Η ευθύνη ανήκει στους ανθρώπους που σχεδιάζουν και χρησιμοποιούν τα συστήματα."
  },
  {
    question: "Γιατί είναι σημαντική η ιδιωτικότητα στα συστήματα ΤΝ;",
    options: [
      "Για να προστατεύονται τα προσωπικά δεδομένα",
      "Για να αυξάνεται η ταχύτητα του συστήματος",
      "Για να μειώνεται το κόστος",
      "Για να είναι πιο διασκεδαστικό"
    ],
    answer: 0,
    tip: "Η προστασία προσωπικών δεδομένων είναι θεμελιώδης για την εμπιστοσύνη."
  },
  {
    question: "Τι πρέπει να γίνεται όταν ένα σύστημα ΤΝ κάνει λάθος;",
    options: [
      "Να αγνοείται το λάθος",
      "Να διορθώνεται και να ενημερώνονται οι χρήστες",
      "Να συνεχίζει να λειτουργεί όπως πριν",
      "Να αποκρύπτεται το λάθος"
    ],
    answer: 1,
    tip: "Η υπευθυνότητα και η ενημέρωση των χρηστών είναι σημαντικές για την ηθική ΤΝ."
  },
  {
    question: "Ποιος είναι ο ρόλος της δικαιοσύνης στην ΤΝ;",
    options: [
      "Να διασφαλίζει ίση μεταχείριση για όλους",
      "Να προωθεί ταχύτερες αποφάσεις",
      "Να μειώνει το κόστος",
      "Να αυξάνει την πολυπλοκότητα"
    ],
    answer: 0,
    tip: "Η δικαιοσύνη στην ΤΝ σημαίνει αποφυγή διακρίσεων και ίση μεταχείριση."
  },
  {
    question: "Τι σημαίνει υπευθυνότητα στην ΤΝ;",
    options: [
      "Να αναλαμβάνουν οι άνθρωποι την ευθύνη για τις αποφάσεις της ΤΝ",
      "Να αφήνουμε την ΤΝ να αποφασίζει μόνη της",
      "Να μην ενημερώνουμε τους χρήστες",
      "Να αγνοούμε τα λάθη"
    ],
    answer: 0,
    tip: "Η υπευθυνότητα απαιτεί ανθρώπινη επίβλεψη και ανάληψη ευθύνης."
  },
  {
    question: "Ποια είναι η σημασία της ασφάλειας στα συστήματα ΤΝ;",
    options: [
      "Να αποτρέπονται κακόβουλες χρήσεις και ατυχήματα",
      "Να αυξάνεται η ταχύτητα",
      "Να μειώνεται το κόστος",
      "Να είναι πιο διασκεδαστικά"
    ],
    answer: 0,
    tip: "Η ασφάλεια προστατεύει τους χρήστες και την κοινωνία από κινδύνους."
  },
  {
    question: "Τι είναι η προκατάληψη (bias) στην ΤΝ;",
    options: [
      "Όταν το σύστημα ευνοεί ή αδικεί κάποιες ομάδες",
      "Όταν λειτουργεί γρήγορα",
      "Όταν είναι ακριβές",
      "Όταν είναι διασκεδαστικό"
    ],
    answer: 0,
    tip: "Η προκατάληψη οδηγεί σε άδικες αποφάσεις και πρέπει να αποφεύγεται."
  },
  {
    question: "Πώς μπορεί να μειωθεί η προκατάληψη στην ΤΝ;",
    options: [
      "Με προσεκτική επιλογή και έλεγχο των δεδομένων",
      "Με αύξηση της ταχύτητας",
      "Με μείωση του κόστους",
      "Με περισσότερα δεδομένα"
    ],
    answer: 0,
    tip: "Ο έλεγχος των δεδομένων και η αξιολόγηση των αλγορίθμων μειώνουν την προκατάληψη."
  },
  {
    question: "Τι σημαίνει διαφάνεια στην ΤΝ;",
    options: [
      "Να εξηγούνται οι αποφάσεις της ΤΝ στους χρήστες",
      "Να αποκρύπτονται οι αποφάσεις",
      "Να μην υπάρχει ενημέρωση",
      "Να είναι όλα μυστικά"
    ],
    answer: 0,
    tip: "Η διαφάνεια ενισχύει την εμπιστοσύνη και την κατανόηση."
  },
  {
    question: "Γιατί είναι σημαντική η ενημέρωση των χρηστών για τη χρήση της ΤΝ;",
    options: [
      "Για να γνωρίζουν πώς επηρεάζονται από τις αποφάσεις της ΤΝ",
      "Για να αυξάνεται η ταχύτητα",
      "Για να μειώνεται το κόστος",
      "Για να είναι πιο διασκεδαστικό"
    ],
    answer: 0,
    tip: "Η ενημέρωση των χρηστών προάγει τη διαφάνεια και την υπευθυνότητα."
  },
  {
    question: "Τι είναι η ιδιωτικότητα δεδομένων στην ΤΝ;",
    options: [
      "Η προστασία των προσωπικών πληροφοριών των χρηστών",
      "Η αύξηση της ταχύτητας",
      "Η μείωση του κόστους",
      "Η διασκέδαση"
    ],
    answer: 0,
    tip: "Η ιδιωτικότητα είναι θεμελιώδης για την εμπιστοσύνη στην ΤΝ."
  },
  {
    question: "Ποιος πρέπει να έχει πρόσβαση στα δεδομένα που χρησιμοποιεί η ΤΝ;",
    options: [
      "Μόνο εξουσιοδοτημένα άτομα και οργανισμοί",
      "Όλοι οι χρήστες",
      "Οποιοσδήποτε",
      "Κανείς"
    ],
    answer: 0,
    tip: "Η πρόσβαση στα δεδομένα πρέπει να είναι ελεγχόμενη και ασφαλής."
  },
  {
    question: "Τι είναι η επεξήγηση (explainability) στην ΤΝ;",
    options: [
      "Η δυνατότητα να εξηγούνται οι αποφάσεις της ΤΝ",
      "Η ταχύτητα του συστήματος",
      "Η μείωση του κόστους",
      "Η διασκέδαση"
    ],
    answer: 0,
    tip: "Η επεξήγηση βοηθά τους χρήστες να κατανοούν και να εμπιστεύονται την ΤΝ."
  },
  {
    question: "Ποιος είναι υπεύθυνος για την ασφάλεια των συστημάτων ΤΝ;",
    options: [
      "Οι προγραμματιστές και οι οργανισμοί που τα αναπτύσσουν",
      "Οι χρήστες",
      "Κανείς",
      "Μόνο η ΤΝ"
    ],
    answer: 0,
    tip: "Η ασφάλεια είναι ευθύνη όσων σχεδιάζουν και χρησιμοποιούν την ΤΝ."
  },
  {
    question: "Τι σημαίνει λογοδοσία (accountability) στην ΤΝ;",
    options: [
      "Να μπορεί να εντοπιστεί ποιος ευθύνεται για τις αποφάσεις της ΤΝ",
      "Να μην υπάρχει ευθύνη",
      "Να είναι όλα ανώνυμα",
      "Να αποφασίζει μόνο η ΤΝ"
    ],
    answer: 0,
    tip: "Η λογοδοσία διασφαλίζει υπεύθυνη χρήση της ΤΝ."
  },
  {
    question: "Ποια είναι η σημασία της ανθρώπινης επίβλεψης στην ΤΝ;",
    options: [
      "Να διασφαλίζεται ότι η ΤΝ λειτουργεί σωστά και ηθικά",
      "Να αυξάνεται η ταχύτητα",
      "Να μειώνεται το κόστος",
      "Να είναι πιο διασκεδαστική"
    ],
    answer: 0,
    tip: "Η ανθρώπινη επίβλεψη αποτρέπει λάθη και ανήθικες χρήσεις."
  },
  {
    question: "Τι είναι η αλγοριθμική διαφάνεια;",
    options: [
      "Η δυνατότητα να ελέγχεται και να εξηγείται ο αλγόριθμος",
      "Η ταχύτητα του αλγορίθμου",
      "Η μείωση του κόστους",
      "Η διασκέδαση"
    ],
    answer: 0,
    tip: "Η αλγοριθμική διαφάνεια ενισχύει την εμπιστοσύνη και την υπευθυνότητα."
  },
  {
    question: "Ποιος πρέπει να ενημερώνεται όταν η ΤΝ λαμβάνει σημαντικές αποφάσεις;",
    options: [
      "Οι χρήστες που επηρεάζονται",
      "Κανείς",
      "Μόνο οι προγραμματιστές",
      "Όλοι οι πολίτες"
    ],
    answer: 0,
    tip: "Η ενημέρωση των χρηστών είναι βασική για τη διαφάνεια και την ηθική."
  },
  {
    question: "Τι σημαίνει δίκαιη πρόσβαση στην ΤΝ;",
    options: [
      "Όλοι να έχουν ίσες ευκαιρίες να επωφεληθούν από την ΤΝ",
      "Μόνο λίγοι να έχουν πρόσβαση",
      "Να αποκλείονται κάποιες ομάδες",
      "Να είναι μυστική"
    ],
    answer: 0,
    tip: "Η δίκαιη πρόσβαση προάγει την κοινωνική δικαιοσύνη."
  },
  {
    question: "Ποιος είναι ο κίνδυνος της υπερβολικής αυτοματοποίησης με ΤΝ;",
    options: [
      "Να χαθούν θέσεις εργασίας και να μειωθεί η ανθρώπινη επίβλεψη",
      "Να αυξηθεί η διασκέδαση",
      "Να μειωθεί το κόστος",
      "Να αυξηθεί η ταχύτητα"
    ],
    answer: 0,
    tip: "Η υπερβολική αυτοματοποίηση μπορεί να έχει κοινωνικές και ηθικές συνέπειες."
  }
];


let currentQuestion = 0;
let score = 0;
let answered = false;
let userName = '';

function showNameForm() {
  document.querySelector('#app').innerHTML = `
    <div class="quiz-container">
      <div style="font-size:2em;font-weight:700;color:#7c3aed;margin-bottom:0.5em;">AI ethics</div>
      <h2>Quiz: Ηθική της Τεχνητής Νοημοσύνης</h2>
      <form id="name-form">
        <label for="username">Γράψε το όνομά σου:</label><br>
        <input type="text" id="username" name="username" required style="margin:1em 0;padding:0.5em 1em;border-radius:8px;border:1px solid #b3b3b3;font-size:1em;max-width:90%;"><br>
        <button type="submit" class="option-btn" style="margin-top:1em;">Ξεκίνα το Quiz</button>
      </form>
      <div style="margin-top:2.5em;font-size:0.92em;color:#888;text-align:center;">
        Παρουσίνας Αλέξανδρος ΠΕ86
      </div>
    </div>
  `;
  document.getElementById('name-form').onsubmit = function(e) {
    e.preventDefault();
    const input = document.getElementById('username');
    userName = input.value.trim();
    if (userName.length === 0) {
      input.focus();
      return;
    }
    currentQuestion = 0;
    score = 0;
    showQuestion();
  };
}

function showQuestion() {
  answered = false;
  const q = quizData[currentQuestion];
  document.querySelector('#app').innerHTML = `
    <div class="quiz-container">
      <h2>Ερώτηση ${currentQuestion + 1} από ${quizData.length}</h2>
      <p class="question">${q.question}</p>
      <div class="options">
        ${q.options
          .map(
            (opt, idx) => `
              <button class="option-btn" data-idx="${idx}">${opt}</button>
            `
          )
          .join('')}
      </div>
      <div class="progress">Σκορ: ${score}</div>
      <div id="feedback"></div>
    </div>
  `;
  document.querySelectorAll('.option-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      if (answered) return;
      answered = true;
      const idx = Number(e.target.getAttribute('data-idx'));
      const feedback = document.getElementById('feedback');
      if (idx === q.answer) {
        score++;
        btn.classList.add('correct');
        feedback.innerHTML = '<span style="color:green;">Σωστή απάντηση!</span>';
      } else {
        btn.classList.add('wrong');
        feedback.innerHTML = `<span style="color:red;">Λάθος! Η σωστή απάντηση είναι: <strong>${q.options[q.answer]}</strong></span>`;
        document.querySelectorAll('.option-btn')[q.answer].classList.add('correct');
      }
      feedback.innerHTML += `<div class='tip' style='margin-top:1em;'><em>Συμβουλή: ${q.tip}</em></div>`;
      setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
          showQuestion();
        } else {
          showCertificate();
        }
      }, 3000);
    });
  });
}

function showCertificate() {
  document.querySelector('#app').innerHTML = `
    <div class="quiz-container">
      <div class="certificate">
        <h3>Πιστοποιητικό Συμμετοχής</h3>
        <p>Απονέμεται στον/στην <strong>${userName}</strong></p>
        <p>για τη συμμετοχή στο quiz "Ηθική της Τεχνητής Νοημοσύνης"</p>
        <div style="font-size:1.2em;font-weight:bold;color:#2563eb;">Σκορ: ${score} / ${quizData.length}</div>
        <p style="margin-top:1.5em;">Ημερομηνία: ${new Date().toLocaleDateString('el-GR')}</p>
      </div>
      <button id="restart-btn">Ξεκίνα ξανά</button>
      <button id="surprise-btn">Παιχνίδι Έκπληξη!</button>
    </div>
  `;
  document.getElementById('restart-btn').onclick = () => {
    userName = '';
    showNameForm();
  };
  document.getElementById('surprise-btn').onclick = showSurpriseGame;
}

function showSurpriseGame() {
  document.querySelector('#app').innerHTML = `
    <div class="quiz-container">
      <h2>🎲 Παιχνίδι Έκπληξη: AI Memory!</h2>
      <p>Βρες τα ζευγάρια με θέμα την ηθική της ΤΝ. Κάνε refresh για να επιστρέψεις στο quiz.</p>
      <div id="memory-game"></div>
    </div>
  `;
  startMemoryGame();
}

// Απλό memory game (ζευγάρια)
function startMemoryGame() {
  const pairs = [
    ['Διαφάνεια', 'Transparency'],
    ['Ιδιωτικότητα', 'Privacy'],
    ['Ευθύνη', 'Responsibility'],
    ['Δικαιοσύνη', 'Fairness'],
    ['Ασφάλεια', 'Safety']
  ];
  let cards = pairs.flat().sort(() => Math.random() - 0.5);
  let selected = [];
  let matched = [];
  const gameDiv = document.getElementById('memory-game');
  gameDiv.style.display = 'grid';
  gameDiv.style.gridTemplateColumns = 'repeat(4, 1fr)';
  gameDiv.style.gap = '1em';
  cards.forEach((word, i) => {
    const btn = document.createElement('button');
    btn.textContent = '?';
    btn.className = 'option-btn';
    btn.style.minWidth = '80px';
    btn.style.minHeight = '40px';
    btn.onclick = function() {
      if (btn.disabled || selected.length === 2) return;
      btn.textContent = word;
      selected.push({btn, word, idx: i});
      if (selected.length === 2) {
        setTimeout(() => {
          const [a, b] = selected;
          if (
            pairs.some(pair => pair.includes(a.word) && pair.includes(b.word) && a.word !== b.word)
          ) {
            a.btn.disabled = true;
            b.btn.disabled = true;
            matched.push(a.word, b.word);
            if (matched.length === pairs.length * 2) {
              gameDiv.insertAdjacentHTML('afterend', `<div class='surprise'>🎉 Συγχαρητήρια! Τα βρήκες όλα!</div>`);
            }
          } else {
            a.btn.textContent = '?';
            b.btn.textContent = '?';
          }
          selected = [];
        }, 900);
      }
    };
    gameDiv.appendChild(btn);
  });
}

// Εκκίνηση
showNameForm();
