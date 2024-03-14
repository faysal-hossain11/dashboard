import { BackButton } from '../../components/Button/Button';
import { user } from '../../lib/image';
import style from './top-nav.module.css';
import { IoNotifications } from 'react-icons/io5';
import { VscTriangleDown } from 'react-icons/vsc';
import { RiMenuFoldLine } from 'react-icons/ri';
function TopNav() {
	return (
		<nav className={`${style.top__nav} shadow-sm `}>
			<div className="flex gap-2">
				<RiMenuFoldLine className="font-bold text-3xl lg:hidden" />
				<BackButton />
			</div>
			<div className="flex items-center gap-[10px]">
				<div>
					<IoNotifications />
				</div>

				<div className="flex items-center gap-[10px]">
					<p className={style.u__name}>David Smith</p>
					<div>
						<img className="w-10 h-10 object-cover" src={user} alt="" />
					</div>
					<div>
						<VscTriangleDown className="text-[20px]" />
					</div>
				</div>
			</div>
		</nav>
	);
}

export default TopNav;
