import React from "react";

import {description} from "../data";

export default function Details()  {
    return (
      <div className="flex flex-col w-full h-full justify-center
                      items-center mx-auto my-8 px-4 space-y-6">
          {
              description.map((descriptions) => {
                  return (
                    <div
                        key={descriptions.text1}
                        className="flex w-full h-full max-h-36 items-center justify-center gap-6"
                    >
                        {/*${descriptions.specialAnimation ? "animate-slow-bounce hover:animate-none" : ""}*/}
                        <div className={`hidden h-24 w-24 rounded-full
                                        bg-white shadow-lg md:flex ${
                                        descriptions.specialIcon ? "special-style-icon" : ""
                                        }`}
                        >
                            <img
                                src={descriptions.src}
                                alt={descriptions.text1}
                                className="object-cover"
                            />
                        </div>
                        <div
                            className="flex flex-col w-full h-full max-w-3xl bg-white
                                       py-5 px-7 rounded-3xl shadow-lg"
                        >
                            <h2 className="text-xl text-black font-foglihten mb-2">
                                {descriptions.text1}
                            </h2>
                            <p className="text-black font-sans">
                                {descriptions.text2}
                            </p>
                        </div>
                    </div>
                  );
              })
          }
          <div className="flex w-full items-center justify-center mt-8 px-6 mx-auto md:w-2/3 md:px-4">
              <a
                  href="https://t.me/your_channel_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full md:w-5/12 text-white uppercase bg-custom-green-700 text-center hover:bg-custom-black-green
                             focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 transition duration-300
                             ease-in-out active:text-black active:bg-transparent border-custom-green-700
                             active:border-custom-green-700 border-2 hover:border-custom-black-green"
              >
                  Чат гостей
              </a>
          </div>
      </div>
    );
}