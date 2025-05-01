import React, { useState } from 'react';
import axios, { isAxiosError } from 'axios';
import Alert from '../components/Alert';
import PhoneInput from "../components/PhoneInput";

function Form(){

    const [alertMessage, setAlertMessage] = useState<string | null>(null);
    const [formData, setFormData] = useState<{
        presence: boolean;
        fullName: string;
        phone: string;
        guestsAllowed: boolean,
        guests: string[];
        willDrink: boolean;
        alcohol: string[];
        oath: boolean;
    }>({
        presence: false,
        fullName: '',
        phone: '',
        guestsAllowed: false,
        guests: [],
        willDrink: false,
        alcohol: [],
        oath: false,
    });

    const prepareDataForSubmission = () => {
        return {
            presence: formData.presence,
            full_name: formData.fullName,
            phone: formData.phone,
            guestsAllowed: false,
            guests: formData.guests,
            willDring: false,
            drink: formData.alcohol
        };
    };

    // Обработчик для кнопки Отправить
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const dataToSend = prepareDataForSubmission();

            await new Promise((resolve) => setTimeout(resolve, 1000));
            await axios.post(`${process.env.REACT_APP_API_URL}` + 'users/',
                dataToSend,
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

            setAlertMessage("Данные сохранены!");
            setTimeout(() => setAlertMessage(null), 2000);
        } catch (error) {
            if (isAxiosError(error)) {
                setAlertMessage(`Ошибка: ${error.response?.data.message || 'Неизвестная ошибка'}`);
                setTimeout(() => setAlertMessage(null), 2000);
            } else {
                setAlertMessage('Произошла неизвестная ошибка');
                setTimeout(() => setAlertMessage(null), 2000);
            }
        }
    };

  return(
      <>
          <section className="w-2/3 mx-auto">
              <div className="my-7">
                  <form onSubmit={handleSubmit}
                        className="flex flex-col w-full mx-auto">
                      {/* Подтверждение присутствия */}
                      <div className="flex items-center mb-6 px-4">
                          <label className="w-full inline-flex justify-between items-center cursor-pointer">
                            <span>
                                <h3 className="text-lg font-medium text-gray-900">
                                    Я подтверждаю свое присутствие
                                </h3>
                            </span>
                              <input
                                  type="checkbox"
                                  className="sr-only peer"
                                  checked={formData.presence}
                                  onChange={(e) =>
                                      setFormData({...formData, presence: e.target.checked})
                                  }
                              />
                              <div className="relative w-11 h-6 bg-gray-200 rounded-full peer
                                            peer-checked:after:translate-x-full
                                            after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                            after:bg-white after:border-gray-300 after:border after:rounded-full
                                            after:h-5 after:w-5 after:transition-all
                                            peer-checked:bg-custom-green-500"/>
                          </label>
                      </div>

                      {/* Скрытые поля, появляются при активации presence */}
                      <div
                          className={`transition-all duration-300 ease-in-out overflow-hidden px-4 ${
                              formData.presence ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0'
                          }`}
                      >
                          {/* Имя и фамилия */}
                          <div className="mb-6">
                              <label htmlFor="large-input" className="block mb-2">
                                  <h3 className="text-lg font-medium text-gray-900">
                                      Впишите ваше имя и фамилию
                                  </h3>
                              </label>
                              <input
                                  type="text"
                                  id="large-input"
                                  className="block w-full p-4 text-gray-900 border-gray-50 rounded-lg bg-gray-50
                                           text-base shadow-lg focus:ring-custom-green-500 focus:border-custom-green-500"
                                  placeholder="Имя и фамилия"
                                  value={formData.fullName}
                                  onChange={(e) =>
                                      setFormData({...formData, fullName: e.target.value})
                                  }
                                  required
                              />
                          </div>

                          {/* Телефон */}
                          <div className="mb-6">
                              <label htmlFor="phone-input" className="block mb-2">
                                  <h3 className="text-lg font-medium text-gray-900">
                                      Телефон
                                  </h3>
                              </label>
                              <PhoneInput
                                  value={formData.phone}
                                  onChange={(value) => setFormData({ ...formData, phone: value })}
                              />
                          </div>

                          {/* Гости */}
                          <div className="flex items-center mb-4">
                              <div className="w-full grid grid-cols-12 gap-4">
                                  <div className="col-span-10">
                                      <h3 className="text-lg font-medium text-gray-900">
                                          С Вами еще кто-то будет?
                                      </h3>
                                      <p className="text-sm text-gray-500 mt-1">
                                          Если вы будете еще с кем-то то сообщите нам
                                      </p>
                                  </div>
                                  <div className="col-span-2 flex justify-end">
                                      <label className="inline-flex items-center cursor-pointer">
                                          <input
                                              type="checkbox"
                                              className="sr-only peer"
                                              checked={formData.guestsAllowed}
                                              onChange={(e) =>
                                                  setFormData({...formData, guestsAllowed: e.target.checked})
                                              }
                                          />
                                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer
                                                        peer-checked:after:translate-x-full
                                                        after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                                        after:bg-white after:border-gray-300 after:border after:rounded-full
                                                        after:h-5 after:w-5 after:transition-all
                                                        peer-checked:bg-custom-green-500"/>
                                      </label>
                                  </div>
                              </div>
                          </div>

                          {/* Имена гостей */}
                          {formData.guestsAllowed && (
                              <div className="mb-6">
                                  <label htmlFor="last_name" className="block">
                                      <h3 className="text-lg font-medium text-gray-900">
                                          Впишите имена и фамилии этих людей
                                      </h3>
                                  </label>
                                  <p className="text-gray-500 text-sm mb-2">Укажите их через запятую</p>
                                  <input
                                      type="text"
                                      id="last_name"
                                      placeholder="Дмитрий Соколов, Анна Петрова"
                                      value={formData.guests.join(', ')}
                                      onChange={(e) =>
                                          setFormData({
                                              ...formData,
                                              guests: e.target.value
                                                  .split(',')
                                                  .map((item) => item.trim()),
                                          })
                                      }
                                      className="block w-full p-4 text-gray-900 border-gray-50 rounded-lg bg-gray-50
                                               text-base shadow-lg focus:ring-custom-green-500 focus:border-custom-green-500"
                                  />
                              </div>
                          )}

                          {/* Алкоголь */}
                          <div className="flex items-center mb-4">
                              <div className="w-full grid grid-cols-12 gap-4">
                                  <div className="col-span-10">
                                      <h3 className="text-lg font-medium text-gray-900">
                                          Будете ли вы пить?
                                      </h3>
                                      <p className="text-sm text-gray-500 mt-1">
                                          Если да, то выберите какой алкоголь вы предпочитаете
                                      </p>
                                  </div>
                                  <div className="col-span-2 flex justify-end">
                                      <label className="inline-flex items-center cursor-pointer">
                                          <input
                                              type="checkbox"
                                              className="sr-only peer"
                                              checked={formData.willDrink}
                                              onChange={(e) =>
                                                  setFormData({...formData, willDrink: e.target.checked})
                                              }
                                          />
                                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer
                                                        peer-checked:after:translate-x-full
                                                        after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                                        after:bg-white after:border-gray-300 after:border after:rounded-full
                                                        after:h-5 after:w-5 after:transition-all
                                                        peer-checked:bg-custom-green-500"/>
                                      </label>
                                  </div>
                              </div>
                          </div>

                          {/* Выбор алкоголя */}
                          {formData.willDrink && (
                              <div className="flex flex-col w-full mb-6">
                                  {['Шампанское', 'Виски', 'Водка', 'Коньяк'].map((item) => (
                                      <div key={item} className="flex items-center mb-2">
                                          <input
                                              id={`alcohol-${item}`}
                                              type="checkbox"
                                              checked={formData.alcohol.includes(item)}
                                              onChange={(e) => {
                                                  const newAlcohol = e.target.checked
                                                      ? [...formData.alcohol, item]
                                                      : formData.alcohol.filter((i) => i !== item);
                                                  setFormData({...formData, alcohol: newAlcohol});
                                              }}
                                              className="w-5 h-5 text-custom-green-500 bg-gray-100 border
                                                         border-green-500 rounded focus:ring-green-500"
                                          />
                                          <label htmlFor={`alcohol-${item}`}
                                                 className="ms-4 text-lg font-normal text-gray-900">
                                              {item}
                                          </label>
                                      </div>
                                  ))}
                              </div>
                          )}

                          {/* Клятва гостя */}
                          <div className="flex items-center mb-6">
                              <div className="w-full grid grid-cols-12 gap-4">
                                  <div className="col-span-10">
                                      <h3 className="text-lg font-medium text-gray-900">Клятва гостя</h3>
                                      <p className="text-sm text-gray-500 mt-1">
                                          Обещаю не опоздать, не напиться раньше тоста за здоровье и не спорить с
                                          тамадой
                                      </p>
                                  </div>
                                  <div className="col-span-2 flex justify-end">
                                      <label className="inline-flex items-center cursor-pointer">
                                          <input
                                              type="checkbox"
                                              className="sr-only peer"
                                              checked={formData.oath}
                                              onChange={(e) =>
                                                  setFormData({...formData, oath: e.target.checked})
                                              }
                                          />
                                          <div className="relative w-11 h-6 bg-gray-200 rounded-full peer
                                                        peer-checked:after:translate-x-full
                                                        after:content-[''] after:absolute after:top-[2px] after:start-[2px]
                                                        after:bg-white after:border-gray-300 after:border after:rounded-full
                                                        after:h-5 after:w-5 after:transition-all
                                                        peer-checked:bg-custom-green-500"/>
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>

                      {/* Кнопка отправки */}
                      <div className="flex items-center justify-center mt-4 px-4">
                          <button
                              type="submit"
                              className="w-5/12 text-white bg-custom-green-500 hover:bg-custom-black-green
                                       focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5
                                       transition duration-300 ease-in-out active:text-black active:bg-transparent
                                       border-custom-green-500 active:border-custom-green-500 border-2 active:border-2
                                       hover:border-custom-black-green"
                          >
                              Отправить
                          </button>
                      </div>
                  </form>
              </div>
          </section>
          {alertMessage && (
              <Alert
                  message={alertMessage}
                  onClose={() => setAlertMessage(null)}
              />
          )}
      </>
  );
}

export default Form;