import { ReactNode } from "react";

export class CardFrameProps {
    constructor(
       public children: ReactNode,
       public titleName: string,
       public columnsStyle?: string,
       public cardTitleStyle?: string,
       public cardBodyStyle?: string,
       public IsCardTitle?: boolean,
       public IsClose?: boolean,
       public IsZoomOut?: boolean
    ){}
}