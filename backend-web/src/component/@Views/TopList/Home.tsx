// Home.js
import React from 'react';
import Content from '../../@Shared/@Layout/Content';
const titleName = "Hoem";

const Home = () => {
  return (
    <Content titleName='Home' >
      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">Home</h3>
            </div>
            <div className="card-body">
              <p>Welcome to my home page!</p>
              <p>You can use any font library you like with AdminLTE 3.</p>
              <strong>Recommendations</strong>
              <div>
                <a href="https://fontawesome.com/">Font Awesome</a>
                <a href="https://useiconic.com/open/">Iconic Icons</a>
                <a href="https://ionicons.com/">Ion Icons</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Content>
  );
};

export default Home;
