import React from 'react'
import { useRouter } from 'next/router'

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

export default function Job() {
  const router = useRouter()
  return (
    <div>
      {router.query.jobID}
    </div>
  )
}
