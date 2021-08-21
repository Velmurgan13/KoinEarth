import React from "react";

function Header() {
  return (
    <>
      <header className="flex flex-col relative w-full py-2 justify-items-center items-center text-sm bg-primary">
        <div className="flex w-full flex-col md:flex-row md:px-5 items-center">
          <div className="flex w-full md:w-8/12 text-center md:text-left mb-3 md:mb-0">
            <div className="w-[220px]">
              <a href="/" className="w-full md:w-auto">
                <h1 className="text-lg text-center font-bold text-white">
                  KoinEarth
                </h1>
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
