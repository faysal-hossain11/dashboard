
import AddButton from "../../../components/Button/AddButton";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";
import InputField from "../../../components/InputField/InputField";


const Offeraccessmodalblack = () => {
    return (
        <div>
            <dialog id="my_modal_4"  className="modal">
              <div className="modal-box max-w-[768px] h-[450px] py-[60px] px-[40px]">
                <form method="dialog">
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <div className="text-center mb-4">
                    <MiddleHeader heading={"Allow Offer Access."} />
                </div>
                <div>
                    <InputField label={"Select Advertiser"} bg={"#F5F5F5"} size={"xl"} placeholder={"Type here"} require={"require"} type={"text"} name={"name"}/>  
                </div>
                <div className="mt-5 ">
                      <AddButton text={"Allow Access"} varient={"black"} />
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
            <div>
            </div>
        </div>
    );
};

export default Offeraccessmodalblack;