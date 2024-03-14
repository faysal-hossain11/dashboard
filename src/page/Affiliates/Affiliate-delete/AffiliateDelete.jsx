import PostBackDeleteButton from "../../../components/Button/PostBackDeleteButton";
import { DeleteModal } from "../../../components/Cards/DeleteModal";

const AffiliateDelete = () => {
  return (
    <>
      <button
        onClick={() => document.getElementById("deleteModal").showModal()}
      >
        <PostBackDeleteButton icon={"iconamoon:trash-duotone"} bg={"delete"} />
      </button>
      <DeletedModal />
    </>
  );
};

export default AffiliateDelete;

export const DeletedModal = () => {
  return (
    <div>
      <dialog id="deleteModal" className="modal">
        <div className="modal-box max-w-[768px] xl:p-[133px] lg:p-20 md:p-10 p-5 bg-[#FFF] rounded-[10px]">
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
    </div>
  );
};
