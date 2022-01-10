import React from 'react'
import Link from 'next/link'
import {
  Grid as MuiGrid,
  List as MuiList,
  ListItem as MuiListItem,
  InputBase as MuiInputBase,
  Typography as MuiTypography,
  Button as MuiButton
} from '@material-ui/core'

import styles from './styles.module.css'

export default function General(props) {
  return (
    <MuiGrid
      item={true}
      xs={7}
      className={``}
    >
      <MuiGrid
        container={true}
        className={`bg-white mb-4 py-3 px-5`}
      >
        {
          ["FirstName", "MiddleName", "Last Name", "Email Address", "Phone Number"].map((item, index) => {
            return (
              <MuiGrid
                key={index}
                item={true}
                xs={4}
                className={`my-3 px-3 ps-0`}
              >
                <MuiTypography
                  className={"fw-bold my-2"}
                >
                  {item}
                </MuiTypography>
                <MuiInputBase
                  fullWidth={true}
                  className={`bg-white border px-4 rounded-pill ${styles.MuiInputBase1}`}
                />
              </MuiGrid>
            )
          })
        }
      </MuiGrid>
      <MuiGrid
        container={true}
        className={`bg-white mb-4 py-3 px-5`}
      >
        <MuiTypography
          className={"fw-bold text-center w-100"}
        >
          {`To save your changes, please enter your password.`}
        </MuiTypography>
        <MuiGrid
          item={true}
          xs={4}
          className={`my-3 px-3 ps-0`}
        >
          <MuiTypography
            className={"fw-bold my-2"}
          >
            {`Password`}
          </MuiTypography>
          <MuiInputBase
            fullWidth={true}
            className={`bg-white border rounded-pill px-4 ${styles.MuiInputBase1}`}
          />
          <MuiTypography
            className={"my-1"}
          >
            {`Forgot Password?`}
          </MuiTypography>
        </MuiGrid>
      </MuiGrid>
      <MuiGrid
        className={`px-5`}
      >
        <MuiButton
          variant={"contained"}
          className={`rounded-pill px-5 py-3 fw-bold text-white ${styles.MuiButton1}`}
        >
          {"Save Changes"}
        </MuiButton>
      </MuiGrid>
    </MuiGrid>
  )
}
