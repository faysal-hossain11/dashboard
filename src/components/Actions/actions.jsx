import { useState } from 'react';
import { MdContentCopy } from 'react-icons/md';
import { RiCheckboxMultipleFill } from 'react-icons/ri';

export function useCopy() {
	const [copied, setCopied] = useState(false);
	const [copy_data, set_copy_data] = useState('');

	const click_button_handler = (e) => {
		set_copy_data(e);
		navigator.clipboard.writeText(e);
		setCopied(true);

		setTimeout(() => {
			setCopied(false);
		}, 3000);
	};

	return [copied, click_button_handler, copy_data, set_copy_data];
}

export const ClickToCopy = ({ text, children, className }) => {
	const [copied, click_button_handler] = useCopy();
	return (
		<button className={className} onClick={() => click_button_handler(text)}>
			{children}
			{!copied ? <MdContentCopy /> : <RiCheckboxMultipleFill />}
		</button>
	);
};
