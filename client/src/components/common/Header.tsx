import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { RootState } from '../../modules';

const Header = () => {
  const { header } = useSelector((state: RootState) => state.layout);

  return (
    <HeaderWrapper>
      <h1>{header.title}</h1>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.div`
  padding: 32px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
    font-weight: bold;
  }
`;
