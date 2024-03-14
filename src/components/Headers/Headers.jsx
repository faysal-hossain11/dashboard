import { IoFilterSharp } from 'react-icons/io5';

export function Headers({ text, children }) {
	return (
		<div className="flex flex-wrap gap-3 justify-between">
			<div className="flex items-center gap-[10px]">
				<h2 className=" font-secondaryFont text-primaryColor text-[32px] font-bold select-none">
					{text?.heading}
				</h2>
				{text?.subText && (
					<p className=" select-none text-[12px] text-tartiaryColor font-primaryFont">
						{text?.subText}
					</p>
				)}
			</div>
			<div className="flex flex-wrap gap-[20px] items-center">{children}</div>
		</div>
	);
}

export const SideBtn = () => {
	return (
		<div>
			<div>
				<details className="dropdown">
					<summary className="m-1 btn flex items-center gap-[10px] p-[14px] bg-[#E2E3E4] rounded-[10px] text-primaryColor text-[16px] font-primaryFont cursor-pointer">
						<IoFilterSharp /> Filter
					</summary>
					<ul className=" w-[145px] shadow menu dropdown-content z-[1] rounded-box absolute bg-white p-[15px]">
						<li>
							<a className="text-[#6A6A6A] font-primaryFont text-[14px]">
								Today
							</a>
						</li>
						<li>
							<a className="text-[#6A6A6A] font-primaryFont text-[14px]">
								Yesterday
							</a>
						</li>
						<li>
							<a className="text-[#6A6A6A] font-primaryFont text-[14px]">
								This Month
							</a>
						</li>
						<li>
							<a className="text-[#6A6A6A] font-primaryFont text-[14px]">
								Last Month
							</a>
						</li>
					</ul>
				</details>
			</div>
		</div>
	);
};
