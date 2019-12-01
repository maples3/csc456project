import { addArticle } from '../store/actionGenerators';

// export function fetchArticle(): ThunkAction<void, IAppState, null, Action<string>> {
//     console.log("fetchArticle()")
    
//     const request = axios.get('https://en.wikipedia.org/api/rest_v1/page/random/summary');
    
//     console.log("request created")


//     return (dispatch: any) => {
//         console.log("callback calling!")

//         request.then(({data}) => {
//             console.log("request.then!");
//             dispatch(addArticle({
//                 title: data.displayTitle,
//                 link: data.content_urls.desktop.page,
//                 preview: data.extract
//             }));
//         });

//         console.log("dispatched!")
//         return "action finished?";
//     }
// }

export function fetchArticle() {
    return function(dispatch: any) {
        return fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
            .then( response => response.json(), error => console.log('An error occurred.', error))
            .then( json => dispatch(addArticle({
                    title: json.displayTitle,
                    link: json.content_urls.desktop.page,
                    preview: json.extract
            })));
    }
}


// Minimal skeleton of the API response
interface IWikipediaResponse {
    displayTitle: string;
    originalImage: {
        source: string;
    }
    content_urls: {
        desktop: {
            page: string;
        }
    }
    extract: string;
}
