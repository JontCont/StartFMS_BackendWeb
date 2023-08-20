export class S01MenuBasicSetting {
    id: string;
    menuName: string;
    description: string | null;
    displayOrder: number;
    url: string | null;
    icon: string | null;
    parentId: string | null;

    children: S01MenuBasicSetting[] | null;
    parent: S01MenuBasicSetting | null;

    constructor(
        id: string,
        menuName: string,
        displayOrder: number,
        parentId: string | null,
        description: string | null = null,
        url: string | null = null,
        icon: string | null = null,
        children: S01MenuBasicSetting[] | null = null,
        parent: S01MenuBasicSetting | null = null
    ) {
        this.id = id;
        this.menuName = menuName;
        this.description = description;
        this.displayOrder = displayOrder;
        this.url = url;
        this.icon = icon;
        this.parentId = parentId;
        this.children = children;
        this.parent = parent;
    }
}
