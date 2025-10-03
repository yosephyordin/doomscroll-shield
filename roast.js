document.addEventListener('DOMContentLoaded', () => {
  const roasts = [
    "Bro, your boss pays you to scroll TikTok?",
    "Your future self is crying in the corner.",
    "Even your goldfish has more discipline than you.",
    "Is your LinkedIn updated with 'Professional Doomscroller' yet?",
    "You opened Instagram... again? Really?",
    "Your to-do list is judging you silently.",
    "Focus now, scroll later. (Spoiler: Later never comes.)",
    "This roast is free. Your time isn’t.",
    "You’re not bored. You’re just avoiding work.",
    "Your pet plant has more attention than your tasks.",
    "Productivity called. It said you ghosted it.",
    "Scrolling won’t pay your bills. But focus might.",
    "Your brain on doomscroll: 🧠 → 🥱",
    "One more reel? Sure, and one more year of delay.",
    "You had dreams. Now you have notifications."
  ];

  const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
  const roastElement = document.getElementById('roast');
  
  if (roastElement) {
    roastElement.textContent = randomRoast;
  }
});