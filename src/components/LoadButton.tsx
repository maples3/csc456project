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
        return <div className="LoadButton">
            <button onClick={evt => this.handleClick(evt)}>
                { this.props.loadMore? "Another!" : "Load an Article" }
            </button>
        </div>;
    }


    /**
     * It's late-o'clock on a weekend and for some reason, neither the above or below functions will work
     * with Thunk to actually call the function that gets returned.
     * So I just shoved the HTTP call into the LoadButton component itself :)
     * It's definitely hacky and wouldn't go over well in the real world.  But also in the real world,
     * I'd hopefully have better resources, like another dev who's worked with Thunk before and can tell
     * me if I'm remotely close to doing it right.  There are not a whole lot of tutorials out there
     * that incorporate both Thunk and TypeScript :/
     */
    handleClick(evt: React.MouseEvent) {
        // fetchArticle();
        fetch('https://en.wikipedia.org/api/rest_v1/page/random/summary')
            .then( response => response.json(), error => console.log('An error occurred.', error))
            .then( json => //console.log(json)
                myDispatcher(addArticle({
                    title: json.title,
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
