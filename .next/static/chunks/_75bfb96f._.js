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
        hasBoss: true,
        bossHP: 25000,
        bossSize: 100,
        gameDuration: 9999
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
        hasBoss: true,
        bossHP: 35000,
        bossSize: 120,
        gameDuration: 9999
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
        bossHP: 85000,
        bossSize: 140,
        gameDuration: 9999
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
"[project]/lib/miniGame.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/lib/miniGame.ts'\n\nExpression expected");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/join/game/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$miniGame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/miniGame.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function GamePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { gameState, setGameState, showLoading, hideLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const handleGameComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GamePage.useCallback[handleGameComplete]": (stats)=>{
            setGameState({
                "GamePage.useCallback[handleGameComplete]": (prev)=>({
                        ...prev,
                        miniGamesCompleted: stats.success ? prev.miniGamesCompleted + 1 : prev.miniGamesCompleted,
                        score: prev.score + stats.score,
                        gameStats: {
                            hits: stats.hits,
                            asteroidsDestroyed: stats.asteroidsDestroyed,
                            gameScore: stats.score,
                            bossDestroyed: stats.bossDestroyed,
                            success: stats.success
                        },
                        isEliminated: stats.isEliminated
                    })
            }["GamePage.useCallback[handleGameComplete]"]);
            showLoading();
            setTimeout({
                "GamePage.useCallback[handleGameComplete]": ()=>{
                    // If player is eliminated, go directly to results
                    if (stats.isEliminated) {
                        router.push('/join/results');
                    } else if (gameState.currentQuestionIndex < gameState.selectedQuestions) {
                        router.push('/join/quiz');
                    } else {
                        router.push('/join/results');
                    }
                    hideLoading();
                }
            }["GamePage.useCallback[handleGameComplete]"], 500);
        }
    }["GamePage.useCallback[handleGameComplete]"], [
        gameState.currentQuestionIndex,
        gameState.selectedQuestions,
        router,
        setGameState,
        showLoading,
        hideLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GamePage.useEffect": ()=>{
            if (!gameState.selectedSpaceship) {
                router.push('/join/hangar');
                return;
            }
            const initTimeout = setTimeout({
                "GamePage.useEffect.initTimeout": ()=>{
                    if (gameState.selectedSpaceship) {
                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$miniGame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startMiniGame"])(gameState.selectedSpaceship, gameState.selectedDifficulty, handleGameComplete);
                    }
                }
            }["GamePage.useEffect.initTimeout"], 600);
            return ({
                "GamePage.useEffect": ()=>{
                    clearTimeout(initTimeout);
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$miniGame$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cleanupMiniGame"])();
                }
            })["GamePage.useEffect"];
        }
    }["GamePage.useEffect"], [
        gameState.selectedSpaceship,
        gameState.selectedDifficulty,
        handleGameComplete,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "screen-minigame",
        className: "screen active game-fullscreen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            id: "minigame-canvas"
        }, void 0, false, {
            fileName: "[project]/app/join/game/page.tsx",
            lineNumber: 65,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/join/game/page.tsx",
        lineNumber: 64,
        columnNumber: 9
    }, this);
}
_s(GamePage, "t/JDnOjOp89EyoGL3j4uA31h/lU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = GamePage;
var _c;
__turbopack_context__.k.register(_c, "GamePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/@swc/helpers/esm/_define_property.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_",
    ()=>_define_property
]);
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else obj[key] = value;
    return obj;
}
;
}),
]);

//# sourceMappingURL=_75bfb96f._.js.map