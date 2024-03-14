import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const IntegrationCard = ({ card }) => {
  return (
    <div className="mt-[50px] lg:px-0">
      <div className="px-[40px] pb-[30px] max-[576px]:p-5 rounded-[10px] bg-white  relative group hover:bg-primaryColor transition-all duration-300">
        <div className=" text-center  bg-white border-[5px] broder-secondary w-[100px] p-[25px] rounded-full m-auto absolute top-[-50px] left-[50%] translate-x-[-50%] group-hover:bg-primaryColor transition-all duration-300">
          <div className=" text-center text-[40px] text-red group-hover:text-white  transition-all duration-300">
            {card.icon}
          </div>
        </div>
        <div>
          <h4 className=" font-primaryFont text-primaryColor font-medium text-[24px] mb-3 text-center pt-[70px] group-hover:text-white transition-all duration-300">
            {card.title}
          </h4>
          <p className=" font-primaryFont text-tartiaryColor text-[16px] font-normal text-center mb-[34px] group-hover:text-white transition-all duration-300">
            {card.description}
          </p>
          <div className="px-[20px]">
            <Link to={card?.link}>
              <button
                onClick={() => document.getElementById("modal").showModal()}
                className="text-center w-full bg-white py-3 border border-primaryColor rounded-[10px] text-[#6A6A6A] font-bold text-[16px] font-secondaryFont"
              >
                {card.button}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationCard;
