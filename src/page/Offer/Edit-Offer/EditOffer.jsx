import "./EditOffer.css";
import offerImg from "../../../assets/images/offer-image.png";
import ReactQuill from "react-quill";
import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import { GiWorld } from "react-icons/gi";
import { IoCellular, IoTrailSign } from "react-icons/io5";
import { MdDesktopWindows } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { Headers } from "../../../components/Headers/Headers";
import AddButton from "../../../components/Button/AddButton";
import OutletButton from "../../../components/Button/OutletButton";
import Tab1 from "../../../components/Create-offer-Tabs/Tab1";
import Tab2 from "../../../components/Create-offer-Tabs/Tab2";
import Tab3 from "../../../components/Create-offer-Tabs/Tab3";
import Tab4 from "../../../components/Create-offer-Tabs/Tab4";
import Tab5 from "../../../components/Create-offer-Tabs/Tab5";
import Tab6 from "../../../components/Create-offer-Tabs/Tab6";
import SelectFiled from "../../../components/InputField/SelectFiled";
import InputField from "../../../components/InputField/InputField";
import InputBottom from "../../../components/InputField/InputBottom";
import { MarcosBtn } from "../../../components/Button/MarcosBtn";

const OfferDetalis = () => {
  const [value, setValue] = useState("");
  const [values, setValues] = useState(1);

  const handleToggle = (id) => {
    setValues(id);
  };

  return (
    <div>
      {/* Offer Details start */}
      <div className="flex justify-center">
        <Headers text={{ heading: "Offer Details" }}></Headers>
      </div>
      <div className="main-offer">
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Max", option: "Max" },
            { value: "Rakib", option: "Rakib" },
          ]}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Mobile", option: "Mobile" },
            { value: "Desktop / Web", option: "Desktop / Web" },
            { value: "Smart TV", option: "Smart TV" },
          ]}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Incentive", option: "Incentive" },
            { value: "No Incentive", option: "No Incentive" },
          ]}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "App Event", option: "App Event" },
            { value: "App Install", option: "App Install" },
            { value: "Coreg", option: "Coreg" },
            { value: "Credit card submit", option: "Credit card submit" },
            { value: "Double opt-in", option: "Double opt-in" },
            { value: "Email Submit", option: "Email Submit" },
            { value: "Lead Gen", option: "Lead Gen" },
            { value: "Pin submit", option: "Pin submit" },
            { value: "Sale / Purchase", option: "Sale / Purchase" },
            { value: "Single opt-in", option: "Single opt-in" },
            { value: "Sms Confirmation", option: "Sms Confirmation" },
            { value: "Zip Submit", option: "Zip Submit" },
          ]}
        />
        <InputField
          bg={"#FFF"}
          placeholder={"Offer Name"}
          require={"require"}
          type={"text"}
          name={"name"}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Amazon", option: "Amazon" },
            { value: "Android", option: "Android" },
            { value: "Firefox OS", option: "Firefox OS" },
            { value: "IOS", option: "IOS" },
            { value: "Mac", option: "Mac" },
            { value: "Ubuntu", option: "Ubuntu" },
            { value: "Windows", option: "Windows" },
          ]}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Adult", option: "Adult" },
            { value: "Automotive", option: "Automotive" },
            { value: "Biz Opp", option: "Biz Opp" },
            { value: "Casino / Gamebling", option: "Casino / Gamebling" },
            { value: "Cupons", option: "Cupons" },
            { value: "Dating", option: "Dating" },
            { value: "Software", option: "Software" },
            { value: "Education", option: "Education" },
            { value: "Entertainment", option: "Entertainment" },
            { value: "Fashion", option: "Fashion" },
            { value: "Games", option: "Games" },
            { value: "Health &Beauty", option: "Health &Beauty" },
            { value: "Home Improvements", option: "Home Improvements" },
            { value: "Insurance", option: "Insurance" },
            { value: "Legal", option: "Legal" },
            { value: "Music", option: "Music" },
            { value: "Music", option: "Music" },
            { value: "Real State", option: "Real State" },
            { value: "Sweeptakes", option: "Sweeptakes" },
            { value: "Shopping", option: "Shopping" },
            { value: "Utilities", option: "Utilities" },
            { value: "Others", option: "Others" },
          ]}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Media Placements", option: "Media Placements" },
            { value: "Auto Redirect", option: "Auto Redirect" },
            { value: "Blog", option: "Blog" },
            { value: "Banner Display", option: "Banner Display" },
            { value: "Classified Ads", option: "Classified Ads" },
            { value: "Email", option: "Email" },
            { value: "Other", option: "Other" },
            { value: "Pop Under", option: "Pop Under" },
            { value: "Pop Up", option: "Pop Up" },
            { value: "Pre Load", option: "Pre Load" },
            { value: "Sale / Purchase", option: "Sale / Purchase" },
            { value: "Realtime Bidding", option: "Realtime Bidding" },
            { value: "Search", option: "Search" },
            { value: "Social Media", option: "Social Media" },
            { value: "Toolbar", option: "Toolbar" },
            { value: "Video", option: "Video" },
          ]}
        />
      </div>
      {/* Offer Details end */}

      {/* rich text start */}
      <div className="rich-text-description">
        <div className="left-description">
          <p className="img-title">Description</p>
          <ReactQuill
            className="quill"
            placeholder="Write here ...."
            theme="snow"
            value={value}
            onChange={setValue}
          />
          ;
        </div>
        <div className="right-img">
          <p className="img-title">
            Offer Icon <span className="optional-text">(Optional)</span>
          </p>
          <img className="offer-img" src={offerImg} alt="Offer Image" />
        </div>
      </div>
      {/* rich text end */}

      {/* input card start */}
      <div className="main-offer">
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Arts Entertainments", option: "Arts Entertainments" },
            { value: "Autos Vehicles", option: "Autos Vehicles" },
            { value: "Beauty & Fitness", option: "Beauty & Fitness" },
            {
              value: "Business & Industrial",
              option: "Business & Industrial",
            },
            {
              value: "Computers & Electronics",
              option: "Computers & Electronics",
            },
            { value: "Food & Drink", option: "Food & Drink" },
            { value: "Games", option: "Games" },
            { value: "Hobbies & Leisure", option: "Hobbies & Leisure" },
            { value: "News", option: "News" },
            { value: "Online Communities", option: "Online Communities" },
            { value: "Shopping", option: "Shopping" },
            { value: "Sports", option: "Sports" },
          ]}
        />
        <InputField
          bg={"#FFF"}
          placeholder={"Expiry Date"}
          require={"require"}
          type={"text"}
          name={"name"}
        />

        <InputField
          bg={"#FFF"}
          placeholder={"Expiry Date"}
          require={"require"}
          type={"text"}
          name={"name"}
        />
        <SelectFiled
          bg={"#FFF"}
          name={"name"}
          select={[
            { value: "Tracking protocol", option: "Tracking protocol" },
            { value: "erver Postback S2S", option: "erver Postback S2S" },
            { value: "iframe Pixel", option: "iframe Pixel" },
            {
              value: "HTTPS iFramePixel",
              option: "HTTPS iFramePixel",
            },
            {
              value: "HTTPS Image Pixel",
              option: "HTTPS Image Pixel",
            },
          ]}
        />
      </div>
      {/* input card end */}

      {/* offer link start */}
      <div className="offer-links">
        <h2 className="offer-header">Offer Links</h2>
        <div className="main-offer-link">
          <InputBottom
            label={"Preview URL"}
            placeholder={"https: //example.com/offer_preview .html"}
            name={"Name"}
            required={"required"}
          />
          <InputBottom
            label={"Allow Deep-linking"}
            placeholder={"Disabled"}
            name={"Name"}
            required={"required"}
          />
          <div>
            <InputBottom
              label={"Default Offer URL"}
              placeholder={"https: //example.com/offer_preview .html"}
              name={"Name"}
              required={"required"}
            />
            <div className="mt-[13px] w-[237px]">
              <MarcosBtn text={"Marcos"} icon={"vaadin:curly-brackets"} />
            </div>
          </div>
        </div>
      </div>
      {/* offer link end */}

      {/* Revenue & Payout start */}
      <div>
        <h2 className="offer-header">Revenue & Payout</h2>
        <div className="main-offer md:pt-10 pt-0">
          <SelectFiled
            bg={"#FFF"}
            name={"name"}
            select={[
              {
                value: "Revenue Per Scale ( RPS )",
                option: "Revenue Per Scale ( RPS )",
              },
            ]}
          />
          <div className="relative md:mt-[-34px] mt-0">
            <InputField
              label={"Revenue per Conversion"}
              size={"base"}
              bg={"#FFF"}
              placeholder={"$578"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="font-normal text-sm text-[#A4A4A4] absolute top-12 right-3">
              USD
            </p>
          </div>
          <SelectFiled
            bg={"#FFF"}
            name={"name"}
            select={[
              {
                value: "Revenue Per Scale ( RPS )",
                option: "Revenue Per Scale ( RPS )",
              },
            ]}
          />
          <div className="relative">
            <InputField
              bg={"#FFF"}
              placeholder={"$0.00"}
              require={"require"}
              type={"text"}
              name={"name"}
            />
            <p className="font-normal text-sm text-[#A4A4A4] absolute top-4 right-3">
              USD
            </p>
          </div>
        </div>
        <div className="enable-offer">
          <p className="enable-content">Enable Offer Events</p>
          <div className="max-w-[501px] mx-auto flex gap-5 mt-5">
            <AddButton text={"Disabled"} varient={"black"} />
            <OutletButton text={"Enabled"} />
          </div>
        </div>
      </div>
      {/* Revenue & Payout end */}

      {/* tabs start */}
      <div className="main-tab-bar">
        <h2 className="offer-header">Targeting Rules</h2>
        <ul className="main-tab">
          <li
            className={values === 1 ? "activeTab" : "list"}
            onClick={() => handleToggle(1)}
          >
            <GiWorld className="tab-icon" />{" "}
            <span className="tab-heading">Geo Targeting</span>
          </li>
          <li
            className={values === 2 ? "activeTab" : "list"}
            onClick={() => handleToggle(2)}
          >
            <MdDesktopWindows className="tab-icon" />{" "}
            <span className="tab-heading">Browse / Device</span>
          </li>
          <li
            className={values === 3 ? "activeTab" : "list"}
            onClick={() => handleToggle(3)}
          >
            <IoCellular className="tab-icon" />{" "}
            <span className="tab-heading">Network / Carrier</span>
          </li>
          <li
            className={values === 4 ? "activeTab" : "list"}
            onClick={() => handleToggle(4)}
          >
            <BiTargetLock className="tab-icon" />{" "}
            <span className="tab-heading">IP Filters</span>
          </li>
          <li
            className={values === 5 ? "activeTab" : "list"}
            onClick={() => handleToggle(5)}
          >
            <IoTrailSign className="tab-icon" />{" "}
            <span className="tab-heading">Traffic Conditions</span>
          </li>
          <li
            className={values === 6 ? "activeTab" : "list"}
            onClick={() => handleToggle(6)}
          >
            <svg
              className="tab-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="100"
              viewBox="0 0 100 100"
            >
              <path
                fill="currentColor"
                d="M27.953 46.506a21.02 21.02 0 0 1-2.117-9.192c0-1.743.252-3.534.768-5.468c.231-.87.521-1.702.847-2.509c-1.251-.683-2.626-1.103-4.101-1.103c-5.47 0-9.898 5.153-9.898 11.517c0 4.452 2.176 8.305 5.354 10.222L5.391 56.217c-.836.393-1.387 1.337-1.387 2.392v10.588c0 1.419.991 2.569 2.21 2.569h7.929v-11.11c0-3.237 1.802-6.172 4.599-7.481l10.262-4.779a20.2 20.2 0 0 1-1.051-1.89zm32.184-11.705h34.092V34.8l.006.001c.973 0 1.761-.789 1.761-1.761v-6.431c0-.973-.789-1.761-1.761-1.761l-.006.001v-.005H56.133a20.013 20.013 0 0 1 3.526 7.435c.215.889.371 1.72.478 2.522zm35.859 31.635c0-.973-.789-1.761-1.761-1.761l-.006.001v-.005H72.007v9.089c0 .293-.016.582-.045.867h22.267v-.001l.006.001c.973 0 1.761-.789 1.761-1.761v-6.43zm-1.761-21.674l-.006.001v-.005H58.944c-.159.419-.327.836-.514 1.249a20.258 20.258 0 0 1-1.224 2.297l10.288 4.908a7.67 7.67 0 0 1 2.078 1.503h24.657v-.001l.006.001c.973 0 1.761-.789 1.761-1.761v-6.431c0-.973-.789-1.761-1.761-1.761z"
              />
              <path
                fill="currentColor"
                d="m65.323 57.702l-11.551-5.51l-4.885-2.33c2.134-1.344 3.866-3.418 5-5.917a16.045 16.045 0 0 0 1.435-6.631c0-1.348-.213-2.627-.512-3.863c-1.453-5.983-6.126-10.392-11.736-10.392c-5.504 0-10.106 4.251-11.648 10.065c-.356 1.333-.602 2.72-.602 4.189c0 2.552.596 4.93 1.609 7c1.171 2.4 2.906 4.379 5.018 5.651l-4.678 2.178l-11.926 5.554c-1.037.485-1.717 1.654-1.717 2.959V73.76c0 1.756 1.224 3.181 2.735 3.181h42.417c1.511 0 2.735-1.424 2.735-3.181V60.656c.002-1.301-.668-2.458-1.694-2.954z"
              />
            </svg>{" "}
            <span className="tab-heading">Demographic</span>
          </li>
        </ul>
        {/* tab 1 */}
        <div className={values === 1 ? "show" : "hidden"}>
          <Tab1 />
        </div>
        {/* tab 2 */}
        <div className={values === 2 ? "show" : "hidden"}>
          <Tab2 />
        </div>
        {/* tab 3 */}
        <div className={values === 3 ? "show" : "hidden"}>
          <Tab3 />
        </div>
        {/* tab 4 */}
        <div className={values === 4 ? "show" : "hidden"}>
          <Tab4 />
        </div>
        {/* tab 5 */}
        <div className={values === 5 ? "show" : "hidden"}>
          <Tab5 />
        </div>
        {/* tab 6 */}
        <div className={values === 6 ? "show" : "hidden"}>
          <Tab6 />
        </div>
      </div>
      {/* tabs end */}

      {/* offer access start */}
      <div className="main-offer-access">
        <h2 className="offer-header">Offer Access</h2>
        <div className="flex justify-center mt-5">
          <form className="checbox-field">
            <div className="flex items-center">
              <input
                className="h-6 w-6 text-tableColor"
                type="checkbox"
                id="public"
                name=""
                value=""
              />
              <label className="checkbox-text" htmlFor="public">
                Public
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="h-6 w-6 text-tableColor"
                type="checkbox"
                id="approval"
                name=""
                value=""
              />
              <label className="checkbox-text" htmlFor="approval">
                Required Approval
              </label>
            </div>
            <div className="flex items-center">
              <input
                className="h-6 w-6 text-tableColor"
                type="checkbox"
                id="private"
                name=""
                value=""
              />
              <label className="checkbox-text" htmlFor="private">
                Private
              </label>
            </div>
          </form>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:mt-10 mt-5">
          <SelectFiled
            label={"Offer Status"}
            size={"xl"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Operating System", option: "Operating System" },
              { value: "Operating System", option: "Operating System" },
            ]}
          />
          <InputField
            label={"Notes/Remarks"}
            size={"xl"}
            bg={"#FFF"}
            placeholder={"Type Here"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
        </div>
      </div>
      {/* offer access end */}

      {/* offers settings start */}
      <div className="main-offer-settings">
        <h2 className="offer-header">Offer Settings</h2>
        <div className="main-offer-setting">
          <SelectFiled
            label={"Redirect/Backup Offer"}
            size={"xl"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Disabled", option: "Disabled" },
              { value: "Enable", option: "Enable" },
            ]}
          />
          <div>
            <SelectFiled
              label={"Advertisers Impression Tracking Pixel URL (Optional)"}
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                {
                  value: "https: //example.com/offer_preview .html",
                  option: "https: //example.com/offer_preview .html",
                },
                {
                  value: "https: //example.com/offer_preview .html",
                  option: "https: //example.com/offer_preview .html",
                },
              ]}
            />
            <div className="mt-5 w-[109px]">
              <MarcosBtn text={"Marcos"} icon={"vaadin:curly-brackets"} />
            </div>
          </div>
          <SelectFiled
            label={"Click Session Lifespan"}
            size={"xl"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "1 Month", option: "1 Month" },
              { value: "2 Month", option: "2 Month" },
            ]}
          />
        </div>
        {/* second input field */}
        <div className="main-offer-setting md:pt-10 pt-0">
          <SelectFiled
            label={"Manual Approval Ratio"}
            size={"xl"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Disabled", option: "Disabled" },
              { value: "Enable", option: "Enable" },
            ]}
          />
          <div className="md:mt-[-30px] mt-0">
            <SelectFiled
              label={
                "Calculate caps with manual approval ratio applied conversions"
              }
              size={"xl"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Yes", option: "Yes" },
                { value: "No", option: "No" },
              ]}
            />
          </div>
          <SelectFiled
            label={"Tracking Domain"}
            size={"xl"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Default", option: "Default" },
              { value: "Default", option: "Default" },
            ]}
          />
        </div>
        {/* second input field end */}

        {/* third input field start */}
        <div className="md:mt-10 mt-10 grid md:grid-cols-2 grid-cols-1 gap-6">
          <SelectFiled
            label={"Force HTTPS"}
            size={"xl"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Default", option: "Default" },
              { value: "Default", option: "Default" },
            ]}
          />
          <InputField
            label={"Smart Groups"}
            size={"xl"}
            bg={"#FFF"}
            placeholder={"Type Here"}
            require={"require"}
            type={"text"}
            name={"name"}
          />
        </div>
        {/* third input field end */}

        {/* forth checkbox start */}
        <form className="last-checkbox">
          <div className="last-checbox-field">
            <input
              className="h-[30px] w-[30px] text-tableColor"
              type="checkbox"
              id="required"
              name=""
              value=""
            />
            <label className="checkbox-text ml-2.5" htmlFor="required">
              Required Approval
            </label>
          </div>
          <div className="last-checbox-field">
            <input
              className="h-[30px] w-[30px] text-tableColor"
              type="checkbox"
              id="conversions"
              name=""
              value=""
            />
            <label className="checkbox-text ml-2.5" htmlFor="conversions">
              Manual Approve Conversions
            </label>
          </div>
          <div className="last-checbox-field">
            <input
              className="h-[30px] w-[30px] text-tableColor"
              type="checkbox"
              id="multiple"
              name=""
              value=""
            />
            <label className="checkbox-text ml-2.5" htmlFor="multiple">
              Multiple Conversions
            </label>
          </div>
          <div className="last-checbox-field">
            <input
              className="h-[30px] w-[30px] text-tableColor"
              type="checkbox"
              id="dynamic"
              name=""
              value=""
            />
            <label className="checkbox-text ml-2.5" htmlFor="dynamic">
              Allow Dynamic <br /> Payouts
            </label>
          </div>
          <div className="last-checbox-field">
            <input
              className="h-[30px] w-[30px] text-tableColor"
              type="checkbox"
              id="offer"
              name=""
              value=""
            />
            <label className="checkbox-text ml-2.5" htmlFor="offer">
              Offer Caps ?
            </label>
          </div>
        </form>
        {/* forth checkbox end */}

        {/* button */}
        <div className="max-w-[504px] mx-auto lg:mt-[60px] md:mt-10 mt-5 mb-5">
          <AddButton text={"Add"} varient={"black"} />
        </div>
      </div>
      {/* offers settings end */}
    </div>
  );
};

export default OfferDetalis;
