import React, { Component } from 'react'
import NewsletterArchiveItem from './newsletterArchiveItem';

import { connect, dispatch } from 'react-redux';
import { fetchNewsletters } from '../../actions/index'

class NewsletterArchive extends Component {

    componentDidMount() {
        this.props.fetchNewsletters()
    }

    render() {
        return (
            <div className="newsletter-archive">
                <div className="archive__title">
                    Archive
                </div>
                <ul>
                    {
                        this.props.archive.map((object, index) => {
                            return <NewsletterArchiveItem key={index} item={object} />
                        })
                    }
                </ul>
            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        archive: state.newsletter.archive
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchNewsletters:() => {
            dispatch(fetchNewsletters())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterArchive);