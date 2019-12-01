export interface IAppState {
    cards: IArticle[];
};

export interface IArticle {
    title: string;
    image?: string;
    link: string;
    preview: string;
};

export const defaultState: IAppState = {
    cards: [{title: "Test card", link: "http://www.google.com/", preview: "lorem", image: "https://anthonymapes.com/~anthony/overviewer/mfs-o-d-ne/base.png"}]
};
