export class SystemCatalogItems {
    id: string;
    menuName: string;
    description: string | null;
    displayOrder: number;
    url: string | null;
    icon: string | null;
    parentId: string | null;

    children: SystemCatalogItems[] | null;
    parent: SystemCatalogItems | null;

    constructor(
        id: string,
        menuName: string,
        displayOrder: number,
        parentId: string | null,
        description: string | null = null,
        url: string | null = null,
        icon: string | null = null,
        children: SystemCatalogItems[] | null = null,
        parent: SystemCatalogItems | null = null
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
