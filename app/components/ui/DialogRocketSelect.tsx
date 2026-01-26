'use client';

import React from 'react';
import { spaceships, Spaceship } from '@/lib/data';

interface DialogRocketSelectProps {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (spaceship: Spaceship) => void;
    currentSpaceship: Spaceship | null;
}

export function DialogRocketSelect({
    isOpen,
    onClose,
    onSelect,
    currentSpaceship
}: DialogRocketSelectProps): React.JSX.Element | null {
    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    const handleSelect = (ship: Spaceship) => {
        onSelect(ship);
        onClose();
    };

    return (
        <div className="dialog-overlay" onClick={handleBackdropClick}>
            <div className="dialog-content rocket-dialog">
                <button className="dialog-close" onClick={onClose}>
                    <span>✕</span>
                </button>

                <h2 className="dialog-title">REFIT SPACECRAFT</h2>
                <p className="dialog-subtitle">Select your new vessel for the mission</p>

                <div className="rocket-select-grid">
                    {spaceships.map(ship => (
                        <div
                            key={ship.id}
                            className={`rocket-select-card ${currentSpaceship?.id === ship.id ? 'selected' : ''}`}
                            onClick={() => handleSelect(ship)}
                        >
                            <div className="rocket-image-container">
                                <img src={ship.image} alt={ship.name} className="rocket-image" />
                            </div>
                            <div className="rocket-info">
                                <span className="rocket-name" style={{ color: ship.color }}>{ship.name}</span>
                                <span className="rocket-desc">{ship.description}</span>
                            </div>
                            {currentSpaceship?.id === ship.id && (
                                <div className="current-badge">CURRENT</div>
                            )}
                        </div>
                    ))}
                </div>

                <button className="btn-dialog-cancel" onClick={onClose}>
                    <span>CANCEL</span>
                </button>
            </div>
        </div>
    );
}
