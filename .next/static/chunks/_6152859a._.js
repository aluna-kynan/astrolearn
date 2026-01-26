(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/context/GameContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GameProvider",
    ()=>GameProvider,
    "initialGameState",
    ()=>initialGameState,
    "useGame",
    ()=>useGame
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// Initial State
const initialGameState = {
    playerName: '',
    selectedTopicId: null,
    topicTitle: '',
    selectedQuestions: 10,
    selectedDifficulty: 'easy',
    selectedSpaceship: null,
    currentQuestionIndex: 0,
    score: 0,
    correctAnswers: 0,
    questions: [],
    miniGamesCompleted: 0,
    gameStats: {
        hits: 0,
        asteroidsDestroyed: 0,
        gameScore: 0,
        bossDestroyed: false,
        success: false
    },
    isEliminated: false
};
// Create Context
const GameContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function GameProvider(param) {
    let { children } = param;
    _s();
    const [gameState, setGameState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialGameState);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const showLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[showLoading]": ()=>{
            setIsLoading(true);
        }
    }["GameProvider.useCallback[showLoading]"], []);
    const hideLoading = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[hideLoading]": ()=>{
            setTimeout({
                "GameProvider.useCallback[hideLoading]": ()=>setIsLoading(false)
            }["GameProvider.useCallback[hideLoading]"], 300);
        }
    }["GameProvider.useCallback[hideLoading]"], []);
    const resetGame = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "GameProvider.useCallback[resetGame]": ()=>{
            setGameState(initialGameState);
        }
    }["GameProvider.useCallback[resetGame]"], []);
    const value = {
        gameState,
        setGameState,
        isLoading,
        showLoading,
        hideLoading,
        resetGame
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GameContext.Provider, {
        value: value,
        children: children
    }, void 0, false, {
        fileName: "[project]/context/GameContext.tsx",
        lineNumber: 98,
        columnNumber: 9
    }, this);
}
_s(GameProvider, "7iTvqEbB/0uyb1UbkrhpuPNiJYk=");
_c = GameProvider;
function useGame() {
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(GameContext);
    if (context === undefined) {
        throw new Error('useGame must be used within a GameProvider');
    }
    return context;
}
_s1(useGame, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
;
var _c;
__turbopack_context__.k.register(_c, "GameProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/ClientLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientLayout",
    ()=>ClientLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/GameContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ClientLayout(param) {
    let { children } = param;
    _s();
    const { isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const customCursorRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const fallingAsteroidsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize custom cursor and falling asteroids
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            // Custom cursor
            const customCursor = document.createElement('div');
            customCursor.className = 'custom-cursor';
            customCursor.innerHTML = '<div class="cursor-asteroid"></div>';
            document.body.appendChild(customCursor);
            customCursorRef.current = customCursor;
            const handleMouseMove = {
                "ClientLayout.useEffect.handleMouseMove": (e)=>{
                    customCursor.style.left = e.clientX + 'px';
                    customCursor.style.top = e.clientY + 'px';
                }
            }["ClientLayout.useEffect.handleMouseMove"];
            document.addEventListener('mousemove', handleMouseMove);
            // Falling asteroids container
            const fallingAsteroidsContainer = document.createElement('div');
            fallingAsteroidsContainer.className = 'falling-asteroids';
            document.body.appendChild(fallingAsteroidsContainer);
            fallingAsteroidsRef.current = fallingAsteroidsContainer;
            const createFallingAsteroid = {
                "ClientLayout.useEffect.createFallingAsteroid": ()=>{
                    const asteroid = document.createElement('div');
                    asteroid.className = 'asteroid';
                    const size = Math.random() * 15 + 5;
                    asteroid.style.width = size + 'px';
                    asteroid.style.height = size + 'px';
                    asteroid.style.left = Math.random() * 100 + '%';
                    asteroid.style.animationDuration = Math.random() * 10 + 15 + 's';
                    asteroid.style.animationDelay = Math.random() * 5 + 's';
                    fallingAsteroidsContainer.appendChild(asteroid);
                    setTimeout({
                        "ClientLayout.useEffect.createFallingAsteroid": ()=>{
                            asteroid.remove();
                        }
                    }["ClientLayout.useEffect.createFallingAsteroid"], (parseFloat(asteroid.style.animationDuration) + parseFloat(asteroid.style.animationDelay)) * 1000);
                }
            }["ClientLayout.useEffect.createFallingAsteroid"];
            // Create initial asteroids
            for(let i = 0; i < 10; i++){
                createFallingAsteroid();
            }
            // Create new asteroids periodically
            const asteroidInterval = setInterval(createFallingAsteroid, 2000);
            // Cleanup
            return ({
                "ClientLayout.useEffect": ()=>{
                    document.removeEventListener('mousemove', handleMouseMove);
                    clearInterval(asteroidInterval);
                    customCursor.remove();
                    fallingAsteroidsContainer.remove();
                }
            })["ClientLayout.useEffect"];
        }
    }["ClientLayout.useEffect"], []);
    // Hide cursor when mini-game is active
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ClientLayout.useEffect": ()=>{
            if (customCursorRef.current) {
                customCursorRef.current.style.display = pathname === '/game' ? 'none' : 'block';
            }
        }
    }["ClientLayout.useEffect"], [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "loading-overlay ".concat(!isLoading ? 'hidden' : ''),
                id: "loading-overlay",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/assets/loading.gif",
                        alt: "Loading",
                        className: "loading-gif"
                    }, void 0, false, {
                        fileName: "[project]/app/ClientLayout.tsx",
                        lineNumber: 84,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loading-text",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/app/ClientLayout.tsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 83,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stars"
            }, void 0, false, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 89,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stars2"
            }, void 0, false, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 90,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "stars3"
            }, void 0, false, {
                fileName: "[project]/app/ClientLayout.tsx",
                lineNumber: 91,
                columnNumber: 13
            }, this),
            children
        ]
    }, void 0, true);
}
_s(ClientLayout, "RTZpIX37qY0kn4qwIG7x7VoqYTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ClientLayout;
var _c;
__turbopack_context__.k.register(_c, "ClientLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_6152859a._.js.map