import React, {useState} from 'react';

import {Paper, TextField} from "@material-ui/core";

export const SearchBar = ({ onFormSubmit }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = event => setSearchTerm(event.target.value);

    const handleSubmit = event => {
        event.preventDefault();
        onFormSubmit(searchTerm);
    };

    return(
        <Paper elevation={6} style={{ padding:'25px' }}>
            <form onSubmit={handleSubmit}>
                <TextField fullWidth label="Search..." onChange={handleChange}/>
            </form>
        </Paper>
    )
};