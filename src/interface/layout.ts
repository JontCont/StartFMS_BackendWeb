import { ReactNode } from "react";

export interface ContentPageProps {
    children: ReactNode,
    titleName: string
};

export interface MenuTypeProps {
    children: Array<MenuTypeProps>,
    description: string,
    displayOrder: string,
    icon: string,
    id: string,
    menuName: string,
    url: string
}

export interface MenuTitleProps {
    name: string,
    url?: string
}


export interface CardFrameProps {
    children: ReactNode,
    titleName: string,
    columnsStyle?: string,
    cardTitleStyle?: string,
    cardBodyStyle?: string,
    IsCardTitle?: boolean,
    IsClose?: boolean,
    IsZoomOut?: boolean
}