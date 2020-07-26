import React from 'react';
import { NoteWrapper, NoteTitle, NoteText } from './styled';

const Note = () => {
	return (
		<NoteWrapper>
			<NoteTitle value="This Is My Simple Note!" />
			<NoteText>그냥 저냥 그냥 저냥</NoteText>
		</NoteWrapper>
	);
};

export default Note;
