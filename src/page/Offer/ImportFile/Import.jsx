import "./ImportFile.css";
import ImportCard from "../../../components/Cards/ImportCard";
import UploadButton from "../../../components/Button/UploadButton";

const Import = () => {
  return (
    <div className="file-import">
      <h1 className="header-import">Import File</h1>
      <div className="my-10 max-w-[1294px] mx-auto">
        <ImportCard icon={"ant-design:file-add-outlined"} />
      </div>
      <div className="max-w-[504px] mx-auto">
        <UploadButton text={"Upload"} />
      </div>
    </div>
  );
};

export default Import;
