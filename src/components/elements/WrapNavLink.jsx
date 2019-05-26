import React from 'react';
import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

export default ({ ...rest }) => <Menu.Item as={NavLink} activeClassName="active" {...rest} />;
