import Form from './components/Form';
import MapSection from "./components/MapSection";
import Details from "./components/Details";

function App() {

  return (
      // h-dvh flex-1
      <main
          className="h-full flex-1 w-full flex-col justify-center items-center antialiased md:subpixel-antialiased"
      >

        <div
            className="w-full h-16 flex justify-around items-center"
        >
          <nav className="rounded-xl bg-[#C9CFBB] bg-opacity-30 backdrop-blur-lg shadow-lg px-4 lg:px-6 py-2.5">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
              <div className="flex items-center lg:order-2">
                <button data-collapse-toggle="mobile-menu-2" type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg
                                     lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2
                                     focus:ring-gray-200" aria-controls="mobile-menu-2" aria-expanded="false"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                        fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1
                             1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd">
                    </path>
                  </svg>
                  <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                       xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                                       1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1
                                       0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                    </path>
                  </svg>
                </button>
              </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                   id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a href="#date"
                       className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent
                  lg:text-primary-700 lg:p-0 dark:text-white"
                       aria-current="page"
                    >
                      Дата
                    </a>
                  </li>
                  <li>
                    <a href="#program"
                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Программа
                    </a>
                  </li>
                  <li>
                    <a href="#dresscode"
                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Дресс-код
                    </a>
                  </li>
                  <li>
                    <a href="#host"
                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Ведущий
                    </a>
                  </li>
                  <li>
                    <a href="#details"
                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Детали
                    </a>
                  </li>
                  <li>
                    <a href="#location"
                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Место
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>

        <section id="dresscode" className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Дресс-код
          </h1>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <div className="flex flex-col w-full max-w-5xl mx-auto h-full">
            <div className="flex justify-center w-full text-center mb-8">
              <h2 className="max-w-2xl text-xl font-zen text-white leading-relaxed">
                Для нас главное-ваше присутствие!<br/>
                Наша свадьба будет организована в пастельно-зелёных тонах с элементами охры.<br/>
                Просим Вас добавить в свой наряд один из элементов соответствующий палитре
                нашей свадьбы-надевайте всё самое красивое и обязательно берите с собой хорошее настроение!
              </h2>
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <div className="w-16 h-16 rounded-full bg-custom-green-100 shadow-lg"/>
              <div className="w-16 h-16 rounded-full bg-custom-green-300 shadow-lg"/>
              <div className="w-16 h-16 rounded-full bg-custom-green-500 shadow-lg"/>
              <div className="w-16 h-16 rounded-full bg-custom-green-700 shadow-lg"/>
              <div className="w-16 h-16 rounded-full bg-custom-green-900 shadow-lg"/>
            </div>

            <div className="grid justify-items-center grid-cols-1 md:grid-cols-4 gap-8 mt-12">
              <div className="flex w-full h-full max-w-[25rem] max-h-[37.5rem] col-span-2
                              shadow-custom-shadow transition-all duration-300 ease-in-out
                              hover:translate-y-1 hover:shadow-none">
                <img
                    src="/image/arif.webp"
                    alt="Женское украшение"
                    className="object-cover"
                />
              </div>

              <div className="flex w-full h-full max-w-[25rem] max-h-[31.25rem] col-span-2
                              shadow-custom-shadow transition-all duration-300 ease-in-out
                              hover:translate-y-1 hover:shadow-none">
                <img
                    src="/image/botinki.webp"
                    alt="Мужская обувь"
                    className="object-cover"
                />
              </div>

              <div className="flex items-end w-full h-full max-w-[25rem] max-h-[37.5rem] col-span-2">
                <div className="flex w-full max-h-[34.375rem] h-full shadow-custom-shadow
                                transition-all duration-300 ease-in-out hover:translate-y-1 hover:shadow-none">
                  <img
                      src="/image/kabluk.webp"
                      alt="Платье с туфлями"
                      className="object-cover"
                  />
                </div>
              </div>

              <div className="flex w-full h-full max-w-[25rem] max-h-[37.5rem] col-span-2
                              shadow-custom-shadow transition-all duration-300
                              ease-in-out hover:translate-y-1 hover:shadow-none">
                <img
                    src="/image/men.webp"
                    alt="Мужской костюм"
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="host" className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Ведущий<br/>
            Мероприятия
          </h1>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <div className="flex flex-col w-full max-w-5xl mx-auto h-full md:flex-row items-center
                          gap-8 md:gap-1"
          >
            <div className="w-full md:pr-5">
              <h2 className="text-xl font-foglihten text-black mb-1">
                Дмитрий Глазков
              </h2>
              <p className="text-gray-500 text-lg font-sans mb-6">
                Ведущий свадьбы
              </p>
              <p className="text-black text-lg font-sans mb-6">
                Привет, друзья!<br/>
                Меня зовут Дмитрий. 10+ лет я организую свадьбы и мероприятия на
                профессиональном уровне, более 15 лет работаю ведущим на радио
                «Европа Плюс» и в ночных клубах.<br/>
                С юмором, драйвом и любовью к деталям я создаю незабываемые моменты.
              </p>
              <p className="text-black text-lg font-sans mb-6">
                ✨ Если готовите сюрприз или творческий подарок — напишите/позвоните
                мне! Встрою вашу идею в сценарий, отвечу на вопросы и добавлю ярких
                красок в наш день. ✨
              </p>
              <p className="text-black text-lg font-sans mb-6">
                Спасибо, что делаете праздник особенным! 💫
              </p>
              <div className="flex">
                <div className="flex items-center mt-4">
                  <a
                      href="https://t.me/your_channel_link"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 mr-2"
                  >
                    <img
                        src="/image/telegram.png"
                        alt="telegram"
                    />
                  </a>
                </div>
                <div className="flex items-center mt-4">
                  <div className="w-8 h-8 mr-2">
                    <img
                        src="/image/icon-wat.png"
                        alt="icon-tel"
                    />
                  </div>
                  <a href="tel:+79206238443" className="text-lg">
                    +7 (920) 623-84-43
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-[21.875rem]">
              <div className="flex h-full max-h-[31.25rem] shadow-custom-shadow">
                <img
                    src="/image/leading.webp"
                    alt="Дмитрий Глазков"
                    className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="details" className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Детали
          </h1>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <div className="flex max-w-md w-full justify-center items-center">
            <p className="text-center text-xl text-black font-zen leading-relaxed">
              Мы понимаем, что после получения приглашения у вас могут возникнуть вопросы.
              Не стесняйтесь обращаться к нам за деталями — мы с радостью поможем! 💍
            </p>
          </div>
          <Details/>
        </section>

        <section id="location" className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Место<br/>
            Проведения
          </h1>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <MapSection/>
        </section>

        <section className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Анкета<br/>
            Гостя
          </h1>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <div className="flex max-w-md w-full justify-center items-center">
            <p className="text-center text-xl text-black font-zen leading-relaxed">
              Мы очень старались сделать праздник
              незабываемым, поэтому будем рады, если Вы
              подтвердите свое присутствие до<br/>
              <b>01.06.2025</b>
            </p>
          </div>
          <Form/>
        </section>

        <section className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Увидимся с Вами через
          </h1>
        </section>

        <div className="flex items-center justify-center m-8 antialiased md:subpixel-antialiased">
          <p className="text-custom-green-700 text-base font-bold">
            autor by "Evgesha"
          </p>
        </div>

      </main>
  );
}

export default App;