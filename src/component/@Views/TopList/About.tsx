// About.js
import React from 'react';
const About = () => {
  return (
    <div>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>About</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item active">About</li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="content">
        <div className="container-fluid">
          <div className="card card-primary card-outline">
            <div className="card-header">
              <h3 className="card-title">About</h3>
            </div>
            <div className="card-body">
              <p>Learn more about me and my skills!</p>
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
    </div>
  );
};

export default About;
