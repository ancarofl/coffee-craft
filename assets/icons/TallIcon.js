import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect } from 'react-native-svg';

// tall is smallest
function TallIcon(props) {
	return (
		<Svg
			width={46}
			height={46}
			viewBox="0 0 46 46"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}>
			<G clipPath="url(#clip0_7386_77)">
				<G clipPath="url(#clip1_7386_77)">
					<Path fill="#219653" d="M-1 0H47V46H-1z" />
					<Path d="M13.421 25.684h19.158L29.63 50H16.368l-2.947-24.316z" fill="#F2994A" />
					<Path
						d="M14.158 32.316h17.684l-.68 7.368H14.838l-.68-7.368zM11.947 25.684h22.106L32.013 22H13.987l-2.04 3.684z"
						fill="#FFFDFA"
					/>
				</G>
			</G>
			<Defs>
				<ClipPath id="clip0_7386_77">
					<Path fill="#fff" d="M0 0H46V46H0z" />
				</ClipPath>
				<ClipPath id="clip1_7386_77">
					<Rect width={46} height={46} rx={23} fill="#fff" />
				</ClipPath>
			</Defs>
		</Svg>
	);
}

export default TallIcon;
