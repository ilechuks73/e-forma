import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export default function Home() {
  return (
    <div className={"container-fluid bg-light"}>
      <div className={"row g-0 justify-content-center align-content-center vh-100"}>
        <div className={"col-5 "}>
          <p className={"display-3 fw-bold my-5"}>Find out talented freelancer with better reviews faster</p>
          <p className={"h5 my-5"}>Lorem ipsum dolor sit amet, consetteur adsciping elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          <div className={"my-5"}>
            <button className={"btn btn-primary rounded-pill"}>Dicover Now</button>
            <button
              className={"btn rounded-circle p-0 bg-white lh-0"}
              style={{
                width: "min-content",
                height: "min-content"
              }}
            >
              <PlayCircleOutlineIcon />
            </button>
            <button className={"btn"}>Watch Demo</button>
          </div>
        </div>
        <div className={"col-5"}>
          test
        </div>
      </div>


    </div>
  )
}
