import React, { useState, createContext, useCallback } from "react";
export const PlayerContext = createContext(null);

export function PlayerProvider(props) {
	const [loggedInPlayer, setLoggedInPlayer] = useState("Chris");

	const login = useCallback(
		(username) => {
			setLoggedInPlayer(username);
		},
		[setLoggedInPlayer],
	);

	const logout = useCallback(() => {
		setLoggedInPlayer(null);
	}, [setLoggedInPlayer]);

	return (
		<PlayerContext.Provider value={{ loggedInPlayer, login, logout }}>
			{props.children}
		</PlayerContext.Provider>
	);
}
