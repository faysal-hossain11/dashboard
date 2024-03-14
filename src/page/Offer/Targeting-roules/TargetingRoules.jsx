import { Icon } from "@iconify/react";
import { Headers } from "../../../components/Headers/Headers";
import { MiddleHeader } from "../../../components/Headers/MiddleHeader";

const TargetingRoules = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-10">
        <Icon icon="mdi:target" className="text-[35px] text-black" />
        <Headers text={{ heading: 'Offer Targeting Rules' }}>
        </Headers>
      </div>
      <div className="bg-white rounded-[10px] p-6">
        <MiddleHeader heading={"Geo Targeting"} />
      </div>
    </div>
  );
};

export default TargetingRoules;
