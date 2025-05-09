import Form from './components/Form';
import MapSection from "./components/MapSection";
import Details from "./components/Details";
import WeddingTimeline from "./components/WeddingTimeline";
import Navbar from "./components/Navbar";
import CountdownTimer from "./components/CountdownTimer";

function App() {

  return (
      // h-dvh flex-1
      <main
          className="h-full flex-1 w-full flex-col justify-center items-center antialiased md:subpixel-antialiased"
      >
        <div
            className="fixed w-full h-16 flex justify-around items-center z-50 my-3.5"
        >
          <Navbar />
        </div>

        <section className="relative flex w-full h-full justify-between items-center">
          <div className="max-w-3xl w-1/2 h-full min-h-[20rem] md:min-h-[25rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] scale-x-[-1] z-[-1] rotate-180">
          </div>
          <div
              className="absolute justify-center py-16 pb-16 pt-32 flex w-full h-full z-10"
          >
            <img
                src="/image/be.png"
                alt="Elena&Vadim"
                className="px-4 lg:px-6 py-2.5"
            />
          </div>
          <div className="max-w-3xl w-1/2 h-full min-h-[20rem] md:min-h-[27rem] bg-[url('/image/bg-list.webp')]
                          bg-cover bg-right rotate-180 z-0 absolute top-0 right-0">
          </div>
        </section>

        <section id="date" className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <div className="flex flex-col w-full h-full max-w-lg mx-auto my-10">
              <h1 className="text-3xl font-foglihten text-custom-dark-green-500 text-center mb-4">
                Дорогие гости!
              </h1>
              <p className="text-custom-dark-green-700 text-center text-lg font-sans mb-4">
                С большой радостью приглашаем вас на наш первый
                семейный праздник-нашу свадьбу!
              </p>
              <p className="text-custom-dark-green-700 text-center text-lg font-sans mb-4">
                Мы стремились создать неповторимую атмосферу,
                и ваше присутствие сделает этот день по-настоящему
                волшебным и незабываемым!
              </p>
              <p className="text-custom-dark-green-700 text-end text-lg font-sans mb-6">
                С любовью, Вадим и Елена
              </p>
          </div>
        </section>

        <section className="flex w-full justify-center items-center">
          <div className="relative flex w-full h-full max-w-lg mx-auto">
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[15%] w-3/5
                           mx-auto p-4 rounded-xl border-2 border-custom-green-700 bg-custom-green-100 z-10"
            >
              <div className="text-center mb-4">
                <h2 className="text-lg font-bold text-custom-green-700">Июль 2025</h2>
                <hr className="w-1/2 mx-auto border-t-2 border-custom-green-700"/>
              </div>

              <div className="grid grid-cols-7 gap-[0.5rem] md:gap-[1rem] text-center md:text-lg">

                <div className="font-semibold">Пн</div>
                <div className="font-semibold">Вт</div>
                <div className="font-semibold">Ср</div>
                <div className="font-semibold">Чт</div>
                <div className="font-semibold">Пт</div>
                <div className="font-semibold text-custom-green-700">Сб</div>
                <div className="font-semibold text-custom-green-700">Вс</div>

                <div></div>
                <div className="p-1">1</div>
                <div className="p-1">2</div>
                <div className="p-1">3</div>
                <div className="p-1">4</div>
                <div className="bg-custom-green-700 text-white rounded-full p-1 relative">
                  5
                  <span className="absolute -right-2 -top-1 text-white text-xs">&#x2764;</span>
                </div>
                <div className="p-1">6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
                <div>17</div>
                <div>18</div>
                <div>19</div>
                <div>20</div>
                <div>21</div>
                <div>22</div>
                <div>23</div>
                <div>24</div>
                <div>25</div>
                <div>26</div>
                <div>27</div>
                <div>28</div>
                <div>29</div>
                <div>30</div>
                <div>31</div>
                <div></div>
                <div></div>
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="flex w-full h-full justify-between items-center">
          <div className="max-w-3xl w-full min-h-[23rem] h-full bg-cover bg-center relative
                          bg-[url('/image/bg-list.webp')] bg-no-repeat -mt-12 z-0">
          </div>

          <div className="max-w-3xl w-full min-h-[20rem] h-full bg-cover bg-center relative
                          bg-[url('/image/bg-list.webp')] scale-x-[-1]">
          </div>
        </section>

        <section
            id="program"
            className="flex w-full h-full justify-center items-center px-4
                       py-12 bg-custom-green-100"
        >
          <h1 className="text-3xl font-foglihten text-custom-dark-green-500 text-center">
            Программа<br/>
            торжества
          </h1>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-[#E5E6E1]">
          <WeddingTimeline />
        </section>

        <section
            id="dresscode"
            className="relative flex w-full h-full justify-between items-center"
        >
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] scale-x-[-1] rotate-180">
          </div>
          <h1 className="absolute flex justify-center w-full h-full text-3xl font-foglihten
                         text-custom-dark-green-500 items-center text-center">
            Дресс-код
          </h1>
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] rotate-180">
          </div>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-[#E5E6E1]">
          <div className="flex flex-col w-full max-w-5xl mx-auto h-full my-10">

            <div className="flex justify-center w-full text-center mb-8">
              <h2 className="max-w-2xl text-xl font-zen text-custom-dark-green-700 leading-relaxed">
                Для нас главное — ваше присутствие!<br/>
                Наша свадьба будет организована в пастельно-зелёных тонах с элементами охры.<br/>
                Просим Вас добавить в свой наряд один из элементов соответствующий палитре нашей свадьбы.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex min-w-14 md:min-w-16 aspect-square rounded-full bg-custom-green-100 shadow-lg" />
              <div className="flex min-w-14 md:min-w-16 aspect-square rounded-full bg-custom-green-300 shadow-lg" />
              <div className="flex min-w-14 md:min-w-16 aspect-square rounded-full bg-custom-green-500 shadow-lg" />
              <div className="flex min-w-14 md:min-w-16 aspect-square rounded-full bg-custom-green-700 shadow-lg" />
              <div className="flex min-w-14 md:min-w-16 aspect-square rounded-full bg-custom-green-900 shadow-lg" />
            </div>

            <div className="sm:block md:hidden mt-12">
              <div
                  id="controls-carousel"
                  className="relative w-full"
                  data-carousel="slide"
                  data-carousel-interval="3000"
              >

                <div className="relative h-[34rem] overflow-hidden rounded-lg md:h-96">

                  <div className="duration-700 ease-in-out" data-carousel-item="active">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                          className="w-full h-full max-w-[25rem] max-h-[37.5rem]">
                        <img
                            src="/image/arif.webp"
                            alt="Женское украшение"
                            className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                          className="w-full h-full max-w-[25rem] max-h-[31.25rem]">
                        <img
                            src="/image/botinki.webp"
                            alt="Мужская обувь"
                            className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                          className="w-full h-full max-w-[25rem] max-h-[34.375rem]">
                        <img
                            src="/image/kabluk.webp"
                            alt="Платье с туфлями"
                            className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                          className="w-full h-full max-w-[25rem] max-h-[37.5rem]">
                        <img
                            src="/image/men.webp"
                            alt="Мужской костюм"
                            className="object-cover w-full h-full"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <button type="button"
                        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full
                                   px-4 cursor-pointer group focus:outline-none"
                        data-carousel-prev>
                  <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full
                                 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50
                                 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white
                                 dark:group-focus:ring-gray-800/70 group-focus:outline-none"
                  >
                    <svg
                        className="w-4 h-4 dark:text-white text-gray-800 rtl:rotate-180"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                    >
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 1 1 5l4 4"
                      />
                    </svg>
                    <span className="sr-only">Previous</span>
                  </span>
                </button>
                <button type="button"
                        className="absolute top-0 end-0 z-30 flex items-center justify-center
                                   h-full px-4 cursor-pointer group focus:outline-none"
                        data-carousel-next
                >
                  <span
                      className="inline-flex items-center justify-center w-10 h-10 rounded-full
                                 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50
                                 dark:group-hover:bg-gray-800/60 group-focus:ring-4
                                 group-focus:ring-white dark:group-focus:ring-gray-800/70
                                 group-focus:outline-none">
                    <svg className="w-4 h-4 dark:text-white text-gray-800 rtl:rotate-180"
                         aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg"
                         fill="none"
                         viewBox="0 0 6 10"
                    >
                      <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                            d="m1 9 4-4-4-4"
                      />
                    </svg>
                    <span className="sr-only">Next</span>
                  </span>
                </button>
              </div>
            </div>

            <div className="hidden md:grid grid-cols-1 md:grid-cols-4 justify-items-center gap-8 mt-12">
              <div
                  className="flex w-full h-full max-w-[25rem] max-h-[37.5rem] col-span-2
                             shadow-custom-shadow transition-all duration-300 ease-in-out
                             hover:translate-y-1 hover:shadow-none"
              >
                <img
                    src="/image/arif.webp"
                    alt="Женское украшение"
                    className="object-cover w-full h-full"
                />
              </div>
              <div
                  className="flex w-full h-full max-w-[25rem] max-h-[31.25rem] col-span-2
                             shadow-custom-shadow transition-all duration-300 ease-in-out
                             hover:translate-y-1 hover:shadow-none"
              >
                <img
                    src="/image/botinki.webp"
                    alt="Мужская обувь"
                    className="object-cover w-full h-full"
                />
              </div>
              <div className="flex items-end w-full h-full max-w-[25rem] max-h-[37.5rem] col-span-2">
                <div className="flex w-full max-h-[34.375rem] h-full shadow-custom-shadow
                                transition-all duration-300 ease-in-out hover:translate-y-1 hover:shadow-none"
                >
                  <img
                      src="/image/kabluk.webp"
                      alt="Платье с туфлями"
                      className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div
                  className="flex w-full h-full max-w-[25rem] max-h-[37.5rem] col-span-2 shadow-custom-shadow
                             transition-all duration-300 ease-in-out hover:translate-y-1 hover:shadow-none"
              >
                <img
                    src="/image/men.webp"
                    alt="Мужской костюм"
                    className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>

        <section
            id="presenter"
            className="relative flex w-full h-full justify-between items-center"
        >
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')]">
          </div>
          <h1 className="absolute flex justify-center w-full h-full text-3xl font-foglihten
                         text-custom-dark-green-500 items-center text-center">
            Ведущий<br/>
            Мероприятия
          </h1>
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] scale-x-[-1]">
          </div>
        </section>

        <section className="relative flex w-full h-full justify-center items-center bg-[#E5E6E1]">
          <div className="relative flex w-full h-full max-w-screen-lg">
            <div className="hidden md:flex w-1/12" />
            <div className="hidden md:flex w-1/12 h-full bg-custom-green-100 self-stretch absolute top-0 left-0" />
            <div className="flex flex-col w-full mx-auto h-full p-4 md:px-5 md:py-4 md:flex-row items-center
                            gap-8 md:gap-1 my-10"
            >
              <div className="w-full md:pr-5">
                <h2 className="text-3xl font-foglihten text-black mb-1">
                  Дмитрий Глазков
                </h2>
                <p className="text-gray-500 text-lg font-sans mb-6">
                  Ведущий свадьбы
                </p>
                <p className="text-custom-dark-green-700 text-lg font-sans mb-6">
                  Привет, друзья!<br/>
                  Меня зовут Дмитрий. 10+ лет я организую свадьбы и мероприятия на
                  профессиональном уровне, более 15 лет работаю ведущим на радио
                  «Европа Плюс» и в ночных клубах.<br/>
                  С юмором, драйвом и любовью к деталям я создаю незабываемые моменты.
                </p>
                <p className="text-custom-dark-green-700 text-lg font-sans mb-6">
                  ✨ Если готовите сюрприз или творческий подарок — напишите/позвоните
                  мне! Встрою вашу идею в сценарий, отвечу на вопросы и добавлю ярких
                  красок в наш день. ✨
                </p>
                <p className="text-custom-dark-green-700 text-lg font-sans mb-6">
                  Спасибо, что делаете праздник особенным! 💫
                </p>
                <div className="flex">
                  <div className="w-8 h-8 mr-4 flex items-center mt-4 bg-[#828658] rounded-md p-1">
                    <a
                        href="https://t.me/dmitriyglazkov"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                      <img
                          src="/image/telegramIcon.png"
                          alt="telegram"
                          className="object-cover"
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
                      src="/image/host.webp"
                      alt="Дмитрий Глазков"
                      className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
            id="details"
            className="relative flex w-full h-full justify-between items-center"
        >
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] scale-x-[-1] rotate-180">
          </div>
          <h1 className="absolute flex justify-center w-full h-full text-3xl font-foglihten
                         text-custom-dark-green-500 items-center text-center">
            Детали
          </h1>
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] rotate-180">
          </div>
        </section>

        <section className="flex flex-col w-full h-full items-center px-4 py-10 bg-custom-green-100">
          <div className="flex max-w-md w-full justify-center items-center">
            <p className="text-center text-xl text-custom-dark-green-700 font-zen leading-relaxed">
              Мы понимаем, что после получения приглашения у вас могут возникнуть вопросы.
              Не стесняйтесь обращаться к нам за деталями — мы с радостью поможем! 💍
            </p>
          </div>
          <Details/>
        </section>

        <section
            id="location"
            className="relative flex w-full h-full justify-between items-center"
        >
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')]">
          </div>
          <h1 className="absolute flex justify-center w-full h-full text-3xl font-foglihten
                         text-custom-dark-green-500 items-center text-center">
            Место<br/>
            Проведения
          </h1>
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] scale-x-[-1]">
          </div>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <MapSection/>
        </section>

        <section
            className="relative flex w-full h-full justify-between items-center"
        >
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] scale-x-[-1] rotate-180">
          </div>
          <h1 className="absolute flex justify-center w-full h-full text-3xl font-foglihten
                         text-custom-dark-green-500 items-center text-center">
            Анкета<br/>
            Гостя
          </h1>
          <div className="max-w-3xl w-1/2 h-full min-h-custom-15 md:min-h-[20rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/bg-list.webp')] rotate-180">
          </div>
        </section>

        <section className="flex flex-col w-full h-full items-center p-4 py-10 bg-custom-green-100">
          <div className="flex max-w-md w-full justify-center items-center">
            <p className="text-center text-xl text-custom-dark-green-700 font-zen leading-relaxed">
              Мы очень старались сделать праздник
              незабываемым, поэтому будем рады, если Вы
              подтвердите свое присутствие до<br/>
              <b>01.06.2025</b>
            </p>
          </div>
          <Form/>
        </section>

        <section
            className="relative flex w-full min-h-[25rem] h-full justify-between items-center"
        >
          <div className="hidden md:block max-w-[17rem] w-full h-full min-h-[28rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/left.webp')] z-10 absolute top-[-12%] left-0">
          </div>

          <div className="absolute flex justify-center w-full h-full items-start">
            <h1 className="max-w-72 md:max-w-96 w-full text-3xl font-foglihten
                           text-black text-center m-8">
              Увидимся с Вами через
            </h1>
          </div>
          <div className="absolute flex justify-center items-end w-full h-full">
            <div className="p-8 z-10">
              <a
                  href="https://vk.com/evgesha_studio?from=groups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-custom-green-700 text-base font-bold"
              >
                autor by "Evgesha"
              </a>
            </div>
          </div>
          <div className="absolute flex justify-center items-center w-full h-full">
            <CountdownTimer deadlineUTC={new Date('2025-07-04T15:00:00Z')} />
          </div>

          <div className="hidden md:block max-w-[17rem] w-full h-full min-h-[28rem] bg-cover bg-right bg-no-repeat
                          bg-[url('/image/right.webp')] z-10 absolute top-[-12%] right-0">
          </div>
        </section>
      </main>
  );
}

export default App;