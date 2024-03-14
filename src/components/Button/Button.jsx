import { FaAngleLeft } from 'react-icons/fa';

export function BackButton() {
	const style = {
		color: '#3A3A3A',
		fontFamily: 'PT Sans',
		fontSize: '16px',
		fontStyle: 'normal',
		fontWeight: '700',
		lineHeight: 'normal',
	};
	return (
		<button className="flex items-center gap-[10px]  ">
			<span>
				<FaAngleLeft />
			</span>
			<span style={style}>Back</span>
		</button>
	);
}
