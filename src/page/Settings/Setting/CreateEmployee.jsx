import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import InputBottom from "../../../components/InputField/InputBottom";
import { SelectBottom } from "../../../components/InputField/SelectBottom";

const CreateEmployee = () => {
  return (
    <div>
      <Headers text={{ heading: "Create Employee" }}></Headers>
      <form className="xl:pt-10 pt-5">
        <div className="grid xl:grid-cols-3 gap-x-6 xl:gap-y-10 md:grid-cols-2 gap-y-5">
          <InputBottom
            label={"First Name"}
            placeholder={"Mominul"}
            name={"Name"}
            required={"required"}
          />
          <InputBottom
            label={"Last Name"}
            placeholder={"Haque"}
            name={"Name"}
            required={"required"}
          />
          <InputBottom
            label={"Title"}
            placeholder={"CEO"}
            name={"Name"}
            required={"required"}
          />
          <InputBottom
            label={"Email"}
            placeholder={"Mominul@34gmail.com"}
            name={"Name"}
            required={"required"}
          />
          <InputBottom
            label={"Number"}
            placeholder={"Number"}
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
            label={"Role"}
            placeholder={"Skype34dds"}
            name={"Name"}
            required={"required"}
          />
          <SelectBottom
            label={"Role"}
            size={"base"}
            name={"name"}
            select={[
              { value: "Advertiser", option: "Advertiser" },
              { value: "Advertiser", option: "Advertiser" },
            ]}
          />
        </div>
        <div className="max-w-[503px] mx-auto mt-[60px] max-[767px]:mt-10 max-[576px]:mt-5">
          <AddButton text={"Save"} varient={"black"} />
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
