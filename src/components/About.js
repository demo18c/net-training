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

function About() {
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
							<h1>About</h1>
						</Typography>
						<Typography variant="h5" color="inherit" paragraph>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec libero eget odio
								bibendum interdum. Nunc imperdiet enim turpis, sit amet tincidunt purus tempor vitae.
								Quisque commodo, metus nec ullamcorper maximus, eros lectus feugiat mi, id vulputate
								diam magna ac nulla. Orci varius natoque penatibus et magnis dis parturient montes,
								nascetur ridiculus mus. Etiam felis diam, eleifend vel commodo sit amet, tristique id
								est. Suspendisse consectetur dignissim justo nec aliquam. Donec sagittis quam sem, a
								dignissim dolor pellentesque in. Donec sed maximus ex. Fusce magna mi, blandit vel
								ornare vitae, varius mattis justo. Aenean bibendum bibendum scelerisque. Nulla lacus
								augue, fringilla a libero eu, aliquet fringilla enim. Maecenas sit amet fermentum ipsum.
								Suspendisse id viverra neque. Nunc rhoncus ultricies sodales. Maecenas ultricies diam ac
								enim congue viverra. Suspendisse mattis turpis odio, in dapibus dolor auctor id. Proin
								leo nulla, tristique a odio ut, sagittis laoreet diam. Nam et sem enim. Integer laoreet,
								libero a euismod vulputate, augue lacus commodo tortor, vitae interdum quam felis nec
								enim. Nullam vel lacus porttitor, elementum urna sit amet, consectetur metus. Nullam
								sodales consectetur ligula, quis mollis erat pellentesque quis. Nullam facilisis tellus
								urna, eget molestie sem rutrum vitae. Duis nec dolor commodo, vestibulum orci non,
								aliquam magna. Vivamus vitae ex sed ligula vestibulum aliquam ac et turpis. Integer ut
								orci pretium, tincidunt sem sed, tincidunt velit. Nunc placerat ex eu libero auctor, vel
								semper elit vestibulum. Praesent at ante velit. Etiam nec dui magna. Nunc lorem velit,
								semper ut congue a, vestibulum et ipsum. Interdum et malesuada fames ac ante ipsum
								primis in faucibus. Suspendisse aliquet at orci quis hendrerit. Vestibulum venenatis
								ipsum in tortor pretium, id lacinia massa dapibus. Integer lacinia eu neque ut auctor.
								Morbi at rhoncus enim, in sodales ipsum. Quisque efficitur vehicula ex, quis molestie
								quam facilisis et. Nunc hendrerit pellentesque accumsan. Donec commodo, mauris at
								laoreet commodo, sapien ligula auctor tellus, eu tempus sapien mi nec nisi. Orci varius
								natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
							</p>
						</Typography>
					</div>
				</Grid>
			</Grid>
		</div>
		// </Paper>
	);
}

export default About;
