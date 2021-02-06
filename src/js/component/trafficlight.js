import React, { useState } from "react";
import { Light } from "./light";

export function TrafficLight() {
	const [lightOn, setLightOn] = useState("");

	function handleLightChange(newLightOn) {
		lightOn != newLightOn ? setLightOn(newLightOn) : setLightOn("");
	}

	return (
		<div className="container d-flex justify-content-center">
			<div className="container-trafficLight">
				<div className="d-flex justify-content-center">
					<div className="trafficLight-rope"></div>
				</div>
				<div className="trafficLight ms-auto me-auto p-2">
					<Light
						color="red"
						On={lightOn == "red" ? true : false}
						setLightOn={handleLightChange}
					/>
					<Light
						color="orange"
						On={lightOn == "orange" ? true : false}
						setLightOn={handleLightChange}
					/>
					<Light
						color="green"
						On={lightOn == "green" ? true : false}
						setLightOn={handleLightChange}
					/>
				</div>
			</div>
		</div>
	);
}
