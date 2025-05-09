import AOS from 'aos';
import 'aos/dist/aos.css';

export default function WeddingTimeline() {

    // Инициализируем AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false,
            offset: 100,
        });

    return (
        <div
            className="max-w-screen-lg mx-auto my-16 relative"
            data-aos="fade-up"
        >
            {/* Вертикальная линия по центру */}
            <div className="hidden md:flex items-center absolute left-1/2 top-0 bottom-0 w-4 rounded-lg">
                <img
                    src="/image/line.svg"
                    alt="line"
                    className="w-full h-[72%]"
                />
            </div>

            {/* Контент */}
            <div className="flex flex-col">

                {/* Левая часть */}
                <div
                    className="flex flex-col items-center md:flex-row w-full mb-16"
                    data-aos="fade-right"
                    data-aos-delay="100"
                >
                    <div className="w-full md:w-1/2 flex flex-col justify-end md:flex-row items-center md:pr-16 mb-4 md:m-auto">
                        <img
                            src="/image/altar.svg"
                            alt="altar"
                            className="w-16 h-16 mx-4 mb-4"
                        />
                        <span className="text-5xl font-foglihten text-custom-dark-green-300">12:30</span>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/2 ml-0 md:ml-16">
                        <h3 className="text-3xl font-foglihten text-center text-black">Церемония</h3>
                        <p className="w-1/2 text-gray-700 mt-2 text-center">
                            Фотосессия, проведение свадебных традиций
                        </p>
                    </div>
                </div>

                {/* Правая часть */}
                <div
                    className="flex flex-col items-center md:flex-row w-full mb-8"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <div className="w-full md:w-1/2 flex flex-col justify-end md:flex-row items-center md:pr-16 mb-4 md:m-auto">
                        <img
                            src="/image/holiday.svg"
                            alt="holiday"
                            className="w-16 h-16 mx-4 mb-4"
                        />
                        <span className="text-5xl font-foglihten text-custom-dark-green-300">16:00</span>
                    </div>
                    <div className="flex flex-col items-center w-full md:w-1/2 ml-0 md:ml-16">
                        <h3 className="text-3xl font-foglihten text-center text-black">Банкет</h3>
                        <p className="w-1/2 text-gray-700 mt-2 text-center">
                            Праздничный банкет, развлекательная программа, торт
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}