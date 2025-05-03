import React, { useState, useEffect } from 'react';

const MapSection = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Управление анимацией
    useEffect(() => {
        if (isOpen) {
            // Задержка для триггера анимации
            const timer = setTimeout(() => setIsVisible(true), 50);
            return () => clearTimeout(timer);
        } else {
            setIsVisible(false);
        }
    }, [isOpen]);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsVisible(false);
        // Ждём завершения анимации перед закрытием
        setTimeout(() => setIsOpen(false), 300);
    };

    return (
        <div className="flex flex-col w-full max-w-7xl h-full justify-center">
            {/* Верхний контент */}
            <div className="text-center mb-8">
                <h3 className="text-xl text-black font-semibold font-sans">
                    Набережная улица, 80
                </h3>
                <p className="text-lg text-black font-sans">
                    Юрьев-Польский, Владимирская область
                </p>
            </div>

            {/* Изображение здания */}
            <div
                className="group flex w-full h-full max-w-[37.5rem] max-h-[25rem] mb-8 shadow-custom-shadow mx-auto md:w-2/3 transition-all duration-300 ease-in-out hover:translate-y-1 hover:shadow-none">
                <img
                    src="/image/mesto-1.webp"
                    alt="Здание"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Кнопка переключения карты */}
            <div className="flex w-full items-center justify-center mt-8 px-6 mx-auto md:w-2/3 md:px-4">
                <button
                    onClick={handleOpen}
                    className="w-full md:w-5/12 text-white bg-custom-green-700 hover:bg-custom-black-green
                    focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5
                    transition duration-300 ease-in-out active:text-black active:bg-transparent
                    border-custom-green-700 active:border-custom-green-700 border-2 active:border-2
                    hover:border-custom-black-green"
                >
                    Посмотреть на карте
                </button>
            </div>

            {/* Модальное окно */}
            {isOpen && (
                <div
                    className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    {/* Затемненный фон */}
                    <div
                        className="absolute inset-0 bg-black bg-opacity-50"
                        onClick={handleClose}
                    />

                    {/* Окно карты с анимацией */}
                    <div
                        className={`flex flex-col justify-center relative bg-[#e5e7eb] p-6 rounded-lg w-full h-2/3 md:w-2/3 transition-all duration-300 ${
                            isVisible
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <button
                            onClick={handleClose}
                            className="absolute top-2 right-2"
                        >
                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                            </svg>
                        </button>

                        <h2 className="text-2xl font-bold mb-4">
                            Место
                            проведения
                        </h2>

                        <div className="w-full h-[99.333333%] relative overflow-hidden">
                            <iframe
                                src="https://yandex.ru/map-widget/v1/?ll=39.677706%2C56.494903&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgoxNDk4NzA2MzUxEnfQoNC-0YHRgdC40Y8sINCS0LvQsNC00LjQvNC40YDRgdC60LDRjyDQvtCx0LvQsNGB0YLRjCwg0K7RgNGM0LXQsi3Qn9C-0LvRjNGB0LrQuNC5LCDQndCw0LHQtdGA0LXQttC90LDRjyDRg9C70LjRhtCwLCA4MCIKDfm1HkIVyPphQg%2C%2C&z=17.1"
                                width="100%"
                                frameBorder="1"
                                allowFullScreen
                                className="h-[99.333333%] relative"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MapSection;