import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

// biggest
function LargeIcon(props) {
	return (
		<Svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<G clipPath="url(#clip0_7386_69)">
				<G clipPath="url(#clip1_7386_69)">
					<Path fill="#219653" d="M-1 0H47V46H-1z" />
					<Path d="M10 16h26l-4 33H14l-4-33z" fill="#F2994A" />
					<Path d="M11 25h24l-.923 10H11.923L11 25zM8 16h30l-2.77-5H10.77L8 16z" fill="#FFFDFA" />
				</G>
			</G>
			<Defs>
				<ClipPath id="clip0_7386_69">
					<Path fill="#fff" d="M0 0H46V46H0z" />
				</ClipPath>
				<ClipPath id="clip1_7386_69">
					<Rect width={46} height={46} rx={23} fill="#fff" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default LargeIcon;
