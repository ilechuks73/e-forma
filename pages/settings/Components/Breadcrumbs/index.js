import { useState } from 'react'
import {
  Grid as MuiGrid,
  Typography as MuiTypography
} from '@material-ui/core'

export default function Breadcrumbs(props) {

  return (
    <MuiGrid
      container={true}
      justifyContent={"center"}
    >
      <MuiTypography
        variant={"h4"}
        className={"fw-bold text-black-50"}
      >
        {`Settings/`}
      </MuiTypography >
      <MuiTypography
        variant={"h4"}
        className={"fw-bold"}
      >
        {
          props.views.map((view, index) => {
            if (index === props.selectedViewIndex) {
              return view
            }
          })
        }
      </MuiTypography>
    </MuiGrid>
  )
}
