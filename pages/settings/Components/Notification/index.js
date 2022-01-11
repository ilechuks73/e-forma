import React from 'react'

import {
  Grid as MuiGrid,
  List as MuiList,
  ListItem as MuiListItem,
  InputBase as MuiInputBase,
  Typography as MuiTypography,
  Button as MuiButton,
  Checkbox as MuiCheckBox
} from '@material-ui/core'

import styles from './styles.module.css'

export default function Notification() {
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
        <MuiTypography
          variant={"h5"}
          className={"fw-bold text-center w-100"}
        >
          {`You're receiving notifications at wilson14.ca@gmail.com.`}
        </MuiTypography>
        {
          ["Jobs", "JobsInvitation", "Accepted Proposal", "New Messages", "Rejected Proposals", "Expired Applications"].map((item, index) => {
            return (
              <MuiGrid
                container={true}
              >
                <MuiCheckBox color={"primary"}/>
                <MuiTypography
                  className={`fw-bold ${styles.MuiTypography1}`}
                >{item}</MuiTypography>
              </MuiGrid>
            )
          })
        }

      </MuiGrid>
      <MuiGrid
        className={`px-5`}
      >
        <MuiButton
          variant={'contained'}
          disableElevation={true}
          className={`rounded-pill px-5 py-3 fw-bold text-white ${styles.MuiButton1}`}
        >
          {`Delete Account`}
        </MuiButton>
        <MuiButton
          disableElevation={true}
          className={`px-5 py-3 fw-bold ${styles.MuiButton2}`}
        >
          {`Turn off all notifications`}
        </MuiButton>
      </MuiGrid>
    </MuiGrid>
  )
}
