import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

import { INDENT } from 'settings';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  min-height: 100vh;
  background-color: #1c1b21;
`;

export const Logo = styled(NavLink)`
  width: 28px;
  height: 28px;
  font-size: 0;
  cursor: pointer;
`;

export const Sidebar = styled.aside`
  padding-top: ${INDENT.xs};
  padding-bottom: ${INDENT.xs};
  flex: 0 0 56px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  background-color: #292930;
  border-right: 1px solid #212026;
`;

export const Content = styled.main`
  color: #fff;
  flex: 1 1 auto;
`;

export const Section = styled.div`
  padding: ${INDENT.xs};
`;
