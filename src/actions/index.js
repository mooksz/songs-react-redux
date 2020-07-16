//Action creator
export const selectSong = song => {
	//Action creator
	//Return an action
	return {
		//Action
		type: "SONG_SELECTED",
		payload: song,
	};
};
