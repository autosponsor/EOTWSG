import React from 'react';

interface SuppliesListProps {
    supplies?: string[];
}

export const SuppliesList: React.FC<SuppliesListProps> = ({ supplies }) => {
    if (!supplies || supplies.length === 0) {
        return null;
    }

    return (
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <h3 className="font-bold text-lg mb-3 text-gray-900">Required Supplies</h3>
            <ul className="list-disc list-inside space-y-1">
                {supplies.map((item, index) => (
                    <li key={index} className="text-gray-700">{item}</li>
                ))}
            </ul>
        </div>
    );
};