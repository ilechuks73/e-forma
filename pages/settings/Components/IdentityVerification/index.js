import React from 'react'

import {
  Grid as MuiGrid,
  List as MuiList,
  ListItem as MuiListItem,
  InputBase as MuiInputBase,
  Typography as MuiTypography,
  Button as MuiButton,
  Accordion as MuiAccordion,
  AccordionSummary as MuiAccordionSummary,
  AccordionDetails as MuiAccordionDetails,
  InputLabel as MuiInputLabel,
  Paper as MuiPaper
} from '@material-ui/core'

import { ExpandMore as MuiExpandMoreIcon } from '@material-ui/icons'

import styles from './styles.module.css'

export default function IdentityVerification() {
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
        <MuiGrid
          container={true}
          className={`mb-5`}
        >
          <MuiPaper
            elevation={10}
            className={`w-100`}
          >
            <MuiAccordion
              className={`w-100`}
            >
              <MuiAccordionSummary
                expandIcon={<MuiExpandMoreIcon />}
              >
                <MuiTypography
                  variant={"h4"}
                  className={`fw-bold`}
                >
                  {`1. ID Document Verification`}
                </MuiTypography>
              </MuiAccordionSummary>
              <MuiAccordionDetails>
                <MuiTypography className={`w-100`}>Attach your govt. issued ID Card</MuiTypography>
                <MuiGrid container className={"bg-danger"}>
                  <MuiInputBase type={"file"} id={"upload"} />
                </MuiGrid>

              </MuiAccordionDetails>
            </MuiAccordion>
          </MuiPaper>

        </MuiGrid>

        <MuiGrid
          container={true}
          className={`mb-5`}
        >
          <MuiPaper
            className={`w-100`}
            elevation={10}
          >
            <MuiAccordion
              className={`w-100`}
            >
              <MuiAccordionSummary
                expandIcon={<MuiExpandMoreIcon />}
              >
                <MuiTypography
                  variant={"h4"}
                  className={`fw-bold`}
                >
                  {`2. Guarantors`}
                </MuiTypography>
              </MuiAccordionSummary>
              <MuiAccordionDetails>
                <MuiTypography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                  malesuada lacus ex, sit amet blandit leo lobortis eget.
                </MuiTypography>
              </MuiAccordionDetails>
            </MuiAccordion>
          </MuiPaper>

        </MuiGrid>
      </MuiGrid>
    </MuiGrid>
  )
}
