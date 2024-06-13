import React, { useState } from "react";

interface LoginFormProps {
    onLogin: (username: string, role: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility

    const users = [
        { username: "John Doe", password: "johndoe@123", role: "Admin" },
        { username: "Nick", password: "Nick@123", role: "User" },
        { username: "Guest", password: "guest@123", role: "Guest" },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Find user in the data structure
        const user = users.find(
            (user) => user.username === username && user.password === password
        );

        if (user) {
            onLogin(user.username, user.role);
        } else {
            setError("Invalid username or password");
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-900">
            <form
                onSubmit={handleSubmit}
                className="bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
                <h2 className="text-3xl font-bold text-white text-center mb-8">
                    Login
                </h2>
                <div className="mb-4">
                    <label
                        className="block text-gray-400 text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="mb-4 relative">
                    <label
                        className="block text-gray-400 text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input
                        type="checkbox"
                        className="absolute top-0 right-0 mt-3 mr-4"
                        onChange={togglePasswordVisibility}
                        checked={showPassword}
                    />
                    <label className="text-gray-400 text-sm ml-1">
                        Show password
                    </label>
                </div>
                {error && (
                    <p className="text-red-500 text-xs italic mb-4">{error}</p>
                )}
                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginForm;
