import React from "react";
import { Link } from "react-router-dom";

const LINKS = [
    {to:'/', text:'Home'},
    {to:'/vivek', text:`Vivek's Page`},
    {to:'/Starred', text:`Starred Page`},

]

const Navbar = () =>{
    return(
        <div>
            <ul>
            {LINKS.map(item =>(
                <li key={item.to}>
                <Link to={item.to}>{item.text}</Link>
                </li>
            ))}
            </ul>
        </div>
    )
}

export default Navbar;