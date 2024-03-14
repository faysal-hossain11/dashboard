import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";

const Email = () => {
  return (
    <div>
      <Headers text={{ heading: "Email Server Setting" }}></Headers>
      <div className="mt-[30px] pt-10 pb-[34px] px-3 bg-white rounded-[10px] max-[576px]:py-5 max-[767px]:mt-5">
        <h3 className="text-primaryColor font-primaryFont text-[20px] font-semibold mb-[45px] text-center max-[767px]:mb-5 max-[340px]:text-[18px]">
          Email Server Setting
        </h3>
        <form>
          <div className="mt-12 max-[767px]:mt-8 max-[576px]:mt-5">
            <div className="max-w-[768px] mx-auto">
              <SelectFiled
                label={"Email Server"}
                size={"base"}
                bg={"#F5F5F5"}
                name={"name"}
                select={[
                  { value: "User Server Only", option: "User Server Only" },
                  { value: "User Server Only", option: "User Server Only" },
                ]}
              />
            </div>
          </div>
          <div className="mt-[60px] max-[767]:mt-10 max-[576px]:mt-5 max-w-[506px] mx-auto">
            <AddButton text={"Update"} varient={"black"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Email;
