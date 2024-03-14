import { Icon } from "@iconify/react";

const SaveTable = () => {
    return (
        <div>
            <button className="p-[14px] bg-[#F3F3F3] rounded-[10px]" onClick={() => document.getElementById('my_modal_3').showModal()}>
                <Icon icon="material-symbols:save" />
            </button>
            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <dialog id="my_modal_3" className="modal " >
                <div className="modal-box max-w-[768px] bg-[#F5F5F5]">
                    <form method="dialog" className="">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className=" lg:p-[80px] md:p-[50px] p-[30px]">
                        <h3 className=" font-primaryFont text-center text-primaryColor font-medium text-2xl mb-[60px]">Save Report</h3>
                        <div>
                            <h3 className=" text-primaryColor font-secondaryFont font-bold md:text-[20px] text-[16px] mb-5">Report Name</h3>
                            <input type="text" placeholder="Eg: Last week report" className=" bg-[#F5F5F5] text-[13px] md:text-[15px] outline-none w-full border-b-[1px] border-solid border-primaryColor pb-[10px] mb-10 focus:outline-none"/>
                            <h3 className=" text-primaryColor mb-3 font-secondaryFont font-bold text-[16px] md:text-[20px]">Report Default Date/Date Range</h3>
                            <select name="" id="" className=" w-full outline-none focus:outline-none bg-white p-[14px] rounded-[10px] mb-[60px]">
                                <option value="">Current report date range</option>
                                <option value="">Current report date range</option>
                                <option value="">Current report date range</option>
                                <option value="">Current report date range</option>
                                <option value="">Current report date range</option>
                                <option value="">Current report date range</option>
                            </select>
                            <div className=" md:flex mb-5 md:mb-0 gap-5">
                                <button className=" w-full border border-primaryColor rounded-[10px] py-3">Cancel</button>
                                <button className=" w-full bg-primaryColor text-white font-bold py-3 rounded-[10px]">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default SaveTable;