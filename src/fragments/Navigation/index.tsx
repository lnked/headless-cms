import * as React from 'react';
import { useTranslation } from 'react-i18next';

import { setLanguage } from 'i18n';
import { Button } from 'components';

import { routes } from 'app/routes';

import {
  Nav,
  Item,
  Link,
} from './styles';

export interface OuterProps {}

export const Navigation: React.FC<OuterProps> = ({ ...props }) => {
  const { t, i18n } = useTranslation();

  return (
    <Nav {...props}>
      {routes && routes.map(({ keyName, component, ...link }: any) => (
        <Item key={link.to}>
          <Link {...link} component={component}>
            {/* {t(keyName)} */}
            X
          </Link>
        </Item>
      ))}
    </Nav>
  );
};
