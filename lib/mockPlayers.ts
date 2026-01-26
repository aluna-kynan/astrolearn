import { Spaceship, spaceships } from './data';

// Player icons for variety
const playerIcons = [
    '🚀', '🛸', '🛰️', '✨', '🌟', '🌠', '💫', '⭐', '🔮', '🌙',
    '☄️', '🪐', '🌍', '🌌', '🎮'
];

// Player username prefixes and suffixes
const namePrefixes = [
    'COMMANDER', 'ORION', 'AEGIS', 'VOYAGER', 'XENO',
    'ASTRO', 'ZENITH', 'GLOBE', 'NOVA', 'STELLAR',
    'COSMIC', 'NEBULA', 'QUANTUM', 'VORTEX', 'ECLIPSE'
];

const nameSuffixes = [
    'PRIME', 'X', 'ALPHA', 'SEEKER', 'TECH',
    'KID', 'FLIGHT', 'TROT', 'WAVE', 'STORM'
];

export interface MockPlayer {
    id: string;
    username: string;
    icon: string;
    iconColor: string;
    spacecraft: Spaceship | null;
    progress: number; // 0-100% quiz completion
    questionsAnswered: number;
    totalQuestions: number;
    score: number;
    isCurrentUser?: boolean;
}

// Color palette for player icons
const iconColors = [
    '#00d4ff', // cyan
    '#ff6b6b', // coral
    '#06ffa5', // green
    '#ffd93d', // yellow
    '#9d4edd', // purple
    '#ff006e', // pink
    '#00b4d8', // teal
    '#ff9e00', // orange
];

// Generate a random username
function generateUsername(): string {
    const prefix = namePrefixes[Math.floor(Math.random() * namePrefixes.length)];
    const suffix = nameSuffixes[Math.floor(Math.random() * nameSuffixes.length)];
    return `${prefix}_${suffix}`;
}

// Generate mock players for lobby/waiting room
export function generateMockPlayers(count: number = 8, includeCurrentUser: boolean = false): MockPlayer[] {
    const players: MockPlayer[] = [];
    const usedNames = new Set<string>();

    for (let i = 0; i < count; i++) {
        let username = generateUsername();
        while (usedNames.has(username)) {
            username = generateUsername();
        }
        usedNames.add(username);

        const spacecraft = i < spaceships.length ? spaceships[i % spaceships.length] : null;

        players.push({
            id: `player-${i + 1}`,
            username: username.length > 12 ? username.substring(0, 12) + '..' : username,
            icon: playerIcons[i % playerIcons.length],
            iconColor: iconColors[i % iconColors.length],
            spacecraft,
            progress: 0,
            questionsAnswered: 0,
            totalQuestions: 10,
            score: 0,
            isCurrentUser: includeCurrentUser && i === 0
        });
    }

    return players;
}

// Generate mock players with progress (for monitor page)
export function generateMockPlayersWithProgress(count: number = 8): MockPlayer[] {
    const players = generateMockPlayers(count);

    return players.map(player => {
        const questionsAnswered = Math.floor(Math.random() * player.totalQuestions);
        const progress = (questionsAnswered / player.totalQuestions) * 100;
        const score = questionsAnswered * Math.floor(Math.random() * 1000 + 500);

        return {
            ...player,
            questionsAnswered,
            progress,
            score
        };
    });
}

// Generate mock players for leaderboard (with final scores)
export function generateMockLeaderboard(count: number = 15): MockPlayer[] {
    const players = generateMockPlayers(count);

    const scoredPlayers = players.map(player => ({
        ...player,
        questionsAnswered: player.totalQuestions,
        progress: 100,
        score: Math.floor(Math.random() * 150000 + 50000)
    }));

    // Sort by score descending
    scoredPlayers.sort((a, b) => b.score - a.score);

    return scoredPlayers;
}

// Rank titles based on position
export function getRankTitle(rank: number): string {
    switch (rank) {
        case 1: return 'FLEET COMMANDER';
        case 2: return 'ELITE PILOT';
        case 3: return 'VETERAN PILOT';
        default: return 'PILOT';
    }
}

// Generate a random game code
export function generateGameCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
}
