import * as React from 'react';

export interface HomePageProps {

}

export interface HomePageDispatchProps {

}

export type Props = HomePageProps & HomePageDispatchProps;

const HomePage = (props: Props) => {
  
  return (
    <div>
      You are Home !
    </div>
  );
};

export default HomePage;
