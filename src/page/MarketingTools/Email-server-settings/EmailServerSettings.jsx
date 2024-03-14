import { Link } from "react-router-dom";
import { Headers } from "../../../components/Headers/Headers";
import AddButton from "../../../components/Button/AddButton";
import SelectFiled from "../../../components/InputField/SelectFiled";

const EmailServerSettings = () => {
  return (
    <div>
      <div className="xl:mb-[103px] md:mb-10 mb-5">
        <Headers text={{ heading: " Email Server Settings" }}></Headers>
      </div>
      <div className="lg:max-w-[792px] m-auto md:max-w-[600px] max-w-[400px] bg-white rounded-[15px] md:pt-[60] pt-[40px] lg:px-[132px] md:px-[70px] px-[30px] md:pb-[120px] pb-10">
        <h3 className=" font-primaryFont text-primaryColor font-medium text-[16px] mb-5">
          Email Server{" "}
        </h3>
        <SelectFiled
          bg={"#DDDFE2"}
          name={"name"}
          select={[
            {
              value: "Use Offershub Email Servers",
              option: "Use Offershub Email Servers",
            },
          ]}
        />
        <div className="max-w-[506px] mt-5">
          <Link
            className="max-w-[506px]"
            to="/admin/email-custom-server-settings"
          >
            <AddButton text={"Update"} varient={"black"} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EmailServerSettings;
