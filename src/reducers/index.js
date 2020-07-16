import { combineReducers } from "redux";

//Reducer
const songsReducer = () => {
	return [
		{
			title: "Kiss my ass",
			duration: "2:30",
		},
		{
			title: "Smell my ass",
			duration: "4:05",
		},
		{
			title: "Hug my ass",
			duration: "3:41",
		},
		{
			title: "Lick my ass",
			duration: "7:19",
		},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") return action.payload;
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
