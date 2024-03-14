import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ReferenceLine,
	Line,
	LineChart,
} from 'recharts';

// rechart
const data = [
	{
		name: 'Page A',
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: 'Page B',
		uv: -3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: 'Page C',
		uv: -2000,
		pv: -9800,
		amt: 2290,
	},
	{
		name: 'Page D',
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: 'Page E',
		uv: -1890,
		pv: 4800,
		amt: 2181,
	},
	{
		name: 'Page F',
		uv: 2390,
		pv: -3800,
		amt: 2500,
	},
	{
		name: 'Page G',
		uv: 3490,
		pv: 4300,
		amt: 2100,
	},
];
const series = [
	{
		name: 'Series 1',
		data: [
			{ category: 'A', value: Math.random() },
			{ category: 'B', value: Math.random() },
			{ category: 'C', value: Math.random() },
		],
	},
	{
		name: 'Series 2',
		data: [
			{ category: 'B', value: Math.random() },
			{ category: 'C', value: Math.random() },
			{ category: 'D', value: Math.random() },
		],
	},
	{
		name: 'Series 3',
		data: [
			{ category: 'C', value: Math.random() },
			{ category: 'D', value: Math.random() },
			{ category: 'E', value: Math.random() },
		],
	},
];
export function EarningCharts() {
	return (
		<>
			<div className=" p-5 bg-white rounded-[15px] mb-10 ">
				<div>
					<h3 className=" font-secondaryFont text-[24px] text-[#6A6A6A] font-bold mb-4">
						Earnings
					</h3>
				</div>
				<div className="flex justify-between items-center mb-5">
					<div>
						<p className=" font-primaryFont text-[16px] font-normal mb-5">
							Amount{' '}
							<span className=" font-secondaryFont text-primaryColor text-[20px] font-bold">
								$0.00
							</span>
						</p>
					</div>
					<div className="flex items-center gap-[20px]">
						<div className="flex items-center gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 9 9"
									fill="none"
								>
									<circle
										cx="4.70376"
										cy="4.59048"
										r="2.96532"
										stroke="#030813"
									/>
								</svg>
							</div>
							<p>Revenue</p>
						</div>
						<div className="flex items-center gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="13"
									height="12"
									viewBox="0 0 13 12"
									fill="none"
								>
									<circle cx="6.24512" cy="6" r="4.5" stroke="#C4C4C4" />
								</svg>
							</div>
							<p className="text-[#6A6A6A]">Payout</p>
						</div>
						<div className="flex items-center gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 9 9"
									fill="none"
								>
									<circle
										cx="4.70376"
										cy="4.59048"
										r="2.96532"
										stroke="#030813"
									/>
								</svg>
							</div>
							<p>Profit</p>
						</div>
					</div>
				</div>
				<BarChart
					width={900}
					height={390}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5,
					}}
					className="w-[100%] h-[500px]"
				>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis dataKey="name" />
					<YAxis />
					<Tooltip />
					<Legend />
					<ReferenceLine y={0} stroke="#000" />
					<Bar dataKey="pv" fill="#030813" />
					<Bar dataKey="uv" fill="#C4C4C4" />
				</BarChart>
			</div>
			<div className=" p-5 bg-white rounded-[15px] mb-10">
				<div className="flex justify-between items-center mb-5">
					<div>
						<h3 className=" font-secondaryFont text-[24px] text-[#6A6A6A] font-bold">
							Earnings
						</h3>
					</div>
					<div className="flex items-center gap-[20px]">
						<div className="flex items-center gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 9 9"
									fill="none"
								>
									<circle
										cx="4.70376"
										cy="4.59048"
										r="2.96532"
										stroke="#030813"
									/>
								</svg>
							</div>
							<p>Clicks</p>
						</div>
						<div className="flex items-center gap-[10px]">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="12"
									height="12"
									viewBox="0 0 9 9"
									fill="none"
								>
									<circle
										cx="4.30825"
										cy="4.59048"
										r="2.96532"
										stroke="#1DD752"
									/>
								</svg>
							</div>
							<p>Conversions</p>
						</div>
					</div>
				</div>
				<LineChart width={900} height={300}>
					<CartesianGrid strokeDasharray="3 3" />
					<XAxis
						dataKey="category"
						type="category"
						allowDuplicatedCategory={false}
					/>
					<YAxis dataKey="value" />
					<Tooltip />
					<Legend />
					{series.map((s) => (
						<Line dataKey="value" data={s.data} name={s.name} key={s.name} />
					))}
				</LineChart>
			</div>
		</>
	);
}
