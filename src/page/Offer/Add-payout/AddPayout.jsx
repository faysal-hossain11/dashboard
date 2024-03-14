import AddButton from "../../../components/Button/AddButton";
import BlackButton from "../../../components/Button/BlackButton";
import "./AddPayout.css";

const AddPayout = () => {
  return (
    <div className="main-payout">
      <h1 className="payout-heading">Create Payout Groups</h1>
      <form>
        <div className="input-field">
          <div className="full-input">
            <label className="payout-label">Group Name</label>
            <input
              className="payout-input"
              type="text"
              name=""
              id=""
              placeholder="eg: ustraffic"
              required
            />
          </div>
          <div className="full-input">
            <label className="payout-label">Group Priority</label>
            <select className="payout-select" name="" id="">
              <option value="auto">Auto</option>
              <option value="auto">Auto</option>
            </select>
          </div>
          <div className="full-input">
            <label className="payout-label">Country</label>
            <select className="payout-select" name="" id="">
              <option value="country">Country</option>
              <option value="country">Country</option>
            </select>
          </div>
          <div className="full-input">
            <label className="payout-label">Is</label>
            <select className="payout-select" name="" id="">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="full-input">
            <label className="payout-label">Visibility</label>
            <select className="payout-select" name="" id="">
              <option value="yes">Public Show ( Affiliates )</option>
              <option value="no">Public Show ( Affiliates )</option>
            </select>
          </div>
          <div className="full-input">
            <label className="payout-label">One Of</label>
            <select className="payout-select" name="" id="">
              <option value="yes">Country</option>
              <option value="no">Country</option>
            </select>
            <div className="mt-5">
              <BlackButton
                text={"Add Rule"}
                icon={"ic:twotone-plus"}
                contentReverse={true}
              />
            </div>
          </div>
        </div>
        <div className="middle-input-field">
          <div className="full-input">
            <label className="payout-label">Affiliates</label>
            <input
              className="payout-input"
              type="text"
              name=""
              id=""
              placeholder="MOe"
            />
            <p className="input-footer">
              Note:
              <span className="input-span">
                You can add up to 10 rules to a payout group. All rules must be
                validated in order to apply defined payout.
              </span>
            </p>
          </div>
          <div className="full-textarea">
            <label className="payout-label">Description</label>
            <textarea
              name=""
              id=""
              className="textarea"
              placeholder="Write your description here ..."
              required
            />
            <h2 className="payout-label text-base">Description</h2>
            <div className="payout-footer-checkbox">
              <div className="payout-checkbox">
                <input type="checkbox" name="" id="all" />
                <label className="first-label" htmlFor="all">
                  All
                </label>
              </div>
              <div className="payout-checkbox">
                <input type="checkbox" name="" id="custon" disabled />
                <label htmlFor="custon" className="second-label">
                  Custom Selected
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="set-payout">
          <div className="payout-now-checkbox">
            <input type="checkbox" name="" id="setPayout" />
            <label className="setPayout-label" htmlFor="setPayout">
              Set Payouts Now
            </label>
          </div>
          <p className="payout-footer">
            Following revenue & payout will be applied to conversions if they
            meet rules defined above. If you leave any filed empty, system will
            apply default values.
          </p>
          <button className="footer-btn">
            <p className="btn-text">Status</p>
            <p className="btn-text">Revenue</p>
            <p className="btn-text">Payout</p>
          </button>
          <div className="footer-section">
            <p className="footer-dollar-text">Offer Payout & Revenue</p>
            <div className="footer-dollar-amount">
              <p className="amount">$1.50</p>
              <p className="curency">USD</p>
            </div>
            <div className="footer-dollar-amount">
              <p className="amount">$1.50</p>
              <p className="curency">USD</p>
            </div>
          </div>
        </div>
        <div className="update-footer-btn">
          <AddButton text={"Update"} varient={"black"} />
        </div>
      </form>
    </div>
  );
};

export default AddPayout;
