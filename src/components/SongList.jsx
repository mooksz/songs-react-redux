import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions";
//We pass our actionCreators inside our connect(), because Redux is not magic.
//We can call it all we want (if we dont do this) but it will only return the data.
//If we pass it in our connect() redux knows it has to respond when called
//We use this instead of store.dispatch !!!

const SongList = props => {
	const { songs, selectSong } = props;

	const renderList = songs.map(song => {
		const { title } = song;

		return (
			<div className="item" key={title}>
				<div className="right floated content">
					<button className="ui button primary" onClick={() => selectSong(song)}>
						Select
					</button>
				</div>

				<div className="content">{title}</div>
			</div>
		);
	});

	return <div className="ui divided list">{renderList}</div>;
};

//Get full redux state of store as parameter
const mapStateToProps = store => {
	//We return only the songs to the component as a prop
	return { songs: store.songs };
};

//Second parameter as object in first (), so selectSong, is a actioncreator we can add to our props,
//and Redux can use it to use in .dispatch() to update our store
export default connect(mapStateToProps, { selectSong })(SongList);
