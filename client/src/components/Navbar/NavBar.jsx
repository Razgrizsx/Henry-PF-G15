import React from "react";
import { Link } from "react-router-dom";
// import { NavLink } from 'react-router-dom';

// import { useSelector } from "react-redux";
// import NavUser from "../NavUser/NavUser";
import { useState } from "react";
import logo from "../image/Logo.JPG";
import Style from "../Navbar/Navbar.module.css"
// import NavUser from "../NavUser/NavUser";
// import { IconContext } from "react-icons";
// import { Badge } from '@mui/material';



export default function NavBar(props) {
  //  const carryProducts = useSelector((state) => state.carryProducts);
  //  const user_login = useSelector((state) => state.user_login);
 const [openModal, setOpenModal] = useState(false);

 function handleOpen() {
   setOpenModal(true);
 }

 function handleClose(value) {
   setOpenModal(value);
 }

//  let Cantidad=0
//  for (let index = 0; index < carryProducts.length; index++) {
//    var carry = carryProducts[index];
//    Cantidad=Cantidad+carry.amount
//  }

 return (
   <header>
     <nav className={Style.NavBarComplete}>
       <div className={Style.left}>
         <Link to={"/"}>
           {/* <img src={logo_wooly} alt="Not Found" width="85px" height="85px" className={Style.logo} /> */}
           <img
             src={logo}
             alt="Not Found"
             width="85px"
             height="85px"
             className={Style.logo}
           />
         </Link>
         <ul className={Style.NavUl}>
           <li>
             <Link to={"/products/inicio"} className={Style.letra}>
              INICIO
             </Link>
           </li>
           <li>
             <Link to={"/products/producto"} className={Style.letra}>
               PRODUCTO
             </Link>
           </li>
           <li>
             <Link to={"/mis pedidos"} className={Style.letra}>
               MIS PEDIDOS
             </Link>
           </li>
         </ul>
       </div>
       <div className={Style.center}>
         <ul className={Style.NavUl}></ul>
         </div>
           {/* <li>
               <Link to={"/products/Men"} className={Style.letra}>
                 MEN
               </Link>
             </li>
             <li>
               <Link to={"/products/Women"} className={Style.letra}>
                 WOMEN
               </Link>
             </li> */}
           {/* <li>
                 <Link to={"/about"} className={Style.letra}>
                   ABOUT
                 </Link>
               </li>
               <li>
                 <Link to={"/contact"} className={Style.letra}>
                   CONTACT
                 </Link>
               </li> */}
 {/* <li>
             <Link to={"/carry"} className={Style.btnCarry}>
               <Badge badgeContent={Cantidad} color="primary">
                 <IconContext.Provider value={{ size: "40px" }}>
                   <AiOutlineShoppingCart />
                 </IconContext.Provider>
               </Badge>
             </Link>
   </li> */}
           {/*<Link to={"/about"} className={Style.letra}>
                       LOGIN
                   </Link>
                   <Link to={"/register"} className={Style.letra}>
                       REGISTER
                   </Link>*/}

      {/* { user_login.id!==undefined && user_login.id !== false && user_login.isAdmin!==undefined && user_login.isAdmin==true &&
           <li className={Style.liFormat}>
             <Link to={"/createProduct"} className={Style.letra}>
               CREATE_PRODUCT
             </Link>
           </li>
           }
         </ul>
          { user_login.id!==undefined && user_login.id === false ?
         <button onClick={handleOpen} className={Style.buttonlogin}>
           Login/Register
         </button>   : <NavUser />
         }
 </div> */}
       {/* <div className={Style.right}>

               <Link to={"/create"}>
                   ADD CLOTHES
               </Link>
           </div> */}
           </nav>
{/* </nav>

     {openModal && <div className={Style.ModalAbiertoBackground}></div>}
     {openModal && (
       <div className={Style.ModalLogin}>
         <Login close={handleClose} />
       </div>
     )}
</header> */}
</header>
 );
}
