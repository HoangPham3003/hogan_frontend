"use client";

import React, { useEffect, useState } from "react";

interface Snowflake {
    id: number;
    left: number; // Horizontal position (percentage)
    top: number; // Vertical position (percentage)
    speed: number; // Speed of falling (pixels per frame)
}

const SnowBackground: React.FC = () => {
    const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

    // Initialize snowflakes
    useEffect(() => {
        const flakes: Snowflake[] = Array.from({ length: 200 }, (_, id) => ({
            id,
            left: Math.random() * 100, // Random horizontal position
            top: Math.random() * -200, // Start above the screen
            speed: Math.random() * 2 + 1, // Random speed
        }));
        setSnowflakes(flakes);
    }, []);

    // Update snowflake positions
    useEffect(() => {
        const interval = setInterval(() => {
            setSnowflakes((prevFlakes) =>
                prevFlakes.map((flake) => ({
                    ...flake,
                    top: flake.top >= 200 ? -10 : flake.top + 1, // Reset position without visible jump
                }))
            );
        }, 30); // Update every 30ms

        return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0">
            {snowflakes.map((flake) => (
                <div
                    key={flake.id}
                    className="absolute w-2 h-2 bg-blue-950 rounded-full opacity-80"
                    style={{
                        left: `${flake.left}%`,
                        top: `${flake.top}%`,
                        transition: flake.top === -10 ? "none" : "top 1s linear", // No transition on reset
                    }}
                />
            ))}
        </div>
    );
};

export default SnowBackground;
