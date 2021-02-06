import React from "react";
import PropTypes from "prop-types";

let styleLight =
	"0px 0px 9px 0px rgb(0 0 0 / 30%), 0px 0px 10px 20px rgb(231 231 202 / 60%)";
export function Light(props) {
	return (
		<div>
			<button
				className="light"
				style={{
					backgroundColor: props.color,
					boxShadow: props.On ? styleLight : null
				}}
				onClick={() => props.setLightOn(props.color)}></button>
		</div>
	);
}

Light.propTypes = {
	color: PropTypes.string,
	On: PropTypes.bool,
	setLightOn: PropTypes.func
};
