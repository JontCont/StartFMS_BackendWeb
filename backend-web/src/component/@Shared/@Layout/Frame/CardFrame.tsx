import { CardFrameProps } from "../../../../interface/layout";

const CardFrame = (props: CardFrameProps) => {
    return (
        <div className={(props.columnsStyle == undefined ? "col-md-12": props.columnsStyle)}>
            <div className="card card-primary">
                {props.children}
            </div>
        </div>
    );

}

export default CardFrame;