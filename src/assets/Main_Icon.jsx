import * as React from "react";

const SvgComponent = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlSpace="preserve"
        width={200}
        height={50}
        aria-hidden="true"
        className="iconify iconify--logos"
        viewBox="0 0 1000 50"
        style={{ display: 'block', margin: 0, padding: 0 }}
        {...props}
    >
        <text
            xmlSpace="preserve"
            fontFamily="Raleway"
            fontSize={105}
            fontWeight={900}
            style={{
                stroke: "none",
                strokeWidth: 1,
                strokeDasharray: "none",
                strokeLinecap: "butt",
                strokeDashoffset: 0,
                strokeLinejoin: "miter",
                strokeMiterlimit: 4,
                fill: "#000",
                fillRule: "nonzero",
                opacity: 1,
                whiteSpace: "pre",
            }}
            x="0"            // Start text at the beginning of the SVG
            y="50%"          // Center text vertically
            dominantBaseline="middle"
            textAnchor="start" // Align text to the start point
        >
            {"ChatU"}
        </text>
    </svg>
);

export { SvgComponent as ReactComponent };
