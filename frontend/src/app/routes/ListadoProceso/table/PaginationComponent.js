import React, { useState, useEffect } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import Pagination from "material-ui-flat-pagination";
 
const theme = createMuiTheme();
 
const  PaginationComponent = ({count, currentPage, quantity}) => {

  const [offset, setOffSet] = useState(0)
  const [pageNow, setPage] = useState(1)


  const handleClick = (e, offset, page) => {
    setPage(page)
    setOffSet(offset)
  }


  useEffect(() => {
    currentPage(offset, pageNow)
  },[offset])

    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Pagination
          limit={quantity}
          offset={offset}
          total={count}
          onClick={(e, offset, page) => handleClick(e, offset, page )}
        />
      </MuiThemeProvider>
    );
  }

export default PaginationComponent