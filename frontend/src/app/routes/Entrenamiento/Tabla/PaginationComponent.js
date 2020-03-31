import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
 
const theme = createMuiTheme();
 
const  PaginationComponent = ({count, currentPage}) => {

  const [offset, setOffSet] = useState(0)


  const handleClick = (offset) => {
    setOffSet(offset)
  }


  useEffect(() => {
    currentPage(offset)
  },[offset])

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={10}
          offset={offset}
          total={count}
          innerButtonCount={2}
          onClick={(e, offset) => handleClick(offset )}
        />
      </MuiThemeProvider>
    );
  }

export default PaginationComponent