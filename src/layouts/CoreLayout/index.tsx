import React, { useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Navigation } from 'fragments';
import logo from 'images/logo.svg';

import { Container, Sidebar, Content, Section, Logo } from './styles';

type OuterProps = {
  children?: React.ReactChild[] | React.ReactChild;
};

export const CoreLayout: React.FC<OuterProps & RouteComponentProps> = ({
  children = '',
  location: {
    hash,
    pathname,
  },
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <Container>
      <Sidebar>
        <Logo to="/">
          <SVG src={logo} uniquifyIDs={true} />
        </Logo>

        <Navigation />

        <div>Prof</div>
      </Sidebar>

      <Content>
        <Section>{children}</Section>
      </Content>
    </Container>
  );
};

CoreLayout.displayName = 'CoreLayout';

export default withRouter(CoreLayout);
