import React, { useState, useRef } from "react";
import WelcomePage from "./WelcomePage";
import ThemeToggle from "../components/ThemeToggle";
import "../index.css";

const LoginPage: React.FC = () => {
    const [loggedIn, setLoggedIn] = useState(false);
    const [darkTheme, setDarkTheme] = useState(false);
    const [userRole, setUserRole] = useState("");

    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (username === "John Doe" && password === "johndoe@123") {
            setLoggedIn(true);
            setUserRole("Admin");
        } else if (username === "Nick" && password === "Nick@123") {
            setLoggedIn(true);
            setUserRole("User");
        } else if (username === "guest" && password === "guest@123") {
            setLoggedIn(true);
            setUserRole("Guest");
        } else {
            alert("Invalid credentials. Please try again.");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
        if (usernameRef.current) usernameRef.current.value = "";
        if (passwordRef.current) passwordRef.current.value = "";
        setUserRole("");
    };

    const toggleTheme = () => {
        setDarkTheme((prevTheme) => !prevTheme);
    };

    return (
        <div
            className={`min-h-screen ${
                darkTheme ? "bg-gray-900 text-white" : "bg-gray-100"
            }`}
        >
            <ThemeToggle toggleTheme={toggleTheme} />
            {!loggedIn ? (
                <div className="flex h-screen items-center justify-center">
                    <form
                        onSubmit={handleSubmit}
                        className={`shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md ${
                            darkTheme ? "bg-gray-800 text-white" : "bg-white"
                        }`}
                    >
                        <div className="mb-4">
                            <label
                                htmlFor="username"
                                className={`block text-sm font-bold mb-2 ${
                                    darkTheme
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            >
                                Username
                            </label>
                            <input
                                id="username"
                                type="text"
                                placeholder="Username"
                                ref={usernameRef}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                                    darkTheme
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : "bg-white text-gray-700 border-gray-300"
                                }`}
                            />
                        </div>
                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className={`block text-sm font-bold mb-2 ${
                                    darkTheme
                                        ? "text-gray-300"
                                        : "text-gray-700"
                                }`}
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Password"
                                ref={passwordRef}
                                className={`shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline ${
                                    darkTheme
                                        ? "bg-gray-700 text-white border-gray-600"
                                        : "bg-white text-gray-700 border-gray-300"
                                }`}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            ) : (
                <WelcomePage
                    username={usernameRef.current?.value || ""}
                    role={userRole}
                    onLogout={handleLogout}
                    darkTheme={darkTheme}
                />
            )}
        </div>
    );
};

export default LoginPage;
