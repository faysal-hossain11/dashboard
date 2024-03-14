import { HiPlus } from 'react-icons/hi';

function FeaturesCards() {
	return (
		<div className="p-[30px] bg-white rounded-[10px] mt-[30px] px-5 lg:px-0">
			<div>
				<h2 className=" font-secondaryFont text-primaryColor text-[24px] font-bold mb-5 text-center">
					Featured Offers
				</h2>
				<p className=" font-primaryFont text-primaryColor text-[16px] text-center font-normal mt-5 md:px-[80px] px-0 mb-[100px]">
					No featured offers available. Time to add some.
				</p>
			</div>
			<div className="flex gap-4 justify-center">
				<button className="py-4 pl-[22px] pr-[14px] bg-primaryColor text-white flex items-center gap-[10px] rounded-[10px]">
					Add <HiPlus />
				</button>
				<button className="py-4 px-[22px] border border-primaryColor rounded-[10px] font-primaryFont text-[16px] text-primaryColor font-medium">
					Enable Auto Mode
				</button>
			</div>
		</div>
	);
}

export default FeaturesCards;
