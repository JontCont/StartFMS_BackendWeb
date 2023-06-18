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

export interface MenuTitleProps{
    name : string,
    url? : string 
}


export interface CardFrameProps{
    columnsStyle?: string,
    children: ReactNode,
    titleName: string,
    IsClose?: boolean,
    IsZoomOut?: boolean
}