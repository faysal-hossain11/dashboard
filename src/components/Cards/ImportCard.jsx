import { Icon } from "@iconify/react";

const ImportCard = ({ icon }) => {
  return (
    <div className="import-content">
      <Icon className="add-file-icon" icon={icon} />
      <p className="import-left-content">
        Click to upload{" "}
        <span className="import-right-content">or drag & drop</span>
      </p>
      <input type="file" name="" id="" className="upload-file" multiple />
    </div>
  );
};

export default ImportCard;
