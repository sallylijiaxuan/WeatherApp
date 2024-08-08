import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function Location() {
    return (
        <Autocomplete
            sx={{ width: 300 }} // width of widget
            options={ states } // locations to choose from
            autoHighlight
            getOptionLabel={(option) => option.name}
            renderOption={(props, option) => {
                const { key, ...optionProps } = props;
                return (
                    <Box
                        key={key}
                        component="li"
                        {...optionProps}
                    >
                        {option.name} ({option.abbreviation})
                    </Box>
                );
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="Choose your state" // title of widget
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}