import { makeStyles, Theme, useTheme } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles((theme: Theme) => ({
  content: {
    flexGrow: 1,
  },
  toolbar: theme.mixins.toolbar,
}))

const Content: React.SFC = () => {
  const theme = useTheme()
  const classes = useStyles(theme)

  return (
    <div className={classes.content}>
      <div className={classes.toolbar} />
      {/* Content Here */}
    </div>
  )
}

export default Content
