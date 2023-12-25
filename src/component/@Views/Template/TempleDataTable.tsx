/* eslint-disable jsx-a11y/anchor-is-valid */
import 'react-toastify/dist/ReactToastify.css';
import { CardBodyFrame, CardFrame, Content } from '../../extensions/AdminLte';
import SampleTable from '../../@Shared/@Tools/SampleTable';


const TempleDataTable = () => {
    return (
        <Content titleName='SampleTable' >

            <CardBodyFrame titleName='Table introduce' IsZoomOut={true}>
                <p>Welcome to my Table page!</p>
                <p>You can use any font library you like with AdminLTE 3.</p>
                <strong>Recommendations</strong>
                <div>
                    <a href="https://fontawesome.com/">Font Awesome</a>
                    <a href="https://useiconic.com/open/">Iconic Icons</a>
                    <a href="https://ionicons.com/">Ion Icons</a>
                </div>
            </CardBodyFrame>


            <CardBodyFrame titleName='Basic Table' columnsStyle='col-6' IsZoomOut={true}>
                <SampleTable></SampleTable>
            </CardBodyFrame>


            <CardFrame titleName='Table' columnsStyle='col-6' IsZoomOut={true}>
                <div className="card-header">
                    <h3 className="card-title">Bordered Table</h3>
                    <div className="card-tools">
                        <div className="input-group input-group-sm" >
                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-default">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body'>
                    <SampleTable></SampleTable>
                </div>
                <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                        <li className="page-item"><a className="page-link" href="#">&laquo;</a></li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item"><a className="page-link" href="#">&raquo;</a></li>
                    </ul>
                </div>
            </CardFrame>

            <CardFrame titleName='Table' columnsStyle='col-12' IsZoomOut={true}>
                <div className="card-header">
                    <h3 className="card-title">Bordered Table</h3>
                    <div className="card-tools">
                        <div className="input-group input-group-sm" >
                            <input type="text" name="table_search" className="form-control float-right" placeholder="Search" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-default">
                                    <i className="fas fa-search"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='card-body p-0'>
                    <SampleTable></SampleTable>
                </div>
            </CardFrame>

        </Content>
    );
}



export default TempleDataTable;
