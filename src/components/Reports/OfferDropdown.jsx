import { Icon } from "@iconify/react";
import { useState } from "react";


const OfferDropdown = () => {

    const [value, setValue] = useState(1);

    const handleChange = (id) => {
        setValue(id);
    };
    return (
        <div>
            <div className="">
                <div className="md:flex shadow-lg shadow-[#F5F5F5] bg-white p-2 rounded-[10px] w-full">
                    <div className="bg-primaryColor px-3 py-[30px] rounded-[10px] w-full md:w-[200px]">
                        <ul>
                            <li
                                onClick={() => handleChange(1)}
                                className={`flex gap-[10px] items-center ${value === 1 ? "bg-white" : "bg-transparent"
                                    } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${value === 1 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                    icon="ic:sharp-plus"
                                />
                                <span
                                    className={`text-xs font-medium ${value === 1 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                >
                                    Data
                                </span>
                            </li>
                            <li
                                onClick={() => handleChange(2)}
                                className={`flex gap-[10px] items-center ${value === 2 ? "bg-white" : "bg-transparent"
                                    } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${value === 2 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                    icon="ion:analytics-sharp"
                                />
                                <span
                                    className={`text-xs font-medium ${value === 2 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                >
                                    Statistics
                                </span>
                            </li>
                            <li
                                onClick={() => handleChange(3)}
                                className={`flex gap-[10px] items-center ${value === 3 ? "bg-white" : "bg-transparent"
                                    } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${value === 3 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                    icon="ion:timer"
                                />
                                <span
                                    className={`text-xs font-medium ${value === 3 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                >
                                    Time Interval
                                </span>
                            </li>
                            <li
                                onClick={() => handleChange(4)}
                                className={`flex gap-[10px] items-center ${value === 4 ? "bg-white" : "bg-transparent"
                                    } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${value === 4 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                    icon="ion:filter"
                                />
                                <span
                                    className={`text-xs font-medium ${value === 4 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                >
                                    Filters
                                </span>
                            </li>
                            <li
                                onClick={() => handleChange(5)}
                                className={`flex gap-[10px] items-center ${value === 5 ? "bg-white" : "bg-transparent"
                                    } py-2.5 px-5 cursor-pointer rounded-[10px]`}
                            >
                                <Icon
                                    className={`w-5 h-5 ${value === 5 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                    icon="ion:stopwatch-sharp"
                                />
                                <span
                                    className={`text-xs font-medium ${value === 5 ? "text-primaryColor" : "text-[#A4A4A4]"
                                        }`}
                                >
                                    Timezone
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className={value === 1 ? "block" : "hidden"}>
                            <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-5">
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Affiliate
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Affiliate ID
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Affiliate Manager
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Offer
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Offer ID
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Offer URL
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Event
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Goal/Event ID
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Advertiser
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Advertiser ID
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Advertiser Manager
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Country
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Category
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Currency
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Payout Type
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Revenue Type
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Source ID
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Platform
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Browser
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Device
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Creative
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Smart Group
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={value === 2 ? "block" : "hidden"}>
                            <div>
                                <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[100px]">
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            CR
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            RPC
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Click
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Conversions
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            UCR
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Revenue
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Unique Clicks
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            CPC
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Profit
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Gross Clicks
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            CPA
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Payout
                                        </label>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Impressions
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={value === 3 ? "block" : "hidden"}>
                            <div>
                                <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-[100px]">
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Year
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Month
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Week
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Date
                                        </label>
                                    </div>
                                    <div>
                                        <label className="custom-checkbox mb-5">
                                            <input type="checkbox" />
                                            <span className="checkbox-icon">+</span>
                                            Hour
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={value === 4 ? "block" : "hidden"}>
                            <div className="p-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[100px]">
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Affiliate
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Advertiser Manager
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Countries
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Smart Group
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Affiliate Manager
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Goal
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Payout Type
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Offer
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Categories
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Revenue Type
                                    </label>
                                </div>
                                <div>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Advertiser
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Currency
                                    </label>
                                    <label className="custom-checkbox mb-5">
                                        <input type="checkbox" />
                                        <span className="checkbox-icon">+</span>
                                        Source
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className={value === 5 ? "block" : "hidden"}>
                            <div className="p-10">
                                <div>
                                    <h3 className=" fontprimaryFont text-primaryColor font-medium text-[14px] mb-5">Report Timezone</h3>
                                </div>
                                <div>
                                    <select name="" id="" className=" text-[#6A6A6A] font-primaryFont font-normal text-[14px] py-[10px] pl-[10px] pr-[60px] bg-[#F5F5F5] outline-none focus:outline-none rounded-[10px]">
                                        <option value="">( UTC+00:00 ) UTC</option>
                                        <option value="">( UTC+00:00 ) UTC</option>
                                        <option value="">( UTC+00:00 ) UTC</option>
                                        <option value="">( UTC+00:00 ) UTC</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferDropdown;