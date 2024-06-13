import React, { useState } from "react";
import LoginForm from "../components/LoginForm";
import WelcomePage from "./WelcomePage";

const LoginPage: React.FC = () => {
    const [user, setUser] = useState<{ username: string; role: string } | null>(
        null
    );

    const handleLogin = (username: string, role: string) => {
        setUser({ username, role });
    };

    return (
        <div>
            {!user ? (
                <div className="flex justify-center items-center h-screen bg-gray-900">
                    <div className="text-center">
                        <LoginForm onLogin={handleLogin} />
                    </div>
                </div>
            ) : (
                <WelcomePage username={user.username} role={user.role} />
            )}
        </div>
    );
};

export default LoginPage;
