module.exports = [
"[project]/lib/miniGame.ts [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

const e = new Error("Could not parse module '[project]/lib/miniGame.ts'\n\n'import', and 'export' cannot be used outside of module code");
e.code = 'MODULE_UNPARSABLE';
throw e;
}),
"[project]/app/join/game/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/GameContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$miniGame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/miniGame.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function GamePage() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { gameState, setGameState, showLoading, hideLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$GameContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGame"])();
    const handleGameComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((stats)=>{
        setGameState((prev)=>({
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
            }));
        showLoading();
        setTimeout(()=>{
            // If player is eliminated, go directly to results
            if (stats.isEliminated) {
                router.push('/join/results');
            } else if (gameState.currentQuestionIndex < gameState.selectedQuestions) {
                router.push('/join/quiz');
            } else {
                router.push('/join/results');
            }
            hideLoading();
        }, 500);
    }, [
        gameState.currentQuestionIndex,
        gameState.selectedQuestions,
        router,
        setGameState,
        showLoading,
        hideLoading
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!gameState.selectedSpaceship) {
            router.push('/join/hangar');
            return;
        }
        const initTimeout = setTimeout(()=>{
            if (gameState.selectedSpaceship) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$miniGame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["startMiniGame"])(gameState.selectedSpaceship, gameState.selectedDifficulty, handleGameComplete);
            }
        }, 600);
        return ()=>{
            clearTimeout(initTimeout);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$miniGame$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cleanupMiniGame"])();
        };
    }, [
        gameState.selectedSpaceship,
        gameState.selectedDifficulty,
        handleGameComplete,
        router
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        id: "screen-minigame",
        className: "screen active game-fullscreen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
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
}),
];

//# sourceMappingURL=_25a5f12c._.js.map