import React, { useState, useEffect } from 'react';
import axios, { isAxiosError } from 'axios';
import Alert from '../components/Alert';
import PhoneInput from "../components/PhoneInput";

function Form(){

    type AlertType = 'info' | 'success' | 'warning' | 'error' | 'default';

    const [alertMessage, setAlertMessage] = useState<{ message: string; type: AlertType } | null>(null);
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
    const [areRequiredFieldsFilled, setAreRequiredFieldsFilled] = useState(false);

    const alertMassagePromise = async (massages: string, types: AlertType): Promise<void> => {
        await new Promise((resolve) => setTimeout(resolve, 100));

        setAlertMessage({message: massages, type: types});
        setTimeout(() => setAlertMessage(null), 5000);
    };

    useEffect(() => {
        const isNameFilled = formData.fullName.trim() !== '';
        const cleanedPhone = formData.phone.replace(/\D/g, '');
        const isPhoneFilled = cleanedPhone.length >= 10;

        setAreRequiredFieldsFilled(isNameFilled && isPhoneFilled);
    }, [formData.fullName, formData.phone]);

    useEffect(() => {
        if (formData.presence && !areRequiredFieldsFilled) {
            setFormData((prev) => ({ ...prev, presence: false }));
            alertMassagePromise("Поля 'Имя и Телефон' обязательны для подтверждения присутствия",
                "warning" );
        }
    }, [formData.presence, areRequiredFieldsFilled]);

    // Метод проверки на валидность перед отправкой данных для формы
    const prepareDataForSubmission = () => {
        const cleanedName = formData.fullName
            .replace(/[^\p{L}\s]/gu, '')
            .replace(/\s+/g, ' ')
            .trim();

        return {
            presence: formData.presence,
            full_name: cleanedName,
            phone: formData.phone.replace(/\D/g, ''),
            guestsAllowed: formData.guestsAllowed,
            guests: formData.guests
                .map(guest => guest.trim())
                .filter(guest => guest !== ''),
            willDrink: formData.willDrink,
            drink: formData.alcohol,
        };
    };

    // Обработка поля "Имя Фамилия"
    const handleFullNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.target.value;

        value = value.replace(/[^\p{L}\s]/gu, '');
        value = value.replace(/\s+/g, ' ');

        setFormData({ ...formData, fullName: value });
    };

    // Обработчик кнопки подтверждение присутствия
    const handlePresenceChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const isChecked = e.target.checked;

        if (isChecked && !areRequiredFieldsFilled) {
            alertMassagePromise("Заполните обязательные поля: имя и телефон",
                "warning");
            return;
        }

        setFormData({ ...formData, presence: isChecked });
    };

    // Обработчик кнопки гостей
    const handleQuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValues = e.target.value.split(',');
        const processedValues = rawValues.map((item) => {
            let cleaned = item.replace(/[^\p{L}\s]/gu, '');
            cleaned = cleaned.replace(/\s+/g, ' ');
            return cleaned;
        });

        setFormData({ ...formData, guests: processedValues });
    }

    // Метод запроса на проверку номера
    const checkPhoneNumber = async (phone: string): Promise<boolean> => {
        try {
            const cleanedPhone = phone.replace(/\D/g, '');
            const baseUrl = process.env.REACT_APP_API_URL?.replace('http://', 'https://') || '';
            const response = await axios.get(
                `${baseUrl}/api/users/check/${cleanedPhone}`
            );
            return response.data.message === 'No';
        } catch (error) {
            alertMassagePromise('Не удалось проверить ваши данные', 'error');
            return false;
        }
    };

    // Проверка заполнения обязательных полей
    const validateForm = () => {
        const isNameFilled = formData.fullName.trim() !== '';
        const cleanedPhone = formData.phone.replace(/\D/g, '');
        const isPhoneFilled = cleanedPhone.length >= 10;

        if (!isNameFilled) {
            alertMassagePromise("Пожалуйста, введите имя и фамилию",
                "info");
            return false;
        }

        if (!isPhoneFilled) {
            alertMassagePromise("Пожалуйста, введите свой номер телефона",
                "info");
            return false;
        }

        return true;
    };

    // Обработчик для кнопки Отправить
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!validateForm())
            return;

        try {
            const isAvailable = await checkPhoneNumber(formData.phone);

            if (!isAvailable) {
                alertMassagePromise('Гость с такими данными уже есть в списке', 'error');
                return;
            }

            const dataToSend = prepareDataForSubmission();
            const baseUrl = process.env.REACT_APP_API_URL?.replace('http://', 'https://') || '';
            await axios.post(`${baseUrl}api/users`,
                dataToSend,
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                });

            alertMassagePromise("Форма успешно отправлена!", "success");
        } catch (error) {
            if (isAxiosError(error)) {
                alertMassagePromise(
                    `Ошибка: ${error.response?.data.message || 'Неизвестная ошибка'}`,
                    "error"
                );
            } else {
                alertMassagePromise("Произошла ошибка при отправке формы", "error");
            }
        }
    };

  return(
      <>
          <section className="flex justify-center w-full max-w-7xl my-4">
                <form onSubmit={handleSubmit}
                      className="flex flex-col w-full h-full md:w-2/3 mx-auto">

                    {/* Имя и фамилия */}
                    <div className="mb-6 px-4">
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
                            onChange={handleFullNameChange}
                        />
                    </div>

                    {/* Телефон */}
                    <div className="mb-6 px-4">
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
                                onChange={handlePresenceChange}
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
                                    onChange={handleQuestsChange}
                                    className="block w-full p-4 text-gray-900 border-gray-50 rounded-lg bg-gray-50
                                               text-base shadow-lg focus:ring-custom-green-500
                                               focus:border-custom-green-500"
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
                                {['Шампанское', 'Брют', 'Полусладкое', 'Виски',
                                    'Красное вино', 'Белое вино', 'Водка', 'Коньяк'].map((item) => (
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

                    <div className="flex justify-center items-center px-4">
                        <p className="text-center italic font-semibold text-sm text-black">
                            P.S. Если не заполните анкету, мы будем звонить вам в 6 утра с вопросом: "Ну что, идете?"
                            <span className="not-italic">😈</span>
                        </p>
                    </div>

                    {/* Кнопка отправки */}
                    <div className="flex items-center justify-center mt-8 px-6 md:px-4">
                        <button
                            type="submit"
                            className="w-full md:w-5/12 text-white bg-custom-green-700 hover:bg-custom-black-green
                                     focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5
                                     transition duration-300 ease-in-out active:text-black active:bg-transparent
                                     border-custom-green-700 active:border-custom-green-700 border-2 active:border-2
                                     hover:border-custom-black-green"
                        >
                            Отправить
                        </button>
                    </div>
                </form>
        </section>
          {alertMessage && (
              <Alert
                  message={alertMessage.message}
                  type={alertMessage.type}
                  onClose={() => setAlertMessage(null)}
              />
          )}
      </>
  );
}

export default Form;