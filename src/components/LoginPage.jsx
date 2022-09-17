import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayerContext } from "../context/PlayerContext";

function LoginPage() {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [show, setShow] = useState(false);
	const { login } = useContext(PlayerContext);

	return (
		<>
			<main>
				<section className="intro flex center align-center column">
					<h1 className="gold">Trivia Snack</h1>
					<h2>A bite-size quiz game inspired by Trivial Pursuit.</h2>
					<div className="register-page">
						<div className="form-field">
							<label htmlFor="user-name">Username</label>
							<input
								value={username}
								onChange={(e) => {
									setUsername(e.target.value);
								}}
								type="text"
								id="user-name"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<div className="form-field">
							<div className="flex space-between">
								<label htmlFor="password">Enter a Password</label>
								<span>
									<label htmlFor="check-box">Show Password</label>
									<input
										value={show}
										onChange={(e) => {
											setShow(e.target.checked);
										}}
										type="checkbox"
										name="register-checkbox"
										id="login-check-box"
										className="shadow appearance-none border  text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-2"
									/>
								</span>
							</div>
							<input
								value={password}
								onChange={(e) => {
									setPassword(e.target.value);
								}}
								type={show === true ? "text" : "password"}
								id="password"
								className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							/>
						</div>
						<button
							className="rounded bg-[#daa520] py-1 px-6"
							onClick={(e) => {
								e.preventDefault();
								login(username);
								navigate("/game");
							}}
						>
							Submit
						</button>
					</div>
				</section>
			</main>
		</>
	);
}

export default LoginPage;
