import { useState } from 'react'
import {
  Grid as MuiGrid
} from '@material-ui/core'

import { General, Password, Notification, IdentityVerification, Privacy, DeleteAccount, Drawer, Breadcrumbs } from './Components'

export default function Settings() {
  const [pageState, setPageState] = useState({
    views: ["General", "Password", "Notification", "Identity Verification", "Privacy", "Delete Account"],
    selectedViewIndex: 0,
    setSelectedViewIndex: function (viewIndex) {
      setPageState({ ...pageState, selectedViewIndex: viewIndex })
    }
  })
  return (
    <MuiGrid
      container={true}
      className={`min-vh-100 bg-light`}


    >
      <MuiGrid
        container={true}
        justifyContent={"center"}
        className={`bg-light`}
      >
        <Breadcrumbs
          views={pageState.views}
          selectedViewIndex={pageState.selectedViewIndex}
        />
        <Drawer
          views={pageState.views}
          selectedViewIndex={pageState.selectedViewIndex}
          setSelectedViewIndex={pageState.setSelectedViewIndex}
        />
        {
          pageState.selectedViewIndex === 0 && <General />
        }
        {
          pageState.selectedViewIndex === 1 && <Password />
        }
        {
          pageState.selectedViewIndex === 2 && <Notification />
        }
        {
          pageState.selectedViewIndex === 3 && <IdentityVerification />
        }
        {
          pageState.selectedViewIndex === 4 && <Privacy />
        }
        {
          pageState.selectedViewIndex === 5 && <DeleteAccount />
        }
      </MuiGrid>

    </MuiGrid>
  )
}
