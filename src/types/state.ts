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
    cards: []
};
