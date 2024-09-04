import * as React from 'react';
import Svg, { ClipPath, Defs, G, Mask, Path, Rect } from 'react-native-svg';

function CoffeeType1Icon(props) {
	return (
		<Svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<G clipPath="url(#clip0_7386_87)">
				<G clipPath="url(#clip1_7386_87)">
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
						<Path fill="#FFCD9F" d="M7 19H40V46H7z" />
						<Path fill="#FFCD9F" fillOpacity={0.29} d="M7 10H40V44H7z" />
						<Path fill="#5A483B" d="M6 24H39V46H6z" />
					</G>
				</G>
			</G>
			<Defs>
				<ClipPath id="clip0_7386_87">
					<Path fill="#fff" d="M0 0H46V46H0z" />
				</ClipPath>
				<ClipPath id="clip1_7386_87">
					<Rect width={46} height={46} rx={23} fill="#fff" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default CoffeeType1Icon;
