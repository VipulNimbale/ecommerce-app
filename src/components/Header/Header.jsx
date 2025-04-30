// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useCart } from '../../contexts/CartContext';
// import { useAuth } from '../../contexts/AuthContext';

// function Header() {
//   const { cart } = useCart();
//   const { user, logout } = useAuth();

//   return (
//     <header className="header">
//       <Link to="/" className="logo">E-Commerce</Link>

//       <nav>
//         <Link to="/">Home</Link>
//         <Link to="/cart">Cart ({cart.length})</Link>
//         {user ? (
//           <>
//             <span>Hello, {user.email}</span>
//             <button onClick={logout} className="logout-btn">Logout</button>
//           </>
//         ) : (
//           <>
//             <Link to="/login">Login</Link>
//             <Link to="/signup">Signup</Link>
//           </>
//         )}
//       </nav>
//     </header>
//   );
// }

// export default Header;


import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Box, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import '../../App.css';

function Header() {
  const { cart } = useCart();
  const { currentUser, logout } = useAuth();

  return (
    <AppBar position="static" className="appbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" component={Link} to="/" className="logo-link">
          E-Commerce
        </Typography>

        <Box className="nav-links">
          <Button color="inherit" component={Link} to="/">Home</Button>

          <IconButton color="inherit" component={Link} to="/cart" className="cart-icon">
            <ShoppingCartIcon />
            <Typography variant="body2">({cart.length})</Typography>
          </IconButton>

          {currentUser ? (
            <>
              <Typography variant="body2" className="user-email">Hello, {currentUser.email}</Typography>
              <Button variant="contained" color="error" onClick={logout}>Logout</Button>
            </>
          ) : (
            <>
              <Button color="inherit" component={Link} to="/login">Login</Button>
              <Button color="inherit" component={Link} to="/signup">Signup</Button>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
