import React, { useState, useEffect } from "react";

const TelegramConfirmationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    const handleRedirect = () => {
        setIsVisible(false);
        setTimeout(() => {
            onClose();
            window.location.href = "https://t.me/+Y2Kyg5mO0ytiOGRi";
        }, 300);
    };

    if (!isOpen) return null;

    return (
        <div
            className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
                isVisible ? "opacity-100" : "opacity-0"
            }`}
        >
            {/* Фон */}
            <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-md"
                 onClick={handleRedirect}
            />

            {/* Модалка */}
            <div
                className={`flex flex-col items-center justify-center relative bg-white p-6 
                            rounded-lg w-[90%] max-w-md transition-all duration-300 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
            >
                <h2
                    className="text-3xl font-foglihten text-custom-dark-green-500 mb-2"
                >
                    Спасибо!
                </h2>
                <p className="text-center text-gray-800 mb-10 text-base font-sans">
                    <span className="font-semibold text-custom-dark-green-500">
                        Ваша форма успешно отправлена.
                    </span>
                    <br />
                    Закроете это окно и окажетесь в чате гостей.
                    Не бойтесь, мы не кусаем — наоборот, будем очень рады вас видеть!
                </p>
                <button
                    onClick={handleRedirect}
                    className="flex justify-center w-full md:w-5/12 text-white text-lg uppercase bg-custom-green-700
                               hover:bg-custom-black-green focus:outline-none font-medium rounded-lg text-sm
                               px-5 py-2.5 transition duration-300 ease-in-out active:text-black active:bg-transparent
                               border-custom-green-700 active:border-custom-green-700 border-2 active:border-2
                               hover:border-custom-black-green"
                >
                    Поехали! 🚀
                </button>
            </div>
        </div>
    );
};

export default TelegramConfirmationModal;
