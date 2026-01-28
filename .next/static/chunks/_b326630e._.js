(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/miniGame.ts [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/lib/miniGame.ts'\n\n'import', and 'export' cannot be used outside of module code");
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
]);

//# sourceMappingURL=_b326630e._.js.map