import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Header } from '../components'

import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  Paper as MuiPaper,
  Typography as MuiTypography,
  Grid as MuiGrid
} from '@material-ui/core'
import {
  PlayCircleOutline as PlayCircleOutlineIcon
} from '@material-ui/icons';


export default function Home() {
  return (
    <div className={"container-fluid bg-light"}>
      <Header/>
      <div className={"row g-0 justify-content-center align-content-center vh-100"}>
        <div className={"col-5 "}>
          <MuiTypography variant={"h2"} className={"display-3 fw-bold my-5"}>Find out talented freelancer with better reviews faster</MuiTypography>
          <MuiTypography variant={"h6"} className={"my-5"}>Lorem ipsum dolor sit amet, consetteur adsciping elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</MuiTypography>
          <MuiGrid container={true} className={"my-5"}>
            <MuiButton
              size={"large"}
              color={"primary"}
              variant={"contained"}
              className={"rounded-pill me-3 fw-bold"}
            >
              {"Discover Now"}
            </MuiButton>
            <MuiIconButton
              size={"large"}
              variant={"contained"}
              className={"bg-white me-3 shadow-sm"}
            >
              <PlayCircleOutlineIcon color={"primary"} />
            </MuiIconButton>
            <MuiButton
              size={"large"}
              className={"fw-bold"}
            >
              {"Watch Demo"}
            </MuiButton>
          </MuiGrid>
        </div>
        <div className={"col-5"}>
          
        </div>
      </div>


    </div>
  )
}
