import BMUSC from '../Images/BeanMeUpScotty.jpg';
import LR from '../Images/Chaos_Menu_Background.jpg';
import PPSI from '../Images/Papcorn.png';
import RPS from '../Images/RPS.png';
import TTT from '../Images/TicTacToe.png';
import M2ETD from '../Images/Mako2.png';
import Blast from '../Images/Blastroids.png';
import BBBOTD from '../Images/BB-Logo.png'
import TDN from '../images/Daily Nugget stock.jpg'

const PortfolioData = [
  {
    name: 'The Daily Nugget',
    image: TDN,
    description: `Start your day with a boost of positivity, motivation, and fun! The Daily Nugget delivers bite-sized quotes, facts, jokes, and affirmations designed to brighten your mood and keep you inspired.

With a colorful, playful design and the lovable mascot Chick N. Nugget, you’ll enjoy uplifting content tailored to give you that extra push whenever you need it.

Features:

🌟 Daily motivational quotes to inspire you

🤓 Fun facts to expand your knowledge

😂 Jokes for a quick laugh

💪 Affirmations to build confidence

🎨 Vibrant design inspired by flavors and sauces

Whether you’re looking for wisdom, a laugh, or just a little encouragement, The Daily Nugget has something for you. Perfect for starting your morning, recharging midday, or ending your night on a positive note.`,
    tech: 'React Native, JavaScript, CSS, Expo, API',
    platform: 'OS',
    tools: 'VSCode, Expo Go, Test Flight, App Connect',
    link: 'TBD'
  },

  { name: 'Bob\'s Burgers - Burger of the Day',
    image: BBBOTD,
    description: `Bob's Burgers - Burger of the Day is a creative portfolio project 
    inspired by the famous TV show. Each burger highlights a unique, pun-filled 
    name and a delicious recipe, designed to capture the charm and humor of the 
    series. I developed a custom API to serve the burger data, allowing seamless 
    integration and dynamic updates for the website. This project showcases my 
    ability to handle both front-end and back-end development while maintaining 
    a fun and interactive user experience.`,
    tech: 'React, JavaScript, CSS, HTML',
    platform: 'Vercel',
    tools: 'Visual Studio Code',
    link: 'https://bb-burger-of-the-day.vercel.app/'
  },
  {
    name: 'Bean Me Up Scotty, Cafe',
    image: BMUSC,
    description: `Bean Me Up Scotty Cafe is a fun and imaginative web project 
    that features a quirky, space-themed cafe concept. This project was born 
    when a friend working on a college assignment mentioned her fictitious 
    coffee shop idea. I jumped at the opportunity to practice my React skills 
    and offered to build the website, even though it was optional and the course 
    was ending in just four days. Challenge accepted! In that short time, I 
    created an entire website, blending creative design with seamless functionality. 
    The site greets users with a vibrant, engaging interface that captures the 
    essence of intergalactic adventures while showcasing a cosmic menu of 
    space-inspired drinks and snacks.`,
    tech: 'React, JavaScript, CSS, HTML',
    platform: 'Vercel',
    tools: 'Visual Studio Code',
    link: 'https://bean-me-up.vercel.app/',
  },
  {
    name: 'Lunch Roulette',
    image: LR,
    description: `Lunch Roulette is an innovative web application that helps 
    simplify daily meal decisions by offering randomized lunch ideas based 
    on the ingredients users have on hand. This intuitive app allows users 
    to effortlessly select ingredients from various categories, such as meats, 
    vegetables, and grains, and generates meal suggestions tailored to their 
    preferences. Lunch Roulette has been praised for its simple yet effective 
    solution to the age-old question, "What should I eat for lunch?" and provides 
    users with a seamless, user-friendly experience to streamline their meal 
    preparation process.`,
    tech: 'HTML, CSS, JavaScript',
    platform: 'Vercel',
    tools: 'Visual Studio Code',
    link: 'https://lunch-roulette-theta.vercel.app/',
  },
  {
    name: `The Great Binary Duel: Humanity's Last Throw`,
    image: RPS,
    description: `This portfolio entry presents an interactive Rock Paper 
    Scissors game called The Great Binary Duel: Humanity's Last Throw, 
    developed using HTML, CSS, and JavaScript. The game features custom artwork 
    designed with Midjourney and a captivating story crafted using ChatGPT to 
    create a unique and immersive user experience. The project demonstrates a 
    blend of technical proficiency in web development and creativity in design 
    and narrative integration, delivering a fun and engaging gameplay experience.`,
    tech: 'HTML, CSS, JavaScript',
    platform: 'Vercel',
    tools: `Visual Studio Code, Midjourney, ChatGPT`,
    link: 'https://rock-paper-scissors-smoky-rho.vercel.app/index.html',
  },
  {
    name: 'Tic Tac Toe',
    image: TTT,
    description: `This portfolio entry presents an interactive Tic Tac Toe game, 
    developed using HTML, CSS, and JavaScript. It features a user-friendly 
    interface with multiple gameplay modes: computer vs. computer, 
    player vs. computer, and player vs. player. This project not only showcases 
    technical proficiency in web development but also creativity in game design, 
    delivering an engaging and fun digital experience that blends coding, 
    functionality, and interactive design seamlessly.`, 
    tech: 'HTML, CSS, JavaScript',
    platform: 'Vercel',
    tools: 'Visual Studio Code',
    link: 'http://tic-tac-toe-blush-three.vercel.app',
  },
  {
    name: 'Mako II: Enter the Deep',
    image: M2ETD,
    description: `Mako II: Enter the Deep is an action-packed underwater 
    adventure where players control a shark, navigating the ocean depths 
    in search of fish to eat while avoiding deadly obstacles. The objective 
    is to achieve the highest score by eating fish and surviving as long as 
    possible. Mako II: Enter the Deep was created using Unity in just nine 
    days between semesters as a remake/continuation of the original game 
    Mako (Game Maker Studio 2). The game combines simple yet challenging 
    mechanics, offering players an engaging and fast-paced experience.`,
    link: 'https://blue-bicho.itch.io/mako-ii-enter-the-deep',
    tech: `C#`,
    platform: 'itch.io',
    tools: 'Unity, Visual Studio',
  },
  {
    name: 'Blastroids',
    image: Blast,
    description: `Blastroids is an action-packed space shooter set in the 
    vast expanse of the cosmos. Players navigate through hazardous asteroid 
    fields while engaging in thrilling combat. The game challenges players' 
    reflexes and precision as they maneuver through space, dodging obstacles 
    and taking down enemy forces. Developed using Unity, Blastroids showcases 
    exciting gameplay, dynamic visuals, and strategic challenges that keep 
    players engaged from start to finish. This project highlights my skills 
    in game development, including coding, design, and problem-solving in 
    high-pressure scenarios.`,
    link: 'https://blue-bicho.itch.io/blastroids',
    tech: `C#`,
    platform: 'itch.io',
    tools: 'Unity, Visual Studio',
  },
  {
    name: 'Papcorn the Pirate on Skull Island',
    image: PPSI,
    description: `Papcorn the Pirate on Skull Island is the first game I ever 
    created—a fun and engaging 2D side-scrolling shooter. Players control 
    Papcorn the Pirate as he navigates the dangerous Skull Island, avoiding 
    obstacles, jumping across platforms, and shooting enemies with his trusty 
    cannon.
    Available for Windows, macOS, and Linux, this game falls under the shooter 
    and platformer genres, and it’s perfect for fans of pirates and 2D action. 
    It's available for download on a "name your price" basis, so feel free to 
    support it if you enjoy the adventure!`,
    link: 'https://blue-bicho.itch.io/pap',
    tech: `C#`,
    platform: 'itch.io',
    tools: 'Unity, Visual Studio',
  },
];

export default PortfolioData;
