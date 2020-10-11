import styled from 'styled-components/macro';
import { PreloadLink } from 'components';

import { Colors } from 'themes';

export const Nav = styled.nav`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Item = styled.div`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Link = styled(PreloadLink)`
  color: ${Colors.white};
  padding: 0;
  font-size: 1.6rem;
  font-weight: 300;
  letter-spacing: .066ex;
  display: inline-block;
  text-decoration: none;
  transition: color .25s ease-in-out;

  &:hover {
    color: #61dafb;
  }

  &.active {
    color: #61dafb;
  }
`;
