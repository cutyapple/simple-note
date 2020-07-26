import styled, { createGlobalStyle } from 'styled-components';

export const MainGlobal = createGlobalStyle`
	html, body {
		height: 100%;
		margin: 0;
		padding: 0;
	}
`;

export const MainWrap = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

export const HeaderWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 50px;
	background: white;
	border-bottom: 1px solid gray;
`;

export const HeaderTitle = styled.div`
	height: 39px;
	width: 100%;
	margin: 4px 35px;
	font-size: 16px;
`;

export const HeaderTitleImg = styled.img`
	height: 35px;
	width: 35px;
	vertical-align: middle;
`;

export const HeaderTitleText = styled.span`
	height: 16px;
	margin: 0 10px;
	font-weight: bold;
`;

export const HeaderButtonWrapper = styled.div`
	display: flex;
	float: right;
	margin: 4px 35px;
	align-items: center;
`;

export const HeaderButton = styled.button`
	width: 50px;
	height: 21px;
	padding: 0px 3px;
	font-size: 14px;
	font-weight: bold;
	background: white;
	border: none;
	&:hover {
		cursor: pointer;
	}
`;

export const NoteWrapping = styled.div`
	display: flex;
	height: 100%;
`;

export const NoteListWrapper = styled.div`
	display: flex;
	width: 360px;
	border-right: 1px solid gray;
	height: 100%;
	flex-direction: column;
`;

export const NoteListItem = styled.div`
	height: 45px;
	padding: 20px 30px;
	background: ${(props) => (props.select ? '#eef3f8' : 'white')};
	overflow: hidden;

	&:hover {
		cursor: pointer;
		background: ${(props) => (props.select ? '#eef3f8' : '#f5f5f5')};
	}
`;

export const NoteListInnerItem = styled.p`
	width: 300px;
	height: 20px;
	font-size: 14px;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	margin: 0;
`;

export const NoteListInnerTitle = styled(NoteListInnerItem)`
	font-weight: bold;
	margin: 4px 0;
`;

export const NoteWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding: 40px 70px 0 70px;
`;

export const NoteTitle = styled.input`
	display: flex;
	width: 100%;
	margin-bottom: 20px;
	padding: 0;
	border: none;
	background: none;
	font-size: 24px;
	font-weight: bold;

	&:focus {
		outline: none;
	}
`;

export const NoteText = styled(NoteTitle.withComponent('textarea'))`
	height: 100%;
	margin: 0;
	font-size: 16px;
	font-weight: 300;
	resize: none;
	overflow: auto;

	&:focus {
		outline: none;
	}
`;
