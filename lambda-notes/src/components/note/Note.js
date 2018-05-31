import React from 'react'

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        );
    }
}
export default Note;