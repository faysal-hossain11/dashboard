import AddButton from "../../../components/Button/AddButton";
import { Headers } from "../../../components/Headers/Headers";
import SelectFiled from "../../../components/InputField/SelectFiled";

const ManageOfferSourses = () => {
  return (
    <div>
      <div className="flex justify-center">
        <Headers
          text={{ heading: "Manage Offer Sources Add New Source" }}
        ></Headers>
      </div>
      <form>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-y-[58px] gap-5 gap-x-6 lg:mt-[60px] md:mt-10 mt-5">
          <SelectFiled
            label={"Name"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Dipjol", option: "Dipjol" },
              { value: "Rifat", option: "Rifat" },
              { value: "Mominul", option: "Mominul" },
            ]}
          />
          <SelectFiled
            label={"Tracking Provider"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Offershub", option: "Offershub" },
              { value: "Hasooffers", option: "Hasooffers" },
              { value: "Avazu", option: "Avazu" },
              { value: "Offerslook", option: "Offerslook" },
              { value: "Minimob", option: "Minimob" },
              { value: "Fuseclick", option: "Fuseclick" },
              { value: "Affise", option: "Affise" },
              { value: "Mobisummer", option: "Mobisummer" },
              { value: "Detamaths", option: "Detamaths" },
              { value: "TbNetwork", option: "TbNetwork" },
              { value: "Appsilon", option: "Appsilon" },
              { value: "Movista", option: "Movista" },
              { value: "BilyMob", option: "BilyMob" },
              { value: "Taptica", option: "Taptica" },
              { value: "Everflow", option: "Everflow" },
              { value: "Clickmobad / Mobcool", option: "Clickmobad / Mobcool" },
              { value: "MeLead", option: "MeLead" },
              { value: "OilMob", option: "OilMob" },
              { value: "RozMob", option: "RozMob" },
              { value: "Trackler", option: "Trackler" },
              { value: "Cygobel", option: "Cygobel" },
              { value: "Couly", option: "Couly" },
              { value: "Mobvault", option: "Mobvault" },
              { value: "Inmobi", option: "Inmobi" },
            ]}
          />
          <SelectFiled
            label={"Advertiser"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[{ value: "Max", option: "Max" }]}
          />
          <div>
            <SelectFiled
              label={"Landing URL Query String (Optional)"}
              size={"sm"}
              bg={"#FFF"}
              name={"name"}
              select={[{ value: "|", option: "|" }]}
            />
            <p className="text-[#A4A4A4] font-normal text-xs mt-[10px]">
              This string will appear at the end of landing URLs
            </p>
          </div>
          <SelectFiled
            label={"Source Network`s Default Currency"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "MXN$", option: " MXN$" },
              { value: "AUD$", option: " AUD$" },
              { value: "BGN", option: "BGN" },
              { value: "BRL", option: "BRL" },
              { value: "CAD", option: " CAD$" },
              { value: "CHF CHF", option: "CHF CHF" },
              { value: "CNY", option: "CNY" },
              { value: "CZK", option: "CZK" },
              { value: "DKK", option: "DKK" },
              { value: "EUR", option: "EUR" },
              { value: "GBP", option: "GBP" },
              { value: "HKD", option: "HKD" },
              { value: "HUF", option: "HUF" },
              { value: "IDR Rp", option: "IDR Rp" },
              { value: "ILS", option: "ILS" },
              { value: "INR", option: "INR" },
              { value: "ISK", option: "ISK" },
              { value: "ISK", option: "ISK" },
              { value: "JPY", option: "JPY" },
              { value: "KRW", option: "KRW" },
              { value: "MYR RM", option: "MYR RM" },
              { value: "Couly", option: "Couly" },
              { value: "Mobvault", option: "Mobvault" },
              { value: "Mobvault", option: "Mobvault" },
              { value: "Inmobi", option: "Inmobi" },
              { value: "NOK Kr", option: "NOK Kr" },
              { value: "NZD", option: "NZD" },
              { value: "PHP", option: "PHP" },
              { value: "PLN", option: "PLN" },
              { value: "RON lei", option: "RON lei" },
              { value: "RON lei", option: "RON lei" },
              { value: "RUB", option: "RUB" },
              { value: "SEK", option: "SEK" },
              { value: "SGD", option: "SGD" },
              { value: "THB", option: "THB" },
              { value: "TRY", option: "TRY" },
              { value: "$USD", option: " $USD" },
              { value: "ZAR", option: "ZAR" },
            ]}
          />
          <SelectFiled
            label={"Auto Sync"}
            size={"sm"}
            bg={"#FFF"}
            name={"name"}
            select={[
              { value: "Enable", option: "Enable" },
              { value: "Disable", option: "Disable" },
            ]}
          />
        </div>
        <div className="md:mt-[42px] mt-5">
          <div className="flex justify-center">
            <Headers text={{ heading: "Offer Settings" }}></Headers>
          </div>
          <p className="text-base mt-5 text-[#3F3F3F] font-normal text-center">
            Offer settings to apply when importing
          </p>
          <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-[42px]">
            <SelectFiled
              bg={"#FFF"}
              name={"name"}
              select={[
                {
                  value: "Revenue Share ( % Amount )",
                  option: "Revenue Share ( % Amount )",
                },
                {
                  value: "Revenue Share ( % Amount )",
                  option: "Revenue Share ( % Amount )",
                },
              ]}
            />
            <SelectFiled
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Offer Status", option: "Offer Status" },
                { value: "Active", option: "Active" },
                { value: "Pending", option: "Pending" },
                { value: "Paused", option: "Paused" },
              ]}
            />
            <SelectFiled
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Offer Access", option: "Offer Access" },
                { value: "Public", option: "Public" },
                { value: "Approve Only", option: "Approve Only" },
                { value: "Private", option: "Private" },
              ]}
            />
            <SelectFiled
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Click Validation", option: "Click Validation" },
                { value: "Enable", option: "Enable" },
                { value: "Disabled", option: "Disabled" },
              ]}
            />
          </div>
        </div>
        <div className="mt-[60px] max-w-[768px] mx-auto max-[576px]:mt-8">
          <h1 className="text-primaryColor text-2xl text-center font-semibold">
            Auto Import
          </h1>
          <div className="mt-10 flex justify-center gap-5 max-[576px]:mt-5">
            <input
              className="h-[26px] w-[26px] mt-1.5"
              type="checkbox"
              name=""
              id="1"
            />
            <label
              htmlFor="1"
              className="max-w-[610px] text-base text-[#E58888] max-[576px]:text-sm"
            >
              Import all offers on this source to your offers list
              automatically. Don&apos;t enable this if you don&apos;t know what
              you&apos;re doing.
            </label>
          </div>
          <div className="md:mt-[41px] mt-5">
            <SelectFiled
              label={"Select default offer catefory to import"}
              size={"sm"}
              bg={"#FFF"}
              name={"name"}
              select={[
                { value: "Autos Vehicles", option: "Autos Vehicles" },
                { value: "Arts Entertainments", option: "Arts Entertainments" },
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
                { value: "News", option: "Hobbies & Leisure" },
                { value: "Online Communities", option: "Hobbies & Leisure" },
                { value: "Shopping", option: "Hobbies & Leisure" },
                { value: "Sports", option: "Hobbies & Leisure" },
              ]}
            />
          </div>
          <div className="md:mt-10 mt-5">
            <AddButton text={"Add"} varient={"black"} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ManageOfferSourses;
