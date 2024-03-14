import Table from "../../../components/Table/Table";
import GrayButton from "../../../components/Button/GrayButton";
import { Headers } from "../../../components/Headers/Headers";
import BlackButton from "../../../components/Button/BlackButton";
import ImportButton from "../../../components/Button/ImportButton";
import SearchFiled from "../../../components/InputField/SearchFiled";

const ManageOffers = () => {
  return (
    <div className="bg-[#F5F5F5]">
      <div>
        <div className="md:mb-10 mb-5">
          <Headers text={{ heading: "Manage Offers" }}>
            <ImportButton text={"Import File"} icon={"ion:download"} />
            <ImportButton
              text={"Import With Sync API"}
              icon={"ion:code-download"}
            />
            <ImportButton text={"Filter Offers"} icon={"mdi:funnel"} />
            <BlackButton
              text={"Create Offer"}
              icon={"ic:twotone-plus"}
              contentReverse={true}
            />
          </Headers>
        </div>
        <div>
          <div className="bg-white p-5 rounded-[15px]">
            <div className="md:flex items-center justify-between mb-10">
              <div className="flex items-center gap-5">
                <div className="mb-5 md:mb-0">
                  <SearchFiled
                    placeholder={"Search ..."}
                    name={"name"}
                    bg={"#F5F5F5"}
                  />
                  <div>{/* <Calender /> */}</div>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <GrayButton icon={"solar:download-linear"} />
                <GrayButton icon={"ion:reload-circle-sharp"} />
                <GrayButton icon={"tabler:git-compare"} />
                <GrayButton icon={"ion:expand"} />
              </div>
            </div>
            <div>
              <Table />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageOffers;
