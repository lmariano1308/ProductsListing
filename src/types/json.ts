interface Asset {
    url: string;
}

interface Image {
    alt: string;
    asset: Asset;
}

export interface Category {
    _id: string;
    name: string;
}

export interface Node {
    name: string;
    shortDescription: string;
    id: string;
    images: Image[];
    category: Category;
}

export interface CategoryInfo {
    count: number;
    category: string;
}
