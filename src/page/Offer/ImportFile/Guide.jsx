const Guide = () => {
  return (
    <div className="main-guide">
      <h2 className="guide-header">File Formating Guide</h2>
      <div className="items">
        <p className="item">
          1. Only supports Excel (xls, xlsx) and CSV File types
        </p>
        <p className="item">2. Maximum file size supported is 1MB</p>
        <p className="item">3. Maximum offers per file is 100</p>
        <p className="item">
          4. Column names must be included on first line of excel or csv file
        </p>
        <p className="item">
          5. We recommend you to download sample file formats and edit them
          instead of creating new files
        </p>
      </div>
    </div>
  );
};

export default Guide;
