import { Link } from 'react-router-dom';
import { logo } from '../../lib/image';
import { adminMenu } from '../navbar/admin-menu';
import style from './sidebar.module.css';
function AdminSidebar() {
	return (
		<div className={`${style.sidebar} hidden lg:block`}>
			<div>
				<img src={logo} alt="" />
			</div>
			<ul className={style.menu__wrap}>
				{adminMenu?.map((e) => (
					<List data={e} key={e.id} />
				))}
				<li className={`${style.menu} ${style.active} w-full`}>
					<Link
						className="bg-blue-500 block py-2 px-4 rounded shadow text-white font-semibold"
						to="/all-components"
					>
						ALL Components
					</Link>
				</li>
			</ul>
		</div>
	);
}

export default AdminSidebar;

const List = ({ data }) => {
	return (
		<li className={`${style.menu} ${style.active}`} key={data?.id}>
			<Link
				to={data?.path}
				className="flex justify-between items-center w-full"
			>
				<div className={style.menu_name_group}>
					<span className={style.icon}>{data?.icon}</span>
					<span className={style.name}> {data?.name}</span>
				</div>
				{data?.arrow && <span className={style.icon}>{data?.arrow?.down}</span>}
			</Link>

			<ul className={style.sub__menu__wrap}>
				{data?.subMenu?.map((a, i) => (
					<li className="w-full" key={i}>
						<Link className={style.sub__menu} to={a?.path}>
							{a?.name}
						</Link>
						{a?.subMenu?.map((b, i) => (
							<li className="w-full" key={i}>
								<Link className={style.sub__menu} to={b?.path}>
									{b?.name}
								</Link>
							</li>
						))}
					</li>
				))}
			</ul>
		</li>
	);
};
