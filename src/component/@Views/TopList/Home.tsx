// Home.js
import React from 'react';
import Content from '../../@Shared/@Layout/Content';
import CardFrame from '../../@Shared/@Layout/Frame/CardBodyFrame';
import Modal from 'react-modal';
import ModalFrame from '../../@Shared/@Tools/ModalFrame';

const titleName = "Hoem";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Home = () => {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <Content titleName={titleName} >
      <CardFrame titleName='Home' IsZoomOut={true}>
        <p>Welcome to my home page!</p>
        <p>You can use any font library you like with AdminLTE 3.</p>
        <strong>Recommendations</strong>
        <div>
          <a href="https://fontawesome.com/">Font Awesome</a>
          <a href="https://useiconic.com/open/">Iconic Icons</a>
          <a href="https://ionicons.com/">Ion Icons</a>
        </div>

        <button onClick={() => setShowModal(true)}>Open Modal</button>
      </CardFrame>

      <ModalFrame isOpen={showModal} closeModal={() => setShowModal(false)}>
        <div>
          123
        </div>
      </ModalFrame>
    </Content>
  );
};

export default Home;
