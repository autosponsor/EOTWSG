import React from 'react';
import { Checklist } from '../constants/survivalData';
import { SuppliesList } from '../constants/SuppliesList';

interface ChecklistDetailProps {
    checklist: Checklist;
    onBack?: () => void;
}

export const ChecklistDetail: React.FC<ChecklistDetailProps> = ({ checklist, onBack }) => {
    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty.toLowerCase()) {
            case 'beginner': return 'bg-green-100 text-green-800';
            case 'intermediate': return 'bg-yellow-100 text-yellow-800';
            case 'advanced': return 'bg-red-100 text-red-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-4xl mx-auto my-8">
            <div className="relative h-64 md:h-96">
                <img
                    src={checklist.imageUrl}
                    alt={checklist.title}
                    className="w-full h-full object-cover"
                />
                {onBack && (
                    <button
                        onClick={onBack}
                        className="absolute top-4 left-4 bg-black/50 hover:bg-black/70 text-white px-4 py-2 rounded-full backdrop-blur-sm transition-colors flex items-center gap-2"
                    >
                        <span>←</span> Back to Guide
                    </button>
                )}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 md:p-8">
                    <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{checklist.title}</h1>
                    <div className="flex flex-wrap gap-2">
                        {checklist.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-md">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className="p-6 md:p-8">
                <div className="flex flex-wrap gap-6 mb-8 text-sm border-b border-gray-100 pb-6">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium">Difficulty:</span>
                        <span className={`px-2 py-1 rounded-md font-medium ${getDifficultyColor(checklist.difficulty)}`}>
                            {checklist.difficulty}
                        </span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-500 font-medium">Estimated Time:</span>
                        <span className="font-medium text-gray-900">{checklist.estimatedTime}</span>
                    </div>
                </div>

                <div className="prose max-w-none mb-8">
                    <p className="text-lg text-gray-700 leading-relaxed">{checklist.description}</p>
                </div>

                <SuppliesList supplies={checklist.supplies} />

                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Instructions</h2>
                    <div className="space-y-6">
                        {checklist.steps.map((step, index) => (
                            <div key={index} className="flex gap-4 group">
                                <div className="flex-shrink-0 w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-lg shadow-md group-hover:bg-gray-800 transition-colors">
                                    {index + 1}
                                </div>
                                <div className="flex-grow pt-1">
                                    <p className="text-gray-800 text-lg leading-relaxed">{step}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};