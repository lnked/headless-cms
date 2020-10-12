import * as React from 'react';
import SVG from 'react-inlinesvg';
import Skeleton from 'react-loading-skeleton';
import { useTranslation } from 'react-i18next';

import grid from 'images/grid.svg';
import photo from 'images/photo.svg';
import users from 'images/users.svg';
import folder from 'images/folder.svg';
import modules from 'images/modules.svg';
import settings from 'images/settings.svg';
import structure from 'images/structure.svg';

import { routes } from 'app/routes';

import {
  Nav,
  Item,
  Link,
} from './styles';

const ICON_SIZE = 24;

const Icon: React.FC<any> = ({ src, ...props }) => (
  <SVG
    {...props}
    src={src}
    loader={<Skeleton width={ICON_SIZE} height={ICON_SIZE} circle />}
    preProcessor={code => code.replace(/fill=".*?"/g, 'fill="currentColor"')}
    cacheRequests
    uniquifyIDs
  />
);

export type OuterProps = {

};

export const Navigation: React.FC<OuterProps> = ({ ...props }) => {
  const { t } = useTranslation();
  return (
    <Nav {...props}>
      {routes && routes.map(({ keyName, component, ...link }: any) => (
        <Item key={link.to}>
          <Link {...link} component={component}>
            {/* {t(keyName)} */}
            <Icon src={structure} />
            {/* <Icon src={grid} /> */}
            {/* <Icon src={photo} /> */}
            {/* <Icon src={modules} /> */}
            {/* <Icon src={users} /> */}
            {/* <Icon src={folder} /> */}
            {/* <Icon src={settings} /> */}
          </Link>
        </Item>
      ))}
    </Nav>
  );
};
