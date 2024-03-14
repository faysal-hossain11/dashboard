import { Tabs } from 'antd';
import { components } from './components';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { ClickToCopy } from '../../components/Actions/actions';

const AllComponents = () => {
	return (
		<div>
			<Tabs
				defaultActiveKey="1"
				tabPosition="left"
				type="card"
				size="large"
				items={components.map((e) => {
					return {
						label: e?.label,
						key: e?.id,
						children: e?.elements?.map((element, i) => {
							// convert jsx to string
							const jsxToString = (jsxElement) => {
								const { type, props } = jsxElement;
								const children = props.children || [];
								const childrenString = children.map((child) =>
									typeof child === 'object' ? jsxToString(child) : child
								);
								return `<${
									type.displayName || type.name || 'Component'
								}${Object.keys(props)
									.map((key) => ` ${key}="${props[key]}"`)
									.join(' ')}>${childrenString.join('')}</${
									type.displayName || type.name || 'Component'
								}>`;
							};
							const jsxString = jsxToString(element?.children);

							return (
								<div
									key={i}
									className=" shadow-lg p-5 rounded mb-10 border-orange-300 border-2"
								>
									<div className=" text-lg flex gap-4 items-center">
										<p className="text-2xl font-semibold text-green-500">
											{element?.name}
										</p>
										<ClickToCopy
											text={element?.howToUse}
											className={
												'bg-green-600 p-2 text-sm  rounded text-white cursor-pointer flex gap-2 items-center only:'
											}
										></ClickToCopy>
									</div>

									<SingleTabs data={e} element={element} />
								</div>
							);
						}),
					};
				})}
			/>
		</div>
	);
};
export default AllComponents;

const SingleTabs = ({ element }) => {
	const tabNav = [
		{
			name: 'Components View',
			children: element?.children,
		},
		{
			name: 'Code',
			children: <CodeDisplay code={element?.code} />,
		},
		{
			name: 'How to Use',
			children: <CodeDisplay code={element?.howToUse} />,
		},
	];
	return (
		<Tabs
			items={tabNav?.map((e, i) => {
				const id = String(i + 1);
				return {
					label: e?.name,
					key: id,
					children: <>{e?.children}</>,
				};
			})}
		/>
	);
};

const CodeDisplay = ({ code }) => {
	return (
		<SyntaxHighlighter
			showLineNumbers
			lineProps={{ style: { display: 'block', marginLeft: '10px' } }}
			language="jsx"
			style={vscDarkPlus}
		>
			{code}
		</SyntaxHighlighter>
	);
};
