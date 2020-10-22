import React from "react"
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemIcon from "@material-ui/core/ListItemIcon"
import { MdHome } from "react-icons/md"
import { Link } from "gatsby"
import styled from "@emotion/styled"

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <Drawer open={isSidebarOpen} onClose={() => toggleSidebar()}>
      <List style={{ width: 250 }}>
        <ListItemWrapper>
          <ListItem component={Link} to="/">
            <ListItemIcon>
              <MdHome />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </ListItemWrapper>
      </List>
    </Drawer>
  )
}

export default Sidebar

const ListItemWrapper = styled.li`
  span {
    font-family: "Ubuntu", sans-serif;
    font-size: 0.95rem;
    font-weight: 500;
    color: #666;
  }

  a:hover span,
  a:hover svg {
    color: #ff4158;
  }
`
