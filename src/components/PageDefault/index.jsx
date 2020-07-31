import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FooterM from '../FooterFlix';
import Menu from '../Header';

const Main = styled.main`
    background-color:var(--color-black-dark);
    color:var(--color-primary-medium);
    flex:1;
    padding-top:50px;
    padding-left:5%;
    padding-right:5%;
`;

// children = objeto props "aberto" ex: {props.children}
// eslint-disable-next-line react/prop-types
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
  );
}

PageDefault.prototypes = {
  children: PropTypes.object.isRequired,
};
export default PageDefault;
