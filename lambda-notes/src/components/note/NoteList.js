import React from 'react';
import axios from 'axios';

import Note from './Note';
import keys from '../../config/keys';
class NoteList extends React.Component {

    state = {
        notes: []
    };

    componentDidMount() {

        const token = localStorage.getItem('lambda-note-token');

        const requestOptions = {
            headers: {
                Authorization: token
            },
        };
        // axios.defaults.withCredentials = true;
        axios
            .get(keys.getNotesLocal, requestOptions)
            .then(response => {
                this.setState({notes: response.data})
            })
            .catch(err => {

                this.props.history.push('/login');
            });
    };

    render() {
        return (
            <div>
                <h1>Notes</h1>
                <ul>
                    {this.state.notes.map((note) =>{
                        return <li key={note.id}><Note title={note.title} description={note.description}/></li>
                    })}
                </ul>
            </div>
        );
    }
}
export default NoteList;