import React from 'react';
import { Tab, Menu, Icon } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Nav = props => (
	<NavLink
		exact
		{...props}
		activeClassName="active"
	/>
);

const createLabel = (iconName, labelText) => <span><Icon name={iconName} />{labelText}</span>

const welcomeLabel = createLabel("home", "Home Page")
const signinLabel = createLabel('sign-in', "Sign In")
const registeruserLabel = createLabel('signup', "Register")


const panes = [
    { menuItem: <Menu.Item key='home' as={Nav} to={`/`} content={welcomeLabel} /> },
    { menuItem: <Menu.Item key='signin' as={Nav} to={`/signin`} content={signinLabel} /> },
    { menuItem: <Menu.Item key='registeruser' as={Nav} to={`/registeruser`} content={registeruserLabel} /> },
  
]
const TabNav = () => <Tab panes={panes} />


export default TabNav;
