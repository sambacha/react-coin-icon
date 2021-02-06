// Yearn Finance logo
// Figma file: https://www.figma.com/file/6p52NYFcmvtLGtvdsEbYd2/Untitled?node-id=1%3A2
import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";

function Icon(props) {
  return (
    <Svg
      width={40}
      height={40}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M151 75.5a75.758 75.758 0 00-5.747-28.892 75.724 75.724 0 00-16.367-24.494 75.719 75.719 0 00-24.494-16.367A75.755 75.755 0 0075.5 0a75.757 75.757 0 00-28.892 5.747 75.721 75.721 0 00-24.494 16.367A75.721 75.721 0 005.747 46.608 75.757 75.757 0 000 75.5a75.755 75.755 0 005.747 28.892 75.719 75.719 0 0016.367 24.494 75.724 75.724 0 0024.494 16.367A75.758 75.758 0 0075.5 151a75.755 75.755 0 0028.892-5.747 75.722 75.722 0 0024.494-16.367 75.722 75.722 0 0016.367-24.494A75.755 75.755 0 00151 75.5z"
        fill="url(#prefix__paint0_linear)"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M71.598 41.412h7.804v68.179h-7.804v-68.18z"
        fill="#fff"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M67.17 73.484v-8.148c-6.26-3.079-10.57-9.52-10.57-16.968 0-10.434 8.463-18.896 18.9-18.896 11.719 0 20.181 8.462 20.181 18.896 0 2.63-.54 5.136-1.838 8.112l-3.332-10.834-6.68 2.088 5.923 22.547 22.998-8.46-2.795-6.594-8.577 2.935c1.552-3.366 1.857-5.84 1.857-9.794 0-14.61-11.844-26.455-27.737-26.455-14.61 0-26.455 11.845-26.455 26.455 0 11.7 7.596 21.625 18.124 25.116zM83.83 77.519v8.148c6.26 3.08 10.57 9.52 10.57 16.968 0 10.434-8.463 18.896-18.9 18.896-11.72 0-20.181-8.462-20.181-18.896 0-2.631.54-5.136 1.837-8.112l3.333 10.834 6.68-2.088-5.923-22.547-22.998 8.462 2.795 6.592 8.577-2.935c-1.552 3.366-1.857 5.84-1.857 9.794 0 14.61 11.844 26.455 27.737 26.455 14.61 0 26.455-11.845 26.455-26.455 0-11.7-7.597-21.625-18.124-25.116z"
        fill="#fff"
      />
      <Defs>
        <LinearGradient
          id="prefix__paint0_linear"
          x1={-75.5}
          y1={75.5}
          x2={75.5}
          y2={226.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#0077FC" />
          <Stop offset={1} stopColor="#095EB5" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default Icon;
