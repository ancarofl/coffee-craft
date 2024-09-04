import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

function CoffeeType3Icon(props) {
	return (
		<Svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<G clipPath="url(#clip0_7386_20)">
				<G clipPath="url(#clip1_7386_20)">
					<Path fill="#219653" d="M-1 0H47V46H-1z" />
					<Path d="M12.6 20h20.8l-3.2 26.4H15.8L12.6 20z" fill="#F2994A" />
					<Path
						d="M13.4 27.2h19.2l-.739 8H14.139l-.738-8zM11 20h24l-2.215-4h-19.57L11 20z"
						fill="#FFFDFA"
					/>
				</G>
			</G>
			<Defs>
				<ClipPath id="clip0_7386_20">
					<Path fill="#fff" d="M0 0H46V46H0z" />
				</ClipPath>
				<ClipPath id="clip1_7386_20">
					<Rect width={46} height={46} rx={23} fill="#fff" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default CoffeeType3Icon;
