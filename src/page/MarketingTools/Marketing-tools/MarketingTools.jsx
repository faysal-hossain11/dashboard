import { Link } from "react-router-dom";
import AddButton from "../../../components/Button/AddButton";
import BlackButton from "../../../components/Button/BlackButton";
import {
  MiddleHeader,
  SmallHeader,
} from "../../../components/Headers/MiddleHeader";
import { Headers } from "../../../components/Headers/Headers";

const MarketingTools = () => {
  return (
    <div>
      <div className="md:flex justify-between items-center lg:mb-20 md:mb-10 mb-5">
        <div className="text-center md:text-left">
          <div className="mb-[21px]">
            <Headers text={{ heading: "Mailer (Beta)" }}></Headers>
          </div>
          <SmallHeader heading={"Mass Emailing Tool"} />
        </div>
        <div className="flex justify-center mt-5 md:mt-0">
          <BlackButton
            text={" Compose"}
            icon={"charm:plus"}
            contentReverse={true}
          />
        </div>
      </div>
      <div className="text-center px-4 lg:px-0">
        <div className="mb-5">
          <MiddleHeader heading={"Custom Mail Server Required!"} />
        </div>
        <div className="md:mb-[60px] mb-5">
          <SmallHeader
            heading={
              "You need to have a custom email server setup in order to use this feature."
            }
          />
        </div>
      </div>
      <div className="flex justify-center max-w-[348px] mx-auto">
        <Link to="/admin/email-server-settings" className="w-full">
          <AddButton text={"Setup"} varient={"black"} />
        </Link>
      </div>
    </div>
  );
};

export default MarketingTools;
