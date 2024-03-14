const NewOfferUrl = () => {
  return (
    <div className="max-w-[712px] bg-white p-10 max-[576px]:p-5 mx-auto flex flex-col items-start gap-[30px] max-[576px]:gap-[20px]">
      <div>
        <h1 className="text-primaryColor text-[32px]">New Offer URL</h1>{" "}
      </div>
      <div className="w-full">
        <label className="text-sm text-primaryColor">Offer Name</label>
        <input
          className="px-2.5 py-3.5 w-full mt-2.5 placeholder-shown:text-tableColor"
          type="text"
          name=""
          id=""
          placeholder="Offer Name"
        />
      </div>
      <div className="w-full">
        <label className="text-sm text-primaryColor">Type</label>
        <select className="w-full py-3.5 px-4 mt-2.5" name="" id="">
          <option value="">Landing</option>
          <option value="">Landing</option>
        </select>
      </div>
      <div className="w-full">
        <p className="text-sm text-primaryColor">Type</p>
        <input
          type="text"
          className="px-2.5 py-3.5 mt-2.5 placeholder-shown:text-tableColor w-full"
          name=""
          id=""
          placeholder="https://afflat3c1.com/trk/lnk/CF9F778F-B2E2-45D8-8960-910F245B9D87/?o=5113&c=918277&a=668747&k=F6E3476D5683EADBB3A1BE5EB2F3A433&l=3928&s1={click_id}&s2={aff_id}"
        />
        <button className="mt-2.5 pl-4 pt-1.5 pr-3.5 pb-1.5 bg-primaryColor rounded-[10px] text-white">
          Macros
          <span className="ml-2">{"{"}</span>
          <span className="ml-2.5">{"}"}</span>
        </button>
      </div>
      <div className="w-full">
        <label className="text-sm text-primaryColor">Preview URL *</label>
        <input
          className="px-2.5 py-3.5 w-full mt-2.5 placeholder-shown:text-tableColor"
          type="text"
          name=""
          id=""
          placeholder="https://falkdfhasfsdf.com"
        />
      </div>
      <div className="flex flex-col items-start gap-5">
        <div className="flex items-center gap-2.5">
          <input className="w-[26px] h-[26px]" type="checkbox" name="" id="1" />
          <label className="text-tartiaryColor text-base" htmlFor="1">
            Hide from Affiliates
          </label>
        </div>
        <div className="flex items-center gap-2.5">
          <input className="w-[26px] h-[26px]" type="checkbox" name="" id="2" />
          <label className="text-tartiaryColor text-base" htmlFor="2">
            Enable weight base redirection
          </label>
        </div>
        <div className="flex items-center gap-2.5">
          <input className="w-[26px] h-[26px]" type="checkbox" name="" id="3" />
          <label className="text-tartiaryColor text-base" htmlFor="3">
            Enable rule base redirection
          </label>
        </div>
      </div>
      <div className="mt-5 max-[576px]:mt-2 w-full mb-[167px] max-[767px]:mb-[50px] max-[576px]:mb-[30px]">
        <button className="bg-primaryColor text-white w-full rounded-[10px] py-3 px-[22px] text-base h-[56px] max-[576px]:h-[45px]">
          Save
        </button>
      </div>
    </div>
  );
};

export default NewOfferUrl;
