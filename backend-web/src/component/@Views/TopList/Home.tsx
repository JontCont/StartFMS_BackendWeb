// Home.js
import React from 'react';
import Content from '../../@Shared/@Layout/Content';
import CardFrame from '../../@Shared/@Layout/Frame/CardBodyFrame';
const titleName = "Hoem";

const Home = () => {
  return (
    <Content titleName='Home' >
        <CardFrame titleName='Home' IsZoomOut={true}>
          <p>Welcome to my home page!</p>
          <p>You can use any font library you like with AdminLTE 3.</p>
          <strong>Recommendations</strong>
          <div>
            <a href="https://fontawesome.com/">Font Awesome</a>
            <a href="https://useiconic.com/open/">Iconic Icons</a>
            <a href="https://ionicons.com/">Ion Icons</a>
          </div>
        </CardFrame>
    </Content>
  );
};

export default Home;
