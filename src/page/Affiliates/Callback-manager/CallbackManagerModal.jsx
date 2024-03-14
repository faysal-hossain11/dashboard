import { DeleteModal } from "../../../components/Cards/DeleteModal";

const CallbackManagerModal = () => {
  return (
    <dialog id="callbackManager-modal" className="modal">
      <div className="modal-box max-w-[768px] pt-[88px] px-[133px] pb-[171px] bg-[#FFF] rounded-[10px] max-[992px]:px-12 max-[992px]:py-14 max-[576px]:px-5">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <DeleteModal
          heading={"Confirm!"}
          text={"The Affiliate Account Status Will Be Deleted."}
          icon={"ion:trash-outline"}
        />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};

export default CallbackManagerModal;
