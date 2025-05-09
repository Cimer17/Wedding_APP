import AOS from "aos";
import "aos/dist/aos.css";

import { description } from "../data";

export default function Details() {
        AOS.init({
            duration: 800,        // Длительность анимации
            easing: "ease-in-out", // Тип анимации
            once: false,           // Анимация срабатывает один раз
        });

    return (
        <div className="flex flex-col w-full justify-center items-center mx-auto my-8 px-4 space-y-6">
            {description.map((descriptions, index) => (
                <div
                    key={descriptions.text1}
                    className="flex w-full h-full max-h-96 items-center justify-center gap-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 100} // Постепенное появление
                >
                    <div className="flex items-center bg-white shadow-lg rounded-3xl w-full h-full max-w-5xl">
                        <div className="hidden md:block md:ml-7 h-24 w-24">
                            <img
                                src={descriptions.src}
                                alt={descriptions.text1}
                                className="object-cover"
                            />
                        </div>
                        <div className="flex flex-col w-full p-5 md:py-10 md:px-7">
                            <h2 className="text-xl text-black font-foglihten mb-2">
                                {descriptions.text1}
                            </h2>
                            <p className="text-black font-sans">{descriptions.text2}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}