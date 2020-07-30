import React from 'react';
import FooterM from '../FooterFlix';
import Menu from '../Header';
import styled from 'styled-components';

const Main = styled.main`
    background-color:var(--color-black-dark);
    color:var(--color-primary-medium);
    flex:1;
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;
`;

// children = objeto props "aberto" ex: {props.children}
function PageDefault({ children }) {
    return (
        <>
            <Menu />
            <Main>
                <div style={{ fontSize: 25, paddingTop: 90 }}>

                    {children}
                </div>
            </Main>
            <FooterM />
        </>
    )
}

export default PageDefault;