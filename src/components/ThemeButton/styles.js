import styled from 'styled-components';


export const Container = styled.div`
	position: absolute;
	width: 139px;
	height: 31px;
	left: 138px;
	top: calc(100% - 100px);
	display: flex;
	border: 1px solid var(--gray-400);
	box-sizing: border-box;
	border-radius: 22px;
	font-size: 12px;
	line-height: 18px;

	> span{
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-evenly;
	}

	> span > svg{
	transform: rotate(266deg);
	color: var(--gray-400);
	font-size: 15px;
	}
`;
