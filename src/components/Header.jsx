import { useState } from "react";

const Header=() =>{












    const[brandName,setBrandName]=useState("Qadreen Ali")
    const[menuLinks,setmenuLinks]= useState([
        {
        title:'Home',
        link:'/home',
        id:'1',
},
{
    title:'About',
    link:'/about',
    id:'2',
},
{
    title:'Skills',
    link:'/skills',
    id:'3',
},
{
    title:'Portfolio',
    link:'/portfoli',
    id:'4',
},
{
    title:'Contact',
    link:'/contact',
    id:'5',
},
]);

const [actionButton,setActionButton]=useState({
    title:'Hire Me',
    link:'/hire-me',
});
    return (
       <>
       <div
        className="h-20 border main flex justify-between items-center px-16 bg-gray-100">
<div>
    <h1 className="text-2xl font-bold">{brandName}</h1>
</div>





<div className="space-x-6 ">
    {
        menuLinks.map((link)=>(
            <a key={link.id}href={link.link} className="hover:text-orange-600">
                {link.title}
            </a>
        ))
    }
    {/* <a href="/home" className="hover:text-orange-600">Home</a>
    {/* <a href="/about" className="hover:text-orange-600">About</a>
    <a href="/skills" className="hover:text-orange-600">Skills</a>
    <a href="/portfolio" className="hover:text-orange-600">Portfolio</a>
    <a href="/contact" className="hover:text-orange-600">Contact</a> */} 
</div>
<div >
    <a href={actionButton.link}className="bg-orange-500 px-3 py-2 shadow rounded-full text-black shadow text-1.8xl">{actionButton.title}</a>
</div>
       </div>
       </>
    )
};
export default Header;