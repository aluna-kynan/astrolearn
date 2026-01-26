'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';

interface GameCodeDialogProps {
    isOpen: boolean;
    onClose: () => void;
    gameCode: string;
    joinUrl: string;
}

export function GameCodeDialog({ isOpen, onClose, gameCode, joinUrl }: GameCodeDialogProps): React.JSX.Element | null {
    const [copySuccess, setCopySuccess] = useState<boolean>(false);

    if (!isOpen) return null;

    const handleCopyLink = async () => {
        try {
            await navigator.clipboard.writeText(joinUrl);
            setCopySuccess(true);
            setTimeout(() => setCopySuccess(false), 2000);
        } catch (err) {
            console.error('Failed to copy link:', err);
        }
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="dialog-overlay" onClick={handleBackdropClick}>
            <div className="dialog-content qr-dialog">
                <button className="dialog-close" onClick={onClose}>
                    <span>✕</span>
                </button>

                <h2 className="dialog-title">QR CODE</h2>
                <p className="dialog-subtitle">Scan to join the mission</p>

                <div className="qr-code-large">
                    <div className="qr-code-frame">
                        <div className="qr-corner top-left"></div>
                        <div className="qr-corner top-right"></div>
                        <div className="qr-corner bottom-left"></div>
                        <div className="qr-corner bottom-right"></div>
                        <QRCodeSVG
                            value={joinUrl}
                            size={280}
                            bgColor="transparent"
                            fgColor="#00d4ff"
                            level="H"
                        />
                    </div>
                </div>

                <div className="game-code-display-large">
                    <span className="code-label">ACCESS KEY</span>
                    <span className="code-value">{gameCode}</span>
                </div>

                <div className="dialog-actions">
                    <div className="url-card-container">
                        <div className="url-card">
                            <span className="url-text">{joinUrl}</span>
                            <button 
                                className={`url-copy-btn ${copySuccess ? 'success' : ''}`}
                                onClick={handleCopyLink}
                                title="Copy link"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                                    <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
