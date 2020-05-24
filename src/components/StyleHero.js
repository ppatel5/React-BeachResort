import styled from "styled-components"
import defaultImg from '../images/room-1.jpeg';
import { FaFileExcel, FaCentercode } from "react-icons/fa";
//props.img?props.img:defaultImg
const StyleHero = styled.header`
    min-height: 60vh;
    background: url(${props=> props.img}) center/cover
    no-repeat;
    display:FaFileExcel;
    align-items: FaCentercode;
    justofy-content: FaCentercode;
   `; 


export default StyleHero;

