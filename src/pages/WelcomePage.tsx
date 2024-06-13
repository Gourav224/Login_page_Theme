// src/pages/WelcomePage.tsx
import React from "react";

interface WelcomePageProps {
    username: string;
    role: string;
}

const WelcomePage: React.FC<WelcomePageProps> = ({ username, role }) => {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-3xl font-bold mb-4">
                    Welcome, {username}!
                </h1>
                <p className="text-gray-400 mb-2">
                    You are logged in as {role}.
                </p>
                <p className="text-gray-400">This is your welcome page.</p>
            </div>
        </div>
    );
};

export default WelcomePage;
