import { useState } from 'react'
import reactLogo from './assets/react.svg'

function App() {
  const currentDay = new Date();
  const currentYear = currentDay.getFullYear();

  return (
    <div className="App">
      <header className="fixed inset-x-0 top-0 z-50 left-0 bg-white text-gray-700 body-font border-b border-gray-200">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            {/* <img alt="logo" src={logo} className="w-8 h-8 -mr-1" /> */}
            <span className="ml-3 text-xl text-indigo-500">기획자 진영화의 개발이야기</span>
          </div>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <div className="mr-5 hover:text-gray-900">
              About
            </div>
            <div className="mr-5 hover:text-gray-900">
              JavaScript
            </div>
            <div className="mr-5 hover:text-gray-900">
              Rust
            </div>
          </nav>
        </div>
      </header>
      <section className="containe mb-9 mt-24">
        본문내용
      </section>
      <section className="containe mb-8 mt-8">
        본문내용
      </section>
      <section className="containe mb-8 mt-8">
        본문내용
      </section>
      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © {currentYear} 진영화
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              timotolkie@gmail.com
            </span>
          </div>
          <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              기획/디자인/개발/컨텐츠 진영화
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;