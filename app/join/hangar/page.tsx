'use client';

import { useRouter } from 'next/navigation';
import { useGame } from '@/context/GameContext';
import { spaceships, quizQuestions } from '@/lib/data';
import { getQuestionsByTopicAndCount } from '@/lib/quizData';
import { useEffect } from 'react';
import { joinGameSession, setCurrentPlayer } from '@/lib/gameSession';

export default function JoinHangarPage(): React.JSX.Element {
    const router = useRouter();
    const { gameState, setGameState, showLoading, hideLoading } = useGame();

    // Redirect if no player name
    useEffect(() => {
        if (!gameState.playerName) {
            router.push('/');
        }
    }, [gameState.playerName, router]);

    const selectSpaceship = (shipId: number): void => {
        const ship = spaceships.find(s => s.id === shipId);
        if (ship) {
            setGameState(prev => ({ ...prev, selectedSpaceship: ship }));
        }
    };

    const joinAndWait = (): void => {
        // Get game code from localStorage
        const gameCode = localStorage.getItem('cosmicquest_joined_game_code');

        if (!gameCode) {
            alert('No game code found. Please enter from home page.');
            router.push('/');
            return;
        }

        // Join the game session
        const player = joinGameSession(
            gameCode,
            gameState.playerName,
            gameState.selectedSpaceship
        );

        if (!player) {
            alert('Failed to join game. The session may have ended.');
            router.push('/');
            return;
        }

        // Save current player
        setCurrentPlayer(player);

        // Prepare questions for when game starts
        let questions;
        if (gameState.selectedTopicId) {
            const topicQuestions = getQuestionsByTopicAndCount(
                gameState.selectedTopicId,
                gameState.selectedQuestions
            );
            questions = topicQuestions
                .map(q => ({
                    ...q,
                    difficulty: gameState.selectedDifficulty
                }))
                .sort(() => Math.random() - 0.5);
        } else {
            const allQuestions = quizQuestions[gameState.selectedDifficulty];
            const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
            questions = shuffled.slice(0, gameState.selectedQuestions);
        }

        setGameState(prev => ({
            ...prev,
            questions,
            currentQuestionIndex: 0,
            score: 0,
            correctAnswers: 0,
            miniGamesCompleted: 0
        }));

        showLoading();
        setTimeout(() => {
            router.push('/join/waiting');
            hideLoading();
        }, 500);
    };

    return (
        <section id="screen-hangar" className="screen active">
            <div className="container">
                <div className="glass-panel wide">
                    <h2 className="section-title">Select Your Spacecraft</h2>
                    <p className="subtitle">Choose your spacecraft for the mission</p>

                    <div className="spaceship-grid" id="spaceship-grid">
                        {spaceships.map(ship => (
                            <div
                                key={ship.id}
                                className={`spaceship-card ${gameState.selectedSpaceship?.id === ship.id ? 'selected' : ''}`}
                                onClick={() => selectSpaceship(ship.id)}
                            >
                                <img src={ship.image} alt={ship.name} className="spaceship-image" />
                                <div className="spaceship-name" style={{ color: ship.color }}>{ship.name}</div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="btn-primary"
                        id="btn-start-quiz"
                        onClick={joinAndWait}
                        disabled={!gameState.selectedSpaceship}
                    >
                        <span>Join & Wait</span>
                        <div className="btn-glow"></div>
                    </button>
                </div>
            </div>
        </section>
    );
}
