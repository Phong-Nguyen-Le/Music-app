import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
    const [remainingTime, setRemainingTime] = useState(
        calculateRemainingTime()
    );

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(calculateRemainingTime());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    function calculateRemainingTime() {
        const timeLeft = targetDate.getTime() - new Date().getTime();
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    }

    return (
        <div className="text-center">
            <div className="flex items-center">
                <div className="flex flex-col justify-center mx-2 items-center w-12 h-12 bg-red-600 text-white rounded-lg sm:text-xs sm:w-10 sm:h-10">
                    <span className="leading-4 ">{remainingTime.days.toString().padStart(2,"0")}</span>
                    <span className="leading-4">Ngày</span>
                </div>
                <div className="flex flex-col justify-center mx-2 items-center w-12 h-12 bg-gray-1 text-red-1 rounded-lg sm:text-xs sm:w-10 sm:h-10">
                    <span className="leading-4">{remainingTime.hours.toString().padStart(2, "0")}</span>
                    <span className="leading-4 text-gray-600">Giờ</span>
                </div>
                <div className="flex flex-col justify-center mx-2 items-center w-12 h-12 bg-gray-1 text-red-1 rounded-lg sm:text-xs sm:w-10 sm:h-10">
                    <span className="leading-4">{remainingTime.minutes.toString().padStart(2, "0")}</span>
                    <span className="leading-4 text-gray-600">Phút</span>
                </div>
                <div className="flex flex-col justify-center mx-2 items-center w-12 h-12 bg-gray-1 text-red-1 rounded-lg sm:text-xs sm:w-10 sm:h-10">
                    <span className="leading-4">{remainingTime.seconds.toString().padStart(2, "0")}</span>
                    <span className="leading-4 text-gray-600">Giây</span>
                </div>
            </div>
        </div>
    );
}
