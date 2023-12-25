/* eslint-disable eqeqeq */
import { CardFrameProps } from "../../../../models/Layout/CardFrameProps";

const CardFrame = (props: CardFrameProps) => {
    return (
        <div className={`${(props.columnsStyle == undefined ? "col-md-12" : props.columnsStyle)}`}>
            <div className={`card ${(props.cardTitleStyle == undefined ? "" : props.cardTitleStyle)}`}>
                {
                    (props.IsCardTitle != undefined && props.IsCardTitle == false)
                        ? null : CardTitle(props)
                }
                <div className={`card-body ${(props.cardBodyStyle == undefined ? "" : props.cardBodyStyle)}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}

const CardTitle = (props: CardFrameProps) => (
    <div className="card-header">
        <h3 className="card-title">{props.titleName}</h3>
        <div className="card-tools">
            {props.IsClose ? Close() : null}
            {props.IsCardTitle != undefined && !props.IsZoomOut ? null : ZoomOut()}
        </div>
    </div>
)


const ZoomOut = () => (
    <button type="button" className="btn btn-tool" data-card-widget="collapse">
        <i className="fas fa-minus"></i>
    </button>
)

const Close = () => (
    <button type="button" className="btn btn-tool" data-card-widget="remove">
        <i className="fas fa-times"></i>
    </button>
)


export default CardFrame;