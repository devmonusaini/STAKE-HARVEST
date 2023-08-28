import React from "react";
import img1 from "../images/social_logo/twitter.png";
import img2 from "../images/social_logo/telegram.png";
import img3 from "../images/social_logo/youtube.png";

const Community = () => {
    return (
        <>
            <div className="px-3 py-4 bg-vulcan pb-20">
                <div className="max-w-7xl mx-auto rounded-lg grid  text-center bg-gradient-to-r from-gray-900 to-gray-800  pb-16 overflow-x-auto filter">

                    <p className="w-full pl-10 text-start sm:text-center sm:items-center text-white pb-4 font-semibold mt-4 text-3xl lg:mt-8">Stake history</p>


                    <table className="  w-full text-center py-4"  >
                        <thead className=" w-full">
                            <tr className="gap-2 w-full text-sky-600  ">
                                <th className="px-20 py-3">Duration</th>
                                <th className="px-20 py-3">Amount</th>
                                <th className="px-20 py-3">Staked at</th>
                                <th className="px-20 py-3">Can unstake at</th>
                                <th className="px-20 py-3">Claim</th>

                            </tr>
                        </thead>
                        <tbody className="text-white">
                            <tr className="py-20">
                                <td >15 Days</td>
                                <td>500.00</td>
                                <td>25-Aug-2023 12:15 AM</td>
                                <td>30-Aug-2023 12:15 AM</td>
                                <td><button type="button" className=" w-20  items-center justify-center whitespace-nowrap rounded-md px-1 py-1 sm:px-2 sm:py-2 3xl:py-2 4xl:py-3 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600">
                                    Claim</button></td>
                            </tr>
                            <br />
                            <tr >
                                <td >180 Days</td>
                                <td>500.00</td>
                                <td>25-Aug-2023 12:15 AM</td>
                                <td>30-Aug-2023 12:15 AM</td>
                                <td><button type="button" className=" w-20  items-center justify-center whitespace-nowrap rounded-md px-1 py-1 sm:px-2 sm:py-2 3xl:py-2 4xl:py-3 text-xs sm:text-xs font-semibold text-neutral-900 hover:text-white leading-6 shadow-sm bg-gradient-to-r to-fuchsia-200 from-blue-100 hover:from-sky-600 hover:to-fuchsia-600 ">
                                    Claim</button></td>
                            </tr>

                        </tbody>
                    </table>


                </div>
            </div>
        </>
    );
}

export default Community;