import React from 'react'

import {
  Grid as MuiGrid,
  List as MuiList,
  ListItem as MuiListItem,
  Typography as MuiTypography
} from '@material-ui/core'

import styles from './styles.module.css'

export default function Drawer(props) {
  return (
    <MuiGrid
      item={true}
      xs={3}
      className={`p-4`}
    >
      <MuiList
        className={`bg-white rounded h-100 p-5`}
      >
        {
          props.views.map((item, index) => {
            return (
              <MuiListItem
                key={index}
                className={`my-3 px-4 py-3 rounded-3 ${styles.MuiListItem1}`}
                onClick={() => {
                  props.setSelectedViewIndex(index)
                }}
              >
                <MuiTypography
                  variant={"h5"}
                  className={`fw-bold p-0 m-0`}
                >
                  {item}
                </MuiTypography>
              </MuiListItem>
            )
          })
        }
      </MuiList>

    </MuiGrid>
  )
}
