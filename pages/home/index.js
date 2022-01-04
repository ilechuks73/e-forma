import Head from "next/head";
import Link from "next/link";
// import style from '../styles/login.module.css';
// import loginImage from '../public/assets/image/login1.png';
// import BasicButton from "../../components/Utility/buttons/BasicButton";
import styles from './styles.module.css'
import { Header } from "../../components";

import {
  Grid as MuiGrid,
  Typography as MuiTypography,
  TextField as MuiTextField,
  InputBase as MuiInputBase,
  IconButton as MuiIconButton,
  InputAdornment as MuiInputAdornment,
  Button as MuiButton,
  Select as MuiSelect,
  MenuItem as MuiMenuItem,
  Chip as MuiChip
} from "@material-ui/core"

import {
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  PlayCircleOutline as PlayCircleOutlineIcon,
  LocationOn as LocationOnIcon
} from '@material-ui/icons';

export default function Home() {
  return (
    <div className={"container-fluid bg-light"}>
      <Header />
      <MuiGrid container={true} justifyContent={"center"} className={"g-0 align-content-center vh-100"}>
        <MuiGrid item={true} xs={5}>
          <MuiTypography variant={"h2"} className={"display-3 fw-bold my-5"}>Find your dream jobs easily</MuiTypography>
          <MuiGrid container={true} className={`bg-white my-5 p-2 rounded-pill ${styles.MuiGrid1}`}>
            <MuiGrid
              item={true}
              className={"px-3 col"}
            >
              <MuiInputBase
                fullWidth={true}
                type={"text"}
                placeholder={"Search by Title, Skills or Company"}
                className={`bg-white h-100 fw-bold`}
              />
            </MuiGrid>
            <MuiGrid
              item={true}
              className={"px-3 border border-dark border-end-0 border-top-0 border-bottom-0"}
            >
              <MuiSelect
                value={"Location"}
                className={`h-100 border-0 ${styles.MuiSelect1}`}
                startAdornment={
                  <MuiInputAdornment>
                    <LocationOnIcon
                      color={"primary"}
                      className={"fs-2"}
                    />
                  </MuiInputAdornment>
                }
              >

              </MuiSelect>
            </MuiGrid>
            <MuiGrid
              item={true}
              xs={"auto"}
              className={"h-100"}
            >
              <MuiButton
                className={`rounded-pill h-100 px-4 fw-bold text-white ${styles.MuiButton1}`}
                endIcon={
                  <SearchIcon
                    className={"fs-3"}
                  />
                }
              >
                {"Search"}
              </MuiButton>
            </MuiGrid>
          </MuiGrid>
          <MuiGrid container={true}>
                {
                  ["tedf gdfgdf gfdgst","tegfgst","test","tegst","test","tegfhdst","test","tesdfsft","tedsst","test" ].map((item, index)=>{
                    return(
                      <MuiChip key={index} variant={"outlined"}  label={item} className={"mx-3 my-2 px-3 py-3 fs-6"}/>
                    )
                  })
                }
          </MuiGrid>
        </MuiGrid>
        <MuiGrid container={true} justifyContent={"center"} item={true} xs={5}>
          <MuiGrid item={true} xs={8} className={""}>
            <img className={"w-100"} src={"/assets/images/ellipse39.png"} />
          </MuiGrid>

        </MuiGrid>
      </MuiGrid>


    </div >

  )
}