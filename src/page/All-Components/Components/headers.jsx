import BlackButton from "../../../components/Button/BlackButton";
import { Headers, SideBtn } from "../../../components/Headers/Headers";
import {
  MiddleHeader,
  Paragraph,
  SmallHeader,
} from "../../../components/Headers/MiddleHeader";

export const headers = {
  id: 3,
  label: "Headers",
  elements: [
    {
      name: "Top Headers",
      children: (
        <Headers text={{ heading: "Statistics", subText: "(This Month)" }}>
          <BlackButton
            text={"Open Live Dashboard"}
            icon={"heroicons:signal-20-solid"}
          />
          <SideBtn />
        </Headers>
      ),
      howToUse: `
        <Headers text={{ heading: 'Statistics', subText: '(This Month)' }}>
            <BlackButton
                text={'Open Live Dashboard'}
                icon={'heroicons:signal-20-solid'}
            />
            <SideBtn />
        </Headers>`,
      code: `
            export function Headers({ text, children }) {
                return (
                    <div className="flex flex-wrap gap-3 justify-between">
                        <div className="flex items-center gap-[10px]">
                            <h2 className=" font-secondaryFont text-primaryColor text-[32px] font-bold select-none">
                                {text?.heading}
                            </h2>
                            {text?.subText && (
                                <p className=" select-none text-[12px] text-tartiaryColor font-primaryFont">
                                    {text?.subText}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-[20px] items-center">{children}</div>
                    </div>
                );
            }`,
    },
    {
      name: "Middle Headers (24px)",
      children: <MiddleHeader heading={"Email Server Settings"} />,
      howToUse: `<MiddleHeader heading={"Email Server Settings"} />`,
      code: `const MiddleHeader = ({ heading }) => {
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
      
      export default MiddleHeader;`,
    },
    {
      name: "Small Headers (20px)",
      children: <SmallHeader heading={"Mass Emailing Tool"} />,
      howToUse: `<SmallHeader heading={"Mass Emailing Tool"} />`,
      code: `export const SmallHeader = ({ heading }) => {
        const style = {
          color: "#3F3F3F",
          fontFamily: "Inter",
          fontSize: "20px",
          fontStyle: "normal",
          fontWeight: "500",
          lineHeight: "normal",
        };
        return <p style={style}>{heading}</p>;
      };`,
    },
    {
      name: "Paragraph (18px)",
      children: <Paragraph text={"Mass Emailing Tool"} color={"#000"} />,
      howToUse: `<Paragraph text={"Mass Emailing Tool"} color={"#000"} />`,
      code: `export const Paragraph = ({ text, color }) => {
        return (
          <span className={'text-[18px] font-normal text-[${'color'}]'}>{text}</span>
        );
      };`,
    },
  ],
};
