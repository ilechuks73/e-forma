import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'


import { Header } from '../components'


import {
  Button as MuiButton,
  IconButton as MuiIconButton,
  Paper as MuiPaper,
  Typography as MuiTypography,
  Grid as MuiGrid,
  Select as MuiSelect
} from '@material-ui/core'
import {
  PlayCircleOutline as PlayCircleOutlineIcon
} from '@material-ui/icons';


export default function Landing() {
  const router = useRouter()
  return (
    <div className={"container-fluid bg-light"}>
      <Header />
      <MuiGrid container={true} justifyContent={"center"} className={"g-0 align-content-center vh-100"}>
        <MuiGrid item={true} xs={5}>
          <MuiTypography variant={"h2"} className={"display-3 fw-bold my-5"}>Find out talented freelancer with better reviews faster</MuiTypography>
          <MuiTypography variant={"h6"} className={"my-5"}>Lorem ipsum dolor sit amet, consetteur adsciping elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</MuiTypography>
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
