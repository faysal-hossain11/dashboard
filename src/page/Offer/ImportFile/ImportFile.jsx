import FormatingGuide from "./FormatingGuide";
import Guide from "./Guide";
import Import from "./Import";
import SampleFile from "./SampleFile";
import SupportedValues from "./SupportedValues";

const ImportFile = () => {
  return (
    <div className="import-file-main">
      {/* <Header /> */}
      <Import />
      <SampleFile />
      <Guide />
      <FormatingGuide />
      <SupportedValues />
    </div>
  );
};

export default ImportFile;
