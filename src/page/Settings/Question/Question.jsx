import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import { Link } from "react-router-dom";

const Question = () => {
  return (
    <div className="py-[30px] pl-[45px] pr-[41px] max-[767px]:p-8 max-[576px]:p-5">
      <Headers text={{ heading: "Question Manager" }}>
        <Link to="/admin/create-question">
          <BlackButton
            text={"Create Question"}
            icon={"ic:twotone-plus"}
            contentReverse={true}
          />
        </Link>
      </Headers>
      <div className="mt-10">
        <p className="text-[#A4A4A4] text-sm font-normal bg-[#FFF] px-[10px] py-3.5 rounded-[10px] h-[37px] max-w-[503px]">
          0 question available
        </p>
        <p className="mt-[15px]  text-sm font-normal text-primaryColor">
          No question found. Please create one
        </p>
      </div>
    </div>
  );
};

export default Question;
