import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const Navbar = () => {
	return (
		<Menu.Menu>
			<Menu.Item as={Link} to='/path'>
				Click me
			</Menu.Item>
		</Menu.Menu>
	);
};

export default Navbar;
