import styled from 'styled-components';
import LogoMflix from '../LogoMflix';


const FooterFlix = styled.footer`
display:flex;
flex-direction:column;
align-items:center;
font-size:16rem;
background-color:var(--color-black-dark);
color:var(--color-gray-light);
padding:20rem 0;
border-top:4px dotted var(--color-primary-medium)

& > ${LogoMflix}{
    margin-bottom:20rem;
}


`;

export default FooterFlix;