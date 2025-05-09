import { useState, useEffect } from 'react';

interface CountdownTimerProps {
    deadlineUTC: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ deadlineUTC }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });
    const [isExpired, setIsExpired] = useState(false);

    // Склонение числительных
    const declension = (num: number, words: string[]) => {
        return words[
            num % 10 === 1 && num % 100 !== 11 ? 0 : num % 10 >= 2 && num % 10 <= 4 && (num % 100 < 10 || num % 100 >= 20) ? 1 : 2
            ];
    };

    // Получаем текущее время в Москве (UTC+3)
    const getMoscowTime = () => {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000; // Конвертируем минуты в мс
        const localISOTime = new Date(now.getTime() - offset).toISOString();
        return new Date(localISOTime.replace('Z', '+03:00'));
    };

    // Рассчитываем разницу с учетом московского времени
    useEffect(() => {
        const interval = setInterval(() => {
            const moscowNow = getMoscowTime();
            const moscowDeadline = new Date(deadlineUTC.getTime() + 3 * 3600 * 1000);

            const diff = moscowDeadline.getTime() - moscowNow.getTime();

            if (diff <= 0) {
                clearInterval(interval);
                setIsExpired(true);
                return;
            }

            setTimeLeft({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((diff / (1000 * 60)) % 60),
                seconds: Math.floor((diff / 1000) % 60),
            });
        }, 1000);

        return () => clearInterval(interval);
    }, [deadlineUTC]);

    return (
        <div className="flex flex-col items-center gap-4 text-center">
            {/* Таймер в одну строку */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4 my-2">
                {/* Блок дней */}
                <div className="flex flex-col items-center min-w-[60px]">
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-end transition-all duration-500">
                            <span className="text-custom-green-700 text-5xl sm:text-6xl font-foglihten">{timeLeft.days.toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                        {declension(timeLeft.days, ['день', 'дня', 'дней'])}
                    </p>
                </div>

                {/* Двоеточие */}
                <div className="flex items-start text-4xl font-bold text-custom-dark-green-500">
                    :
                </div>

                {/* Блок часов */}
                <div className="flex flex-col items-center min-w-[60px]">
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-end transition-all duration-500">
                            <span className="text-custom-green-700 text-5xl sm:text-6xl font-foglihten">{timeLeft.hours.toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                        {declension(timeLeft.hours, ['час', 'часа', 'часов'])}
                    </p>
                </div>

                {/* Двоеточие */}
                <div className="flex items-start text-4xl font-bold text-custom-dark-green-500">
                    :
                </div>

                {/* Блок минут */}
                <div className="flex flex-col items-center min-w-[60px]">
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-end transition-all duration-500">
                            <span className="text-custom-green-700 text-5xl sm:text-6xl font-foglihten">{timeLeft.minutes.toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                        {declension(timeLeft.minutes, ['минута', 'минуты', 'минут'])}
                    </p>
                </div>

                {/* Двоеточие */}
                <div className="flex items-start text-4xl font-bold text-custom-dark-green-500">
                    :
                </div>

                {/* Блок секунд */}
                <div className="flex flex-col items-center min-w-[60px]">
                    <div className="relative w-16 h-14 sm:w-20 sm:h-16 overflow-hidden">
                        <div className="absolute inset-0 flex justify-center items-end transition-all duration-500">
                            <span className="text-custom-green-700 text-5xl sm:text-6xl font-foglihten">{timeLeft.seconds.toString().padStart(2, '0')}</span>
                        </div>
                    </div>
                    <p className="mt-1 text-xs sm:text-sm text-gray-500">
                        {declension(timeLeft.seconds, ['секунда', 'секунды', 'секунд'])}
                    </p>
                </div>
            </div>

            {isExpired && (
                <div className="mt-4 text-black text-xl sm:text-3xl font-foglihten">
                    Свадьба уже началась! Не опоздайте!
                </div>
            )}
        </div>
    );
};

export default CountdownTimer;