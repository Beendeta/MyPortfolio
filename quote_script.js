// script.js
const quotes = [
    "In the heart's gallery, a breakup is just a brushstroke, not the entire masterpiece.",
    "It always seems impossible until it's done. - Nelson Mandela",
    "When love leaves, let the echoes of your laughter be louder than the silence of your tears.",
    "The best revenge is massive success. - Frank Sinatra",
    "A breakup is not the end of your story; it's the beginning of a new chapter waiting to be written.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "You miss 100% of the shots you don't take. - Wayne Gretzky",
    "In the dance of life, sometimes we stumble, but remember, the music never truly fades.",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Embrace the pain of today, for it is the sculptor of a stronger, wiser tomorrow.",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Let the tears you shed today water the seeds of resilience for a brighter future.",
    "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
    "Breakups are the universe's way of clearing the path for a love that matches your worth.",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Don't count the days, make the days count. - Muhammad Ali",
    "The hardest goodbyes often lead to the most profound hellos.",
    "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "If you want to achieve greatness stop asking for permission.",
    "Your heart may be broken, but it's in the mending that it becomes a work of art.",
    "The only person you are destined to become is the person you decide to be.",
    "In the symphony of life, a breakup is just a pause, not the end of the melody.",
    "It does not matter how slowly you go, as long as you do not stop. - Confucius",
    "A breakup is a detour, not a dead end – keep moving forward, and you'll find a new path.",
    "Strive not to be a success, but rather to be of value.",
    "Every goodbye paves the way for a more authentic and fulfilling hello.",
    "I find that the harder I work, the more luck I seem to have.",
    "Love doesn't always follow a straight line; sometimes, it takes detours. If your heart still loves, let it navigate the path of healing and understanding.",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
    "Love is a flame that may flicker but never truly dies. Embrace the warmth of your feelings and let them guide you towards self-discovery.",
    "The only limit to our realization of tomorrow will be our doubts of today.",
    "The heart has its reasons, and if yours still beats for your past relationship, allow it the space to heal, learn, and redefine the meaning of love.",
    "Don't watch the clock; do what it does. Keep going.",
    "Loving someone from afar doesn't diminish your worth; it magnifies the capacity of your heart to hold onto beautiful memories.",
    "You have within you right now, everything you need to deal with whatever the world can throw at you.",
    "Love is resilient; it survives even in the echoes of the past. Let your love be a source of strength, not a chain that binds you to what was.",
    "It always seems impossible until it's done." ,
    "The heart's journey is complex, and if it yearns for a past love, let it be a compass directing you towards the lessons and growth embedded in that love.",
    "To live is the rarest thing in the world. Most people exist, that is all." ,
    "Love's echoes linger, and that's okay. Acknowledge the love that still resides within you, and channel it towards a brighter and self-loving future.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Loving your ex doesn't mean you're stuck in the past; it means you're carrying the essence of love forward as you embrace new beginnings.",
    "Life is either a daring adventure or nothing at all.",
    "The beauty of love is its timelessness. If your heart still loves, allow it to paint the canvas of your present with hues of compassion and self-acceptance.",
    "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    "The pain of a breakup is the canvas on which resilience paints its masterpiece.",
    "Success is stumbling from failure to failure with no loss of enthusiasm.",
    "Through the tears, find the courage to rewrite the story of your heart with self-love.",
    "The only person you are destined to become is the person you decide to be.",
    "Breakups are like the changing seasons; embrace the winter, for spring is on the horizon.",
    "A breakup is not the verdict; it's an opportunity to discover a love that aligns with your soul.",
    "The echoes of love may linger, but so does the promise of a brighter dawn.",
    "In the aftermath of a breakup, find solace in the symphony of self-discovery.",
    "Remember, the end of one chapter is the beginning of another, filled with unwritten possibilities.",
    "Your heart may be cracked, but it's through the cracks that the light of resilience shines.",
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The echoes of a breakup may linger, but so does the promise of a love story yet to unfold.",
    "As you release the anchors of the past, sail confidently into the uncharted waters of your future.",
    "Moving on is a declaration of independence, reclaiming your joy and rewriting your own narrative.",
    "In the gallery of your heart, let moving on be the masterpiece that speaks of resilience and renewal.",
    "The strength to move on is found in the acceptance that your story doesn't end with a breakup but continues with a new chapter.",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Moving on is not about erasing the past but about painting a brighter future with the colors of self-love.",
    "As you move forward, let the echoes of your laughter drown out the whispers of a distant heartache.",
    "Moving on is the art of turning the page without fearing the unwritten chapters that lie ahead.",
    "In the dance of life, moving on is the graceful twirl that leads to a more profound and joyful existence.",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Be the change that you wish to see in the world. - Mahatma Gandhi",
    "The wings of freedom are forged through the fire of letting go; spread them wide as you soar into a new dawn.",
    "Embrace the unknown, for in every uncertainty lies the opportunity to sculpt a destiny of your choosing.",
    "You're not starting over; you're starting anew, equipped with wisdom, resilience, and the power to shape your own narrative.",
    "The best chapters of your life are yet to be written; keep moving forward with unwavering determination.",
    "In the canvas of your life, you hold the paintbrush; create a masterpiece filled with colors of joy, resilience, and self-discovery.",
    "Moving on is not just a step; it's a leap into the extraordinary, where your dreams await to be realized.",
    "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
    "As you close the door on the past, open wide the windows of possibility and let the fresh breeze of a new beginning fill your soul.",
    "Strength is not just in letting go but in the courage to rebuild and create a life that aligns with your truest self.",
    "Every sunrise is a reminder that with each new day, you have the power to shape a brighter and more fulfilling future.",
    "The energy you invest in your future is never wasted; every step forward is a step toward the life you deserve.",
    "The journey ahead may be challenging, but with each obstacle, you grow stronger and more resilient.",
    "Don't let the shadows of the past dim the brilliance of your future. Step into the light and shine.",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Believe in the power within you to turn the page and create a life story that resonates with purpose and passion.",
    "Seeds of change may take time to blossom, but with patience and perseverance, a garden of opportunities will flourish.",
    "As you move forward, see every challenge as an invitation to unleash the strength and resilience that resides within you.",
    "The journey ahead is a canvas waiting for your bold strokes; paint it with dreams, aspirations, and the hues of happiness.",
    "The universe applauds those who dare to move on; listen to the applause and keep dancing to the rhythm of your own journey.",
    "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Believe you can and you're halfway there.",
    "Longing is a bridge between the chapters of your love story; walk it with grace, knowing that each step leads to a new narrative.",
    "The only thing we have to fear is fear itself.",
    "Longing is the gentle tide that washes over your heart; let it cleanse the wounds and prepare you for new shores.",
    "The purpose of our lives is to be happy.",
    "Longing for the past is a gentle reminder of the depth of your capacity to love; use it as fuel to nurture self-love.",
    "Life is really simple, but we insist on making it complicated.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe. - Albert Einstein",
    "Change your thoughts and you change your world.",
    "Love is not a calendar; it doesn't expire. If your heart still beats for your past relationship, let it be a reminder of the depth and resilience of your capacity to love.",
    "Don't cry because it's over, smile because it happened." 
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quoteElement = document.getElementById("quote");
    const bodyElement = document.body;

    const randomColor = getRandomColor();
    
    quoteElement.textContent = quotes[randomIndex];
    bodyElement.style.backgroundColor = randomColor;
}

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const generateBtn = document.getElementById("generateBtn");
generateBtn.addEventListener("click", generateQuote);
