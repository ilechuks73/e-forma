import { useState } from 'react'
import { useRouter } from 'next/router';
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

import styles from './styles.module.css'


function Header(props) {
  const router = useRouter()
  return (
    <MuiAppBar
      elevation={0}
      className={"bg-light"}
      style={{
        height: "80px"
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
            className={`bg-white rounded-pill px-3 mx-4 h-100-p ${styles.input1}`}
            endAdornment={
              <MuiInputAdornment position="end">
                <SearchIcon />
              </MuiInputAdornment>
            }
          />
          <MuiButton
            disableElevation={true}
            variant={'contained'}
            className={`rounded-pill mx-4 px-3 ${styles.button1}`}
            onClick={()=>{
              router.push("/signin")
            }}
          >
            {"Log In"}
          </MuiButton>
          <MuiButton
            variant={'contained'}
            className={`rounded-pill mx-4 px-3 text-white fw-bold ${styles.button2}`}
          >
            {"Sign Up"}
          </MuiButton>
        </MuiGrid>

      </MuiGrid>


    </MuiAppBar>
  );
}

export default Header;