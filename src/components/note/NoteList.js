import React from 'react';
import axios from 'axios';

import Note from './Note';
import keys from '../../config/keys';

import './note.css';
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
            .get(keys.getNotes, requestOptions)
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
                <div className='NoteCardList'>
                    {this.state.notes.map((note) =>{
                        return <Note title={note.title} description={note.description}/>
                    })}
                </div>

            </div>
        );
    }
}
export default NoteList;