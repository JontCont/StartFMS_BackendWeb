import { ReactNode } from "react";

export class ContentPageProps {
    constructor(
        public children: ReactNode,
        public titleName: string
    ) {}
};
