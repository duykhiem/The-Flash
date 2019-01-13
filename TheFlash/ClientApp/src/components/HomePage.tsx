import 'react-responsive-carousel/lib/styles/carousel.min.css';

import * as React from 'react';
import { Carousel } from 'react-responsive-carousel';

export interface HomePageProps {

}

export interface HomePageDispatchProps {

}

export type Props = HomePageProps & HomePageDispatchProps;

const HomePage = (props: Props) => {
  
  return (
      <Carousel autoPlay showThumbs={false} showStatus={false}>
        <img src={require('../assets/1.PNG')} />
        <img src={require('../assets/2.PNG')} />
        <img src={require('../assets/3.PNG')} />
        <img src={require('../assets/4.PNG')} />
      </Carousel>
  );
};

export default HomePage;
