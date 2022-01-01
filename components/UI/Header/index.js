import { useState } from 'react'
import {
  AppBar as MuiAppBar,
  Button as MuiButton,
  Grid as MuiGrid,
  Typography as MuiTypography,
  TextField as MuiTextField,
  InputBase as MuiInputBase,
  InputAdornment as MuiInputAdornment
} from '@material-ui/core'

import {
  Search as SearchIcon
} from '@material-ui/icons';


function Header(props) {
  return (
    <MuiAppBar
      elevation={false}
      className={"bg-light"}
      style={{
        height: "60px"
      }}
    >
      <MuiGrid
        container={true}
        justifyContent={"space-evenly"}
        alignItems={"center"}
        className={"h-100-p"}
      >
        <MuiGrid>
          <MuiGrid container={true}>
            <MuiTypography
              variant={"h6"}
              className={"text-black fw-bold mx-3"}
            >
              {'Home'}
            </MuiTypography>
            <MuiTypography
              variant={"h6"}
              className={"text-black  mx-3"}
            >
              {'Blog'}
            </MuiTypography>
            <MuiTypography
              variant={"h6"}
              className={"text-black  mx-3"}
            >
              {'Become a member'}
            </MuiTypography>
          </MuiGrid>
        </MuiGrid>
        <MuiGrid>
          <MuiInputBase
            className={"bg-white rounded-pill px-3 mx-4 h-100-p"}
            endAdornment={
              <MuiInputAdornment position="end">
                <SearchIcon />
              </MuiInputAdornment>
            }
          />
          <MuiButton
            color={"primary"}
            variant={'contained'}
            className={"rounded-pill mx-4"}
          >
            {"Log In"}
          </MuiButton>
          <MuiButton
            color={"secondary"}
            variant={'contained'}
            className={"rounded-pill mx-4"}
          >
            {"Sign Up"}
          </MuiButton>
        </MuiGrid>

      </MuiGrid>


    </MuiAppBar>
  );
}

export default Header;