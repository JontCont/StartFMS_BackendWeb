/* eslint-disable eqeqeq */
import { CardFrameProps } from "../../../../models/Layout/CardFrameProps";

const CardBodyFrame = (props: CardFrameProps) => {
    return (
        <div className={(props.columnsStyle == undefined ? "col-md-12": props.columnsStyle)}>
            <div className="card card-primary">
                <div className="card-header">
                    <h3 className="card-title">{props.titleName}</h3>
                    <div className="card-tools">
                        {props.IsClose && (
                            <button type="button" className="btn btn-tool" data-card-widget="remove">
                                <i className="fas fa-times"></i>
                            </button>
                        )}

                        {props.IsZoomOut && (
                            <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                <i className="fas fa-minus"></i>
                            </button>
                        )}
                    </div>
                </div>
                <div className="card-body">
                    {props.children}
                </div>
            </div>
        </div>
    );

}


export default CardBodyFrame;