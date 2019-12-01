import React from 'react';
import { connect } from 'react-redux';
import { IAppState } from '../types/state';
import { myDispatcher } from '../store/store';
import { addArticle } from '../store/actionGenerators';

interface LoadButtonProps {
    loadMore: boolean;
}

class LoadButton extends React.Component<LoadButtonProps> {
    render() {
        return <div>
            <button onClick={evt => this.handleClick(evt)}>
                { this.props.loadMore? "Another!" : "Load an Article" }
            </button>
        </div>;
    }

    handleClick(evt: React.MouseEvent) {
        // fetchArticle();
        fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
            .then( response => response.json(), error => console.log('An error occurred.', error))
            .then( json => //console.log(json)
                myDispatcher(addArticle({
                    title: json.displaytitle,
                    link: json.content_urls.desktop.page,
                    preview: json.extract,
                    image: json.originalimage.source
            }))
            );
    }
}

function mapStateToProps(state: IAppState): LoadButtonProps {
    return { loadMore: state.cards.length !== 0 };
  }

export default connect(mapStateToProps)(LoadButton);
