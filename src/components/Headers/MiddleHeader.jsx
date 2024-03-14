export const MiddleHeader = ({ heading }) => {
  const style = {
    color: "#030813",
    fontFamily: "Inter",
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: "normal",
  };
  return <h2 style={style}>{heading}</h2>;
};

export const SmallHeader = ({ heading }) => {
  const style = {
    color: "#3F3F3F",
    fontFamily: "Inter",
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  };
  return <p style={style}>{heading}</p>;
};

export const Paragraph = ({ text, color }) => {
  return (
    <span className={`text-[18px] font-normal text-[${color}]`}>{text}</span>
  );
};