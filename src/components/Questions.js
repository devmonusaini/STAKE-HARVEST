import React from "react";
import plus from "../svgs/plus.svg";
import minus from "../svgs/minus.svg";
import { useState } from "react";

const Questions = () => {

    const [toggle1, setToggle1] = useState(false);
    const [toggle2, setToggle2] = useState(false);
    const [toggle3, setToggle3] = useState(false);
    const [toggle4, setToggle4] = useState(false);
    const [toggle5, setToggle5] = useState(false);
    const [toggle6, setToggle6] = useState(false);

    return (<>
        <section className="relative bg-vulcan border-t border-neutral-700 " id="faqs">
            <div className="mx-auto lg:container">
                <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24  lg:py-32  xl:px-9 ">
                    <h1 className="font-bold text-white text-3xl xl:text-5xl text-center">Got Questions</h1>
                    <p className="text-white font-normal mb-6 mt-4 text-sm leading-6 lg:text-base px-0 md:px-6 xl:text-xl xl:mt-6 xl:mb-10 text-center">Here are some answers to the most frequently asked questions. If you cannot find your answer below, please email
                        <a href="mailto:support@borroe.finance" className="text-sky-600">support@borroe.finance</a>
                    </p>
                    <dl className="mt-10 space-y-4 3xl:space-y-6"><div className=" border-b-2 border-zinc-700" data-headlessui-state="">
                        <dt>
                            <button className="flex w-full items-start text-xl text-left 3xl:text-2xl 3xl:p-6 p-2 space-x-4 px-2 md:px-5 mt-3" id="headlessui-disclosure-button-:r1:" type="button" aria-expanded="false" data-headlessui-state="" onClick={() => {
                                setToggle1(!toggle1)
                            }}>
                                <span className="text-sky-600 mr-4 flex h-7 items-center">
                                    <img src={toggle1 ? minus : plus} alt="Plus" />
                                </span>
                                <span className=" text-white font-semibold  text-lg md:text-xl mb-2 md:mb-4">What is Tito?</span>
                            </button>
                        </dt>
                        {toggle1 && (
                            <dd className="flex w-full items-start text-left 3xl:text-2xl 3xl:p-6 space-x-4 p-2 md:p-5" id="headlessui-disclosure-panel-:r1:" data-headlessui-state="open">
                                <span className="text-white font-normal ">
                                </span>
                                <p className="text-lg  font-normal text-gray-500 3xl:text-2xl md:pl-10 md:pr-3 pl-6 md:pb-0 pb-4">The marketplace where the Web3 community can convert their future recurring income into Non-Fungible Tokens (NFTs) for sale at a discount to buyers for upfront cash with full repayment on a fixed date.</p>
                            </dd>)
                        }
                    </div>
                        <div className=" border-b-2 border-zinc-700" data-headlessui-state="">
                            <dt>
                                <button className="flex w-full items-start text-xl text-left 3xl:text-2xl 3xl:p-6 p-2 space-x-4 px-2 md:px-5 mt-3" id="headlessui-disclosure-button-:r3:" type="button" aria-expanded="false" data-headlessui-state="" onClick={() => {
                                    setToggle2(!toggle2)
                                }} >
                                    <span className="text-sky-600 mr-4 flex h-7 items-center">
                                        <img src={toggle2 ? minus : plus} alt="Plus" />
                                    </span>
                                    <span className=" text-white font-semibold  text-lg md:text-xl mb-2 md:mb-4">What is $TITO Token?</span>
                                </button>
                            </dt>
                            {toggle2 && (
                                <dd className="flex w-full items-start text-left 3xl:text-2xl 3xl:p-6 space-x-4 p-2 md:p-5" id="headlessui-disclosure-panel-:r1:" data-headlessui-state="open">
                                    <span className="text-white font-normal ">
                                    </span>
                                    <p className="text-lg  font-normal text-gray-500 3xl:text-2xl md:pl-10 md:pr-3 pl-6 md:pb-0 pb-4">$TITO is the governance token and the gateway to all the features on the Borroe marketplace including rewards and incentives.</p>
                                </dd>)
                            }
                        </div>
                        <div className=" border-b-2 border-zinc-700" data-headlessui-state="">
                            <dt>
                                <button className="flex w-full items-start text-xl text-left 3xl:text-2xl 3xl:p-6 p-2 space-x-4 px-2 md:px-5 mt-3" id="headlessui-disclosure-button-:r5:" type="button" aria-expanded="false" data-headlessui-state="" onClick={() => {
                                    setToggle3(!toggle3)
                                }}>
                                    <span className="text-sky-600 mr-4 flex h-7 items-center">
                                        <img src={toggle3 ? minus : plus} alt="Plus" />
                                    </span>
                                    <span className=" text-white font-semibold  text-lg md:text-xl mb-2 md:mb-4">
                                        How do I buy $TITO tokens?</span>
                                </button>
                            </dt>
                            {toggle3 && (
                                <dd className="flex w-full items-start text-left 3xl:text-2xl 3xl:p-6 space-x-4 p-2 md:p-5" id="headlessui-disclosure-panel-:r1:" data-headlessui-state="open">
                                    <span className="text-white font-normal ">
                                    </span>
                                    <p className="text-lg  font-normal text-gray-500 3xl:text-2xl md:pl-10 md:pr-3 pl-6 md:pb-0 pb-4">The marketplace where the Web3 community can convert their future recurring income into Non-Fungible Tokens (NFTs) for sale at a discount to buyers for upfront cash with full repayment on a fixed date.</p>
                                </dd>)
                            }
                        </div>
                        <div className=" border-b-2 border-zinc-700" data-headlessui-state="">
                            <dt>
                                <button className="flex w-full items-start text-xl text-left 3xl:text-2xl 3xl:p-6 p-2 space-x-4 px-2 md:px-5 mt-3" id="headlessui-disclosure-button-:r7:" type="button" aria-expanded="false" data-headlessui-state="" onClick={() => {
                                    setToggle4(!toggle4)
                                }}>
                                    <span className="text-sky-600 mr-4 flex h-7 items-center">
                                        <img src={toggle4 ? minus : plus} alt="Plus" />
                                    </span>
                                    <span className=" text-white font-semibold  text-lg md:text-xl mb-2 md:mb-4">
                                        What is Polygon?</span>
                                </button>
                            </dt>

                            {toggle4 && (
                                <dd className="flex w-full items-start text-left 3xl:text-2xl 3xl:p-6 space-x-4 p-2 md:p-5" id="headlessui-disclosure-panel-:r1:" data-headlessui-state="open">
                                    <span className="text-white font-normal ">
                                    </span>
                                    <p className="text-lg  font-normal text-gray-500 3xl:text-2xl md:pl-10 md:pr-3 pl-6 md:pb-0 pb-4">The marketplace where the Web3 community can convert their future recurring income into Non-Fungible Tokens (NFTs) for sale at a discount to buyers for upfront cash with full repayment on a fixed date.</p>
                                </dd>)
                            }
                        </div>
                        <div className=" border-b-2 border-zinc-700" data-headlessui-state="">
                            <dt>
                                <button className="flex w-full items-start text-xl text-left 3xl:text-2xl 3xl:p-6 p-2 space-x-4 px-2 md:px-5 mt-3" id="headlessui-disclosure-button-:r9:" type="button" aria-expanded="false" data-headlessui-state="" onClick={() => {
                                    setToggle5(!toggle5)
                                }}>
                                    <span className="text-sky-600 mr-4 flex h-7 items-center">
                                        <img src={toggle5 ? minus : plus} alt="Plus" />
                                    </span>
                                    <span className=" text-white font-semibold  text-lg md:text-xl mb-2 md:mb-4">When can I claim my tokens?</span>
                                </button>
                            </dt>
                            {toggle5 && (
                                <dd className="flex w-full items-start text-left 3xl:text-2xl 3xl:p-6 space-x-4 p-2 md:p-5" id="headlessui-disclosure-panel-:r1:" data-headlessui-state="open">
                                    <span className="text-white font-normal ">
                                    </span>
                                    <p className="text-lg  font-normal text-gray-500 3xl:text-2xl md:pl-10 md:pr-3 pl-6 md:pb-0 pb-4">The marketplace where the Web3 community can convert their future recurring income into Non-Fungible Tokens (NFTs) for sale at a discount to buyers for upfront cash with full repayment on a fixed date.</p>
                                </dd>)
                            }
                        </div>
                        <div className=" border-b-2 border-zinc-700" data-headlessui-state="">
                            <dt>
                                <button className="flex w-full items-start text-xl text-left 3xl:text-2xl 3xl:p-6 p-2 space-x-4 px-2 md:px-5 mt-3" id="headlessui-disclosure-button-:rb:" type="button" aria-expanded="false" data-headlessui-state="" onClick={() => {
                                    setToggle6(!toggle6)
                                }}>
                                    <span className="text-sky-600 mr-4 flex h-7 items-center">
                                        <img src={toggle6 ? minus : plus} alt="Plus" />
                                    </span>
                                    <span className=" text-white font-semibold  text-lg md:text-xl mb-2 md:mb-4">What are the benefits of $TITO?</span>
                                </button>
                            </dt>
                            {toggle6 && (
                                <dd className="flex w-full items-start text-left 3xl:text-2xl 3xl:p-6 space-x-4 p-2 md:p-5" id="headlessui-disclosure-panel-:r1:" data-headlessui-state="open">
                                    <span className="text-white font-normal ">
                                    </span>
                                    <p className="text-lg  font-normal text-gray-500 3xl:text-2xl md:pl-10 md:pr-3 pl-6 md:pb-0 pb-4">The marketplace where the Web3 community can convert their future recurring income into Non-Fungible Tokens (NFTs) for sale at a discount to buyers for upfront cash with full repayment on a fixed date.</p>
                                </dd>)
                            }
                        </div>
                    </dl>
                </div>
            </div>
        </section>
    </>);

}
export default Questions;