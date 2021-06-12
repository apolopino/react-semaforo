import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./button.js";

export function Home() {
	const [activeRed, setActiveRed] = useState(false);
	const [activeYellow, setActiveYellow] = useState(false);
	const [activeGreen, setActiveGreen] = useState(false);

	return (
		<div>
			<div className="mt-5 d-flex justify-content-center">
				<div
					className="card"
					style={{
						width: "150px",
						backgroundColor: "black",
						border: "1px solid black"
					}}>
					<div className="card-body">
						<div
							onClick={() => {
								setActiveRed(!activeRed);
								() =>
									activeRed === true
										? setActiveYellow(false)
										: null;
							}}>
							<Button color="bg-danger" active={activeRed} />
						</div>
						<div onClick={() => setActiveYellow(!activeYellow)}>
							<Button color="bg-warning" active={activeYellow} />
						</div>
						<div onClick={() => setActiveGreen(!activeGreen)}>
							<Button color="bg-success" active={activeGreen} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
