
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
