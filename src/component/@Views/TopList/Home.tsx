import Content from '../../@Shared/@Layout/Content';
import CardFrame from '../../@Shared/@Layout/Frame/CardBodyFrame';
import ModalFrame from '../../@Shared/@Tools/ModalFrame';

const titleName = "Home";

const Home = () => {
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

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
          Launch demo modal
        </button>

        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#test">
          Launch demo modal
        </button>
      </CardFrame>

      <ModalFrame id="exampleModal" titleName='Modal Title'>
        <div className="modal-body">
          123
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </ModalFrame>

      <ModalFrame id="test" titleName='Modal Title2'>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </ModalFrame>
    </Content>
  );
};

export default Home;

