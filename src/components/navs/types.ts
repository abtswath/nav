export interface Nav {
    title: string;
    url: string;
    icon?: string;
    description?: string;
}

export interface Category {
    id: string;
    title?: string;
    icon?: string;
    navs?: Nav[];
}
