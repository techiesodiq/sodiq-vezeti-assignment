import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import 'swiper/swiper-bundle.css';
import {
  Box,
  Container,
  Grid,
  Typography,
  makeStyles
} from '@material-ui/core';

SwiperCore.use([Navigation, Pagination, Autoplay]);

const slides = [];
for (let i = 0; i < 1; i += 1) {
  slides.push(
    <SwiperSlide key={'slide-${i}'}>
      <img src="/static/images/im07.svg" alt="" style={{ listStyle: 'none' }} />
    </SwiperSlide>
  );

  slides.push(
    <SwiperSlide key={'slide-${i}'}>
      <img src="/static/images/im08.svg" alt="" style={{ listStyle: 'none' }} />
    </SwiperSlide>
  );

  slides.push(
    <SwiperSlide key={'slide-${i}'}>
      <img src="/static/images/im10.svg" alt="" style={{ listStyle: 'none' }} />
    </SwiperSlide>
  );

  slides.push(
    <SwiperSlide key={'slide-${i}'}>
      <img src="/static/images/im02.svg" alt="" style={{ listStyle: 'none' }} />
    </SwiperSlide>
  );
  slides.push(
    <SwiperSlide key={'slide-${i}'}>
      <img src="/static/images/im00.svg" alt="" style={{ listStyle: 'none' }} />
    </SwiperSlide>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    paddingTop: 200,
    paddingBottom: 200,
    [theme.breakpoints.down('md')]: {
      paddingTop: 60,
      paddingBottom: 60
    }
  },
  technologyIcon: {
    height: 40,
    margin: theme.spacing(1)
  },
  image: {
    perspectiveOrigin: 'left center',
    transformStyle: 'preserve-3d',
    perspective: 1500,
    height: '40',
    width: '60',
    '& > img': {
      maxWidth: '90%',
      height: 'auto',
      transform: 'rotateY(-35deg) rotateX(15deg)',
      backfaceVisibility: 'hidden',
      boxShadow: theme.shadows[16]
    }
  },
  typo: {
    fontSize: '23px'
  },
  typo1: {
    fontSize: '20px'
  },
  typo2: {
    fontSize: '40px'
  },
  shape: {
    position: 'absolute',
    top: 0,
    left: 0,
    '& > img': {
      maxWidth: '90%',
      height: 'auto'
    }
  }
}));

const Hero = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} md={5}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              height="100%"
            >
              <Typography
                className={classes.typo1}
                variant="overline"
                color="secondary"
              >
                This is Vezeti
              </Typography>
              <Typography
                className={classes.typo2}
                variant="h1"
                color="textPrimary"
              >
                Instant Business <br /> Communication Platform
              </Typography>
              <Box mt={3}>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  className={classes.typo}
                >
                  For as low as ₦2,500/month. Setup in 10 mins. No Contract.
                  Free Signup. Do-It-Yourself(DIY). Instant Calling.
                </Typography>
              </Box>
              <Box mt={3}>
                <Grid container spacing={3}>
                  <Grid item>
                    <Typography variant="h3" color="secondary">
                      We Connect
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      You
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" color="secondary">
                      We Protect
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      You
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h3" color="secondary">
                      We Respect
                    </Typography>
                    <Typography variant="overline" color="textSecondary">
                      You
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
              <div>
                <Button variant="contained" color="primary">
                  SIGN UP FOR FREE
                </Button>
              </div>
              {/* <Box mt={3}>
                <img
                  alt="Javascript"
                  className={classes.technologyIcon}
                  src="/static/images/javascript.svg"
                />
                <img
                  alt="Typescript"
                  className={classes.technologyIcon}
                  src="/static/images/typescript.svg"
                />
              </Box> */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box position="relative">
              {/* <div className={classes.shape}>
                <img alt="Shapes" src="/static/home/shapes.svg" />
              </div> */}
              <div className={classes.image}>
                <Swiper
                  id="main"
                  tag="section"
                  wrapperTag="ul"
                  pagination
                  spaceBetween={1}
                  slidesPerView={1}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                >
                  {slides}
                </Swiper>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

Hero.propTypes = {
  className: PropTypes.string
};

export default Hero;
