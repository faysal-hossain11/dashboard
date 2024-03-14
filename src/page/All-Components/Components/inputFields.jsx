import InputBottom from "../../../components/InputField/InputBottom";
import OutlineSelect from "../../../components/InputField/OutlineSelect";
import SearchFiled from "../../../components/InputField/SearchFiled";
import Textarea from "../../../components/InputField/Textarea";
import InputField from "../../../components/InputField/InputField";
import SelectFiled from "../../../components/InputField/SelectFiled";
import SearchFieldBorder from "../../../components/InputField/SearchFieldBorder";
import { InputFieldSmall } from "../../../components/InputField/InputFieldSmall";
import { SelectBottom } from "../../../components/InputField/SelectBottom";
import { ToggleBar } from "../../../components/InputField/ToggleBar";
import { OutlineField } from "../../../components/InputField/OutlineField";
import { CheckboxInput } from "../../../components/InputField/CheckboxInput";

export const inputFields = {
  id: 4,
  label: "Input Field",
  elements: [
    {
      name: "Input",
      children: (
        <>
          <InputField
            label={"Label Name"}
            bg={"#FFF"}
            size={"xl"}
            placeholder={"PlaceHolder Name"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
          <InputFieldSmall
            label={"Label Name"}
            bg={"#FFF"}
            size={"xl"}
            placeholder={"PlaceHolder Name"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
        </>
      ),
      howToUse: `<InputField label={"Label Name"} bg={"#FFF"} size={"xl"} placeholder={"PlaceHolder Name"} require={"require"} type={"text"} name={"name"}/> 
      <InputFieldSmall label={"Label Name"} bg={"#FFF"} size={"xl"} placeholder={"PlaceHolder Name"} require={"require"} type={"text"} name={"name"}/> `,
      code: `const Input = ({label, placeholder, required, type, name, bg, size}) => {
          return (
              <div className="flex flex-col gap-[10px]">
              {label && <label className={'font-primaryFont text-primaryColor ${
                "size" === "xl" ? "font-bold" : "font-medium"
              } text-${"size"}'}>
              {label}
            </label>}
            <input
              className={'py-[14px] px-[10px] rounded-[10px] w-full outline-none focus:outline-none bg-[${"bg"}] h-[45px]''}
              type={type}
              id="placeholders"
              placeholder={placeholder}
              required={required}
              name={name}
            />
              </div>
          );
      };
      
      export default Input;`,
    },
    {
      name: "Border Bottom Input",
      children: (
        <InputBottom
          label={"Label Name"}
          placeholder={"PlaceHolder Name"}
          name={"Name"}
          required={"required"}
          size={"base"}
        />
      ),
      howToUse: `<InputBottom label={"Label Name"} placeholder={"PlaceHolder Name"} name={"Name"} required={"required"} />`,
      code: `const InputBottom = ({label, type, name, placeholder, required}) => {
            const style = {
                backgroundColor: 'transparent',
            border: 'none',
            paddingBottom: '10px',
            borderBottom: '0.5px solid #030813',
            width: '100%',
            }
            return (
                <div className="flex flex-col gap-[10px]">
                 {label && <label className="font-primaryFont text-primaryColor font-medium text-sm">
                {label}
                </label>}
                <input style={style}
                  className="focus:outline-none"
                  type={type}
                  name={name}
                  id="placeholders"
                  placeholder={placeholder}
                  required={required}
                />
              </div>
            );
        };
        
        export default InputBottom;`,
    },
    {
      name: "Textarea",
      children: (
        <Textarea
          label={"Label Name"}
          placeholder={"PlaceHolder Name"}
          name={"Name"}
          bg={"#FFF"}
          size={"xl"}
          h={"184px"}
        />
      ),
      howToUse: `<Textarea label={"Label Name"} placeholder={"PlaceHolder Name"} name={"Name"} bg={"#FFF"} size={"xl"} h={"184px"} />`,
      code: `const Textarea = ({label, placeholder, name, bg, size}) => {
          return (
              <div className="flex flex-col gap-5">
             {label && <label className={'font-primaryFont text-primaryColor text-${"size"} ${
        "size" === "xl" ? "font-bold" : "font-medium"
      }'}>{label}</label>}
                  <textarea  name={name}
                    id="placeholders"
                    className={'rounded-[10px] bg-[${"bg"}] w-full h-full py-3.5 px-2.5 focus:outline-none'}
                    placeholder={placeholder} />
              </div>
          );
      };
      
      export default Textarea;`,
    },
    {
      name: "Search Field",
      children: (
        <>
          <SearchFiled
            placeholder={"PlaceHolder Name"}
            name={"name"}
            bg={"#000"}
          />
          <SearchFieldBorder placeholder={"PlaceHolder Name"} name={"name"} />
        </>
      ),
      howToUse: `<SearchFiled placeholder={"PlaceHolder Name"} name={"name"} bg={"#FFF"} />
      <SearchFieldBorder placeholder={"PlaceHolder Name"} name={"name"} />`,
      code: `import { Icon } from "@iconify/react";

        const SearchFiled = ({placeholder, name}) => {
            const style = {
                top: '58%',
                transform: 'translateY(-58%)',
                marginLeft: '15px'
            }
            return (
                <div className="relative">
                      <input
                        type="search"
                        name={name}
                        placeholder={placeholder}
                        className="py-[10px] bg-[#F5F5F5] pl-10 pr-5 rounded-[10px] outline-none focus:outline-none w-full"
                      />
                      <Icon style={style} icon="ic:outline-search" className="text-[#A4A4A4] text-xl absolute" />
                    </div>
            );
        };
        
        export default SearchFiled;`,
    },
    {
      name: "Select",
      children: (
        <SelectFiled
          label={"Affiliate"}
          size={"xl"}
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Value 1", option: "Option 1" },
            { value: "Value 2", option: "Option 2" },
          ]}
        />
      ),
      howToUse: `<SelectFiled label={"Affiliate"} size={"xl"} bg={"#FFF"} name={"name"} select={[{value: 'Value', option: 'Option'}]} />`,
      code: `const Select = ({label, name, select, size, bg}) => {
          return (
              <div className="flex flex-col gap-[10px]">
                    {label && <label className={'text-primaryColor ${
                      "size" === "xl" ? "font-bold" : "font-medium"
                    } text-${"size"}}>
                {label}
              </label>}
                    <select
                      className={'py-3.5 px-2.5 bg-[${"bg"}] rounded-[10px] w-full h-[52px] focus:outline-none'}
                      name={name}
                      id="placeholders"
                    >
                      <option disabled selected>Select</option>
                      {select?.map((e, i) =>  (<option key={i} value={e?.value}>{e?.option}</option>))}
                     
                    </select>
                  </div>
          );
      };
      
      export default Select;`,
    },
    {
      name: "Outline Select",
      children: (
        <OutlineSelect
          label={"Dashboard Theme"}
          size={"xl"}
          name={"name"}
          select={[
            { value: "Value 1", option: "Option 1" },
            { value: "Value 2", option: "Option 2" },
          ]}
        />
      ),
      howToUse: ` <OutlineSelect label={"Dashboard Theme"} size={"xl"}  name={"name"} select={[{value: 'Value', option: 'Option'}]} />`,
      code: `const OutlineSelect = ({label, font, size, select}) => {
          return (
              <div className="flex flex-col gap-[10px]">
              {label && <label className={'text-primaryColor font-${"font"} text-${"size"}'}>
                {label}
              </label>}
              <select style={{border: '0.5px solid #6A6A6A'}}
                className="py-3.5 px-4 bg-transparent rounded-[10px] w-full h-[52px] focus:outline-none"
                name={name}
                id="placeholders"
              >
                <option disabled selected>Select</option>
                {select?.map((e, i) =>  (<option key={i} value={e?.value}>{e?.option}</option>))}
              </select>
            </div>
          );
      };
      
      export default OutlineSelect;`,
    },
    {
      name: "Select Bottom",
      children: (
        <SelectBottom
          label={"Dashboard Theme"}
          size={"xl"}
          name={"name"}
          select={[
            { value: "Value 1", option: "Option 1" },
            { value: "Value 2", option: "Option 2" },
          ]}
        />
      ),
      howToUse: ` <SelectBottom label={"Dashboard Theme"} size={"xl"} name={"name"} select={[ { value: "Value 1", option: "Option 1" }, { value: "Value 2", option: "Option 2" },
      ]}
    />`,
      code: `export const SelectBottom = ({ label, name, select, size }) => {
        return (
          <div className="flex flex-col gap-[10px]">
            {label && (
              <label
                className={'${
                  "size" === "xl" ? "font-bold" : "font-medium"
                } text-${"size"} text-primaryColor'}
              >
                {label}
              </label>
            )}
            <select
              style={{ borderBottom: "0.5px solid #030813" }}
              className="pb-[10px] bg-transparent w-full focus:outline-none"
              name={name}
              id="placeholders"
            >
              <option selected disabled>
                Select
              </option>
              {select?.map((e, i) => (
                <option key={i} value={e?.value}>
                  {e?.option}
                </option>
              ))}
            </select>
          </div>
        );
      };
      `,
    },
    {
      name: "Select Bottom",
      children: <ToggleBar heading={"Heading"} />,
      howToUse: `<ToggleBar heading={"Heading"} />`,
      code: `import { Icon } from "@iconify/react";
      import { useState } from "react";
      
      export const ToggleBar = ({ heading }) => {
        const [click, setClick] = useState(false);
        return (
          <div className="flex justify-between items-center bg-[#FFF] p-5 rounded-[10px] h-[66px]">
            <p  className={'text-base ${
              "click" ? "text-[#6A6A6A]" : "text-primaryColor"
            } font-normal'}>{heading}</p>
            <div onClick={() => setClick(!click)}>
              <Icon
                className={'w-[46px] h-[26px] ${
                  "click" ? "text-[#A4A4A4]" : "text-[#030813]"
                }  cursor-pointer ${"click" ? "rotate-180" : ""} w-full h-full'}
                icon="ion:switch"
              />
            </div>
          </div>
        );
      };`,
    },
    {
      name: "Outline field",
      children: (
        <OutlineField
          bg={"transparent"}
          label={"Heading"}
          name={"name"}
          placeholder={"placeholder"}
          required={"required"}
          size={"base"}
          type={"text"}
        />
      ),
      howToUse: `<OutlineField bg={"FFF"} label={"Heading"} name={"name"} placeholder={"placeholder"} required={"required"} size={"base"} type={"text"} />`,
      code: `export const OutlineField = ({
        label,
        placeholder,
        required,
        type,
        name,
        bg,
        size,
      }) => {
        return (
          <>
            <label
              className={'font-primaryFont text-primaryColor ${
                "size" === "xl" ? "font-bold" : "font-medium"
              } text-${"size"}'}
            >
              {label}
            </label>
            <input
              style={{ border: "0.5px solid #6A6A6A" }}
              className={'py-3.5 px-4 bg-${"bg"} rounded-[10px] w-full h-[52px] focus:outline-none mt-[10px]'}
              type={type}
              name={name}
              id=""
              required={required}
              placeholder={placeholder}
            />
          </>
        );
      };`,
    },
    {
      name: "Checkbox",
      children: <CheckboxInput label={"No Caps"} />,
      howToUse: `<CheckboxInput label={"No Caps"} />`,
      code: `export const CheckboxInput = ({ label }) => {
        return (
          <div className="flex gap-5 items-center">
            <input className="h-[26px] w-[26px]" type="checkbox" name="" id="1" />
            <label htmlFor="1" className="text-base font-normal text-primaryColor">
              {label}
            </label>
          </div>
        );
      };`,
    },
  ],
};
