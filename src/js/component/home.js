import React, { useState } from "react";
import PropTypes from "prop-types";
import Button from "./button.js";

export function Home() {
	const [activeRed, setActiveRed] = useState(false);
	const [activeYellow, setActiveYellow] = useState(false);
	const [activeGreen, setActiveGreen] = useState(false);

	const red = () => {
		activeRed === true ? setActiveRed(false) : setActiveRed(true);
		setActiveYellow(false);
		setActiveGreen(false);
	};

	const yellow = () => {
		activeYellow === true ? setActiveYellow(false) : setActiveYellow(true);
		setActiveRed(false);
		setActiveGreen(false);
	};
	const green = () => {
		activeGreen === true ? setActiveGreen(false) : setActiveGreen(true);
		setActiveYellow(false);
		setActiveRed(false);
	};

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
						{/* ASi tambien lo podria hacer, pero es mas largo
                        ; <div onClick={() => { setActiveRed(!activeRed);	activeRed === false	? setActiveYellow(false) : null; }}> */}
						<div onClick={red}>
							<Button color="bg-danger" active={activeRed} />
						</div>
						<div onClick={yellow}>
							<Button color="bg-warning" active={activeYellow} />
						</div>
						<div onClick={green}>
							<Button color="bg-success" active={activeGreen} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

// Estrategia 1: Con el selector, hacer una función que renderice los componentes con la luz correspondiente. Desventaja: con 3 elementos bien. Pero no es escalable y no se como usar render()
// Estrategia 2: Cada componente escucha un selector, y cada selección activa una función que cambia los selectores de acuerdo a lo necesario. Pero no me funciona
