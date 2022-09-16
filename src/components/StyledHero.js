import styled from 'styled-components';
import defautImg from '../images/room-1.jpeg';


const orange = '#f15025'
const StyledHero = styled.header`
min-height: 60vh;
background: url(${props => props.img || defautImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;
`;



export default StyledHero;