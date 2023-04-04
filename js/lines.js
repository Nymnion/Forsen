document.addEventListener("DOMContentLoaded", function () {
    const lines = [
    "If you think you can beat me in 123",
    "If you're not in you can't win",
    "I'm chicken... I'm chicken I'm chicken",
    "I'm coming home.",
    "IM FUCKING MALDING",
    "I'm going mentaly insane!",
    "I'm going up so you better get this party started!",
    "I'm just a streamer!",
    "I'm lovin' it!",
    "I'm only human!",
    "IMMA FIRIN MAH' LAZER!!!",
    "In sveden we have snus",
    "Insane in the membrane",
    "Is it too late now to say sorry?",
    "Is this the forsen build?",
    "It ain't easy when it's hard",
    "It go down!",
    "It happens to the best of us",
    "It rain it pours",
    "It was rigged from the start",
    "It's a miracle rogue!",
    "It's friday!",
    "It's high noon somewhere in the world",
    "It's OVAH! don't you get it",
    "It's the exact same rank!",
    "Winnable!",
    "I'VE A BACKPACK I'VE A BACKPACK",
    "I've a key, ugandan key",
    "I've never seen a woman",
    "Juan deag",
    "Just get a house",
    "Just the two of us",
    "Justice is the man's retribution",
    "Kappa 123",
    "Keep the change you filithy animal",
    "King of the castle",
    "Ladder goat!",
    "Ladies and gentlmen of the arena!",
    "Leave britney alone!",
    "Legitness!!1!!",
    "Let me smell YO DICK",
    "Leviosaa!",
    "Like a boss!",
    "Lit as FUCK BOI!",
    "Look at you go!",
    "Luke im your father!",
    "madafaka madafaka",
    "Master bruce",
    "May there be light",
    "Meat is murder .. sir this is a bakery",
    "MEN VA FAN HELVETTE!",
    "MODS! Ban vadikus and samme1g .. Permaban",
    "Mods! scroll up!",
    "MORE DPS",
    "Mussle",
    "My instincts are telling me no but my body is telling me yes!",
    "My life is potato, all i dream about is potato",
    "My name is jeff",
    "My name is pewdiepie",
    "My name is sven",
    "My spider senses are tingling",
    "Need a medic over here",
    "Netflx and chill",
    "NEVER AM I EVER FUCKING LUCKY!",
    "Never say never",
    "Nintendo64!!!!",
    "No i don't think so",
    "No refunds mods",
    "No spammerino in the chatterino",
    "No way jose",
    "NOT THE BEES",
    "Not the boat anything but the boat",
    "Nothing here",
    "NOT LIKE THIS",
    "Old but gold",
    "Omelette du fromage",
    "One point from lethal",
    "One more time!",
    "One way or another",
    "Only you can prevent forest fires",
    "Or are we human",
    "Or as we say in french …",
    "ORDAH !!",
    "Ouch charlie!",
    "Overconfidence is a slow and insidious killer",
    "Perfectly splendid",
    "Pogress has been made", "Por foavor", "Pretty much everywhere, it's gonna be hot", "Previously on lost", "Pussel", "TwaT", "Really? you've got to be kidding me!", "Remember children swish and flick!", "Remember me mr freedro", "Right into the feels",

"Risk it for the biscuit", "RARARAH RARARH RAAAAUUUUL", "See you in the next episode", "Shieeeeeeet!", "SHIT IN MY ASS!", "SHUT THE FUCK UP PEPPAH!", "SILENT BUGGY", "SLICE THEM UP!", "Small loan of a million dollar", "Smoke weed everyday"

,"So you think you can dance", "Some kind of god of war", "Somebody that i used to know", "Sometimes in life you gotta go fast", "Sometimes, i pull so hard, i rip the skin", "Somewhere deep down my heart .. i still love you", "Songify this - winning", "Speicimen", "Stayin alive", "Stop calling! stop calling!"

,"Stop in the name of love", "Stop it ron it's leviosa", "SUPA", "SUPA HOT FIRE", "That was kinda sus", "Take me by the hand, lead me to the land", "Take on me", "Taking the hobbits to isengard", "Tell me why", "Thanks arthur"

,"That the way the cookie crumbles", "That's all she wrote", "That's not very xqcl", "The master baiter", "The best pirate i've ever seen", "The best the best the best the best the best the best the best", "Then he waddled away. Waddle waddle. 'Til the very next day.", "The numbers, mason", "THE TIME WIZARD", "Then i don't need a jacket"

,"There must be some kind of way out of here ( said the joker to the theif)", "They call him bruce u", "They came from behind", "They hate us cause they anus", "They see me rolling they hatin", "Thing go skraa - boom big shack", "Thingy majing", "Think of the childern", "THIS IS MADNESS", "This is the way"

,"Three musketeers", "Time to throw", "Two more for the price of one", "U fookin wot m8", "UNLIMITED POWER", "UNLOCK IT", "UNLUCKY", "Uuuuhhhhhh what's up doc?", "VERY GOOD VERY GOOD", "We are boot to find out"

,"We can make it if we try", "We could've had it all", "We gonna need a bigger boat", "We have a situation", "We have to go back jack", "WE LOVE FORTNITE!", "We will never know until we know you know", "We will see we will see, the winner get tea", "Welcome to uganda!", "West Virginia , mountain mama"

,"What are you doing in my swamp?", "What do you mean - jb <3", "What doesn't kill you makes you stronger", "WHAT IS THIS GAME ABOUT?!", "WHAT IS THIS GAME ABOUT?!", "WHAT IS THIS GAME ABOUT?!", "What is this? a comment for ants?!", "Whatcha talkin bout willis?", "What's cooler than being cool?", "WHAT'S IN THE BOX?"

,"What's up what's down what's in between?", "What's your problem green?", "When you mess with the best...", "when you try your best but you don't succeed", "Where are my dragons?", "Where are the others? (batman voice)", "Where da hoes at?", "Where do we go now?", "Where's my auctioneer?", "Where's rachel?", "Who is that pokemon", "Why are you running?", "Why don't you go fuck off then?", "i will catch a grenade for ya", "With great powers , comes great responsbilites", "Or as Bruce Lee would say .. WOTAAH", "Woulda shoulda coulda", "Yes no maybe , i don't know", "Yes this is dog", "YOLO swag 420 blaze it this shit", "You only YOLO once", "You can't beat me , my time is now", "You kiss ur mom with that mouth", "You know the rules and so do i", "You mad bro? i would be mad. I would be fucking pissed", "You probably wondering how i got here", "YOU SHALL NOT PASS", "You spin my head right round", "You talking to me?", "You will never see me again", "You're a wizard harry!", "You're telling me", "You've taken everything from me", "Sitting on the toilet", "See Ya Wouldn't Wanna Be Ya", "He's/She's a maneater", "That's what she said", "Say hello to my little friend", "FAK IT", "Run Forrest run!", "Do you know what it feels like?", "Toss A Coin To Your Witcher", "I always feel like somebody is watching me", "You're Beautiful", "Disgustang", "I come from a land down under", "VAPE NATION", "Oh my God in heaven", "Let it be", "Dead Giveaway", "Retardo Patronum", "You Wouldn't Like Me When I'm Angry.", "WON'T BE LIKE THAT", "3 BULLETS TO SAVE THE WORLD", "no matter what they say ... words can't bring me down", "CUT MY LIFE INTO PIECES", "Let them come", "Now you're gonna see This is how we do action in Uganda!", "IN YOUR HEAD", "Pistolero", "Why I must cry", "I GOT THIS", "Random Beatboxing",
"So am I still waiting For this world to stop hating", "are you winning son?", "Nice and Easy wins the race", "I will find him", "Golden Legendary", "Decisions decisions", "Fridays with PewDiePie", "EXCUTE ORDER 69",
"Jesse we have to cook", "And they say chivalry is dead", "Crashing this plane... WITH NO SURVIVORS!", "I Used To Be An Adventurer Like You, Then I Took An Arrow In The Knee.", "I'd like you to get the fuck outta here!", "Words can't bring me down", "Alright who wants some", "My Name is Boxxy", "Para bailar la bamba", "LEAVE HER JOHHNY", "hey you with the pretty face welcome to the human race", "It's over anakin, i've the high ground", "Everything is black", "Get on the floor, Everybody walk the dinosaur.", "Say something I'm giving up on you!", "A wizard is never late", "OH BABY A TRIPLE", "SHUT UP MEG", "Woody's got Wood", "Look at this photograph", "Don't Do that","A wizard is never late","It's over anakin, i've the high ground"

];

document.getElementById("randomLineButton").addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * lines.length);
    const randomLine = lines[randomIndex];
    document.getElementById("randomLineContainer").textContent = randomLine;
  });
});