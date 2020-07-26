import React from 'react';
import {
	NoteListWrapper,
	NoteListItem,
	NoteListInnerTitle,
	NoteListInnerItem,
} from './styled';

const NoteList = () => {
	return (
		<NoteListWrapper>
			<NoteListItem>
				<NoteListInnerTitle>이거슨 제목</NoteListInnerTitle>
				<NoteListInnerItem>이거슨 내용</NoteListInnerItem>
			</NoteListItem>
			<NoteListItem select={true}>
				<NoteListInnerTitle>이거슨 제목</NoteListInnerTitle>
				<NoteListInnerItem>이거슨 내용22</NoteListInnerItem>
			</NoteListItem>
			<NoteListItem>
				<NoteListInnerTitle>이거슨 제목</NoteListInnerTitle>
				<NoteListInnerItem>
					이거슨 아주 긴 긴 긴 긴 긴 긴 긴 긴 긴 긴 긴 내용
				</NoteListInnerItem>
			</NoteListItem>
		</NoteListWrapper>
	);
};

export default NoteList;
