import { ReactNode } from "react";

export class ContentPageProps {
    constructor(
        public children: ReactNode,
        public titleName: string
    ) {}
};

export class MenuTypeProps {
    constructor(
        public children: MenuTypeProps[],
        public description: string,
        public displayOrder: string,
        public icon: string,
        public id: string,
        public menuName: string,
        public url: string
    ){}
}

export class MenuTitleProps {
    constructor(
       public name: string,
       public url?: string
    ){}
}

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