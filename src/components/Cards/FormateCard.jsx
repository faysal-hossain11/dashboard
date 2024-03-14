import { Icon } from "@iconify/react";

const FormateCard = ({ text, icon }) => {
  return (
    <div className="sample-card">
      <p className="card-content">{text}</p>
      <Icon className="download-icon" icon={icon} />
    </div>
  );
};

export default FormateCard;
