import React from 'react'

import {
  Grid as MuiGrid,
  List as MuiList,
  ListItem as MuiListItem,
  InputBase as MuiInputBase,
  Typography as MuiTypography,
  Button as MuiButton,
  Checkbox as MuiCheckBox,
  TextareaAutosize as MuiTextareaAutosize
} from '@material-ui/core'
import styles from './styles.module.css'
export default function DeleteAccount() {
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
          className={"fw-bold w-100"}
        >
          {`Sorry to see you go, Chukwudi!`}
        </MuiTypography>
        <MuiTypography
          variant={"h6"}
          className={"fw-bold w-100"}
        >
          {`Can you tell us why you're deleting your account?`}
        </MuiTypography>
        {
          ["I'm getting too many emails", "I have a privacy Issue", "Accepted Proposal", "New Messages", "Rejected Proposals", "Other"].map((item, index) => {
            return (
              <MuiGrid
                container={true}
              >
                <MuiCheckBox
                  color={"primary"}
                />
                <MuiTypography
                  className={`fw-bold ${styles.MuiTypography1}`}
                >
                  {item}
                </MuiTypography>
              </MuiGrid>
            )
          })
        }
        <MuiTypography>
          {"Your feedback is important, Anything else you'd like us to know"}
        </MuiTypography>
        <MuiTextareaAutosize
          className={`w-100 rounded border-1 ${styles.MuiTextareaAutosize1}`}
          minRows={4}
        />
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
      </MuiGrid>
    </MuiGrid>
  )
}
