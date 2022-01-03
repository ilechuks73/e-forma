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
  Button as MuiButton
} from "@material-ui/core"

import {
  Search as SearchIcon,
  Visibility as VisibilityIcon,
  PlayCircleOutline as PlayCircleOutlineIcon
} from '@material-ui/icons';

export default function Home() {
  return (
    <div className={"container-fluid bg-light"}>
      <Header />
      <MuiGrid container={true} justifyContent={"center"} className={"g-0 align-content-center vh-100"}>
        <MuiGrid item={true} xs={5}>
          <MuiTypography variant={"h2"} className={"display-3 fw-bold my-5"}>Find your dream jobs easily</MuiTypography>
          <MuiGrid container={true} className={"my-5"}>
            <MuiButton
              size={"large"}
              color={"primary"}
              variant={"contained"}
              className={"rounded-pill me-3 fw-bold"}
              onClick={() => {
                router.push("/test")
              }}
            >
              {"Discover Now"}
            </MuiButton>
            <MuiIconButton
              size={"medium"}
              variant={"contained"}
              className={"bg-white me-3 shadow-sm"}
            >
              <PlayCircleOutlineIcon color={"primary"} />
            </MuiIconButton>
            <MuiButton
              size={"medium"}
              className={"fw-bold"}
            >
              {"Watch Demo"}
            </MuiButton>
          </MuiGrid>
        </MuiGrid>
        <MuiGrid container={true} justifyContent={"center"} item={true} xs={5}>
          <MuiGrid item={true} xs={7} className={""}>
            <img className={"w-100"} src={"/assets/images/ellipse39.png"} />
          </MuiGrid>

        </MuiGrid>
      </MuiGrid>


    </div>

  )
}