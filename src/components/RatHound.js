import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import bgImage from '../images/background.jpg';

const useStyles = makeStyles(theme => ({
	mainFeaturedPost: {
		position: 'relative',
		// backgroundColor: theme.palette.grey[800],
		// color: theme.palette.common.white,
		marginBottom: theme.spacing(4)
		// backgroundSize: 'cover',
		// backgroundRepeat: 'no-repeat',
		// backgroundPosition: 'center'
	},
	overlay: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0
		// backgroundColor: 'rgba(0,0,0,.3)'
	},
	mainFeaturedPostContent: {
		position: 'relative',
		padding: theme.spacing(3),
		[theme.breakpoints.up('md')]: {
			padding: theme.spacing(6),
			paddingRight: 0
		}
	}
}));

function RatHound() {
	const classes = useStyles();
	return (
		// <Paper>
		<div style={{ backgroundImage: `url(${bgImage})` }}>
			<Grid container className="top">
				<Grid item md={6}>
					<div
					// className={classes.mainFeaturedPostContent}
					>
						<Typography component="h1" variant="h3" color="inherit" gutterBottom>
							<h1>Hound</h1>
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet velit ultrices,
								commodo nulla ut, blandit est. Curabitur id varius diam. Mauris ac sem id neque commodo
								ultrices. Pellentesque at augue vitae augue semper bibendum et vitae turpis. Nam mollis
								nulla velit. Duis condimentum pharetra arcu, a ullamcorper purus lacinia tincidunt.
								Vestibulum quis diam eget libero feugiat dictum eget at tellus. Aenean in mauris orci.
							</p>
							<p>
								Proin aliquet tortor nunc, in luctus diam molestie vel. Maecenas lacinia turpis
								hendrerit neque finibus, id aliquet purus bibendum. Praesent convallis tincidunt elit,
								vitae iaculis dolor hendrerit sed. Sed ullamcorper, justo vitae bibendum interdum,
								lectus ante placerat magna, ac feugiat sapien urna ac odio. Fusce orci lorem, malesuada
								et magna sit amet, rhoncus dignissim ipsum. Nullam semper orci non nisl congue, eget
								vestibulum sem laoreet. Mauris porttitor neque id nisi dictum, eget malesuada dolor
								egestas. Sed scelerisque egestas scelerisque. Nullam ut est dolor.
							</p>
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
		// </Paper>
	);
}

export default RatHound;
