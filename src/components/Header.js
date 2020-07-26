import React from 'react';
import styled from 'styled-components';
import {
	HeaderWrapper,
	HeaderTitle,
	HeaderTitleImg,
	HeaderTitleText,
	HeaderButtonWrapper,
	HeaderButton,
} from './styled';

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderTitle>
				<HeaderTitleImg src="./a.png" />
				<HeaderTitleText>CutyApple's Simple Note</HeaderTitleText>
			</HeaderTitle>
			<HeaderButtonWrapper>
				<HeaderButton>추가</HeaderButton>
				<HeaderButton>삭제</HeaderButton>
			</HeaderButtonWrapper>
		</HeaderWrapper>
	);
};

export default Header;
