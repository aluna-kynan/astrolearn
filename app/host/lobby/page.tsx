'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { QRCodeSVG } from 'qrcode.react';
import { useGame } from '@/context/GameContext';
import { generateGameCode } from '@/lib/mockPlayers';
import { GameCodeDialog } from '@/app/components/ui/GameCodeDialog';
import {
    createGameSession,
    getSessionPlayers,
    startGameSession,
    clearGameSession,
    GamePlayer
} from '@/lib/gameSession';

export default function HostLobbyPage(): React.JSX.Element {
    const router = useRouter();
    const { gameState } = useGame();
    const [gameCode, setGameCode] = useState<string>('');
    const [players, setPlayers] = useState<GamePlayer[]>([]);
    const [showQRDialog, setShowQRDialog] = useState<boolean>(false);
    const [copySuccess, setCopySuccess] = useState<boolean>(false);
    const [joinUrl, setJoinUrl] = useState<string>('');

    // Set joinUrl on client side only
    useEffect(() => {
        setJoinUrl(`${window.location.origin}/?code=${gameCode}`);
    }, [gameCode]);

    // Create game session on mount
    useEffect(() => {
        const code = generateGameCode();
        setGameCode(code);

        // Create the game session
        createGameSession(
            code,
            gameState.playerName || 'Host',
            gameState.selectedTopicId,
            gameState.topicTitle || 'Quiz',
            gameState.selectedQuestions || 10,
            gameState.selectedDifficulty || 'medium'
        );

        // Cleanup on unmount
        return () => {
            // Note: Don't clear session here as we might be navigating to monitor
        };
    }, [gameState]);

    // Poll for players joining
    useEffect(() => {
        const pollInterval = setInterval(() => {
            const sessionPlayers = getSessionPlayers();
            setPlayers(sessionPlayers);
        }, 1000); // Poll every second

        return () => clearInterval(pollInterval);
    }, []);

    const handleCopyCode = async () => {
        try {
            await navigator.clipboard.writeText(gameCode);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Join Astro Learning',
                    text: `Join my Astro Learning game with code: ${gameCode}`,
                    url: joinUrl
                });
            } catch (err) {
                console.error('Share failed:', err);
            }
        } else {
            handleCopyCode();
        }
    };

    const handleEndSession = () => {
        if (confirm('Are you sure you want to end this session?')) {
            clearGameSession();
            router.push('/');
        }
    };

    const handleLaunch = () => {
        if (players.length === 0) {
            if (!confirm('No players have joined. Launch anyway?')) {
                return;
            }
        }

        // Start the game session
        startGameSession();
        router.push('/host/monitor');
    };

    return (
        <section className="host-lobby-screen">
            {/* Header */}
            <header className="host-header">
                <div className="host-brand">
                    <div className="brand-text">
                        <h1 className="brand-title">ASTRO LEARNING</h1>
                    </div>
                </div>
                <div className="host-actions">
                    <button className="btn-end-session" onClick={handleEndSession}>
                        <span className="btn-icon">⏻</span>
                        <span>EXIT</span>
                    </button>
                    <button className="btn-launch" onClick={handleLaunch}>
                        <span>START</span>
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <div className="host-lobby-content">
                {/* Left Panel - Player Grid */}
                <div className="host-left-panel">
                    <div className="panel-header">
                        <h2 className="panel-title">WAITING FOR OTHER PLAYERS</h2>
                        <div className="connected-count">
                            <span className="count-label">QUIZ:</span>
                            <span className="count-value">{gameState.topicTitle || 'General'}</span>
                        </div>
                        <div className="connected-count">
                            <span className="count-label">QUESTIONS:</span>
                            <span className="count-value">{gameState.selectedQuestions || 10}</span>
                        </div>
                        <div className="connected-count">
                            <span className="count-label">DIFFICULTY:</span>
                            <span className="count-value">{(gameState.selectedDifficulty || 'medium').toUpperCase()}</span>
                        </div>
                    </div>

                    <div className="player-grid">
                        {players.map((player) => (
                            <div key={player.id} className="player-card">
                                <div className="player-icon">
                                    {player.spacecraft ? (
                                        <img
                                            src={player.spacecraft.image}
                                            alt={player.spacecraft.name}
                                            style={{ width: '40px', height: '30px', objectFit: 'contain' }}
                                        />
                                    ) : '🚀'}
                                </div>
                                <span className="player-name">{player.username}</span>
                            </div>
                        ))}
                        {/* Empty slots */}
                        {Array.from({ length: Math.max(0, 12 - players.length) }).map((_, i) => (
                            <div key={`empty-${i}`} className="player-card empty">
                                <span className="empty-icon">+</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Panel - Game Code & QR */}
                <div className="host-right-panel">
                    <div className="game-code-section">
                        <div className="game-code-display">
                            <span className="game-code">{gameCode}</span>
                        </div>
                        <div className="code-actions">
                            <button
                                className={`btn-code-action w-full ${copySuccess ? 'success' : ''}`}
                                onClick={handleCopyCode}
                            >
                                <span>{copySuccess ? 'COPIED!' : 'COPY'}</span>
                            </button>
                        </div>
                    </div>

                    <div className="qr-section">
                        <div className="qr-container" onClick={() => setShowQRDialog(true)}>
                            <div className="qr-frame">
                                <div className="qr-corner top-left"></div>
                                <div className="qr-corner top-right"></div>
                                <div className="qr-corner bottom-left"></div>
                                <div className="qr-corner bottom-right"></div>
                                <QRCodeSVG
                                    value={joinUrl}
                                    size={160}
                                    bgColor="transparent"
                                    fgColor="#46a7bb"
                                    level="H"
                                />
                            </div>
                        </div>
                    </div>


                </div>
            </div>



            {/* QR Dialog */}
            <GameCodeDialog
                isOpen={showQRDialog}
                onClose={() => setShowQRDialog(false)}
                gameCode={gameCode}
                joinUrl={joinUrl}
            />
        </section>
    );
}
