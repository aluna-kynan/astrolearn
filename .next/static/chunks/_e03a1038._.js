(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/app/join/results/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JoinResultsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/GameContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameSession.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function JoinResultsPage() {
    var _gameState_selectedSpaceship, _gameState_selectedSpaceship1;
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { gameState, resetGame, showLoading, hideLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"])();
    const [actualRank, setActualRank] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(1);
    // Hide loading overlay when results page loads
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinResultsPage.useEffect": ()=>{
            hideLoading();
        }
    }["JoinResultsPage.useEffect"], [
        hideLoading
    ]);
    // Calculate actual rank from session players
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinResultsPage.useEffect": ()=>{
            const currentPlayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getCurrentPlayer"])();
            if (currentPlayer) {
                const allPlayers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSessionPlayers"])();
                // Sort by score descending
                const sorted = [
                    ...allPlayers
                ].sort({
                    "JoinResultsPage.useEffect.sorted": (a, b)=>b.score - a.score
                }["JoinResultsPage.useEffect.sorted"]);
                // Find current player's rank
                const rank = sorted.findIndex({
                    "JoinResultsPage.useEffect": (p)=>p.id === currentPlayer.id
                }["JoinResultsPage.useEffect"]) + 1;
                setActualRank(rank > 0 ? rank : 1);
            }
        }
    }["JoinResultsPage.useEffect"], []);
    // Redirect if no player name
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JoinResultsPage.useEffect": ()=>{
            if (!gameState.playerName) {
                router.push('/');
            }
        }
    }["JoinResultsPage.useEffect"], [
        gameState.playerName,
        router
    ]);
    const handleRestart = ()=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameSession$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearCurrentPlayer"])();
        localStorage.removeItem('cosmicquest_joined_game_code');
        resetGame();
        showLoading();
        setTimeout(()=>{
            router.push('/');
            hideLoading();
        }, 500);
    };
    // Calculate score per correct answer based on selected questions
    const getScorePerQuestion = ()=>{
        switch(gameState.selectedQuestions){
            case 5:
                return 20;
            case 10:
                return 10;
            case 20:
                return 5;
            default:
                return 10;
        }
    };
    const scorePerQuestion = getScorePerQuestion();
    const quizScore = gameState.correctAnswers * scorePerQuestion;
    // Get ordinal suffix for rank
    const getOrdinal = (n)=>{
        const s = [
            'th',
            'st',
            'nd',
            'rd'
        ];
        const v = n % 100;
        return s[(v - 20) % 10] || s[v] || s[0];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "screen-results",
        className: "screen active",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "results-wrapper",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "result-top-card",
                    children: [
                        ((_gameState_selectedSpaceship = gameState.selectedSpaceship) === null || _gameState_selectedSpaceship === void 0 ? void 0 : _gameState_selectedSpaceship.image) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: gameState.selectedSpaceship.image,
                            alt: "Spaceship",
                            id: "result-character-img",
                            className: "result-spaceship-img"
                        }, void 0, false, {
                            fileName: "[project]/app/join/results/page.tsx",
                            lineNumber: 75,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "result-top-info",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "result-pilot-name",
                                    id: "result-name-display",
                                    children: gameState.playerName || '-'
                                }, void 0, false, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 83,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "result-ship-name",
                                    id: "result-ship",
                                    children: ((_gameState_selectedSpaceship1 = gameState.selectedSpaceship) === null || _gameState_selectedSpaceship1 === void 0 ? void 0 : _gameState_selectedSpaceship1.name) || '-'
                                }, void 0, false, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join/results/page.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/join/results/page.tsx",
                    lineNumber: 73,
                    columnNumber: 17
                }, this),
                gameState.isEliminated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "eliminated-banner",
                    style: {
                        background: 'linear-gradient(135deg, #ff0044, #cc0033)',
                        color: '#ffffff',
                        padding: '15px 30px',
                        borderRadius: '12px',
                        textAlign: 'center',
                        marginBottom: '10px',
                        boxShadow: '0 4px 20px rgba(255, 0, 68, 0.4)'
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        style: {
                            fontSize: '20px',
                            fontWeight: 'bold',
                            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                        },
                        children: "TERELIMINASI"
                    }, void 0, false, {
                        fileName: "[project]/app/join/results/page.tsx",
                        lineNumber: 99,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/join/results/page.tsx",
                    lineNumber: 90,
                    columnNumber: 21
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "result-stats-row",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "result-stat-card rank-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rank-display",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "trophy-icon",
                                            children: "🏆"
                                        }, void 0, false, {
                                            fileName: "[project]/app/join/results/page.tsx",
                                            lineNumber: 108,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "result-stat-value rank-value",
                                            children: gameState.isEliminated ? '-' : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    actualRank,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("sup", {
                                                        children: getOrdinal(actualRank)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/join/results/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 79
                                                    }, this)
                                                ]
                                            }, void 0, true)
                                        }, void 0, false, {
                                            fileName: "[project]/app/join/results/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 107,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result-stat-label",
                                    children: gameState.isEliminated ? 'Eliminated' : 'Rank'
                                }, void 0, false, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 113,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join/results/page.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "result-stat-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result-stat-value",
                                    id: "result-score",
                                    children: quizScore
                                }, void 0, false, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 116,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result-stat-label",
                                    children: "Score"
                                }, void 0, false, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 117,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join/results/page.tsx",
                            lineNumber: 115,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "result-stat-card",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result-stat-value",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            id: "result-correct",
                                            children: gameState.correctAnswers
                                        }, void 0, false, {
                                            fileName: "[project]/app/join/results/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 29
                                        }, this),
                                        "/",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            id: "result-total",
                                            children: gameState.selectedQuestions
                                        }, void 0, false, {
                                            fileName: "[project]/app/join/results/page.tsx",
                                            lineNumber: 121,
                                            columnNumber: 89
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 120,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "result-stat-label",
                                    children: "Correct"
                                }, void 0, false, {
                                    fileName: "[project]/app/join/results/page.tsx",
                                    lineNumber: 123,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/join/results/page.tsx",
                            lineNumber: 119,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/join/results/page.tsx",
                    lineNumber: 105,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "btn-home",
                    onClick: handleRestart,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "HOME"
                    }, void 0, false, {
                        fileName: "[project]/app/join/results/page.tsx",
                        lineNumber: 129,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/join/results/page.tsx",
                    lineNumber: 128,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/join/results/page.tsx",
            lineNumber: 71,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/join/results/page.tsx",
        lineNumber: 70,
        columnNumber: 9
    }, this);
}
_s(JoinResultsPage, "uj0DtP3RxTw9Y50zu/dOdBjxK+o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGame"]
    ];
});
_c = JoinResultsPage;
var _c;
__turbopack_context__.k.register(_c, "JoinResultsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_e03a1038._.js.map