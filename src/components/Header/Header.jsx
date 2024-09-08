import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
        <header className="py-1 bg-slate-600">
        <div className="container flex justify-between">
            <div className="logo">
                <a href="#">
                    <img src="./src/assets/Sorobindu.png" alt="" />
                </a>
            </div>
            <div className="menu">
                <ul className="flex items-center h-full">
                    <li><Link
                     className="py-3 px-3 text-white no-underline" to="/">Home</Link></li>
                    <li><Link
                     className="py-3 px-3 text-white no-underline" to="/team">Team</Link></li>
                    <li><Link
                     className="py-3 px-3 text-white no-underline" to="/blog">Blog</Link></li>
                    <li><Link
                     className="py-3 px-3 text-white no-underline" to="/about">About</Link></li>
                    <li><Link
                     className="py-3 px-3 text-white no-underline" to="/contract">Contact</Link></li>
                </ul>
            </div>
        </div>
      </header>
    </>
  )
}

export default Header