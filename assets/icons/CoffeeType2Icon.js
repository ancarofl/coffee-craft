import * as React from 'react';
import Svg, { ClipPath, Defs, G, LinearGradient, Mask, Path, Rect, Stop } from 'react-native-svg';

function CoffeeType2Icon(props) {
	return (
		<Svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<G clipPath="url(#clip0_7386_8)">
				<G clipPath="url(#clip1_7386_8)">
					<Path fill="#219653" d="M-1 0H47V46H-1z" />
					<Mask
						id="a"
						style={{
							maskType: 'alpha',
						}}
						maskUnits="userSpaceOnUse"
						x={8}
						y={14}
						width={30}
						height={37}>
						<Path
							d="M8.25 16.223A2 2 0 0110.237 14h25.526a2 2 0 011.987 2.223l-3.704 33A2 2 0 0132.058 51H13.942a2 2 0 01-1.988-1.777l-3.704-33z"
							fill="#FFFDFA"
						/>
					</Mask>
					<G mask="url(#a)">
						<Path fill="#fff" d="M7 14H40V46H7z" />
						<Path fill="#FFCD9F" fillOpacity={0.29} d="M7 10H40V44H7z" />
						<Path fill="url(#paint0_linear_7386_8)" d="M6 24H39V46H6z" />
					</G>
				</G>
			</G>
			<Defs>
				<LinearGradient
					id="paint0_linear_7386_8"
					x1={22.5}
					y1={24}
					x2={22.5}
					y2={46}
					gradientUnits="userSpaceOnUse">
					<Stop stopColor="#DE9A69" />
					<Stop offset={1} stopColor="#AC5B20" />
				</LinearGradient>
				<ClipPath id="clip0_7386_8">
					<Path fill="#fff" d="M0 0H46V46H0z" />
				</ClipPath>
				<ClipPath id="clip1_7386_8">
					<Rect width={46} height={46} rx={23} fill="#fff" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default CoffeeType2Icon;
