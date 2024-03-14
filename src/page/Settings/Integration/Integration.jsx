import { Icon } from "@iconify/react";
import IntegratioCard from "./IntegrationCard";
import { Headers } from "../../../components/Headers/Headers";

const Integration = () => {
  const cardItems = [
    {
      icon: <Icon icon="vscode-icons:file-type-js-official" />,
      title: "Global JS",
      description:
        "Add google analytics code, chat widget codes, etc to your affiliate dashboards",
      button: "Configure",
      link: "/admin/integration/js",
    },
    {
      icon: <Icon icon="mdi:question-mark-rhombus" />,
      title: "Fraudscore",
      description:
        "Integrate with Fraudscore to detect conversion fraud or enable safeclick traffic filtering",
      button: "Configure",
      link: "/admin/integration/fraudscore",
    },
  ];
  return (
    <div>
      <Headers text={{ heading: "3rd party Integration" }}></Headers>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 max-w-[1022px] mx-auto mt-[42px] max-[576px]:mt-5">
        {cardItems.map((card, i) => (
          <IntegratioCard key={i} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Integration;
