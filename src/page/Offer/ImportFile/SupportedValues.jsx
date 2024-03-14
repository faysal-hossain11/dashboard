import "./ImportFile.css";

const SupportedValues = () => {
  const tableData = [
    {
      id: 1,
      advertiser: "Advertiser ID",
      description: "ID of advertiser who owns this offer",
      example: "45",
    },
    {
      id: 2,
      advertiser: "Advertiser ID",
      description: "ID of advertiser who owns this offer",
      example: "Opera Mini - fast web browser",
    },
    {
      id: 3,
      advertiser: "Advertiser ID",
      description: "ID of advertiser who owns this offer",
      example:
        "<p>The Opera Mini browser for Android lets you do everything you want online without wasting your data ...</p> <p>Only android traffic allowed</p>",
    },
    {
      id: 1,
      advertiser: "Advertiser ID",
      description: "ID of advertiser who owns this offer",
      example: "Computers & Electronics",
    },
    {
      id: 1,
      advertiser: "Advertiser ID",
      description: "ID of advertiser who owns this offer",
      example: "2020-05-10",
    },
    {
      id: 1,
      advertiser: "Advertiser ID",
      description: "ID of advertiser who owns this offer",
      example: "14:25",
    },
  ];
  return (
    <div className="main-supported">
      <h2 className="support-header">Supported Values</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full">
          <thead>
            <tr style={{ verticalAlign: "middle" }} className="">
              <th className="p-5 max-[576px]:p-3">
                <p className="text-sm font-medium text-primaryColor text-left w-[100px]">
                  Currency
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-primaryColor text-left w-[230px]">
                  Description
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-primaryColor text-left w-[155px]">
                  Required/Optional
                </p>
              </th>
              <th className="p-5 max-[576px]:p-3">
                <p className="text-base font-medium text-primaryColor text-left w-[550px]">
                  Example Value/Values
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((data) => (
              <>
                <tr style={{ verticalAlign: "middle" }} key={data?._id}>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.advertiser}
                    </p>
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.description}
                    </p>
                  </td>
                  <td style={{ padding: "15px 0 29px 20px", color: "#F23B01" }}>
                    Required
                  </td>
                  <td className="p-4 max-[576px]:p-2">
                    <p className="text-sm font-normal text-primaryColor text-left">
                      {data?.example}
                    </p>
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SupportedValues;
