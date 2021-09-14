import React from "react"
import { useHistory } from "react-router";
import { Link } from "react-router-dom"
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Breadcrumbs } from "@material-ui/core";
import "./NavBar.css"





// export const NavBar = () => {
//   return (

//     <ul className="navbar">
//       <section className="navbar__left">
//         <li className="navbar__item">
//           logo
//         </li>
//         {/* <li className="navbar__item active">
//         <Link className="navbar__link" to="/ingredients/cheeses" type="cheeses">cheeses</Link>
//       </li>
//       <li className="navbar__item active">
//         <Link className="navbar__link" to="/ingredients/meats" type="meats">meats</Link>
//       </li>
//       <li className="navbar__item active">
//         <Link className="navbar__link" to="/ingredients/fruits" type="fruits">fruits</Link>
//       </li>
//       <li className="navbar__item active">
//         <Link className="navbar__link" to="/ingredients/nuts" type="nuts">nuts</Link>
//       </li>
//       <li className="navbar__item active">
//         <Link className="navbar__link" to="/ingredients/jams" type="jams">jams + spreads</Link>
//       </li> */}


//         <li className="navbar__item active">
//           <Link className="navbar__link" to="/">home</Link>
//         </li>
//         <li className="navbar__item active">
//           <Link className="navbar__link" to="/create">create</Link>
//         </li>
//       </section>
//       <section className="navbar__right">
//         <li className="navbar__item">
//           {SimpleMenu()}
//         </li>
//       </section>
//     </ul>
//   )
// }

export const NavBar = () => {

  function SimpleMenu() {
    const history = useHistory()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
      setAnchorEl(null);
    };

    return (
      <div>
        <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className="button__override" variant="outlined" color="inherit" size="small">
          ingredients
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={() => history.push("/ingredients/cheeses")}>cheeses</MenuItem>
          <MenuItem onClick={() => history.push("/ingredients/meats")}>meats</MenuItem>
          <MenuItem onClick={() => history.push("/ingredients/fruits")}>fruits</MenuItem>
          <MenuItem onClick={() => history.push("/ingredients/nuts")}>nuts</MenuItem>
          <MenuItem onClick={() => history.push("/ingredients/jams+spreads")}>jams + spreads</MenuItem>
        </Menu>
      </div>
    );
  }


  return (
    <>
      <section className="navbar">
        <section className="navbar__left">
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="navbar__item link" color="inherit" to="/">
              logo
            </Link>
            <Link className="navbar__item link" color="inherit" to="/">
              home
            </Link>
            <Link className="navbar__item link" color="inherit" to="/create">
              create
            </Link>
            <Link className="navbar__item link" color="inherit" to="/test">
              temp: form test
            </Link>
          </Breadcrumbs>
        </section >
        <section className="navbar__right">
          <div className="navbar__item">
            {SimpleMenu()}
          </div>
        </section>
      </section>
    </>
  )
}