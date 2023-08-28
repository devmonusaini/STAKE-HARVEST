import React from "react";
import blockaudit from '../images/blockaudit.jpg';
import logo from "../images/logo-sm.png";


const Hero = () => {
    return (
        <>
            <div className="HeroBg bg-cover bg-vulcan bg-no-repeat bg-center mt-[-105px] md:mt-[-131px] px-3 pt-40 pb-12 lg:block xl:px-0 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="lg:grid max-w-7xl mx-auto gap-x-10 grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-y-0 xl:gap-x-20 flex flex-col flex-col-reverse ">

                    <div className="grid items-center">
                        <div className="space-y-4 md:space-y-7">

                            <h1 className="font-bold text-white text-2xl md:text-3xl lg:text-4xl xl:text-6xl uppercase">Stake <span className=" text-fuchsia-600">Harvest</span></h1>
                            <p className="text-white">- Only staked APAD will be considered for all the upcoming Sales in the Anypad Ecosystem.</p>
                            <p className="text-white">- Earn attractive APY on your staked APAD tokens</p>

                            <div class="text-white">
                                <table className="border-solid border-2 border-white  w-full text-center p-4 sm:w-2/3  h-60 " >
                                    <thead className="h-16">
                                        <tr className="border-solid border-2 border-white">
                                            <th className="border-white border-solid border-2 m-2">Staking pools (Duration)</th>
                                            <th>Rewards (APY)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-solid border-2 border-white ">
                                            <td className="border-solid border-2 border-white ">15</td>
                                            <td>2%</td>
                                        </tr>
                                        <tr className="border-solid border-2 border-white ">
                                            <td className="border-solid border-2 border-white ">90</td>
                                            <td>30%</td>
                                        </tr>
                                        <tr className="border-solid border-2 border-white ">
                                            <td className="border-solid border-2 border-white ">180</td>
                                            <td>50%</td>
                                        </tr>
                                        <tr className="border-solid border-2 border-white ">
                                            <td className="border-solid border-2 border-white ">365</td>
                                            <td>90%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="text-white">How to Participate:</p>
                            <div className="text-white">
                                <ol>
                                    <li>1. Choose a duration and enter the amount you wish to stake and take part in the upcoming sale.</li>
                                    <li>2. Click Approve to approve your APAD to be used on the platform and then Stake the desired number of APAD.</li>
                                    <li>3. Thats it!!</li>

                                </ol>
                            </div>
                            <p className="text-white">NOTE: Staking doesn’t give you the whitelist for the project. For whitelisting, please give your consent to participate in that particular sale you wish to participate.</p>
                            <div className="flex gap-x-4 xl:gap-x-8">
                                <span className="flex rounded-md items-center space-x-3 bg-gradient-to-r from-sky-600 to-fuchsia-600 py-2 px-4 lg:px-6 xl:py-4 xl:px-8  transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-105 duration-300">
                                    <img alt="blockaudit" className="w-8 h-8" src={blockaudit} />
                                    <a className="font-bold text-white text-xs xl:text-sm" href="https://whitepaper.borroe.finance/token-overview/smart-contract-audit" target="_blank" rel="noreferrer">View Smart Contract</a>
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="  border border-neutral-500 rounded-xl py-8 bg-black bg-opacity-30 mb-6 h-max">
                        <div className="bg-transparent text-center px-4 py-2 sm:pt-3 sm:px-18">


                        </div>
                        <div className="overflow-hidden rounded-b-xl text-white bg-transparent shadow">
                            <div className="px-4 pb-4 bg-transparent bg-opacity-70  lg:px-6 3xl:px-10 ">
                                <div className="flex flex-col md:flex-row justify-around px-8 text-fuchsia-600 font-bold text-sm mt-3 md:mt-0">
                                    <div className="text-2xl">Choose a staking duration
                                    </div>
                                </div>
                                <br />



                                <div className="px-2 bg-transparent lg:px-2">
                                    <div className="p-2 sm:p-0 flex flex-col items-center mb-2 lg:mb-5"></div>
                                    <div className="grid gap-2 md:gap-1 grid-cols-3 md:grid-cols-4 grid-rows-2 md:grid-rows-1 justify-center items-center self-center">
                                        <button type="button" className="mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600 ">
                                            15 Days</button>
                                        <button type="button" className="mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600 ">
                                            90 Days</button>
                                        <button type="button" className="mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600 ">
                                            180 Days</button>
                                        <button type="button" className="mb-2 w-full inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-2 sm:px-1.5 sm:py-3.5 3xl:py-4 4xl:py-5 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600 ">
                                            365 Days</button>

                                    </div>
                                    <br />

                                    <div className="flex justify-between flex-col md:flex-row">

                                        <div className=" flex justify-between items-center  block w-full rounded-md border-0 py-2.5 sm:py-1.5 pl-4 pr-10 text-white  bg-gradient-to-r from-gray-900 to-gray-800  shadow-sm ring-1 ring-inset ring-blue-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-800 sm:text-base font-medium sm:leading-10">
                                            <input type="text" name="token" id="token" value="0" className="  block w-full text-white placeholder:text-gray-400  sm:text-base font-medium sm:leading-10 bg-transparent outline-none " />
                                            <button type="button" className=" w-1/6 inline-flex items-center justify-center whitespace-nowrap rounded-md px-2 py-1 sm:px-1.5 sm:py-2.5 3xl:py-2 4xl:py-3 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600 mt-1 mb-1">
                                                Max</button>
                                        </div>

                                    </div>
                                    <br />
                                    <div className="flex justify-center items-center w-full flex-col">
                                        <div className="flex justify-between items-center m-1 w-full">
                                            <div>APY</div>
                                            <div>30%</div>
                                        </div>
                                        <div className="flex justify-between items-center m-1 w-full">
                                            <div>Your staked</div>
                                            <div>0 Token</div>
                                        </div>
                                        <div className="flex justify-between items-center m-1 w-full">
                                            <div>Your Balance</div>
                                            <div>0 Token</div>
                                        </div>
                                        <div className="flex justify-between items-center m-1 w-full">
                                            <div>Total staked</div>
                                            <div>150980.8989</div>
                                        </div>

                                    </div>
                                    <br />

                                    <button className="sm:mt-2 mb-2 w-full inline-flex items-center justify-center whitespace-nowrap border-0 rounded-md px-5 py-2 sm:px-5 sm:py-5 3xl:py-4 4xl:py-5 text-sm sm:text-md  font-semibold text-white leading-5 shadow-sm  bg-gradient-to-r from-sky-600 to-fuchsia-600 hover:bg-blue-900">Approve</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );

}
export default Hero;