import { IArticle } from "./state";

export const ADD_ARTICLE = "ADD_ARTICLE";

export interface AddArticleAction {
    type: typeof ADD_ARTICLE;
    article: IArticle;
}

export type AppActions = AddArticleAction;
