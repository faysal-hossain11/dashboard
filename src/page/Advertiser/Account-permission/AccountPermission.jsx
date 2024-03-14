import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import { ToggleBar } from "../../../components/InputField/ToggleBar";

const AccountPermission = () => {
  return (
    <>
      <Headers text={{ heading: "Permissions" }}></Headers>
      <div className="lg:mt-20 md:mt-10 mt-5 flex flex-col md:gap-[30px] gap-5">
        <ToggleBar heading={"Access Report"} />
        <ToggleBar heading={"Export Report"} />
        <ToggleBar heading={"Access Offers"} />
        <ToggleBar heading={"Make Offer Applications"} />
        <ToggleBar heading={"Access Smart Links"} />
        <ToggleBar heading={"Access Billing"} />
        <ToggleBar heading={"Update Account / Billing Information"} />
        <ToggleBar heading={"Access API"} />
        <ToggleBar heading={"Manage postback URLs"} />
      </div>
      <div className="lg:mt-[60px] md:mt-10 mt-5 max-w-[768px] mx-auto">
        <AddButton text={"Update"} varient={"black"} />
      </div>
    </>
  );
};

export default AccountPermission;
