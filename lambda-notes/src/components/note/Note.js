import React from 'react';
import {Card, CardHeader, CardBody} from 'reactstrap';

import './note.css';

class Note extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Card className='NoteCard'>
                    <CardHeader>{this.props.title}</CardHeader>
                    <CardBody>{this.props.description}</CardBody>
                </Card>
            </div>
        );
    }
}
export default Note;