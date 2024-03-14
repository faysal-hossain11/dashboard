import { Headers } from "../../../components/Headers/Headers";
import AddButton from "../../../components/Button/AddButton";
import ImportCard from "../../../components/Cards/ImportCard";
import InputBottom from "../../../components/InputField/InputBottom";

const EditEmployeeProfile = () => {
  return (
    <div>
      <h1 className="text-[32px] text-primaryColor font-bold"></h1>
      <Headers text={{ heading: "Edit Employee Profile" }}></Headers>
      <div className="lg:mt-[60px] md:mt-10 mt-5">
        <form>
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <InputBottom
              label={"First Name"}
              placeholder={"Nur"}
              name={"Name"}
              required={"required"}
            />
            <InputBottom
              label={"Last Name"}
              placeholder={"Islam"}
              name={"Name"}
              required={"required"}
            />
            <InputBottom
              label={"Totle"}
              placeholder={"Manager"}
              name={"Name"}
              required={"required"}
            />
          </div>
          <div className="mt-10 max-[767px]:mt-8 max-[576px]:mt-5">
            <label className="font-medium text-base text-primaryColor">
              Profile Photo
            </label>
            <div className="mt-5">
              <ImportCard icon={"teenyicons:user-square-solid"} />
            </div>
          </div>
          <div className="md:mt-10 mt-5 grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 md:gap-y-10 gap-y-5">
            <InputBottom
              label={"Email"}
              placeholder={"Mominul@34gmail.com"}
              name={"Name"}
              required={"required"}
            />
            <InputBottom
              label={"Number"}
              placeholder={"018462265912"}
              name={"Name"}
              required={"required"}
            />
            <InputBottom
              label={"IM Details"}
              placeholder={"Skype"}
              name={"Name"}
              required={"required"}
            />
            <InputBottom
              label={"Skype ID"}
              placeholder={"Skype"}
              name={"Name"}
              required={"required"}
            />
            <div>
              <InputBottom
                label={"Password"}
                placeholder={"Password"}
                name={"Name"}
                required={"required"}
              />
              <p className="text-sm text-normal text-[#3F3F3F] mt-[10px]">
                <span className="text-[#1DD752]">Note:</span> Leave empty if
                don&apos;t want to change password.
              </p>
            </div>
            <div>
              <InputBottom
                label={"Confirm Password"}
                placeholder={"Confirm Password"}
                name={"Name"}
                required={"required"}
              />
            </div>
          </div>
          <div className="max-w-[636px] mx-auto mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
            <AddButton text={"Add"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployeeProfile;
