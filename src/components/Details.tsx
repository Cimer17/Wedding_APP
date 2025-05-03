import React from "react";

import {description} from "../data";

export default function Details()  {
    return (
      <>
          {
              description.map((descriptions) => {
                  return (
                    <div
                        key={descriptions.text1}
                        className="w-full h-full"
                    >
                        <div className="">
                            <img
                                src={descriptions.src}
                                alt={descriptions.text1}
                            />
                        </div>
                        <div
                            className=""
                        >
                            <h2>
                                {descriptions.text1}
                            </h2>
                            <p>
                                {descriptions.text2}
                            </p>
                        </div>
                    </div>
                  );
              })
          }
      </>
    );
}