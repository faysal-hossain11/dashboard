import { Link, Outlet } from "react-router-dom";
import AdminSidebar from "../sidebar/AdminSidebar";
import style from "../layout/layout.module.css";
import TopNav from "../../layout/navbar/TopNav";
import { affiliateMenu } from "../Advertiser-layout/advertiser-menu";

const AffiliateLayout = () => {
  return (
    <div>
      <div className={style.layout__wrap}>
        <AdminSidebar />
        <div className={style.page__wrap}>
          <TopNav />
          <main className={style.outlet}>
            <div className="flex gap-6">
              <div className="w-full min-w-[240px] max-w-[240px] lg:block hidden">
                <ul className="bg-[#FFFFFF] rounded-[10px] py-10 px-5 flex flex-col gap-5">
                  {affiliateMenu?.map((e) => (
                    <List data={e} key={e.id} />
                  ))}
                </ul>
              </div>
              <main className="w-full">
                <Outlet />
              </main>
            </div>
          </main>
        </div>
      </div>
      {/* <footer>Footer</footer> */}
    </div>
  );
};

export default AffiliateLayout;

const List = ({ data }) => {
  const styles = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  };
  return (
    <li className={`${style.menu} ${style.active}`} key={data?.id}>
      <Link
        to={data?.path}
        className="flex justify-between items-center w-full"
      >
        <div style={styles} className={style.menu_name_group}>
          <span className={style.icon}>{data?.icon}</span>
          <span className={style.name}> {data?.name}</span>
        </div>
      </Link>
    </li>
  );
};
