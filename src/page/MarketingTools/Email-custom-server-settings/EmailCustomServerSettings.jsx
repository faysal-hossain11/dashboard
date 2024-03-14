import ReportButton from "../../../components/Button/ReportButton";
import UploadButton from "../../../components/Button/UploadButton";
import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";

const EmailCustomServerSettings = () => {
  return (
    <div className="max-w-[1300px] mx-auto">
      <div className="lg:mb-[60px] md:mb-10 mb-5">
        <Headers text={{ heading: "Email Server Settings" }}></Headers>
      </div>
      <div className="px-3 lg:px-0">
        <form action="">
          <div className="grid md:grid-cols-2 gap-x-[33px] md:gap-y-10 gap-y-5">
            <SelectFiled
              label={"Email Server"}
              size={"base"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
              ]}
            />
            <SelectFiled
              label={"SMTP Host"}
              size={"base"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "EG. 256", option: "EG. 256" },
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
              ]}
            />
            <SelectFiled
              label={"Encryption Protocol"}
              size={"base"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Unencrypted/TLS", option: "Unencrypted/TLS" },
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
              ]}
            />
            <SelectFiled
              label={"SMTP Username"}
              size={"base"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "SMTP Username", option: "SMTP Username" },
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
              ]}
            />
            <SelectFiled
              label={"SMTP Password"}
              size={"base"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
              ]}
            />
            <SelectFiled
              label={"SMTP Port"}
              size={"base"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "EG. 256", option: "EG. 256" },
                { value: "Use Custom", option: "Use Custom" },
                { value: "Use Custom", option: "Use Custom" },
              ]}
            />
          </div>
          <div className="mb-10 mt-5 max-w-[45%]">
            <p className=" font-primaryFont text-[14px] font-normal">
              <span className=" font-semibold text-[12px]">Please Note:</span>{" "}
              We recommend you to test configuration using the option below
              before save.
            </p>
          </div>
          <div>
            <ReportButton text={"Test Email Settings"} />
          </div>
          <div className="flex justify-center mt-[60px] max-w-[240px] mx-auto">
            <UploadButton text={"Update"} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailCustomServerSettings;
