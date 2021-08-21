import React from "react";

function Footer() {
  return (
    <div className="flex w-full flex-col items-center justify-items-center md:py-8 py-12 bg-primary text-white">
      <div className="flex flex-col md:flex-row w-9/12">
        <div className="w-full md:w-full md:mx-2 flex flex-col">
          <div className="flex flex-col text-center">
            <h4 className="text-lg font-bold mb-1">BitWhatever</h4>
            <p className="text-sm mb-2">The Future Of Crypto Payments</p>
            <h4 className="text-xs text-gray-200 mt-5">
              Copyright &copy; BitWhatever <br /> A business unit of Silicon
              Street Tech Pvt. Ltd.
            </h4>
            {/* <div className="flex flex-row mt-4">
              <div className="flex flex-col w-[30px] h-[30px] mr-2">
                <div className="bg-[#696871] rounded-full w-full h-full px-2 py-2 flex flex-col items-center justify-center">
                  <a href="/">
                    <img src="/images/logo-twitter-2-x@2x.png" alt="Twitter" />
                  </a>
                </div>
              </div>
              <div className="flex flex-col w-[30px] h-[30px] mr-2">
                <div className="bg-[#696871] rounded-full w-full h-full px-2 py-2 flex flex-col items-center justify-center">
                  <a href="/">
                    <img
                      src="/images/logo-fb-simple-2-x@2x.png"
                      alt="Facebook"
                    />
                  </a>
                </div>
              </div>
              <div className="flex flex-col w-[30px] h-[30px]">
                <div className="bg-[#696871] rounded-full w-full h-full px-2 py-2 flex flex-col items-center justify-center">
                  <a href="/">
                    <img src="/images/google-2-x@2x.png" alt="Google" />
                  </a>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        {/* <div className="w-full md:w-2/12 md:mx-10 mb-0 md:mb-0 flex flex-col">
          {/* <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-3">About</h4>
            <ul className="text-md mb-2">
              <li className="mb-2">
                <a href="/">Our mission</a>
              </li>
              <li className="mb-2">
                <a href="/">Our story</a>
              </li>
              <li className="mb-2">
                <a href="/">Team members</a>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
        {/* <div className="w-full md:w-2/12 md:mx-10 mb-0 md:mb-0 flex flex-col">
          {/* <div className="flex flex-col">
            <h5 className="text-lg font-bold mb-3">Learn</h5>
            <ul className="text-md mb-2">
              <li className="mb-2">
                <a href="/">Tutorials</a>
              </li>
              <li className="mb-2">
                <a href="/">How it works</a>
              </li>
              <li className="mb-2">
                <a href="/">F.A.Q</a>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
        {/* <div className="w-full md:w-2/12 md:mx-10 mb-0 md:mb-0 flex flex-col">
          {/* <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-3">Stories</h4>
            <ul className="text-md mb-2">
              <li className="mb-2">
                <a href="/">Blog</a>
              </li>
              <li className="mb-2">
                <a href="/">Tech stories</a>
              </li>
            </ul>
          </div> */}
        {/* </div> */}
        {/* <div className="w-full md:w-2/12 md:mx-10 mb-0 md:mb-0 flex flex-col">
          {/* <div className="flex flex-col">
            <h4 className="text-lg font-bold mb-3">Contact us</h4>
            <a
              href="mailto:support@bitwhatever.com"
              className="text-white hover:underline mb-2"
            >
              support@bitwhatever.com
            </a>
            <a
              href="tel:+133-394-3439-1435"
              className="text-white hover:underline text-sm "
            >
              {" "}
              +133-394-3439-1435
            </a>
          </div> */}
        {/* </div> */}
      </div>
    </div>
  );
}

export default Footer;
