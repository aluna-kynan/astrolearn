(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Type Definitions
__turbopack_context__.s([
    "difficultyConfigs",
    ()=>difficultyConfigs,
    "quizQuestions",
    ()=>quizQuestions,
    "spaceships",
    ()=>spaceships
]);
const difficultyConfigs = {
    easy: {
        weapon: {
            type: 'spread',
            fireRate: 200,
            bulletSpeed: 10,
            bulletWidth: 6,
            bulletHeight: 15,
            damage: 80,
            color: '#ff6b6b',
            spreadCount: 3,
            isAutoFire: true
        },
        asteroidHP: 1,
        asteroidSize: {
            min: 25,
            max: 35
        },
        asteroidSpeed: {
            min: 1,
            max: 2
        },
        asteroidSpawnRate: 1500,
        totalAsteroids: 12,
        hasBoss: false,
        bossHP: 0,
        bossSize: 0,
        gameDuration: 30
    },
    medium: {
        weapon: {
            type: 'laser',
            fireRate: 50,
            bulletSpeed: 15,
            bulletWidth: 8,
            bulletHeight: 40,
            damage: 100,
            color: '#00d4ff',
            isAutoFire: true
        },
        asteroidHP: 2,
        asteroidSize: {
            min: 30,
            max: 45
        },
        asteroidSpeed: {
            min: 2,
            max: 3.5
        },
        asteroidSpawnRate: 900,
        totalAsteroids: 20,
        hasBoss: false,
        bossHP: 0,
        bossSize: 0,
        gameDuration: 40
    },
    hard: {
        weapon: {
            type: 'magnetic',
            fireRate: 150,
            bulletSpeed: 8,
            bulletWidth: 10,
            bulletHeight: 20,
            damage: 50,
            color: '#9d4edd',
            isAutoFire: true
        },
        asteroidHP: 2,
        asteroidSize: {
            min: 25,
            max: 40
        },
        asteroidSpeed: {
            min: 2.5,
            max: 4.5
        },
        asteroidSpawnRate: 500,
        totalAsteroids: 35,
        hasBoss: true,
        bossHP: 100,
        bossSize: 120,
        gameDuration: 50
    }
};
const quizQuestions = {
    easy: [
        {
            id: 1,
            difficulty: "easy",
            question: "What is the closest planet to the Sun?",
            options: [
                "Mercury",
                "Venus",
                "Earth",
                "Mars"
            ],
            correctAnswer: 0
        },
        {
            id: 2,
            difficulty: "easy",
            question: "How many planets are in our solar system?",
            options: [
                "7",
                "8",
                "9",
                "10"
            ],
            correctAnswer: 1
        },
        {
            id: 3,
            difficulty: "easy",
            question: "What is the largest planet in our solar system?",
            options: [
                "Saturn",
                "Neptune",
                "Jupiter",
                "Uranus"
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            difficulty: "easy",
            question: "What is Earth's natural satellite called?",
            options: [
                "The Moon",
                "Titan",
                "Europa",
                "Phobos"
            ],
            correctAnswer: 0
        },
        {
            id: 5,
            difficulty: "easy",
            question: "Which planet is known as the Red Planet?",
            options: [
                "Venus",
                "Mars",
                "Jupiter",
                "Saturn"
            ],
            correctAnswer: 1
        },
        {
            id: 6,
            difficulty: "easy",
            question: "What is the name of our galaxy?",
            options: [
                "Andromeda",
                "Milky Way",
                "Triangulum",
                "Whirlpool"
            ],
            correctAnswer: 1
        },
        {
            id: 7,
            difficulty: "easy",
            question: "What is the Sun?",
            options: [
                "A planet",
                "A moon",
                "A star",
                "An asteroid"
            ],
            correctAnswer: 2
        },
        {
            id: 8,
            difficulty: "easy",
            question: "Which planet has rings?",
            options: [
                "Mars",
                "Venus",
                "Saturn",
                "Mercury"
            ],
            correctAnswer: 2
        },
        {
            id: 9,
            difficulty: "easy",
            question: "How long does it take Earth to orbit the Sun?",
            options: [
                "365 days",
                "30 days",
                "7 days",
                "100 days"
            ],
            correctAnswer: 0
        },
        {
            id: 10,
            difficulty: "easy",
            question: "What is the smallest planet in our solar system?",
            options: [
                "Mars",
                "Mercury",
                "Venus",
                "Pluto"
            ],
            correctAnswer: 1
        },
        {
            id: 11,
            difficulty: "easy",
            question: "Which planet is closest to Earth?",
            options: [
                "Mars",
                "Venus",
                "Mercury",
                "Jupiter"
            ],
            correctAnswer: 1
        },
        {
            id: 12,
            difficulty: "easy",
            question: "What color is the sunset on Mars?",
            options: [
                "Red",
                "Orange",
                "Blue",
                "Purple"
            ],
            correctAnswer: 2
        },
        {
            id: 13,
            difficulty: "easy",
            question: "How many moons does Earth have?",
            options: [
                "0",
                "1",
                "2",
                "3"
            ],
            correctAnswer: 1
        },
        {
            id: 14,
            difficulty: "easy",
            question: "What is the hottest planet in our solar system?",
            options: [
                "Mercury",
                "Venus",
                "Mars",
                "Jupiter"
            ],
            correctAnswer: 1
        },
        {
            id: 15,
            difficulty: "easy",
            question: "What do we call a person who travels to space?",
            options: [
                "Pilot",
                "Astronaut",
                "Captain",
                "Navigator"
            ],
            correctAnswer: 1
        }
    ],
    medium: [
        {
            id: 16,
            difficulty: "medium",
            question: "What is the Great Red Spot on Jupiter?",
            options: [
                "A volcano",
                "A storm",
                "A crater",
                "An ocean"
            ],
            correctAnswer: 1
        },
        {
            id: 17,
            difficulty: "medium",
            question: "Which planet has the most moons?",
            options: [
                "Jupiter",
                "Saturn",
                "Uranus",
                "Neptune"
            ],
            correctAnswer: 1
        },
        {
            id: 18,
            difficulty: "medium",
            question: "What is the Kuiper Belt?",
            options: [
                "A region of asteroids",
                "A region of comets and icy bodies",
                "A type of galaxy",
                "A constellation"
            ],
            correctAnswer: 1
        },
        {
            id: 19,
            difficulty: "medium",
            question: "How long is a day on Venus?",
            options: [
                "24 hours",
                "243 Earth days",
                "10 hours",
                "365 days"
            ],
            correctAnswer: 1
        },
        {
            id: 20,
            difficulty: "medium",
            question: "What is the name of the first artificial satellite?",
            options: [
                "Apollo 11",
                "Sputnik 1",
                "Voyager 1",
                "Hubble"
            ],
            correctAnswer: 1
        },
        {
            id: 21,
            difficulty: "medium",
            question: "Which planet rotates on its side?",
            options: [
                "Neptune",
                "Saturn",
                "Uranus",
                "Jupiter"
            ],
            correctAnswer: 2
        },
        {
            id: 22,
            difficulty: "medium",
            question: "What is the asteroid belt located between?",
            options: [
                "Earth and Mars",
                "Mars and Jupiter",
                "Jupiter and Saturn",
                "Venus and Earth"
            ],
            correctAnswer: 1
        },
        {
            id: 23,
            difficulty: "medium",
            question: "What is the speed of light?",
            options: [
                "300,000 km/s",
                "150,000 km/s",
                "500,000 km/s",
                "100,000 km/s"
            ],
            correctAnswer: 0
        },
        {
            id: 24,
            difficulty: "medium",
            question: "Which moon of Jupiter is the largest in the solar system?",
            options: [
                "Europa",
                "Io",
                "Ganymede",
                "Callisto"
            ],
            correctAnswer: 2
        },
        {
            id: 25,
            difficulty: "medium",
            question: "What causes the Northern Lights (Aurora Borealis)?",
            options: [
                "Moonlight reflection",
                "Solar wind particles",
                "Meteor showers",
                "Volcanic ash"
            ],
            correctAnswer: 1
        },
        {
            id: 26,
            difficulty: "medium",
            question: "How many Earth years does it take Neptune to orbit the Sun?",
            options: [
                "84 years",
                "165 years",
                "248 years",
                "12 years"
            ],
            correctAnswer: 1
        },
        {
            id: 27,
            difficulty: "medium",
            question: "What is a light-year?",
            options: [
                "A unit of time",
                "A unit of distance",
                "A unit of speed",
                "A unit of mass"
            ],
            correctAnswer: 1
        },
        {
            id: 28,
            difficulty: "medium",
            question: "Which planet has the strongest winds in the solar system?",
            options: [
                "Jupiter",
                "Saturn",
                "Neptune",
                "Uranus"
            ],
            correctAnswer: 2
        },
        {
            id: 29,
            difficulty: "medium",
            question: "What is the temperature at the core of the Sun?",
            options: [
                "1 million °C",
                "15 million °C",
                "100,000 °C",
                "50 million °C"
            ],
            correctAnswer: 1
        },
        {
            id: 30,
            difficulty: "medium",
            question: "Which spacecraft was the first to leave our solar system?",
            options: [
                "Voyager 1",
                "Pioneer 10",
                "New Horizons",
                "Cassini"
            ],
            correctAnswer: 0
        }
    ],
    hard: [
        {
            id: 31,
            difficulty: "hard",
            question: "What is the Schwarzschild radius?",
            options: [
                "The radius of a star",
                "The event horizon of a black hole",
                "The distance to the nearest star",
                "The size of a galaxy"
            ],
            correctAnswer: 1
        },
        {
            id: 32,
            difficulty: "hard",
            question: "What percentage of the universe is dark matter?",
            options: [
                "27%",
                "68%",
                "5%",
                "15%"
            ],
            correctAnswer: 0
        },
        {
            id: 33,
            difficulty: "hard",
            question: "What is the Chandrasekhar limit?",
            options: [
                "Maximum mass of a white dwarf",
                "Speed of light limit",
                "Temperature of stars",
                "Size of galaxies"
            ],
            correctAnswer: 0
        },
        {
            id: 34,
            difficulty: "hard",
            question: "What is gravitational lensing?",
            options: [
                "Bending of light by gravity",
                "Formation of galaxies",
                "Expansion of universe",
                "Collision of stars"
            ],
            correctAnswer: 0
        },
        {
            id: 35,
            difficulty: "hard",
            question: "What is the Roche limit?",
            options: [
                "Distance where tidal forces destroy objects",
                "Maximum speed in space",
                "Temperature of black holes",
                "Age of universe"
            ],
            correctAnswer: 0
        },
        {
            id: 36,
            difficulty: "hard",
            question: "What is redshift in astronomy?",
            options: [
                "Color of Mars",
                "Light stretched by expansion",
                "Type of star",
                "Solar phenomenon"
            ],
            correctAnswer: 1
        },
        {
            id: 37,
            difficulty: "hard",
            question: "What is the Oort Cloud?",
            options: [
                "A nebula",
                "A theoretical cloud of comets",
                "A type of galaxy",
                "A constellation"
            ],
            correctAnswer: 1
        },
        {
            id: 38,
            difficulty: "hard",
            question: "What is Hawking radiation?",
            options: [
                "Radiation from the Sun",
                "Theoretical radiation from black holes",
                "Cosmic background radiation",
                "Solar wind"
            ],
            correctAnswer: 1
        },
        {
            id: 39,
            difficulty: "hard",
            question: "What is the cosmic microwave background?",
            options: [
                "Radiation from stars",
                "Afterglow of the Big Bang",
                "Solar radiation",
                "Galaxy emissions"
            ],
            correctAnswer: 1
        },
        {
            id: 40,
            difficulty: "hard",
            question: "What is a quasar?",
            options: [
                "A type of star",
                "An extremely bright active galactic nucleus",
                "A planet",
                "A moon"
            ],
            correctAnswer: 1
        },
        {
            id: 41,
            difficulty: "hard",
            question: "What is the Hubble constant?",
            options: [
                "Age of universe",
                "Rate of universe expansion",
                "Speed of light",
                "Mass of galaxies"
            ],
            correctAnswer: 1
        },
        {
            id: 42,
            difficulty: "hard",
            question: "What are magnetars?",
            options: [
                "Magnetic planets",
                "Neutron stars with extreme magnetic fields",
                "Black holes",
                "Asteroids"
            ],
            correctAnswer: 1
        },
        {
            id: 43,
            difficulty: "hard",
            question: "What is the Drake equation used for?",
            options: [
                "Calculating star mass",
                "Estimating alien civilizations",
                "Measuring distances",
                "Predicting eclipses"
            ],
            correctAnswer: 1
        },
        {
            id: 44,
            difficulty: "hard",
            question: "What is a pulsar?",
            options: [
                "A pulsating star",
                "A rotating neutron star",
                "A type of galaxy",
                "A comet"
            ],
            correctAnswer: 1
        },
        {
            id: 45,
            difficulty: "hard",
            question: "What is the Great Attractor?",
            options: [
                "A black hole",
                "A gravitational anomaly pulling galaxies",
                "A supernova",
                "A nebula"
            ],
            correctAnswer: 1
        }
    ]
};
const spaceships = [
    {
        id: 1,
        name: "Nebula Striker",
        description: "Fast and agile fighter craft",
        speed: 9,
        color: "#0026ffff",
        emoji: "🚀",
        image: "/assets/main_4_2_2.png"
    },
    {
        id: 2,
        name: "Quantum UFO",
        description: "Advanced exploration vessel",
        speed: 7,
        color: "#9d4edd",
        emoji: "🛸",
        image: "/assets/galaksi2.webp"
    },
    {
        id: 3,
        name: "Stellar Phoenix",
        description: "Heavy combat cruiser",
        speed: 6,
        color: "#ff006e",
        emoji: "🛰️",
        image: "/assets/galaksi3.webp"
    },
    {
        id: 4,
        name: "Cosmic Ranger",
        description: "Balanced all-purpose ship",
        speed: 8,
        color: "#1A5D1A",
        emoji: "✨",
        image: "/assets/galaksi4.webp"
    },
    {
        id: 5,
        name: "Void Reaper",
        description: "Stealth reconnaissance craft",
        speed: 10,
        color: "#ff9e00",
        emoji: "🌟",
        image: "/assets/galaksi5.gif"
    },
    {
        id: 6,
        name: "Galaxy Titan",
        description: "Massive flagship carrier",
        speed: 5,
        color: "#FF4646",
        emoji: "🌠",
        image: "/assets/galaksi6.png"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/quizData.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Quiz Data Structure for Select Quiz Page
// Category Interface
__turbopack_context__.s([
    "getAllTopics",
    ()=>getAllTopics,
    "getCategoryById",
    ()=>getCategoryById,
    "getQuestionsByTopic",
    ()=>getQuestionsByTopic,
    "getQuestionsByTopicAndCount",
    ()=>getQuestionsByTopicAndCount,
    "getTopicById",
    ()=>getTopicById,
    "getTopicsByCategory",
    ()=>getTopicsByCategory,
    "quizCategories",
    ()=>quizCategories,
    "quizTopics",
    ()=>quizTopics
]);
const quizCategories = [
    {
        id: 'general',
        name: 'General',
        color: '#06ffa5'
    },
    {
        id: 'history',
        name: 'History',
        color: '#ff9e00'
    },
    {
        id: 'technology',
        name: 'Technology',
        color: '#00d4ff'
    },
    {
        id: 'math',
        name: 'Math',
        color: '#9d4edd'
    },
    {
        id: 'science',
        name: 'Science',
        color: '#ff006e'
    },
    {
        id: 'business',
        name: 'Business',
        color: '#46a7bb'
    },
    {
        id: 'support',
        name: 'Support',
        color: '#ffcc00'
    }
];
const quizTopics = [
    // GENERAL CATEGORY
    {
        id: 'gen-001',
        categoryId: 'general',
        title: 'Galactic Trivia',
        description: 'Test your knowledge across the cosmos with fun facts!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'What is the capital of France?',
                options: [
                    'London',
                    'Paris',
                    'Berlin',
                    'Madrid'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'How many continents are there on Earth?',
                options: [
                    '5',
                    '6',
                    '7',
                    '8'
                ],
                correctAnswer: 2
            },
            {
                id: 3,
                question: 'What is the largest ocean on Earth?',
                options: [
                    'Atlantic',
                    'Indian',
                    'Pacific',
                    'Arctic'
                ],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'Who wrote Romeo and Juliet?',
                options: [
                    'Charles Dickens',
                    'William Shakespeare',
                    'Jane Austen',
                    'Mark Twain'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'What is the chemical symbol for gold?',
                options: [
                    'Go',
                    'Gd',
                    'Au',
                    'Ag'
                ],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'How many days are in a leap year?',
                options: [
                    '364',
                    '365',
                    '366',
                    '367'
                ],
                correctAnswer: 2
            },
            {
                id: 7,
                question: 'What is the largest mammal in the world?',
                options: [
                    'Elephant',
                    'Blue Whale',
                    'Giraffe',
                    'Hippopotamus'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'What is the currency of Japan?',
                options: [
                    'Yuan',
                    'Won',
                    'Yen',
                    'Ringgit'
                ],
                correctAnswer: 2
            },
            {
                id: 9,
                question: 'Which planet is known as Earth\'s twin?',
                options: [
                    'Mars',
                    'Venus',
                    'Mercury',
                    'Jupiter'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'What is the hardest natural substance?',
                options: [
                    'Gold',
                    'Iron',
                    'Diamond',
                    'Platinum'
                ],
                correctAnswer: 2
            },
            {
                id: 11,
                question: 'How many colors are in a rainbow?',
                options: [
                    '5',
                    '6',
                    '7',
                    '8'
                ],
                correctAnswer: 2
            },
            {
                id: 12,
                question: 'Which is the smallest country in the world?',
                options: [
                    'Monaco',
                    'Vatican City',
                    'San Marino',
                    'Liechtenstein'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'What is the tallest mountain on Earth?',
                options: [
                    'K2',
                    'Kangchenjunga',
                    'Mount Everest',
                    'Lhotse'
                ],
                correctAnswer: 2
            },
            {
                id: 14,
                question: 'What is H2O commonly known as?',
                options: [
                    'Salt',
                    'Water',
                    'Sugar',
                    'Oxygen'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'How many teeth does an adult human have?',
                options: [
                    '28',
                    '30',
                    '32',
                    '34'
                ],
                correctAnswer: 2
            },
            // Added 5 more
            {
                id: 16,
                question: 'Which element is needed for breathing?',
                options: [
                    'Nitrogen',
                    'Carbon',
                    'Oxygen',
                    'Hydrogen'
                ],
                correctAnswer: 2
            },
            {
                id: 17,
                question: 'What is the closest star to Earth?',
                options: [
                    'Sirius',
                    'Alpha Centauri',
                    'The Sun',
                    'Proxima Centauri'
                ],
                correctAnswer: 2
            },
            {
                id: 18,
                question: 'Who painted the Mona Lisa?',
                options: [
                    'Van Gogh',
                    'Da Vinci',
                    'Picasso',
                    'Monet'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Which language is most spoken in the world?',
                options: [
                    'English',
                    'Spanish',
                    'Mandarin',
                    'Hindi'
                ],
                correctAnswer: 2
            },
            {
                id: 20,
                question: 'What instrument is used to measure temperature?',
                options: [
                    'Barometer',
                    'Thermometer',
                    'Hygrometer',
                    'Speedometer'
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'gen-002',
        categoryId: 'general',
        title: 'World Wonders',
        description: 'Explore the marvels of planet Earth and beyond!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Where is the Great Wall of China located?',
                options: [
                    'Japan',
                    'China',
                    'Korea',
                    'Vietnam'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'What is the Great Barrier Reef?',
                options: [
                    'A mountain',
                    'A coral reef',
                    'A desert',
                    'A forest'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'In which country is Machu Picchu?',
                options: [
                    'Brazil',
                    'Chile',
                    'Peru',
                    'Argentina'
                ],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'What is the Taj Mahal made of?',
                options: [
                    'Brick',
                    'Marble',
                    'Granite',
                    'Sandstone'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Where is the Eiffel Tower?',
                options: [
                    'London',
                    'Rome',
                    'Paris',
                    'Berlin'
                ],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'How many pyramids are at Giza?',
                options: [
                    '1',
                    '2',
                    '3',
                    '4'
                ],
                correctAnswer: 2
            },
            {
                id: 7,
                question: 'What is the Colosseum?',
                options: [
                    'A temple',
                    'An amphitheater',
                    'A palace',
                    'A library'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Where is Christ the Redeemer statue?',
                options: [
                    'Mexico',
                    'Brazil',
                    'Argentina',
                    'Chile'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'What is Stonehenge made of?',
                options: [
                    'Wood',
                    'Brick',
                    'Stone',
                    'Metal'
                ],
                correctAnswer: 2
            },
            {
                id: 10,
                question: 'Where is the Statue of Liberty?',
                options: [
                    'Washington',
                    'Los Angeles',
                    'New York',
                    'Chicago'
                ],
                correctAnswer: 2
            },
            {
                id: 11,
                question: 'What is Big Ben?',
                options: [
                    'A palace',
                    'A clock tower',
                    'A bridge',
                    'A museum'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'Where is the Leaning Tower of Pisa?',
                options: [
                    'Spain',
                    'France',
                    'Italy',
                    'Greece'
                ],
                correctAnswer: 2
            },
            {
                id: 13,
                question: 'What is the Sydney Opera House famous for?',
                options: [
                    'Sports',
                    'Arts',
                    'Science',
                    'Politics'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Where is Petra located?',
                options: [
                    'Egypt',
                    'Jordan',
                    'Turkey',
                    'Iran'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'What is the Burj Khalifa?',
                options: [
                    'A bridge',
                    'A tower',
                    'A stadium',
                    'A mall'
                ],
                correctAnswer: 1
            },
            // Added 5 more
            {
                id: 16,
                question: 'In which city is the Golden Gate Bridge?',
                options: [
                    'Seattle',
                    'San Francisco',
                    'New York',
                    'Miami'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: 'Which river flows through the Grand Canyon?',
                options: [
                    'Mississippi',
                    'Colorado',
                    'Amazon',
                    'Nile'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'Mount Kilimanjaro is in which continent?',
                options: [
                    'Asia',
                    'South America',
                    'Africa',
                    'Europe'
                ],
                correctAnswer: 2
            },
            {
                id: 19,
                question: 'The Acropolis is a landmark in which city?',
                options: [
                    'Rome',
                    'Athens',
                    'Istanbul',
                    'Cairo'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'Which wonder is a giant clock in London?',
                options: [
                    'Eiffel Tower',
                    'Big Ben',
                    'The Louvre',
                    'Westminster'
                ],
                correctAnswer: 1
            }
        ]
    },
    // HISTORY CATEGORY
    {
        id: 'his-001',
        categoryId: 'history',
        title: 'Ancient Empires',
        description: 'Journey through the greatest civilizations in history!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Who was the first Emperor of Rome?',
                options: [
                    'Julius Caesar',
                    'Augustus',
                    'Nero',
                    'Caligula'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'What was the ancient Egyptian writing system?',
                options: [
                    'Cuneiform',
                    'Hieroglyphics',
                    'Sanskrit',
                    'Runes'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'Who built the Great Wall of China?',
                options: [
                    'Ming Dynasty',
                    'Qin Dynasty',
                    'Han Dynasty',
                    'Tang Dynasty'
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                question: 'What was the capital of the Inca Empire?',
                options: [
                    'Lima',
                    'Cusco',
                    'Quito',
                    'La Paz'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Who was Cleopatra?',
                options: [
                    'Greek Queen',
                    'Egyptian Pharaoh',
                    'Roman Empress',
                    'Persian Princess'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'What did the Romans call the Mediterranean?',
                options: [
                    'Our Sea',
                    'Great Sea',
                    'Middle Sea',
                    'Roman Sea'
                ],
                correctAnswer: 0
            },
            {
                id: 7,
                question: 'Where did democracy originate?',
                options: [
                    'Rome',
                    'Egypt',
                    'Athens',
                    'Persia'
                ],
                correctAnswer: 2
            },
            {
                id: 8,
                question: 'Who was Alexander the Great?',
                options: [
                    'Roman Emperor',
                    'Greek Conqueror',
                    'Egyptian Pharaoh',
                    'Persian King'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'What was the main language of the Roman Empire?',
                options: [
                    'Greek',
                    'Latin',
                    'Hebrew',
                    'Aramaic'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'What is the Parthenon?',
                options: [
                    'A tomb',
                    'A temple',
                    'A palace',
                    'A stadium'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'Who were the gladiators?',
                options: [
                    'Soldiers',
                    'Fighters',
                    'Priests',
                    'Merchants'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'What did ancient Egyptians worship?',
                options: [
                    'One God',
                    'Many Gods',
                    'No Gods',
                    'Ancestors'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'What is the Rosetta Stone?',
                options: [
                    'A weapon',
                    'A translation key',
                    'A tomb',
                    'A coin'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Who was Tutankhamun?',
                options: [
                    'A pharaoh',
                    'A god',
                    'A priest',
                    'A general'
                ],
                correctAnswer: 0
            },
            {
                id: 15,
                question: 'What was the Silk Road?',
                options: [
                    'A river',
                    'A trade route',
                    'A wall',
                    'A temple'
                ],
                correctAnswer: 1
            },
            // Added 5 more
            {
                id: 16,
                question: 'Which civilization built Chichen Itza?',
                options: [
                    'Aztecs',
                    'Incas',
                    'Mayans',
                    'Olmecs'
                ],
                correctAnswer: 2
            },
            {
                id: 17,
                question: 'The "Code of Hammurabi" is from which empire?',
                options: [
                    'Persia',
                    'Babylon',
                    'Assyria',
                    'Sumer'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'Who was the Greek god of the sea?',
                options: [
                    'Zeus',
                    'Hades',
                    'Poseidon',
                    'Apollo'
                ],
                correctAnswer: 2
            },
            {
                id: 19,
                question: 'What was the center of public life in Ancient Rome?',
                options: [
                    'Senate',
                    'Forum',
                    'Colosseum',
                    'Bathhouse'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'The Punic Wars were fought between Rome and?',
                options: [
                    'Greece',
                    'Persia',
                    'Carthage',
                    'Gaul'
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'his-002',
        categoryId: 'history',
        title: 'Modern History',
        description: 'Discover events that shaped our modern world!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'When did World War I start?',
                options: [
                    '1912',
                    '1914',
                    '1916',
                    '1918'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Who was the first man on the moon?',
                options: [
                    'Buzz Aldrin',
                    'Neil Armstrong',
                    'Yuri Gagarin',
                    'John Glenn'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'When did World War II end?',
                options: [
                    '1943',
                    '1944',
                    '1945',
                    '1946'
                ],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'Who invented the telephone?',
                options: [
                    'Edison',
                    'Bell',
                    'Tesla',
                    'Morse'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'When did the Berlin Wall fall?',
                options: [
                    '1987',
                    '1988',
                    '1989',
                    '1990'
                ],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'Who was the first US President?',
                options: [
                    'Lincoln',
                    'Jefferson',
                    'Washington',
                    'Adams'
                ],
                correctAnswer: 2
            },
            {
                id: 7,
                question: 'When was the internet invented?',
                options: [
                    '1960s',
                    '1970s',
                    '1980s',
                    '1990s'
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: 'Who wrote the Declaration of Independence?',
                options: [
                    'Washington',
                    'Jefferson',
                    'Franklin',
                    'Adams'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'When did the Titanic sink?',
                options: [
                    '1910',
                    '1911',
                    '1912',
                    '1913'
                ],
                correctAnswer: 2
            },
            {
                id: 10,
                question: 'Who was Nelson Mandela?',
                options: [
                    'US President',
                    'UK Prime Minister',
                    'South African Leader',
                    'Indian Leader'
                ],
                correctAnswer: 2
            },
            {
                id: 11,
                question: 'When was the first airplane flight?',
                options: [
                    '1901',
                    '1903',
                    '1905',
                    '1907'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'Who discovered penicillin?',
                options: [
                    'Pasteur',
                    'Fleming',
                    'Curie',
                    'Darwin'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'When did the Cold War end?',
                options: [
                    '1989',
                    '1990',
                    '1991',
                    '1992'
                ],
                correctAnswer: 2
            },
            {
                id: 14,
                question: 'Who was Mahatma Gandhi?',
                options: [
                    'King',
                    'Revolutionary',
                    'Peace activist',
                    'Scientist'
                ],
                correctAnswer: 2
            },
            {
                id: 15,
                question: 'When was the UN founded?',
                options: [
                    '1943',
                    '1944',
                    '1945',
                    '1946'
                ],
                correctAnswer: 2
            },
            // Added 5 more
            {
                id: 16,
                question: 'Who was known as the Iron Lady?',
                options: [
                    'Angela Merkel',
                    'Margaret Thatcher',
                    'Indira Gandhi',
                    'Queen Elizabeth'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: 'The Renaissance began in which country?',
                options: [
                    'France',
                    'Italy',
                    'England',
                    'Germany'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'Which treaty ended WWI?',
                options: [
                    'Treaty of Paris',
                    'Treaty of Versailles',
                    'Treaty of London',
                    'Treaty of Ghent'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Who was the main leader of the Soviet Union during WWII?',
                options: [
                    'Lenin',
                    'Stalin',
                    'Khrushchev',
                    'Gorbachev'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'What was the primary cause of the Great Depression?',
                options: [
                    'War',
                    'Stock Market Crash',
                    'Famine',
                    'Drought'
                ],
                correctAnswer: 1
            }
        ]
    },
    // TECHNOLOGY CATEGORY
    {
        id: 'tech-001',
        categoryId: 'technology',
        title: 'Frontend Basics',
        description: 'Master HTML, CSS, and JavaScript fundamentals!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'What does HTML stand for?',
                options: [
                    'Hyper Text Markup Language',
                    'High Tech Modern Language',
                    'Hyper Transfer Markup Language',
                    'Home Tool Markup Language'
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: 'Which CSS property changes text color?',
                options: [
                    'font-color',
                    'text-color',
                    'color',
                    'foreground'
                ],
                correctAnswer: 2
            },
            {
                id: 3,
                question: 'What is JavaScript used for?',
                options: [
                    'Styling',
                    'Structure',
                    'Interactivity',
                    'Hosting'
                ],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'What does CSS stand for?',
                options: [
                    'Cascading Style Sheets',
                    'Computer Style Sheets',
                    'Creative Style Sheets',
                    'Colorful Style Sheets'
                ],
                correctAnswer: 0
            },
            {
                id: 5,
                question: 'Which HTML tag is for paragraph?',
                options: [
                    '<div>',
                    '<span>',
                    '<p>',
                    '<br>'
                ],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'How do you select an ID in CSS?',
                options: [
                    '.id',
                    '#id',
                    '@id',
                    '*id'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'What is the DOM?',
                options: [
                    'Document Object Model',
                    'Data Object Method',
                    'Display Output Mode',
                    'Dynamic Object Manager'
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: 'Which is a JavaScript framework?',
                options: [
                    'Laravel',
                    'Django',
                    'React',
                    'Rails'
                ],
                correctAnswer: 2
            },
            {
                id: 9,
                question: 'What is responsive design?',
                options: [
                    'Fast loading',
                    'Adapts to screen size',
                    'Colorful design',
                    'Animated design'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'What does API stand for?',
                options: [
                    'Application Programming Interface',
                    'Advanced Program Integration',
                    'Automated Process Input',
                    'Application Process Integration'
                ],
                correctAnswer: 0
            },
            {
                id: 11,
                question: 'Which tag creates a link in HTML?',
                options: [
                    '<link>',
                    '<a>',
                    '<href>',
                    '<url>'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'What is flexbox used for?',
                options: [
                    'Animation',
                    'Layout',
                    'Colors',
                    'Fonts'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'What is npm?',
                options: [
                    'Node Package Manager',
                    'New Programming Method',
                    'Network Protocol Manager',
                    'Node Process Manager'
                ],
                correctAnswer: 0
            },
            {
                id: 14,
                question: 'Which CSS property adds shadow to text?',
                options: [
                    'box-shadow',
                    'text-shadow',
                    'font-shadow',
                    'shadow'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'What is TypeScript?',
                options: [
                    'A styling language',
                    'A typed JavaScript',
                    'A database',
                    'A framework'
                ],
                correctAnswer: 1
            },
            // Pertanyaan tambahan
            {
                id: 16,
                question: 'Which HTML attribute is used to define inline styles?',
                options: [
                    'class',
                    'styles',
                    'font',
                    'style'
                ],
                correctAnswer: 3
            },
            {
                id: 17,
                question: 'In CSS, what is the default value of the position property?',
                options: [
                    'relative',
                    'fixed',
                    'absolute',
                    'static'
                ],
                correctAnswer: 3
            },
            {
                id: 18,
                question: 'Which JavaScript operator is used to assign a value to a variable?',
                options: [
                    '*',
                    '-',
                    '=',
                    'x'
                ],
                correctAnswer: 2
            },
            {
                id: 19,
                question: 'What is the purpose of the <head> tag in HTML?',
                options: [
                    'To display text',
                    'To contain metadata',
                    'To create a footer',
                    'To insert images'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'Which CSS unit is relative to the font-size of the root element?',
                options: [
                    'px',
                    'em',
                    'rem',
                    '%'
                ],
                correctAnswer: 2
            }
        ]
    },
    {
        id: 'tech-002',
        categoryId: 'technology',
        title: 'Quantum Computing',
        description: 'Explore the mysteries of quantum technology!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'What is a qubit?',
                options: [
                    'A small bit',
                    'A quantum bit',
                    'A quick bit',
                    'A quarter bit'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'What is superposition?',
                options: [
                    'Being in multiple states',
                    'Being very fast',
                    'Being very small',
                    'Being connected'
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: 'What is quantum entanglement?',
                options: [
                    'Wires tangled',
                    'Particles linked',
                    'Code mixed',
                    'Data scrambled'
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                question: 'Who is a pioneer of quantum computing?',
                options: [
                    'Bill Gates',
                    'Richard Feynman',
                    'Steve Jobs',
                    'Elon Musk'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'What is quantum supremacy?',
                options: [
                    'Best quantum',
                    'Quantum beats classical',
                    'Most qubits',
                    'Fastest quantum'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'What company made a quantum computer?',
                options: [
                    'Apple',
                    'IBM',
                    'Microsoft',
                    'Google'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'What is decoherence?',
                options: [
                    'System stability',
                    'Loss of quantum state',
                    'Power increase',
                    'Speed boost'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'What can quantum computers break?',
                options: [
                    'Monitors',
                    'Encryption',
                    'Networks',
                    'Databases'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'What is a quantum gate?',
                options: [
                    'A door',
                    'An operation on qubits',
                    'A barrier',
                    'A filter'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'What temperature do quantum computers need?',
                options: [
                    'Room temperature',
                    'Near absolute zero',
                    'Boiling point',
                    'Freezing point'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'What is quantum tunneling?',
                options: [
                    'Digging tunnels',
                    'Particles passing barriers',
                    'Fast travel',
                    'Network routing'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'What is a quantum algorithm?',
                options: [
                    'Regular code',
                    'Code for quantum computers',
                    'Fast code',
                    'Encrypted code'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'What is Shor\'s algorithm for?',
                options: [
                    'Sorting',
                    'Factoring numbers',
                    'Searching',
                    'Encrypting'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'What is quantum error correction?',
                options: [
                    'Fixing bugs',
                    'Protecting quantum info',
                    'Cleaning data',
                    'Resetting qubits'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'What is a quantum simulator?',
                options: [
                    'A game',
                    'Mimics quantum systems',
                    'Tests hardware',
                    'Trains AI'
                ],
                correctAnswer: 1
            },
            // Pertanyaan tambahan
            {
                id: 16,
                question: 'What is the name of the programming language developed by Microsoft for quantum computing?',
                options: [
                    'Q#',
                    'Python',
                    'C++',
                    'Java'
                ],
                correctAnswer: 0
            },
            {
                id: 17,
                question: 'Which of these is a quantum computing model?',
                options: [
                    'Serial model',
                    'Adiabatic model',
                    'Linear model',
                    'Parallel model'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'What is a Noisy Intermediate-Scale Quantum (NISQ) device?',
                options: [
                    'A device with no noise',
                    'A device with few qubits and noise',
                    'A supercomputer',
                    'A perfect quantum computer'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'What is the role of a "Cryostat" in quantum computing?',
                options: [
                    'To increase speed',
                    'To maintain ultra-low temperatures',
                    'To generate qubits',
                    'To store data'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'What is "Bloch Sphere" used to represent?',
                options: [
                    'Internet speed',
                    'The state of a qubit',
                    'Network security',
                    'Atomic weight'
                ],
                correctAnswer: 1
            }
        ]
    },
    // MATH CATEGORY
    {
        id: 'math-001',
        categoryId: 'math',
        title: 'Asah Otak: Penjumlahan',
        description: 'Latih kecepatan berhitungmu dengan soal penjumlahan!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: '15 + 27 = ?',
                options: [
                    '42',
                    '43',
                    '41',
                    '44'
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: '89 + 56 = ?',
                options: [
                    '144',
                    '145',
                    '143',
                    '146'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: '234 + 567 = ?',
                options: [
                    '801',
                    '799',
                    '800',
                    '802'
                ],
                correctAnswer: 0
            },
            {
                id: 4,
                question: '1000 + 999 = ?',
                options: [
                    '1998',
                    '1999',
                    '2000',
                    '2001'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: '45 + 55 + 10 = ?',
                options: [
                    '100',
                    '110',
                    '120',
                    '90'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: '77 + 88 = ?',
                options: [
                    '155',
                    '165',
                    '175',
                    '145'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: '123 + 321 = ?',
                options: [
                    '444',
                    '443',
                    '445',
                    '442'
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: '500 + 250 + 125 = ?',
                options: [
                    '875',
                    '850',
                    '900',
                    '825'
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: '999 + 1 = ?',
                options: [
                    '1001',
                    '1000',
                    '999',
                    '1010'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: '12 + 23 + 34 + 45 = ?',
                options: [
                    '114',
                    '113',
                    '115',
                    '112'
                ],
                correctAnswer: 0
            },
            {
                id: 11,
                question: '666 + 333 = ?',
                options: [
                    '999',
                    '998',
                    '1000',
                    '997'
                ],
                correctAnswer: 0
            },
            {
                id: 12,
                question: '25 + 25 + 25 + 25 = ?',
                options: [
                    '100',
                    '75',
                    '125',
                    '150'
                ],
                correctAnswer: 0
            },
            {
                id: 13,
                question: '1111 + 2222 = ?',
                options: [
                    '3333',
                    '3332',
                    '3334',
                    '3331'
                ],
                correctAnswer: 0
            },
            {
                id: 14,
                question: '50 + 60 + 70 + 80 = ?',
                options: [
                    '260',
                    '250',
                    '270',
                    '240'
                ],
                correctAnswer: 0
            },
            {
                id: 15,
                question: '199 + 201 = ?',
                options: [
                    '400',
                    '399',
                    '401',
                    '398'
                ],
                correctAnswer: 0
            },
            // Pertanyaan baru
            {
                id: 16,
                question: '1.250 + 750 = ?',
                options: [
                    '1.900',
                    '2.000',
                    '2.100',
                    '2.050'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: '15 + 15 + 15 + 15 + 15 = ?',
                options: [
                    '60',
                    '70',
                    '75',
                    '80'
                ],
                correctAnswer: 2
            },
            {
                id: 18,
                question: '4.500 + 5.500 = ?',
                options: [
                    '10.000',
                    '9.000',
                    '11.000',
                    '10.500'
                ],
                correctAnswer: 0
            },
            {
                id: 19,
                question: '88 + 12 + 50 = ?',
                options: [
                    '140',
                    '150',
                    '160',
                    '145'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: '750 + 250 + 500 = ?',
                options: [
                    '1.400',
                    '1.500',
                    '1.600',
                    '1.550'
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'math-002',
        categoryId: 'math',
        title: 'Logika Galaksi',
        description: 'Pecahkan teka-teki angka yang menantang!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Pola: 2, 4, 8, 16, ?',
                options: [
                    '24',
                    '30',
                    '32',
                    '20'
                ],
                correctAnswer: 2
            },
            {
                id: 2,
                question: 'Pola: 1, 1, 2, 3, 5, 8, ?',
                options: [
                    '11',
                    '12',
                    '13',
                    '10'
                ],
                correctAnswer: 2
            },
            {
                id: 3,
                question: 'Jika x + 5 = 12, maka x = ?',
                options: [
                    '5',
                    '6',
                    '7',
                    '8'
                ],
                correctAnswer: 2
            },
            {
                id: 4,
                question: 'Pola: 3, 6, 9, 12, ?',
                options: [
                    '14',
                    '15',
                    '16',
                    '18'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Berapa 20% dari 150?',
                options: [
                    '25',
                    '30',
                    '35',
                    '40'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: '5! (5 faktorial) = ?',
                options: [
                    '100',
                    '120',
                    '125',
                    '150'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Pola: 100, 90, 81, 73, ?',
                options: [
                    '66',
                    '65',
                    '64',
                    '63'
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: 'Akar kuadrat dari 144 = ?',
                options: [
                    '11',
                    '12',
                    '13',
                    '14'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: '2³ + 3² = ?',
                options: [
                    '15',
                    '16',
                    '17',
                    '18'
                ],
                correctAnswer: 2
            },
            {
                id: 10,
                question: 'Jika a = 3, b = 4, maka a² + b² = ?',
                options: [
                    '24',
                    '25',
                    '26',
                    '27'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'Pola: 1, 4, 9, 16, 25, ?',
                options: [
                    '30',
                    '34',
                    '36',
                    '40'
                ],
                correctAnswer: 2
            },
            {
                id: 12,
                question: 'Berapa 1/4 + 1/2?',
                options: [
                    '1/3',
                    '2/4',
                    '3/4',
                    '1/6'
                ],
                correctAnswer: 2
            },
            {
                id: 13,
                question: 'Log₁₀(100) = ?',
                options: [
                    '1',
                    '2',
                    '10',
                    '100'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Pola: 81, 27, 9, 3, ?',
                options: [
                    '0',
                    '1',
                    '2',
                    '3'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'Luas persegi dengan sisi 7 = ?',
                options: [
                    '14',
                    '28',
                    '49',
                    '56'
                ],
                correctAnswer: 2
            },
            // Pertanyaan baru
            {
                id: 16,
                question: 'Berapa volume kubus dengan sisi 3?',
                options: [
                    '9',
                    '18',
                    '27',
                    '81'
                ],
                correctAnswer: 2
            },
            {
                id: 17,
                question: 'Pola: 2, 5, 10, 17, ?',
                options: [
                    '24',
                    '25',
                    '26',
                    '27'
                ],
                correctAnswer: 2
            },
            {
                id: 18,
                question: 'Berapa 15% dari 200?',
                options: [
                    '20',
                    '30',
                    '40',
                    '35'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Jika 2x - 4 = 10, maka x = ?',
                options: [
                    '6',
                    '7',
                    '8',
                    '9'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'Pola: 1, 8, 27, 64, ?',
                options: [
                    '100',
                    '125',
                    '150',
                    '216'
                ],
                correctAnswer: 1
            }
        ]
    },
    // SCIENCE CATEGORY
    {
        id: 'sci-001',
        categoryId: 'science',
        title: 'Sains SMK',
        description: 'Uji pengetahuan sains tingkat SMK!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Apa simbol kimia untuk air?',
                options: [
                    'H2O',
                    'CO2',
                    'O2',
                    'NaCl'
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: 'Berapa jumlah kromosom manusia?',
                options: [
                    '23',
                    '46',
                    '42',
                    '48'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'Apa nama proses fotosintesis?',
                options: [
                    'Mengubah air jadi oksigen',
                    'Mengubah CO2 jadi gula',
                    'Mengubah gula jadi energi',
                    'Mengubah oksigen jadi CO2'
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                question: 'Planet apa yang paling dekat dengan matahari?',
                options: [
                    'Venus',
                    'Merkurius',
                    'Mars',
                    'Bumi'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Apa satuan gaya dalam SI?',
                options: [
                    'Joule',
                    'Watt',
                    'Newton',
                    'Pascal'
                ],
                correctAnswer: 2
            },
            {
                id: 6,
                question: 'DNA adalah singkatan dari?',
                options: [
                    'Deoxyribose Nucleic Acid',
                    'Deoxyribonucleic Acid',
                    'Dynamic Nuclear Acid',
                    'Double Nucleic Atom'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Berapa kecepatan cahaya?',
                options: [
                    '300.000 km/s',
                    '150.000 km/s',
                    '500.000 km/s',
                    '100.000 km/s'
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: 'Apa gas terbanyak di atmosfer bumi?',
                options: [
                    'Oksigen',
                    'Karbon dioksida',
                    'Nitrogen',
                    'Argon'
                ],
                correctAnswer: 2
            },
            {
                id: 9,
                question: 'Hukum Newton pertama disebut?',
                options: [
                    'Hukum Gravitasi',
                    'Hukum Inersia',
                    'Hukum Aksi-Reaksi',
                    'Hukum Gerak'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Apa organ terbesar dalam tubuh manusia?',
                options: [
                    'Hati',
                    'Jantung',
                    'Kulit',
                    'Paru-paru'
                ],
                correctAnswer: 2
            },
            {
                id: 11,
                question: 'Berapa jumlah tulang dalam tubuh orang dewasa?',
                options: [
                    '186',
                    '196',
                    '206',
                    '216'
                ],
                correctAnswer: 2
            },
            {
                id: 12,
                question: 'Apa pusat tata surya kita?',
                options: [
                    'Bumi',
                    'Bulan',
                    'Matahari',
                    'Mars'
                ],
                correctAnswer: 2
            },
            {
                id: 13,
                question: 'Asam lambung mengandung?',
                options: [
                    'H2SO4',
                    'HCl',
                    'HNO3',
                    'CH3COOH'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Apa nama galaksi kita?',
                options: [
                    'Andromeda',
                    'Bima Sakti',
                    'Triangulum',
                    'Sombrero'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'Berapa suhu titik didih air?',
                options: [
                    '90°C',
                    '100°C',
                    '110°C',
                    '120°C'
                ],
                correctAnswer: 1
            },
            {
                id: 16,
                question: 'Zat yang dapat mempercepat reaksi kimia tanpa ikut bereaksi disebut?',
                options: [
                    'Inhibitor',
                    'Reaktan',
                    'Katalis',
                    'Produk'
                ],
                correctAnswer: 2
            },
            {
                id: 17,
                question: 'Apa nama alat untuk mengukur arus listrik?',
                options: [
                    'Voltmeter',
                    'Ohmmeter',
                    'Amperemeter',
                    'Barometer'
                ],
                correctAnswer: 2
            },
            {
                id: 18,
                question: 'Berapa nilai percepatan gravitasi bumi secara umum?',
                options: [
                    '8.9 m/s²',
                    '10.5 m/s²',
                    '7.2 m/s²',
                    '9.8 m/s²'
                ],
                correctAnswer: 3
            },
            {
                id: 19,
                question: 'Perubahan wujud benda dari padat langsung menjadi gas disebut?',
                options: [
                    'Mencair',
                    'Menguap',
                    'Menyublim',
                    'Mengembun'
                ],
                correctAnswer: 2
            },
            {
                id: 20,
                question: 'Lapisan udara yang menyelimuti bumi disebut?',
                options: [
                    'Litosfer',
                    'Atmosfer',
                    'Hidrosfer',
                    'Biosfer'
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'sci-002',
        categoryId: 'science',
        title: 'Anatomi Alien',
        description: 'Pelajari biologi makhluk luar angkasa!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Apa definisi astrobiologi?',
                options: [
                    'Studi bintang',
                    'Studi kehidupan di luar angkasa',
                    'Studi planet',
                    'Studi roket'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Di mana kehidupan mungkin ada di Mars?',
                options: [
                    'Kutub',
                    'Bawah tanah',
                    'Atmosfer',
                    'Semua benar'
                ],
                correctAnswer: 3
            },
            {
                id: 3,
                question: 'Apa itu extremophile?',
                options: [
                    'Alien',
                    'Organisme di kondisi ekstrem',
                    'Planet ekstrem',
                    'Bintang panas'
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                question: 'Bulan mana yang mungkin punya kehidupan?',
                options: [
                    'Bulan Bumi',
                    'Europa',
                    'Phobos',
                    'Deimos'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Apa yang dicari di exoplanet?',
                options: [
                    'Air',
                    'Atmosfer',
                    'Suhu tepat',
                    'Semua benar'
                ],
                correctAnswer: 3
            },
            {
                id: 6,
                question: 'Apa persamaan Drake?',
                options: [
                    'Rumus fisika',
                    'Estimasi kehidupan cerdas',
                    'Perhitungan jarak',
                    'Kecepatan roket'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Apa tardigrade?',
                options: [
                    'Alien',
                    'Hewan super tahan',
                    'Bakteri',
                    'Virus'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Titan adalah bulan dari?',
                options: [
                    'Jupiter',
                    'Saturnus',
                    'Uranus',
                    'Neptunus'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'Apa zona Goldilocks?',
                options: [
                    'Zona berbahaya',
                    'Zona layak huni',
                    'Zona dingin',
                    'Zona panas'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'SETI mencari apa?',
                options: [
                    'Planet',
                    'Sinyal alien',
                    'Asteroid',
                    'Komet'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'Enceladus mengeluarkan apa?',
                options: [
                    'Lava',
                    'Air',
                    'Gas',
                    'Debu'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'Apa panspermia?',
                options: [
                    'Teori planet',
                    'Penyebaran kehidupan via asteroid',
                    'Jenis alien',
                    'Galaksi jauh'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'Apa biosignature?',
                options: [
                    'Tanda tangan',
                    'Bukti kehidupan',
                    'Jejak asteroid',
                    'Radiasi bintang'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Kepler-452b dijuluki?',
                options: [
                    'Earth 2.0',
                    'Mars 2.0',
                    'Venus 2.0',
                    'Mercury 2.0'
                ],
                correctAnswer: 0
            },
            {
                id: 15,
                question: 'James Webb mencari apa?',
                options: [
                    'Bintang terdekat',
                    'Atmosfer exoplanet',
                    'Asteroid',
                    'Komet'
                ],
                correctAnswer: 1
            },
            {
                id: 16,
                question: 'Apa itu "Great Filter" dalam teori Fermi Paradox?',
                options: [
                    'Penyaring kopi',
                    'Hambatan evolusi kehidupan',
                    'Lensa teleskop',
                    'Atmosfer planet'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: 'Manakah molekul berbasis karbon yang menjadi dasar kehidupan bumi?',
                options: [
                    'Metana',
                    'Amonia',
                    'Asam Amino',
                    'Etilen'
                ],
                correctAnswer: 2
            },
            {
                id: 18,
                question: 'Apa itu "Dyson Sphere"?',
                options: [
                    'Alat penyedot debu',
                    'Struktur penangkap energi bintang',
                    'Jenis roket baru',
                    'Planet buatan'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Bintang jenis apa yang paling mungkin memiliki sistem planet layak huni?',
                options: [
                    'Raksasa Merah',
                    'Katai Kuning (seperti Matahari)',
                    'Lubang Hitam',
                    'Katai Putih'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'Apa istilah untuk planet yang tidak mengorbit bintang?',
                options: [
                    'Planet Kerdil',
                    'Exoplanet',
                    'Rogue Planet',
                    'Asteroid'
                ],
                correctAnswer: 2
            }
        ]
    },
    // BUSINESS CATEGORY
    {
        id: 'bus-001',
        categoryId: 'business',
        title: 'Startup Basics',
        description: 'Pelajari dasar membangun startup sukses!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Apa itu MVP?',
                options: [
                    'Most Valuable Player',
                    'Minimum Viable Product',
                    'Maximum Value Product',
                    'Main Value Proposition'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Apa itu pitch deck?',
                options: [
                    'Kartu nama',
                    'Presentasi bisnis',
                    'Laporan keuangan',
                    'Kontrak kerja'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'Apa arti bootstrap dalam startup?',
                options: [
                    'Jenis sepatu',
                    'Modal sendiri',
                    'Investasi besar',
                    'Pinjaman bank'
                ],
                correctAnswer: 1
            },
            {
                id: 4,
                question: 'Apa itu Series A?',
                options: [
                    'Produk pertama',
                    'Putaran pendanaan',
                    'Tim pertama',
                    'Pelanggan pertama'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Apa arti pivot?',
                options: [
                    'Memutar',
                    'Mengubah strategi',
                    'Menutup bisnis',
                    'Memperluas tim'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'Apa itu unicorn?',
                options: [
                    'Hewan mitos',
                    'Startup valuasi $1B+',
                    'Investor besar',
                    'CEO terkenal'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Apa itu CAC?',
                options: [
                    'Customer Acquisition Cost',
                    'Company Annual Cost',
                    'Cash And Credit',
                    'Customer Account Credit'
                ],
                correctAnswer: 0
            },
            {
                id: 8,
                question: 'Apa itu burn rate?',
                options: [
                    'Kecepatan bakar',
                    'Pengeluaran per bulan',
                    'Pendapatan harian',
                    'Profit tahunan'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'Apa itu runway?',
                options: [
                    'Landasan pacu',
                    'Waktu sebelum uang habis',
                    'Jalan bisnis',
                    'Target penjualan'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Apa itu angel investor?',
                options: [
                    'Investor malaikat',
                    'Investor awal individu',
                    'Bank',
                    'Pemerintah'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'Apa itu KPI?',
                options: [
                    'Key Performance Indicator',
                    'Key Profit Index',
                    'Known Product Input',
                    'Keep Profit Increasing'
                ],
                correctAnswer: 0
            },
            {
                id: 12,
                question: 'Apa itu scaling?',
                options: [
                    'Menimbang',
                    'Memperbesar bisnis',
                    'Mengurangi biaya',
                    'Menambah produk'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'Apa itu equity?',
                options: [
                    'Kualitas',
                    'Kepemilikan saham',
                    'Hutang',
                    'Pendapatan'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Apa itu churn rate?',
                options: [
                    'Tingkat pelanggan pergi',
                    'Tingkat keuntungan',
                    'Tingkat pertumbuhan',
                    'Tingkat investasi'
                ],
                correctAnswer: 0
            },
            {
                id: 15,
                question: 'Apa itu IPO?',
                options: [
                    'Internal Product Optimization',
                    'Initial Public Offering',
                    'Investment Plan Outline',
                    'Income Profit Output'
                ],
                correctAnswer: 1
            },
            // Tambahan 5 soal baru
            {
                id: 16,
                question: 'Apa itu B2B?',
                options: [
                    'Business to Business',
                    'Business to Buyer',
                    'Buyer to Business',
                    'Best to Business'
                ],
                correctAnswer: 0
            },
            {
                id: 17,
                question: 'Apa itu Venture Capital?',
                options: [
                    'Pinjaman pribadi',
                    'Lembaga investasi startup',
                    'Pegadaian',
                    'Koperasi desa'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'Apa arti "Product-Market Fit"?',
                options: [
                    'Produk yang murah',
                    'Kesesuaian produk dengan kebutuhan pasar',
                    'Iklan yang cocok',
                    'Desain kemasan'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Apa itu LTV (Lifetime Value)?',
                options: [
                    'Total pendapatan dari satu pelanggan',
                    'Lama waktu kerja karyawan',
                    'Nilai aset perusahaan',
                    'Bunga pinjaman'
                ],
                correctAnswer: 0
            },
            {
                id: 20,
                question: 'Apa itu Decacorn?',
                options: [
                    'Valuasi $1B+',
                    'Valuasi $10B+',
                    'Valuasi $100B+',
                    'Valuasi $1M+'
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'bus-002',
        categoryId: 'business',
        title: 'Marketing Digital',
        description: 'Kuasai strategi pemasaran era digital!',
        questionCount: 20,
        questions: [
            {
                id: 1,
                question: 'Apa itu SEO?',
                options: [
                    'Social Engine Optimization',
                    'Search Engine Optimization',
                    'Site Enhancement Option',
                    'System Engine Operation'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Apa platform iklan Google?',
                options: [
                    'Google Ads',
                    'Google Marketing',
                    'Google Promote',
                    'Google Advertise'
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: 'Apa itu CTR?',
                options: [
                    'Click Through Rate',
                    'Customer Total Revenue',
                    'Content Total Reach',
                    'Conversion To Revenue'
                ],
                correctAnswer: 0
            },
            {
                id: 4,
                question: 'Apa itu influencer marketing?',
                options: [
                    'Iklan TV',
                    'Promosi via influencer',
                    'Iklan radio',
                    'Brosur digital'
                ],
                correctAnswer: 1
            },
            {
                id: 5,
                question: 'Apa itu landing page?',
                options: [
                    'Halaman utama',
                    'Halaman khusus kampanye',
                    'Blog',
                    'Forum'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'Apa itu A/B testing?',
                options: [
                    'Test produk',
                    'Test 2 versi konten',
                    'Test kecepatan',
                    'Test keamanan'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Apa itu conversion?',
                options: [
                    'Perubahan desain',
                    'Pengunjung jadi pembeli',
                    'Update website',
                    'Ganti platform'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Apa itu retargeting?',
                options: [
                    'Target baru',
                    'Iklan ke pengunjung lama',
                    'Ubah target',
                    'Hapus target'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'Apa itu email marketing?',
                options: [
                    'Email kerja',
                    'Promosi via email',
                    'Email support',
                    'Email internal'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Apa itu CRM?',
                options: [
                    'Customer Relationship Management',
                    'Company Revenue Manager',
                    'Content Research Method',
                    'Customer Report Monitor'
                ],
                correctAnswer: 0
            },
            {
                id: 11,
                question: 'Apa itu content marketing?',
                options: [
                    'Iklan berbayar',
                    'Pemasaran via konten',
                    'Jual konten',
                    'Beli konten'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'Apa itu organic traffic?',
                options: [
                    'Pengunjung berbayar',
                    'Pengunjung alami',
                    'Bot',
                    'Spam'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'Apa itu engagement rate?',
                options: [
                    'Tingkat tunangan',
                    'Tingkat interaksi',
                    'Tingkat penjualan',
                    'Tingkat pengunjung'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Apa itu SEM?',
                options: [
                    'Search Engine Marketing',
                    'Social Engine Marketing',
                    'Site Enhancement Method',
                    'System Engine Monitor'
                ],
                correctAnswer: 0
            },
            {
                id: 15,
                question: 'Apa itu affiliate marketing?',
                options: [
                    'Pemasaran afiliasi',
                    'Pemasaran langsung',
                    'Pemasaran offline',
                    'Pemasaran TV'
                ],
                correctAnswer: 0
            },
            // Tambahan 5 soal baru
            {
                id: 16,
                question: 'Apa itu Copywriting?',
                options: [
                    'Menyalin teks',
                    'Seni menulis teks persuasif',
                    'Hak cipta gambar',
                    'Membeli artikel'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: 'Apa arti ROAS?',
                options: [
                    'Return on Ad Spend',
                    'Rate of All Sales',
                    'Return on Annual Sale',
                    'Revenue of Ad System'
                ],
                correctAnswer: 0
            },
            {
                id: 18,
                question: 'Apa itu Bounce Rate?',
                options: [
                    'Kecepatan internet',
                    'Persentase pengunjung langsung keluar',
                    'Tingkat klik iklan',
                    'Lama video ditonton'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Apa itu CTA?',
                options: [
                    'Click to Action',
                    'Call to Action',
                    'Call to Account',
                    'Click to Advertise'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'Apa singkatan dari SERP?',
                options: [
                    'Search Engine Result Page',
                    'Social Engine Result Page',
                    'Search Engine Report Page',
                    'Site Engine Result Page'
                ],
                correctAnswer: 0
            }
        ]
    },
    // SUPPORT CATEGORY
    {
        id: 'sup-001',
        categoryId: 'support',
        title: 'Customer Service',
        description: 'Tingkatkan skill pelayanan pelanggan!',
        questionCount: 20,
        questions: [
            // MAKSIMAL 3 SOAL "APA ITU"
            {
                id: 1,
                question: 'Apa itu SLA (Service Level Agreement)?',
                options: [
                    'Perjanjian batas waktu layanan',
                    'Laporan gaji karyawan',
                    'Sistem keamanan data',
                    'Target penjualan harian'
                ],
                correctAnswer: 0
            },
            {
                id: 2,
                question: 'Apa itu NPS (Net Promoter Score)?',
                options: [
                    'Metrik loyalitas pelanggan',
                    'Kecepatan respon teknisi',
                    'Jumlah produk rusak',
                    'Biaya operasional kantor'
                ],
                correctAnswer: 0
            },
            {
                id: 3,
                question: 'Apa itu omnichannel support?',
                options: [
                    'Layanan mandiri tanpa admin',
                    'Integrasi semua saluran komunikasi',
                    'Layanan khusus melalui telepon saja',
                    'Sistem pengiriman barang'
                ],
                correctAnswer: 1
            },
            // SOAL SKENARIO & UMUM
            {
                id: 4,
                question: 'Pelanggan marah karena pesanan terlambat. Langkah pertama yang paling tepat adalah...',
                options: [
                    'Menyalahkan kurir',
                    'Memberi diskon langsung',
                    'Mendengarkan tanpa memotong pembicaraan',
                    'Meminta pelanggan bersabar'
                ],
                correctAnswer: 2
            },
            {
                id: 5,
                question: 'Jika Anda tidak tahu jawaban dari pertanyaan pelanggan, tindakan yang profesional adalah...',
                options: [
                    'Mengarang jawaban agar terlihat pintar',
                    'Meminta waktu untuk memeriksa dan akan menghubungi kembali',
                    'Mengabaikan pertanyaan tersebut',
                    'Memberikan jawaban "tidak tahu"'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'Dalam teknik komunikasi "L.A.S.T", setelah Anda meminta maaf (Apologize), langkah selanjutnya adalah...',
                options: [
                    'Minta bayaran',
                    'Selesaikan masalah (Solve)',
                    'Menutup telepon',
                    'Bertanya kabar'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Kapan sebuah kasus pelayanan harus segera diekskalasi ke manajer?',
                options: [
                    'Setiap kali ada pelanggan masuk',
                    'Saat masalah berada di luar wewenang Anda',
                    'Saat Anda merasa malas menjawab',
                    'Saat pelanggan mengucapkan terima kasih'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Manakah cara terbaik untuk menunjukkan empati melalui teks chat?',
                options: [
                    'Gunakan huruf kapital semua',
                    'Gunakan kalimat "Saya memahami kekhawatiran Anda"',
                    'Hanya menggunakan emoji banyak',
                    'Balas sependek mungkin'
                ],
                correctAnswer: 1
            },
            {
                id: 9,
                question: 'Pelanggan meminta pengembalian dana (refund) yang melanggar kebijakan perusahaan. Respon Anda...',
                options: [
                    'Langsung setuju',
                    'Menolak kasar',
                    'Menjelaskan kebijakan dengan sopan dan beri solusi alternatif',
                    'Mematikan percakapan'
                ],
                correctAnswer: 2
            },
            {
                id: 10,
                question: 'Apa tujuan utama dari melakukan konfirmasi ulang di akhir sesi pelayanan?',
                options: [
                    'Memperlama waktu kerja',
                    'Memastikan semua kendala sudah teratasi sepenuhnya',
                    'Agar terlihat rajin',
                    'Hanya formalitas'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'Indikator yang menunjukkan keberhasilan menyelesaikan masalah pelanggan di kontak pertama disebut...',
                options: [
                    'NPS',
                    'CSAT',
                    'First Contact Resolution (FCR)',
                    'Churn Rate'
                ],
                correctAnswer: 2
            },
            {
                id: 12,
                question: 'Jika sistem sedang mengalami gangguan massal, tindakan CS yang paling tepat adalah...',
                options: [
                    'Menunggu pelanggan bertanya',
                    'Memberikan informasi proaktif melalui semua saluran',
                    'Menutup layanan sementara',
                    'Pura-pura tidak tahu'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'Bahasa tubuh yang harus dihindari saat melayani pelanggan secara tatap muka adalah...',
                options: [
                    'Kontak mata',
                    'Tersenyum',
                    'Menyilangkan tangan di dada',
                    'Mengangguk'
                ],
                correctAnswer: 2
            },
            {
                id: 14,
                question: 'Seorang pelanggan terus memaki dengan kata kasar. Tindakan yang dibolehkan adalah...',
                options: [
                    'Memaki balik',
                    'Memberi peringatan sopan lalu putus percakapan jika berlanjut',
                    'Mendiamkan saja',
                    'Langsung memblokir tanpa bicara'
                ],
                correctAnswer: 1
            },
            {
                id: 15,
                question: 'Mengapa "Product Knowledge" sangat penting bagi seorang CS?',
                options: [
                    'Agar bisa menyombongkan diri',
                    'Untuk mempercepat penyelesaian kendala pelanggan',
                    'Agar bisa menipu pelanggan',
                    'Tidak terlalu penting'
                ],
                correctAnswer: 1
            },
            {
                id: 16,
                question: 'Pelanggan meminta fitur yang saat ini belum tersedia. Tindakan yang "Customer-Centric" adalah...',
                options: [
                    'Menolak dengan alasan teknis',
                    'Mencatat sebagai feedback dan jelaskan rencana kedepan',
                    'Menjanjikan fitur ada minggu depan',
                    'Mengatakan fitur itu tidak berguna'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: 'Fungsi utama dari CRM (Customer Relationship Management) bagi tim support adalah...',
                options: [
                    'Menghapus data pelanggan',
                    'Melihat riwayat interaksi pelanggan',
                    'Mengirim spam iklan',
                    'Memantau lokasi pelanggan'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'Bagaimana cara menangani pelanggan yang berbicara terlalu bertele-tele?',
                options: [
                    'Mematikan telepon',
                    'Mengarahkan kembali ke poin utama dengan sopan',
                    'Menyuruhnya diam',
                    'Mendengarkan sampai mereka berhenti sendiri'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Istilah untuk pelanggan yang berhenti berlangganan karena kecewa adalah...',
                options: [
                    'Upselling',
                    'Cross-selling',
                    'Churn',
                    'Retention'
                ],
                correctAnswer: 2
            },
            {
                id: 20,
                question: 'Manakah nada bicara yang paling efektif dalam layanan suara?',
                options: [
                    'Datar dan monoton',
                    'Antusias, jelas, dan tenang',
                    'Sangat keras dan cepat',
                    'Berbisik'
                ],
                correctAnswer: 1
            }
        ]
    },
    {
        id: 'sup-002',
        categoryId: 'support',
        title: 'Technical Support',
        description: 'Kuasai troubleshooting teknis!',
        questionCount: 20,
        questions: [
            // MAKSIMAL 3 SOAL "APA ITU"
            {
                id: 1,
                question: 'Apa itu BIOS pada komputer?',
                options: [
                    'Sistem operasi utama',
                    'Software dasar untuk inisialisasi hardware',
                    'Aplikasi edit gambar',
                    'Virus bawaan'
                ],
                correctAnswer: 1
            },
            {
                id: 2,
                question: 'Apa itu IP Address?',
                options: [
                    'Alamat fisik kantor ISP',
                    'Identitas unik perangkat dalam jaringan',
                    'Kecepatan internet perangkat',
                    'Nama merk perangkat'
                ],
                correctAnswer: 1
            },
            {
                id: 3,
                question: 'Apa itu Safe Mode?',
                options: [
                    'Mode untuk main game berat',
                    'Mode sistem dengan driver minimal untuk perbaikan',
                    'Mode hemat baterai',
                    'Mode tanpa koneksi internet'
                ],
                correctAnswer: 1
            },
            // SOAL SKENARIO & TROUBLESHOOTING
            {
                id: 4,
                question: 'Komputer menyala (kipas berputar) tetapi layar tetap hitam tanpa logo. Langkah pertama adalah...',
                options: [
                    'Ganti harddisk',
                    'Instal ulang Windows',
                    'Cek pemasangan RAM',
                    'Ganti keyboard'
                ],
                correctAnswer: 2
            },
            {
                id: 5,
                question: 'PC mengalami Blue Screen (BSOD) setelah instalasi driver baru. Tindakan perbaikan awal adalah...',
                options: [
                    'Beli PC baru',
                    'Masuk Safe Mode dan Rollback driver tersebut',
                    'Format total',
                    'Abaikan saja'
                ],
                correctAnswer: 1
            },
            {
                id: 6,
                question: 'User tidak bisa mengakses internet padahal ikon Wi-Fi terhubung. Perintah CMD untuk tes koneksi ke Google adalah...',
                options: [
                    'ipconfig',
                    'ping google.com',
                    'dir',
                    'systeminfo'
                ],
                correctAnswer: 1
            },
            {
                id: 7,
                question: 'Laptop terasa sangat panas dan sering mati mendadak saat digunakan. Penyebab paling umum adalah...',
                options: [
                    'Layar terlalu terang',
                    'Debu pada heatsink/fan atau pasta prosesor kering',
                    'Virus iklan',
                    'Kapasitas RAM penuh'
                ],
                correctAnswer: 1
            },
            {
                id: 8,
                question: 'Jika sebuah website bisa diakses via IP tapi tidak bisa via nama domain, maka masalah ada pada...',
                options: [
                    'Local DNS Server',
                    'Power Supply',
                    'Kabel LAN',
                    'VGA Card'
                ],
                correctAnswer: 0
            },
            {
                id: 9,
                question: 'Apa fungsi utama perintah "ipconfig /release" dan "/renew"?',
                options: [
                    'Menghapus virus jaringan',
                    'Memperbarui konfigurasi alamat IP dari DHCP',
                    'Menambah kecepatan internet',
                    'Mematikan firewall'
                ],
                correctAnswer: 1
            },
            {
                id: 10,
                question: 'Printer terdeteksi "Ready" di komputer tetapi tidak mau mencetak. Langkah troubleshooting pertama adalah...',
                options: [
                    'Bongkar printer',
                    'Cek antrian dokumen (Print Queue) dan restart spooler',
                    'Ganti tinta baru',
                    'Beli printer baru'
                ],
                correctAnswer: 1
            },
            {
                id: 11,
                question: 'Manakah yang merupakan ciri utama kerusakan pada Harddisk (HDD)?',
                options: [
                    'Warna layar berubah',
                    'Suara klik/ketukan keras dari dalam casing',
                    'Keyboard tidak mengetik',
                    'Mouse bergerak lambat'
                ],
                correctAnswer: 1
            },
            {
                id: 12,
                question: 'Fungsi utama dari penggunaan sistem Firewall pada jaringan adalah...',
                options: [
                    'Mempercepat transfer data',
                    'Menyaring trafik data berdasarkan aturan keamanan',
                    'Menyimpan cache website',
                    'Membagi bandwidth'
                ],
                correctAnswer: 1
            },
            {
                id: 13,
                question: 'PC sering "Hang" atau macet saat membuka banyak tab browser. Komponen yang kemungkinan perlu di-upgrade adalah...',
                options: [
                    'Power Supply',
                    'RAM',
                    'Monitor',
                    'Speaker'
                ],
                correctAnswer: 1
            },
            {
                id: 14,
                question: 'Saat melakukan troubleshooting jarak jauh (Remote), hal paling penting yang harus dipastikan adalah...',
                options: [
                    'Komputer user memiliki akses internet',
                    'User memiliki printer',
                    'User adalah ahli IT',
                    'Versi Windows terbaru'
                ],
                correctAnswer: 0
            },
            {
                id: 15,
                question: 'Apa kegunaan utama dari melakukan "Defragmentation" pada drive tipe HDD?',
                options: [
                    'Menghapus file duplikat',
                    'Menyusun ulang fragmen file agar akses data lebih cepat',
                    'Mengubah HDD menjadi SSD',
                    'Membersihkan debu software'
                ],
                correctAnswer: 1
            },
            {
                id: 16,
                question: 'Sebuah perangkat baru tidak terbaca oleh Windows. Di bagian mana Anda memeriksa status driver-nya?',
                options: [
                    'Task Manager',
                    'Device Manager',
                    'File Explorer',
                    'Registry Editor'
                ],
                correctAnswer: 1
            },
            {
                id: 17,
                question: 'Apa perbedaan mendasar antara HTTP dan HTTPS?',
                options: [
                    'HTTPS lebih lambat',
                    'HTTPS menggunakan enkripsi (SSL/TLS)',
                    'HTTP khusus untuk gambar',
                    'Tidak ada perbedaan'
                ],
                correctAnswer: 1
            },
            {
                id: 18,
                question: 'Mengapa teknisi dilarang membuka power supply (PSU) yang sedang rusak tanpa keahlian khusus?',
                options: [
                    'Takut kehilangan garansi',
                    'Adanya risiko sengatan listrik dari kapasitor bertegangan tinggi',
                    'Komponennya terlalu kecil',
                    'Tidak ada baut'
                ],
                correctAnswer: 1
            },
            {
                id: 19,
                question: 'Metode "Ping" memberikan respon "Request Timed Out" (RTO). Ini berarti...',
                options: [
                    'Koneksi sangat cepat',
                    'Data tidak sampai ke tujuan atau diblokir',
                    'Kabel sudah benar',
                    'IP tujuan aktif'
                ],
                correctAnswer: 1
            },
            {
                id: 20,
                question: 'Apa fungsi utama dari protokol DHCP di sebuah router?',
                options: [
                    'Membatasi kecepatan internet',
                    'Alokasi alamat IP secara otomatis ke klien',
                    'Memblokir situs porno',
                    'Menambah jumlah port LAN'
                ],
                correctAnswer: 1
            }
        ]
    }
];
function getCategoryById(id) {
    return quizCategories.find((cat)=>cat.id === id);
}
function getTopicById(id) {
    return quizTopics.find((topic)=>topic.id === id);
}
function getTopicsByCategory(categoryId) {
    return quizTopics.filter((topic)=>topic.categoryId === categoryId);
}
function getAllTopics() {
    return quizTopics;
}
function getQuestionsByTopic(topicId) {
    const topic = getTopicById(topicId);
    return topic ? topic.questions : [];
}
function getQuestionsByTopicAndCount(topicId, count) {
    const questions = getQuestionsByTopic(topicId);
    return questions.slice(0, Math.min(count, questions.length));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/gameSession.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Game Session Manager
 * Manages game session state using localStorage for host-player synchronization.
 * In a real app, this would use WebSockets or a backend API.
 */ __turbopack_context__.s([
    "clearCurrentPlayer",
    ()=>clearCurrentPlayer,
    "clearGameSession",
    ()=>clearGameSession,
    "createGameSession",
    ()=>createGameSession,
    "endGameSession",
    ()=>endGameSession,
    "getCurrentPlayer",
    ()=>getCurrentPlayer,
    "getGameSession",
    ()=>getGameSession,
    "getSessionByCode",
    ()=>getSessionByCode,
    "getSessionPlayers",
    ()=>getSessionPlayers,
    "hasGameFinished",
    ()=>hasGameFinished,
    "hasGameStarted",
    ()=>hasGameStarted,
    "joinGameSession",
    ()=>joinGameSession,
    "setCurrentPlayer",
    ()=>setCurrentPlayer,
    "startGameSession",
    ()=>startGameSession,
    "updateGameSession",
    ()=>updateGameSession,
    "updatePlayerProgress",
    ()=>updatePlayerProgress,
    "updatePlayerSpacecraft",
    ()=>updatePlayerSpacecraft,
    "validateGameCode",
    ()=>validateGameCode
]);
// Session storage keys
const SESSION_KEY = 'cosmicquest_game_session';
const PLAYERS_KEY = 'cosmicquest_session_players';
function createGameSession(gameCode, hostName, topicId, topicTitle, selectedQuestions, difficulty) {
    const session = {
        gameCode,
        hostName,
        topicId,
        topicTitle,
        selectedQuestions,
        difficulty,
        status: 'waiting',
        createdAt: Date.now(),
        startedAt: null
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    localStorage.setItem(PLAYERS_KEY, JSON.stringify([]));
    return session;
}
function getGameSession() {
    const sessionData = localStorage.getItem(SESSION_KEY);
    if (!sessionData) return null;
    try {
        return JSON.parse(sessionData);
    } catch (e) {
        return null;
    }
}
function updateGameSession(updates) {
    const session = getGameSession();
    if (!session) return null;
    const updatedSession = {
        ...session,
        ...updates
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(updatedSession));
    return updatedSession;
}
function startGameSession() {
    return updateGameSession({
        status: 'playing',
        startedAt: Date.now()
    });
}
function endGameSession() {
    return updateGameSession({
        status: 'finished'
    });
}
function clearGameSession() {
    localStorage.removeItem(SESSION_KEY);
    localStorage.removeItem(PLAYERS_KEY);
}
function validateGameCode(code) {
    const session = getGameSession();
    return session !== null && session.gameCode === code && session.status === 'waiting';
}
function getSessionByCode(code) {
    const session = getGameSession();
    if (session && session.gameCode === code) {
        return session;
    }
    return null;
}
function joinGameSession(gameCode, username, spacecraft) {
    const session = getSessionByCode(gameCode);
    if (!session) return null;
    const players = getSessionPlayers();
    // Check if player already exists
    const existingPlayer = players.find((p)=>p.username === username);
    if (existingPlayer) {
        // Update spacecraft if changed
        existingPlayer.spacecraft = spacecraft;
        saveSessionPlayers(players);
        return existingPlayer;
    }
    const newPlayer = {
        id: "player-".concat(Date.now(), "-").concat(Math.random().toString(36).substr(2, 9)),
        username,
        spacecraft,
        progress: 0,
        questionsAnswered: 0,
        totalQuestions: session.selectedQuestions,
        score: 0,
        isHost: false,
        joinedAt: Date.now()
    };
    players.push(newPlayer);
    saveSessionPlayers(players);
    return newPlayer;
}
function getSessionPlayers() {
    const playersData = localStorage.getItem(PLAYERS_KEY);
    if (!playersData) return [];
    try {
        return JSON.parse(playersData);
    } catch (e) {
        return [];
    }
}
// Save session players
function saveSessionPlayers(players) {
    localStorage.setItem(PLAYERS_KEY, JSON.stringify(players));
}
function updatePlayerProgress(playerId, progress, questionsAnswered, score) {
    const players = getSessionPlayers();
    const playerIndex = players.findIndex((p)=>p.id === playerId);
    if (playerIndex !== -1) {
        players[playerIndex] = {
            ...players[playerIndex],
            progress,
            questionsAnswered,
            score
        };
        saveSessionPlayers(players);
    }
}
function updatePlayerSpacecraft(playerId, spacecraft) {
    const players = getSessionPlayers();
    const playerIndex = players.findIndex((p)=>p.id === playerId);
    if (playerIndex !== -1) {
        players[playerIndex].spacecraft = spacecraft;
        saveSessionPlayers(players);
    }
}
function hasGameStarted() {
    const session = getGameSession();
    return session !== null && session.status === 'playing';
}
function hasGameFinished() {
    const session = getGameSession();
    return session !== null && session.status === 'finished';
}
function getCurrentPlayer() {
    const playerData = localStorage.getItem('cosmicquest_current_player');
    if (!playerData) return null;
    try {
        return JSON.parse(playerData);
    } catch (e) {
        return null;
    }
}
function setCurrentPlayer(player) {
    localStorage.setItem('cosmicquest_current_player', JSON.stringify(player));
}
function clearCurrentPlayer() {
    localStorage.removeItem('cosmicquest_current_player');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/join/hangar/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinHangarPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/data.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/quizData.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameSession.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function JoinHangarPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { gameState, setGameState, showLoading, hideLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    // Redirect if no player name
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinHangarPage.useEffect": ()=>{
            if (!gameState.playerName) {
                router.push('/');
            }
        }
    }["JoinHangarPage.useEffect"], [
        gameState.playerName,
        router
    ]);
    const selectSpaceship = (shipId)=>{
        const ship = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceships"].find((s)=>s.id === shipId);
        if (ship) {
            setGameState((prev)=>({
                    ...prev,
                    selectedSpaceship: ship
                }));
        }
    };
    const joinAndWait = ()=>{
        // Get game code from localStorage
        const gameCode = localStorage.getItem('cosmicquest_joined_game_code');
        if (!gameCode) {
            alert('No game code found. Please enter from home page.');
            router.push('/');
            return;
        }
        // Join the game session
        const player = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["joinGameSession"])(gameCode, gameState.playerName, gameState.selectedSpaceship);
        if (!player) {
            alert('Failed to join game. The session may have ended.');
            router.push('/');
            return;
        }
        // Save current player
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setCurrentPlayer"])(player);
        // Prepare questions for when game starts
        let questions;
        if (gameState.selectedTopicId) {
            const topicQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$quizData$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getQuestionsByTopicAndCount"])(gameState.selectedTopicId, gameState.selectedQuestions);
            questions = topicQuestions.map((q)=>({
                    ...q,
                    difficulty: gameState.selectedDifficulty
                })).sort(()=>Math.random() - 0.5);
        } else {
            const allQuestions = __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["quizQuestions"][gameState.selectedDifficulty];
            const shuffled = [
                ...allQuestions
            ].sort(()=>Math.random() - 0.5);
            questions = shuffled.slice(0, gameState.selectedQuestions);
        }
        setGameState((prev)=>({
                ...prev,
                questions,
                currentQuestionIndex: 0,
                score: 0,
                correctAnswers: 0,
                miniGamesCompleted: 0
            }));
        showLoading();
        setTimeout(()=>{
            router.push('/join/waiting');
            hideLoading();
        }, 500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "screen-hangar",
        className: "screen active",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-panel wide",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "section-title",
                        children: "Select Your Spacecraft"
                    }, void 0, false, {
                        fileName: "[project]/app/join/hangar/page.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "subtitle",
                        children: "Choose your spacecraft for the mission"
                    }, void 0, false, {
                        fileName: "[project]/app/join/hangar/page.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "spaceship-grid",
                        id: "spaceship-grid",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["spaceships"].map((ship)=>{
                            var _gameState_selectedSpaceship;
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "spaceship-card ".concat(((_gameState_selectedSpaceship = gameState.selectedSpaceship) === null || _gameState_selectedSpaceship === void 0 ? void 0 : _gameState_selectedSpaceship.id) === ship.id ? 'selected' : ''),
                                onClick: ()=>selectSpaceship(ship.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: ship.image,
                                        alt: ship.name,
                                        className: "spaceship-image"
                                    }, void 0, false, {
                                        fileName: "[project]/app/join/hangar/page.tsx",
                                        lineNumber: 103,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "spaceship-name",
                                        style: {
                                            color: ship.color
                                        },
                                        children: ship.name
                                    }, void 0, false, {
                                        fileName: "[project]/app/join/hangar/page.tsx",
                                        lineNumber: 104,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, ship.id, true, {
                                fileName: "[project]/app/join/hangar/page.tsx",
                                lineNumber: 98,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/app/join/hangar/page.tsx",
                        lineNumber: 96,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "btn-primary",
                        id: "btn-start-quiz",
                        onClick: joinAndWait,
                        disabled: !gameState.selectedSpaceship,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Join & Wait"
                            }, void 0, false, {
                                fileName: "[project]/app/join/hangar/page.tsx",
                                lineNumber: 115,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "btn-glow"
                            }, void 0, false, {
                                fileName: "[project]/app/join/hangar/page.tsx",
                                lineNumber: 116,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/join/hangar/page.tsx",
                        lineNumber: 109,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/join/hangar/page.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/join/hangar/page.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/join/hangar/page.tsx",
        lineNumber: 90,
        columnNumber: 9
    }, this);
}
_s(JoinHangarPage, "24+I0US9Apc+egZ4jp+F9ApBkAQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = JoinHangarPage;
var _c;
__turbopack_context__.k.register(_c, "JoinHangarPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_edb8ea73._.js.map