import { Icon } from "@iconify/react";
import BlackButton from "../../../components/Button/BlackButton";
import { Headers } from "../../../components/Headers/Headers";
import SearchFieldBorder from "../../../components/InputField/SearchFieldBorder";
import SelectFiled from "../../../components/InputField/SelectFiled";

const OfferPayout = () => {
    return (
        <div>
            <div>
                <Headers text={{ heading: 'Offer payout $' }}>
                    <BlackButton text={'Manage'}/>
                    <BlackButton text={'Add'}/>
                </Headers>
            </div>
            <div className="xl:flex justify-between mt-6 mb-[25px]">
                <div className="flex justify-between gap-6 mb-5 xl:mb-0">
                    <div className="w-[506px] md:w-full">
                        <SearchFieldBorder placeholder={"Search ..."} name={"name"} />
                    </div>
                    <BlackButton text={'Search'}/>
                </div>
                <div>
                    <SelectFiled  size={"xl"} bg={"#FFF"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />
                </div>
            </div>
            <div>
            <div className=" overflow-x-auto bg-white">
            <table className=" w-full table-auto">
                <thead>
                <tr className=" bg-primaryColor text-white text-left">
                    <th className=" py-3 pl-3"><p className="w-[70px]">Offer ID</p></th>
                    <th className=" py-3 "><p className=" w-[70px] flex items-center gap-[10px]">Offer<Icon icon="lets-icons:sort-arrow" /></p></th>
                    <th className=" py-3"><p className="w-[50px]">Event</p></th>
                     <th className=" py-3 "><p className=" w-[80px] flex items-center gap-[10px]">Payout<Icon icon="lets-icons:sort-arrow" /></p></th>
                     <th className=" py-3 "><p className=" w-[140px] flex items-center gap-[10px]">Pending Ratio<Icon icon="lets-icons:sort-arrow" /></p></th>
                     <th className=" py-3 "><p className=" w-[180px] flex items-center gap-[10px]">Dynamic Rev/Share<Icon icon="lets-icons:sort-arrow" /></p></th>
                     <th className=" py-3 "><p className=" w-[100px] flex items-center gap-[10px]">Offer<Icon icon="lets-icons:sort-arrow" /></p></th>
                    <th className=" py-3"><p className="w-[50px]">Caps</p></th>
                    <th className=" py-3 "><p className=" w-[100px] flex items-center gap-[10px]"><th className=" py-3 "><p className=" w-[100px] flex items-center gap-[10px]">Offer<Icon icon="lets-icons:sort-arrow" /></p></th><Icon icon="lets-icons:sort-arrow" /></p></th>
                </tr>
                </thead>
                <tbody>
                <tr className="">
                    <td className="pt-5 pb-5 pl-3">01</td>
                    <td className="pt-5 pb-5">Kitkat</td>
                    <td className="pt-5 pb-5">12:20 PM</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">No</td>
                </tr>
                <tr className="">
                    <td className="pt-5 pb-5 pl-3">01</td>
                    <td className="pt-5 pb-5">Kitkat</td>
                    <td className="pt-5 pb-5">12:20 PM</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">No</td>
                </tr>
                <tr className="">
                    <td className="pt-5 pb-5 pl-3">01</td>
                    <td className="pt-5 pb-5">Kitkat</td>
                    <td className="pt-5 pb-5">12:20 PM</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">No</td>
                </tr>
                <tr className="">
                    <td className="pt-5 pb-5 pl-3">01</td>
                    <td className="pt-5 pb-5">Kitkat</td>
                    <td className="pt-5 pb-5">12:20 PM</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">No</td>
                </tr>
                <tr className="">
                    <td className="pt-5 pb-5 pl-3">01</td>
                    <td className="pt-5 pb-5">Kitkat</td>
                    <td className="pt-5 pb-5">12:20 PM</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">No</td>
                </tr>
                <tr className="">
                    <td className="pt-5 pb-5 pl-3">01</td>
                    <td className="pt-5 pb-5">Kitkat</td>
                    <td className="pt-5 pb-5">12:20 PM</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">Paid</td>
                    <td className="pt-5 pb-5">No</td>
                </tr>
             
                
                </tbody>
            </table>
            </div>
            </div>
        </div>
    );
};

export default OfferPayout;