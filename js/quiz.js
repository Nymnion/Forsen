

// questions array with objects containing the question, choices, and answer
const questions = [
	{
		"id": 77702,
		"question": "What is forsen's current personal best in minecraft?",
		"choices": ["18:10", "20:45", "20:38", "21:37"],
		"answer": "18:10"
	},
	{
		"id": 77703,
		"question": "Can someone explain nymn to me? He spends _____ percent of the stream talking about forsen and his viewers.",
		"choices": ["80-90", "90-95", "100", "60-70"],
		"answer": "80-90"
	},
	{
		"id": 77705,
		"question": "Who is locked up in forsen's basement?",
		"choices": ["tyggbar", "eloise", "nani", "your mom"],
		"answer": "nani"
	},
	{
		"id": 77706,
		"question": "What was Forsen's death count in <i>Garlic</i>?",
		"choices": ["2691", "513", "1412", "0, he is a god gamer"],
		"answer": "2691"
	},
	{
		"id": 77707,
		"question": "What is the name of forsen's alt account?",
		"choices": ["forsenlol", "Gawr Gura", "NymN", "Dr Disrespect"],
		"answer": "Gawr Gura"
	},
	{
		"id": 77708,
		"question": "How many shadowsteps did forsen have in his miracle rogue run?",
		"choices": ["4", "3", "0", "1"],
		"answer": "3"
	},
	{
		"id": 77709,
		"question": "What was forsen's first GTA RP character called?",
		"choices": ["Snus Svenberg", "Frank Fritugo", "Sven Snusberg", "Mason Foorhees"],
		"answer": "Snus Svenberg"
	},
	{
		"id": 77713,
		"question": "How long did forsen get banned for when he showed a horse cock on stream in 2020?",
		"choices": ["1 month", "It never happened", "3 days", "2 weeks"],
		"answer": "1 month"
	},
	{
		"id": 77714,
		"question": "What is forsen's full name?",
		"choices": ["Sebastian Muhammed Fors", "Sebastian Andersson Fors", "Sebastian Hans Eli Fors", "Sebastian Heichou"],
		"answer": "Sebastian Hans Eli Fors"
	},
	{
		"id": 77718,
		"question": "When did forsen first talk to nani?",
		"choices": ["2015", "2018", "2023", "2016"],
		"answer": "2015"
	},
	{
		"id": 87701,
		"question": "Forsen's dog was originally going to be called:",
		"choices": ["Pleb", "Rat", "BIBI", "Pepper"],
		"answer": "Pleb"
	},
	{
		"id": 87707,
		"question": "What team is forsen part of?",
		"choices": ["Cloud9", "TSM", "MADMONQ", "Tempo Storm"],
		"answer": "Cloud9"
	},
	{
		"id": 87708,
		"question": "In what Swedish city does forsen live?",
		"choices": ["Mecca", "Malmo", "Gothenburg", "Stockholm"],
		"answer": "Stockholm"
	},
	{
		"id": 87709,
		"question": "How many hours of Minecraft did forsen play?",
		"choices": ["500", "699", "701", "521"],
		"answer": "699"
	},
	{
		"id": 87710,
		"question": "How Long did it take forsen to beat <i>Jump King: Ghost of the Babe</i>?",
		"choices": ["57:45:08", "50:27:46", "51:55:39", "56:02:00"],
		"answer": "56:02:00"
	},
	{
		"id": 87725,
		"question": "Which of these characters has forsen never played in SoulCalibur VI?",
		"choices": ["Talim", "Geralt", "Astaroth", "Raphael"],
		"answer": "Talim"
	},
	{
		"id": 87726,
		"question": "What was the last mission forsen played in <i>GTA Vice City (original edition)</i> before his save got corrupted?",
		"choices": ["The Job", "Shakedown", "Bomb Away!", "Hog Tied"],
		"answer": "The Job"
	},
	{
		"id": 87733,
		"question": "How many hands did Forsen Sebastian Fors lose in a row?",
		"choices": ["11", "7", "13", "0"],
		"answer": "11"
	},
	{
		"id": 77082,
		"question": "Decode the following word:<br>IZBJANW",
		"choices": ["KACHING", "JACKBOX", "SWEDISH", "FORSENE"],
		"answer": "JACKBOX"
	},
	{
		"id": 77083,
		"question": "Which of the following cannot be decoded to <i>FORSEN</i> in any way?",
		"choices": ["AJMNZI", "GPSTFO", "WIHOPR", "ENQRDM"],
		"answer": "WIHOPR"
	},
	{
		"id": 77109,
		"question": "What is forsen's peak viewer count?",
		"choices": ["60,545", "80,860", "94,678", "104,570"],
		"answer": "80,860"
	},
	{
		"id": 77110,
		"question": "What is Forsen's all-time high active subs count?",
		"choices": ["24,423", "19,554", "16,653", "34,541"],
		"answer": "16,653"
	},
	{
		"id": 77111,
		"question": "What is Forsen's most frequent stream category?",
		"choices": ["Just Chatting", "Minecraft", "Hearthstone", "PUBG"],
		"answer": "Just Chatting"
	},
	{
		"id": 77113,
		"question": "When was the last time Forsen played <i>GTA Vice City (original version)</i> on stream?",
		"choices": ["Apr 2, 2020", "Mar 7, 2020", "Apr 21, 2019", "Nov 9, 2020"],
		"answer": "Apr 2, 2020"
	},
	{
		"id": 77114,
		"question": "What is Forsen's average daily broadcast time?",
		"choices": ["6.3 hrs", "6.5 hrs", "6.1 hrs", "6.7 hrs"],
		"answer": "6.3 hrs"
	},
	{
		"id": 77115,
		"question": "Choose a day of week with a least amount of Forsen's streams on average:",
		"choices": ["Saturday", "Sunday", "Friday", "Monday"],
		"answer": "Friday"
	},
	{
		"id": 77116,
		"question": "How many days did Forsen stream on in 2020?",
		"choices": ["310", "301", "285", "269"],
		"answer": "285"
	},
	{
		"id": 77117,
		"question": "What game was Forsen playing when his viewer count peaked?",
		"choices": ["Atlas", "Minecraft", "Welcome to the Game II", "Jump King"],
		"answer": "Atlas"
	},
	{
		"id": 77118,
		"question": "Which game on Forsen's stream attracted the most viewers on average?",
		"choices": ["Atlas", "Who Wants To Be A Millionaire", "Welcome to the Game II", "Paradigm"],
		"answer": "Who Wants To Be A Millionaire"
	},
	{
		"id": 77119,
		"question": "Which game Forsen hasn't streamed in a longest time? (according to TwitchTracker)",
		"choices": ["Town of Salem", "GeoGuessr", "The Culling", "Poker"],
		"answer": "Poker"
	},
	{
		"id": 77120,
		"question": "Which game has the worst followers lost per hour ratio for Forsen?",
		"choices": ["Cards Against Humanity", "Loop Hero", "Outer Wilds", "Tabletop Simulator"],
		"answer": "Outer Wilds"
	},
	{
		"id": 77121,
		"question": "Which game has the best follow per hour ratio for Forsen?",
		"choices": ["Project Winter", "Mario Kart 8 Deluxe", "Lethal League", "Hand Simulator"],
		"answer": "Hand Simulator"
	},
	{
		"id": 77122,
		"question": "Forsen's least streamed game was played for how long?",
		"choices": ["63 minutes", "40 minutes", "14 minutes", "5 minutes"],
		"answer": "5 minutes"
	},
	{
		"id": 77123,
		"question": "Which one of these games is Forsen's least streamed one?",
		"choices": ["Spelunky", "House of Detention", "Stream Racer", "Tabletop Simulator"],
		"answer": "Spelunky"
	},
	{
		"id": 77125,
		"question": "In Forsen fan game, <i>Never Ending Cycle</i>, who gives you a key to Cell 4 (the maze)?",
		"choices": ["forsenPls", "MegaLUL", "The nurse", "AlienPls"],
		"answer": "forsenPls"
	},
	{
		"id": 77126,
		"question": "Which one of these is <i>NOT</i> an enforceable rule in forsen's chat?",
		"choices": ["No game complainers", "Don't say it", "No unrelated spam", "No streamsniping"],
		"answer": "No streamsniping"
	},
	{
		"id": 77127,
		"question": "Which post in <i>r/forsen</i> is the most upvoted one?<br>(as of Oct'21)",
		"choices": ["(picture of bread boat)", "forsenE", "A Doubters Redemption", "mental asylum was pog today"],
		"answer": "forsenE"
	},
	{
		"id": 77128,
		"question": "Which of these subreddits has the most members? (as of Dec'21)",
		"choices": ["r/forsen", "r/xqcow", "r/RedditAndChill", "r/LiveStreamFails"],
		"answer": "r/xqcow"
	},
	{
		"id": 77129,
		"question": "What is <i>BAJS.TV</i>?",
		"choices": ["A neural network copypasta generator", "An alternative streaming service", "A collection of baj streamers", "A Forsen memorial"],
		"answer": "A collection of baj streamers"
	},
	{
		"id": 77139,
		"question": "Forsen's first Hearthstone team was called:",
		"choices": ["ManaGrind", "Team Curse", "Lucky Draw", "Cloud9"],
		"answer": "ManaGrind"
	},
	{
		"id": 77140,
		"question": "When is forsen's birthday?",
		"choices": ["November 9", "December 1", "November 12", "December 16"],
		"answer": "December 16"
	},
	{
		"id": 77142,
		"question": "How many distinct letters would you need to spell forsen's full name?",
		"choices": ["12", "10", "11", "13"],
		"answer": "12"
	},
	{
		"id": 77146,
		"question": "Forsen's longest stream was going for approximately how long?<br><i>(since 2016)</i>",
		"choices": ["21.5 hrs", "14.4 hrs", "8.9 hrs", "12.9 hrs"],
		"answer": "21.5 hrs"
	},
	{
		"id": 89707,
		"question": "What was forsen's rank in the leaked twitch earnings leaderboard?",
		"choices": ["118", "1", "188", "81"],
		"answer": "118"
	},
	{
		"id": 89710,
		"question": "What is something only the real forsen would say?",
		"choices": ["The Sopranos is my favorite TV show", "I love Valorant", "Nina and Peppah are well and alive", "Buy an iPhone"],
		"answer": "The Sopranos is my favorite TV show"
	},
	{
		"id": 77157,
		"question": "How many hours did Forsen stream for in 2021?",
		"choices": ["1234", "1808", "1998", "2021"],
		"answer": "1998"
	},
	{
		"id": 77158,
		"question": "Which game attracted the most viewers to forsen's stream in 2021?<br>(on average)",
		"choices": ["Jackbox Party Pack 7", "Minecraft", "Twelve Minutes", "GTA V"],
		"answer": "Jackbox Party Pack 7"
	},
	{
		"id": 77159,
		"question": "Top Forsen's clip of 2021 (by view count) is:",
		"choices": ["FORSEN PUTS THE JUICE IN THE FRIDGE AND LOCKS THE DOOR <i>(Minecraft)</i>", "FeelsStrongMan finally <i>(Minecraft/funny TTS)</i>", "Every Game <i>(Jump King)</i>", "pepeLaugh <i>(Just Chatting/reactsen)</i>"],
		"answer": "FeelsStrongMan finally <i>(Minecraft/funny TTS)</i>"
	},
	{
		"id": 77160,
		"question": "The longest forsen's stream in 2021 went on for how long?",
		"choices": ["6.5 hrs", "6.9 hrs", "7.4 hrs", "8.3 hrs"],
		"answer": "8.3 hrs"
	},
	{
		"id": 77161,
		"question": "The first game forsen played on stream in 2022 is:",
		"choices": ["Bro Falls: Ultimate Showdown", "Teamfight Tactics", "Barbie and the Magic of Pegasus", "Clownfield 2042"],
		"answer": "Clownfield 2042"
	}
];
  
function getRandomQuestions(array, length) {
    const shuffled = array.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, length);
  }
  

  // variables to keep track of current question and score
  let currentQuestion = 0;
  let score = 0;
  
  // function to load the next question
  function loadQuestion() {
    const question = questions[currentQuestion];
    const questionEl = document.getElementById("question");
    const choicesEl = document.getElementById("choices");
    questionEl.textContent = question.question;
    choicesEl.innerHTML = "";
    for (let i = 0; i < question.choices.length; i++) {
      const choice = question.choices[i];
      const li = document.createElement("li");
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", function() {
        if (choice === question.answer) {
          score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
          loadQuestion();
        } else {
          endQuiz();
        }
      });
      li.appendChild(button);
      choicesEl.appendChild(li);
    }
  }
  
  // function to display the final score
  function endQuiz() {
    const quizEl = document.getElementById("quiz");
    quizEl.innerHTML = "";
    const scoreEl = document.createElement("p");
    scoreEl.textContent = `You got ${score} out of ${questions.length} questions correct.`;
    quizEl.appendChild(scoreEl);
  


  
    // Add restart quiz button
    const restartBtn = document.createElement("button");
    restartBtn.textContent = "Restart Quiz";
    restartBtn.addEventListener("click", function() {
      currentQuestion = 0;
      score = 0;
      quizEl.innerHTML = "";
      loadQuestion();
    });
    quizEl.appendChild(restartBtn);
  }
  
  // load the first question

  document.addEventListener("DOMContentLoaded", function () {
    loadQuestion();
  });
  
  