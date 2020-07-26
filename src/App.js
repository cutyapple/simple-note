import React from 'react';
import { MainWrap, MainGlobal } from './components/styled';
import Header from './components/Header';
import NoteList from './components/NoteList';
import Note from './components/Note';
import { NoteWrapping } from './components/styled';

const App = () => {
	return (
		<MainWrap>
			<MainGlobal />
			<Header />
			<NoteWrapping>
				<NoteList />
				<Note />
			</NoteWrapping>
		</MainWrap>
	);
};

export default App;
