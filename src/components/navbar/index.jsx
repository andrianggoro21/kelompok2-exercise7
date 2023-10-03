import { Box } from '@chakra-ui/react';
import { Link } from '@chakra-ui/react';
import './style.css'

const Navbar = () => {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <Box id='myTopnav' className='topnav' backgroundColor='#000000'>
      <Box><Link>Kelompok 2</Link></Box>
        <Link className='link' href='/'>Home</Link>
        <Link className='link' href='/soal1'>Counter</Link>
        <Link className='link' href='/soal2'>Stopwatch</Link>
        <Link className='link' href='/soal3'>Filter</Link>
        <Link className='link' href='/soal5'>ChitChat</Link>
        <Link className='icon'onClick={myFunction} ><i className="fa fa-bars"/></Link>
    </Box>
  )
};
export default Navbar;