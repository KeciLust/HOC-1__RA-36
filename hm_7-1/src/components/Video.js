import React from 'react'
import PropTypes from 'prop-types'
import DateTimePretty from './DateTimePretty'
import DateTime from './DateTime'

function Video(props) {
    const VideoWithPretty = DateTimePretty(DateTime)
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <VideoWithPretty date={props.date} />
        </div>
    )
}

Video.propTypes = {
    props: PropTypes.object.isRequired,
}

export default Video
