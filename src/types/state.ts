export interface IAppState {
    cards: ICard[];
};

export interface ICard {
    title: string;
    image?: string;
    link: string;
    preview: string;
};

export const defaultState = {
    cards: [{title: "Test card", link: "http://www.google.com/", preview: "lorem", image: "https://anthonymapes.com/~anthony/overviewer/mfs-o-d-ne/base.png"}]
};
