import React from 'react'
import PropTypes from 'prop-types'

function DateTime(props) {
    return (
        <p className="date">{props.date}</p>
    )
}

DateTime.propTypes = {
    props: PropTypes.string.isRequired,
}

export default DateTime
