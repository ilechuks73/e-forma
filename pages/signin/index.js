import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
// import style from '../styles/login.module.css';
// import loginImage from '../public/assets/image/login1.png';
// import BasicButton from "../../components/Utility/buttons/BasicButton";
import styles from './styles.module.css'

import {
  Grid as MuiGrid,
  Typography as MuiTypography,
  TextField as MuiTextField,
  InputBase as MuiInputBase,
  InputAdornment as MuiInputAdornment,
  Button as MuiButton
} from "@material-ui/core"

import {
  Search as SearchIcon,
  Visibility as VisibilityIcon
} from '@material-ui/icons';


export default function Signin() {
  const router = useRouter()
  return (
    <MuiGrid container={true} className={"vh-100 bg-light"}>
      <MuiGrid container={true} direction={"column"} justifyContent={"center"} alignContent={"center"} item={true} xs={5} >
        <MuiGrid
          className={""}
          item={true}
          xs={5}
        >
          <MuiTypography
            variant={"h2"}
            className={`my-4 ${styles.h31}`}
          >
            {"Login into your account"}
          </MuiTypography>
          <MuiGrid container={true} className={"my-3"}>
            <MuiTypography
              className={"fw-bold my-1"}
            >
              {"Email Address"}
            </MuiTypography>
            <MuiInputBase
              fullWidth={true}
              placeholder={"Enter Email"}
              className={`bg-white border px-4 rounded-pill ${styles.MuiInputBase1}`}
            />
          </MuiGrid>
          <MuiGrid container={true} className={"my-3"}>
            <MuiTypography
              className={"fw-bold my-1"}
            >
              {"Password"}
            </MuiTypography>
            <MuiInputBase
              fullWidth={true}
              placeholder={"Enter Password"}
              className={`bg-white border px-4 rounded-pill ${styles.MuiInputBase2}`}
              endAdornment={
                <MuiInputAdornment position="end">
                  <VisibilityIcon />
                </MuiInputAdornment>
              }
            />
            <MuiTypography
              className={`my-2 ${styles.p1}`}
            >
              {"Forgot Password?"}
            </MuiTypography>
          </MuiGrid>
          <MuiGrid container={true}>
            <MuiGrid container={true}>
              <MuiButton
                variant={"contained"}
                fullWidth={true}
                className={`rounded-pill my-2 fw-bold ${styles.button1}`}
                onClick={() => {
                  router.push("/home")
                }}
              >
                {"Login"}
              </MuiButton>
            </MuiGrid>
            <MuiGrid container={true}>
              <MuiButton
                fullWidth={true}
                className={`rounded-pill my-2 fw-bold bg-white ${styles.button2}`}

              >
                {"Login with Google"}
              </MuiButton>
            </MuiGrid>

          </MuiGrid>
          <MuiGrid>
            <MuiTypography component={"span"}>
              {"Don't have an account? "}
            </MuiTypography>
            <MuiTypography
              component={"span"}
              className={`${styles.span1}`}
            >
              {"Signup here"}
            </MuiTypography>
          </MuiGrid>
        </MuiGrid>
      </MuiGrid>
      <MuiGrid item={true} xs={7} className={"vh-100 overflow-hidden py-3"}>
        <img className={"h-100 rounded-3"} src={"/assets/images/img1.png"} />
      </MuiGrid>


    </MuiGrid>
  );
}

