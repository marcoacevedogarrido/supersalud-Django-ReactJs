import React, { useState, useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from '@material-ui/core/TextField';


const SearchInput = ({ stateProce, setState }) => {


  const queryProceso = e => {
    setState({
      ...stateProce,
      query: e.target.value
    })
  }

  return (
    <TextField
      label="Buscar Proceso"
      onChange={queryProceso}
      InputProps={{
        endAdornment: (
          <InputAdornment >
            <IconButton>
              <SearchIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  )
}

export default SearchInput
