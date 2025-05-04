import Form from './components/Form';
import MapSection from "./components/MapSection";
import Details from "./components/Details";

function App() {

  return (
      // h-dvh flex-1
      <main className="h-full flex-1 w-full flex-col justify-center items-center antialiased md:subpixel-antialiased">
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
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414
                                       1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1
                                       0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd">
                      </path>
                    </svg>
                  </button>
                </div>
              <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                  <li>
                    <a href="#"
                       className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent
                                  lg:text-primary-700 lg:p-0 dark:text-white"
                       aria-current="page"
                    >
                      Дата
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                                   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Программа
                    </a>
                  </li>
                  <li>
                    <a href="#"
                       className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                                  lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Дресс-код
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                                   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Ведущий
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
                        className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50
                                   lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0"
                    >
                      Детали
                    </a>
                  </li>
                  <li>
                    <a
                        href="#"
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
        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <div className="flex max-w-md w-full justify-center items-center">
            <p className="text-center text-xl text-black font-zen leading-relaxed">
              Мы понимаем, что после получения приглашения у вас могут возникнуть вопросы.
              Не стесняйтесь обращаться к нам за деталями — мы с радостью поможем! 💍
            </p>
          </div>
          <Details />
        </section>
        <section className="flex w-full h-full justify-center items-center px-4">
          <h1 className="text-3xl font-foglihten text-black text-center">
            Место<br/>
            Проведения
          </h1>
        </section>
        <section className="flex flex-col w-full h-full items-center p-4 bg-custom-green-100">
          <MapSection />
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
          <Form />
        </section>
        <div className="flex items-center justify-center m-8 antialiased md:subpixel-antialiased">
          <p className="text-blue-500 text-base font-bold">
            autor by "Evgesha"
          </p>
        </div>
      </main>
  );
}

export default App;