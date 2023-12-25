import { ContentPageProps } from "../../../models/Layout/ContentPageProps";

const Content = (props: ContentPageProps) => {
    return (
        <div>
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>{props.titleName}</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item active">
                                {props.titleName}
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;