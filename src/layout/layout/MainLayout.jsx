import { Outlet } from 'react-router-dom';
import AdminSidebar from '../sidebar/AdminSidebar';
import style from './layout.module.css';
import TopNav from '../navbar/TopNav';
function MainLayout() {
	return (
		<div>
			<div className={style.layout__wrap}>
				<AdminSidebar />
				<div className={style.page__wrap}>
					<TopNav />
					<main className={style.outlet}>
						<Outlet />
					</main>
				</div>
			</div>
			{/* <footer>Footer</footer> */}
		</div>
	);
}

export default MainLayout;
