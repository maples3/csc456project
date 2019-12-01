import { IArticle } from "../types/state";
import { AddArticleAction, ADD_ARTICLE } from "../types/actions";

export function addArticle(article: IArticle): AddArticleAction {
    return {
        type: ADD_ARTICLE,
        article
    }
}
