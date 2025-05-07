import React from 'react';

export default function WeddingTimeline() {
    return (
        <div className="max-w-screen-lg mx-auto my-16 relative">
            {/* Вертикальная линия по центру bg-[#B9C49C] */}
            <div className="flex items-center absolute left-1/2 top-0 bottom-0 w-4 rounded-lg">
                <img
                    src="/image/line.svg"
                    alt="line"
                    className="w-full h-[72%]"
                />
            </div>

            {/*/!* Точки на линии *!/*/}
            {/*<div className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2">*/}
            {/*    <div className="w-4 h-4 rounded-full bg-[#3E493B]"></div>*/}
            {/*</div>*/}
            {/*<div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2">*/}
            {/*    <div className="w-4 h-4 rounded-full bg-[#3E493B]"></div>*/}
            {/*</div>*/}

            {/* Контент */}
            <div className="flex flex-col">
                {/* Левая часть */}
                <div className="flex w-full mb-8">
                    <div className="w-1/2 flex flex-col justify-end md:flex-row items-center md:pr-16">
                        <img
                            src="/image/altar.svg"
                            alt="altar"
                            className="w-16 h-16 mx-4 mb-4"
                        />
                        <span className="text-5xl font-foglihten text-custom-dark-green-300">12:30</span>
                    </div>
                    <div className="w-1/2 ml-0 md:ml-16">
                        <h3 className="text-3xl font-foglihten text-center text-black">Церемония</h3>
                        <p className="text-gray-700 mt-2 text-center">
                            Фотосессия, проведение свадебных традиций
                        </p>
                    </div>
                </div>

                {/* Правая часть */}
                <div className="flex w-full mt-8">
                    <div className="w-1/2 flex flex-col justify-end md:flex-row items-center md:pr-16">
                        <img
                            src="/image/holiday.svg"
                            alt="holiday"
                            className="w-16 h-16 mx-4 mb-4"
                        />
                        <span className="text-5xl font-foglihten text-custom-dark-green-300">16:00</span>
                    </div>
                    <div className="w-1/2 ml-0 md:ml-16">
                        <h3 className="text-3xl font-foglihten text-center text-black">Банкет</h3>
                        <p className="text-gray-700 mt-2 text-center">
                            Праздничный банкет, развлекательная программа, торт
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}