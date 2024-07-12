const quizData = [
    {
      question: "1.how many dots are there in a dot of dice?",
      options: ["41", "42", "32", "8"],
      answer: "42"
    },
    {
      question: "2.Who wrote romeo and juliet?",
      options: ["alan johns", "w.b. yeats", "robert martin", "william shakespeare"],
      answer: "william shakespeare"
    },
    {
        question: "3.How many letters are thre in english alphabate?",
        options: ["26", "23", "45", "2"],
        answer: "26"
      },
      {
        question: "4.what is 2+2?",
        options: ["3", "4", "5", "7"],
        answer: "4"
      },
      {
        question: "5.A hexagon has how many lines?",
        options: ["3", "5", "8", "6"],
        answer: "6"
      },
      {
        question: "6.earth is known as which planet?",
        options: ["solar", "water", "blue", "green"],
        answer: "blue"
      },
      {
        question: "7.how many bones are there in our body?",
        options: ["209", "306", "309", "206"],
        answer: "206"
      },
      {
        question: "8.who is world's richest person?",
        options: ["elon musk", "bill gates", "ratan tata", "jeff bejos"],
        answer: "elon musk"
      },
      {
        question: "9.who is the prime minister of india?",
        options: ["narendra modi", "m.k gandhi", "sipun rana", "D.murmu"],
        answer: "narendra modi"
      },
      {
        question: "10.how many types of colours in a rainbow?",
        options: ["2", "7", "8", "12"],
        answer: "7"
      },
    // Add more questions here...
  ];
const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const submitButton = document.getElementById("submit");
    
    let currentQuestion = 0;
    let score = 0;
    
    function showQuestion() {
      const question = quizData[currentQuestion];
      questionElement.innerText = question.question;
    
      optionsElement.innerHTML = "";
      question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
      });
    }
    
    function selectAnswer(e) {
      const selectedButton = e.target;
      const answer = quizData[currentQuestion].answer;
    
      if (selectedButton.innerText === answer) {
        score++;
      }
    
      currentQuestion++;
    
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    }
    
    function showResult() {
      quiz.innerHTML = `
        <h1>Quiz Completed!</h1>
        <p>Your score: ${score}/${quizData.length}</p>
      `;
    }
    
   showQuestion();
   