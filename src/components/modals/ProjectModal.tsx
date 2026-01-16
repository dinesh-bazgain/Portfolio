'use client';

import React from 'react';
import { X, Github, ExternalLink } from 'lucide-react';
import './ProjectModal.css';

type Project = {
    title: string;
    description: string;
    features: string[];
    demo: string;
    subTitle: string;
    slug: string;
    external: string | null;
    tags: string[];
    period: string;
    codeUrl: string | null;
    liveUrl: string | null;
};

type ProjectModalProps = {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
};

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!isOpen || !project) return null;

    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div className="modal-backdrop" onClick={handleBackdropClick}>
            <div className="modal-content">
                <button className="modal-close" onClick={onClose} aria-label="Close modal">
                    <X size={24} />
                </button>

                <div className="modal-header">
                    <h2 className="modal-title">{project.title}</h2>
                    <p className="modal-period">{project.period}</p>
                </div>

                <div className="modal-body">
                    <p className="modal-description">{project.subTitle}</p>

                    <div className="modal-section">
                        <h3 className="modal-section-title">Features</h3>
                        <ul className="modal-features-list">
                            {project.features.map((feature, idx) => (
                                <li key={idx}>{feature}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-section">
                        <h3 className="modal-section-title">Technologies</h3>
                        <div className="modal-tags">
                            {project.tags.map((tag, idx) => (
                                <span key={idx} className="modal-tag">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="modal-actions">
                        {project.codeUrl && (
                            <a
                                href={project.codeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-button modal-button-secondary"
                            >
                                <Github size={18} />
                                View Code
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="modal-button modal-button-primary"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
