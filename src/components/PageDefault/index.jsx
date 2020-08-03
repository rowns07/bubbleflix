import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FooterM from '../FooterFlix';
import Menu from '../Header';

const Main = styled.main`
    background-color:var(--color-black-dark);
    color:var(--color-primary-medium);
    flex:1;
    font-size:25rem;
    padding-top:120rem;


`;

// children = objeto props "aberto" ex: {props.children}
// eslint-disable-next-line react/prop-types
function PageDefault({ children, padding, paddingTop }) {
  return (
    <>
      <Menu />
      <Main style={{ padding, paddingTop }}>

        {children}
      </Main>
      <FooterM />
    </>
  );
}

PageDefault.prototypes = {
  children: PropTypes.object.isRequired,
};
export default PageDefault;
