import React from 'react';
import { Link } from 'wouter';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { AmplifySignOut } from '@aws-amplify/ui-react';

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	title: {
		flexGrow: 1
	},
	headerOptions: {
		display: 'flex',
		flex: 1,
		justifyContent: 'space-evenly'
	}
}));

const Header = () => {
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);

	const handleMenu = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className={classes.root}>
			<AppBar position="sticky" style={{ background: '#B49D80', boxShadow: 'none' }}>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						IVAS
					</Typography>
					<AmplifySignOut />

					<>
						<IconButton
							onClick={handleMenu}
							edge="start"
							className={classes.menuButton}
							color="inherit"
							aria-label="menu"
						>
							<MenuIcon />
						</IconButton>

						<Menu
							id="menu-appbar"
							anchorEl={anchorEl}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right'
							}}
							open={open}
							onClose={handleClose}
						>
							<MenuItem component={Link} to="/about" onClick={handleClose}>
								About
							</MenuItem>
							<MenuItem component={Link} to="/safety" onClick={handleClose}>
								Safety
							</MenuItem>

							<MenuItem component={Link} to="/bloodhound" onClick={handleClose}>
								Blood Hound
							</MenuItem>
							<MenuItem component={Link} to="/soldierradio" onClick={handleClose}>
								Soldier Radio
							</MenuItem>
						</Menu>
					</>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;