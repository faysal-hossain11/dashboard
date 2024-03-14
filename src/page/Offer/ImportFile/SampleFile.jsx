import FormateCard from "../../../components/Cards/FormateCard";

const SampleFile = () => {
  return (
    <div className="sample-file">
      <h1 className="sample-header">Download sample file formats</h1>
      <div className="card-group">
        <FormateCard
          text={"Excel file (XLS)"}
          icon={"eva:cloud-download-fill"}
        />
        <FormateCard
          text={"Excel file (XLSX)"}
          icon={"eva:cloud-download-fill"}
        />
        <FormateCard text={"CSV File"} icon={"eva:cloud-download-fill"} />
      </div>
    </div>
  );
};

export default SampleFile;
