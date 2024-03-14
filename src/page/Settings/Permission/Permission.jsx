import { Headers } from "../../../components/Headers/Headers";

const Permission = () => {
  return (
    <>
      <Headers text={{ heading: "Permissions" }}></Headers>
      <div className="mt-5 flex flex-col gap-2">
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Can to do anything anywhere. (Sub admin account)
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to update company profile and OffersHub billing details.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to manage employees.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to customize dashboard features and themes.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to access audit logs.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Do not lock in. Allow to access other employees
          advertiser/affiliate/offer information.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to access reports, charts and statics.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to export reports.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to create/edit/delete & view Offers.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Give view only access to all offers.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Give edit access to all offers in system
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to create/edit/delete & view Affiliates.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Give view only access to all affiliates.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to create/edit/delete & view Advertisers.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Give view only access to all Advertisers.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Force hide non-owned offers. (Hide offers of advertisers not managed
          by this user.)
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to approve/reject/delete Creatives.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to edit/reject/approve conversions.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to adjust statics.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to setup custom payouts/caps for specific affiliates.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to log into advertiser/affiliate accounts using virtual login
          feature.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to access affiliate/advertiser billing.
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to manage list of featured offers
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to access event logs
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Allow to access link checker feature
        </li>
        <li className="text-[#3A3A3A] md:text-2xl text-base font-normal">
          Enable to see dashboard notifications
        </li>
      </div>
    </>
  );
};

export default Permission;
