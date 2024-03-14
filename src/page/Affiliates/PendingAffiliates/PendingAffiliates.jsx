import { Icon } from "@iconify/react";


const PendingAffiliates = () => {
    return (
        <div>
            <div className=" flex mb-10 justify-center md:justify-start items-center gap-4">
                <div>
                    <h2 className=" font-secondaryFont text-primaryColor font-bold text-[32px] text-center md:text-left">Pending Affiliates</h2>
                </div>
                <div>
                    <p className=" font-secondaryFont text-xl font-bold text-white bg-[#EE501F] px-4 py-1 rounded-[10px] text-center">05</p>
                </div>
            </div>
            <div className="p-4">
                <div className=" p-6 rounded-[10px] bg-white">
                    <div className=" overflow-x-auto">
                        <table className=" table-auto w-full">
                            <thead>
                                <tr className=" bg-primaryColor text-white text-left">
                                    <th className="pl-3 pr-[30px]"><Icon icon="mdi:checkbox-outline" /></th>
                                    <th className=""><p className="w-[50px]">ID</p></th>
                                    <th className=" "><p className="w-[150px]">Affiliate</p></th>
                                    <th className="  "><p className="w-[100px]">Country</p></th>
                                    <th className=" "><p className="w-[140px]">PrimaryUser</p></th>
                                    <th className=" "><p className="w-[140px]">Email</p></th>
                                    <th className=" "><p className="w-[120px]">Phone</p></th>
                                    <th className=" "><p className="w-[80px]">IM</p></th>
                                    <th className=" "><p className="w-[150px]">RegisteredAt</p></th>
                                    <th className=" py-3"><p className="pr-3">AccountManager</p></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="pt-4 pl-3"><Icon icon="mdi:checkbox-outline" /></td>
                                    <td className="pt-4">01</td>
                                    <td className="pt-4">Affiliate Name</td>
                                    <td className="pt-4">Japan</td>
                                    <td className="pt-4">02</td>
                                    <td className="pt-4">123@gmail.com</td>
                                    <td className="pt-4">+02596544</td>
                                    <td className="pt-4">$0.00</td>
                                    <td className="pt-4">10:54 AM</td>
                                    <td className="pt-4">Dipjol</td>
                                </tr>
                                <tr>
                                    <td className="pt-4 pl-3"><Icon icon="mdi:checkbox-outline" /></td>
                                    <td className="pt-4">01</td>
                                    <td className="pt-4">Affiliate Name</td>
                                    <td className="pt-4">Japan</td>
                                    <td className="pt-4">02</td>
                                    <td className="pt-4">123@gmail.com</td>
                                    <td className="pt-4">+02596544</td>
                                    <td className="pt-4">$0.00</td>
                                    <td className="pt-4">10:54 AM</td>
                                    <td className="pt-4">Dipjol</td>
                                </tr>
                                <tr>
                                    <td className="pt-4 pl-3"><Icon icon="mdi:checkbox-outline" /></td>
                                    <td className="pt-4">01</td>
                                    <td className="pt-4">Affiliate Name</td>
                                    <td className="pt-4">Japan</td>
                                    <td className="pt-4">02</td>
                                    <td className="pt-4">123@gmail.com</td>
                                    <td className="pt-4">+02596544</td>
                                    <td className="pt-4">$0.00</td>
                                    <td className="pt-4">10:54 AM</td>
                                    <td className="pt-4">Dipjol</td>
                                </tr>
                                <tr>
                                    <td className="pt-4 pl-3"><Icon icon="mdi:checkbox-outline" /></td>
                                    <td className="pt-4">01</td>
                                    <td className="pt-4">Affiliate Name</td>
                                    <td className="pt-4">Japan</td>
                                    <td className="pt-4">02</td>
                                    <td className="pt-4">123@gmail.com</td>
                                    <td className="pt-4">+02596544</td>
                                    <td className="pt-4">$0.00</td>
                                    <td className="pt-4">10:54 AM</td>
                                    <td className="pt-4">Dipjol</td>
                                </tr>
                                <tr>
                                    <td className="pt-4 pl-3"><Icon icon="mdi:checkbox-outline" /></td>
                                    <td className="pt-4">01</td>
                                    <td className="pt-4">Affiliate Name</td>
                                    <td className="pt-4">Japan</td>
                                    <td className="pt-4">02</td>
                                    <td className="pt-4">123@gmail.com</td>
                                    <td className="pt-4">+02596544</td>
                                    <td className="pt-4">$0.00</td>
                                    <td className="pt-4">10:54 AM</td>
                                    <td className="pt-4">Dipjol</td>
                                </tr>
                                <tr>
                                    <td className="pt-4 pl-3"><Icon icon="mdi:checkbox-outline" /></td>
                                    <td className="pt-4">01</td>
                                    <td className="pt-4">Affiliate Name</td>
                                    <td className="pt-4">Japan</td>
                                    <td className="pt-4">02</td>
                                    <td className="pt-4">123@gmail.com</td>
                                    <td className="pt-4">+02596544</td>
                                    <td className="pt-4">$0.00</td>
                                    <td className="pt-4">10:54 AM</td>
                                    <td className="pt-4">Dipjol</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PendingAffiliates;