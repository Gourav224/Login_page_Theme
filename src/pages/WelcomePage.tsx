import React from "react";

const WelcomePage: React.FC<{
    username: string;
    role: string;
    darkTheme: boolean;
    onLogout: () => void;
}> = ({ username, role, darkTheme, onLogout }) => {
    return (
        <div
            className={`min-h-screen flex items-center justify-center ${
                darkTheme ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
        >
            <div
                className={`shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md ${
                    darkTheme
                        ? "bg-gray-800 text-white"
                        : "bg-white text-gray-700"
                }`}
            >
                <h2 className="text-xl mb-4">Welcome, {username}!</h2>
                <p className="mb-4">Role: {role}</p>
                <button
                    onClick={onLogout}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Logout
                </button>
            </div>
        </div>
    );
};

export default WelcomePage;
