import React from "react";
import { AiFillAlipayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import { Loader } from "./";
const Welcome = () => {
  const ConnectWallet = () => {};
  const commonStyle =
    "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center border-[0.5px] border-gary-400 text-white text-center items-center";
  return (
    <div className=" flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl bg-welcome-title p-1">
            Send Crypto
            <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world buy and sell crypto easily on cafeCript{" "}
          </p>
          <button
            className="flex flex-row justify-center text-white items-center my-5 bg-purple-400 p-3 rounded-full cursor-pointer hover:bg-purple-500
          "
            onClick={ConnectWallet}
          >
            Connect Wallet
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyle}`}>Relaibility</div>
            <div className={`${commonStyle}`}>Security</div>
            <div className={`${commonStyle} rounded-tr-2xl`}>Ethereum</div>
            <div className={`${commonStyle} rounded-bl-2xl`}>Web 3.0</div>
            <div className={`${commonStyle}`}>Low Fees</div>
            <div className={`${commonStyle} rounded-br-2xl`}>Blockchain</div>
          </div>
        </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-start w-full md:mt-0 mt-10">
          <div className="p-3 justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card glass">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <p className="text-white font-light text-sm">
              Address
            </p>
            <p className="text-white font-semibold text-lg m-1">
              Ethereum
            </p>
            </div>
            <div className="p-5 sm:w-96 w-full flex-start items-center blue-glasss">

            </div>
          </div>

        </div>
      
    </div>
  );
};

export default Welcome;
