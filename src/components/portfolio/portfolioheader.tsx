"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import PortfolioNavbar from "./portfolionavbar";

interface PortfolioHeaderProps {
    location: string;
}

const PortfolioHeader: React.FC<PortfolioHeaderProps> = ({ location }) => {
    const [currentTime, setCurrentTime] = useState<string>("");
    const [temperature, setTemperature] = useState<string | null>(null);

    // Fetch Weather Data
    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const apiKey = process.env.WEATHER_API_KEY!; // Replace with your API key
                const lat = 62.6
                const lon = 29.7667
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
                );
                const temp = response.data.main.temp;
                setTemperature(`${temp.toFixed(1)}°C`);
            } catch (error) {
                console.error("Error fetching weather data", error);
                setTemperature("N/A");
            }
        };

        fetchWeather();
    }, [location]);

    // Update Current Time
    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const time = now.toLocaleTimeString()
            if (time) {
                setCurrentTime(time);
            }
            else {
                setCurrentTime("N/A")
            }
        };

        const timer = setInterval(updateTime, 1000);
        updateTime(); // Initial Call
        return () => clearInterval(timer); // Cleanup
    }, []);

    return (
        <header className="flex justify-between items-center py-4 px-6 text-white shadow-md">
            {/* Left Section */}
            <div className="text-lg font-semibold">{location}</div>

            {/* Middle Section - Navigation */}
            <PortfolioNavbar />

            {/* Right Section - Real-time Clock & Weather */}
            <div className="flex flex-col items-end">
                <div className="text-lg font-semibold">{currentTime}</div>
                <div className="text-sm font-semibold text-gray-300">
                    {temperature ? `Temp: ${temperature} ` : "Temp: loading..."}
                </div>
            </div>
        </header>
    );
};

export default PortfolioHeader;
