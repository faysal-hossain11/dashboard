// react icon import
import { IoFilterSharp } from 'react-icons/io5';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FaPlus } from 'react-icons/fa6';
import { HiPlus } from 'react-icons/hi';
// images
import offer from '../../assets/images/offer.png';
import Advertiser from '../../assets/images/advatiser.png';
import Affiliate from '../../assets/images/affiliate.png';
import Postback from '../../assets/images/postback.png';

import Card from '../../components/Card/Card';
import BlackButton from '../../components/Button/BlackButton';
import { SideBtn, Headers } from '../../components/Headers/Headers';
import { EarningCharts } from '../../components/Charts/EarningCharts';
import BlackCard from '../../components/Cards/BlackCard';
import TaskCard from '../../components/Cards/TaskCard';
import FeaturesCards from '../../components/Cards/FeaturesCards';

const Home = () => {
	return (
		<>
			<Headers text={{ heading: 'Statistics', subText: '(This Month)' }}>
				<BlackButton
					text={'Open Live Dashboard'}
					icon={'heroicons:signal-20-solid'}
				/>
				<SideBtn />
			</Headers>
			<div className="mt-6">
				<Card />
			</div>
			<div className="md:flex block gap-[30px] mt-[32px] px-5 md:px-0">
				<div className="md:w-[65%]">
					<EarningCharts />
				</div>
				<div className="md:w-[35%]">
					<BlackCard />
					<TaskCard />
					{/* Featured Offers */}
					<FeaturesCards />
				</div>
			</div>
			<div>
				<div></div>
				<div></div>
			</div>
		</>
	);
};

export default Home;
