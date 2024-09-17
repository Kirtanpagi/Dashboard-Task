// // import { Link } from "react-router-dom";

// import { Link } from "react-router-dom";

// const Header = () => {
//     return (
//         <>
//             <section className="nav-container">
//                 <div className="navbar">
//                     <a className="navbar-brand" href="#">Logo</a>
//                     <div className="user-icon">
//                         <i className="fa-regular fa-user fs-5 fw-bold"></i>
//                     </div>
//                 </div>
//                 <div className="">
//                     <nav>
//                         <ul>
//                             {/* <li><a className="nav-active" as={Link} to='/home'><i className="fa fa-home"></i>&nbsp;Home</a></li> */}
//                             <Link className="nav-active" to='/home'>
//                                 <i className="fa fa-home"></i>&nbsp;Home
//                             </Link>
//                             <li><a href="#about"><i className="fa fa-user-circle"></i>&nbsp;Lorem ipsum</a></li>
//                             <li><a href="#Portfolio"><i className="fa fa-briefcase"></i>&nbsp;Lorem ipsum</a></li>
//                             <li><a href="#services"><i className="fa fa-server"></i>&nbsp;Lorem ipsum</a></li>
//                             {/* <li><a href="#contact"><i className="fa fa-envelope"></i>&nbsp;Contact Me</a></li> */}
//                         </ul>
//                     </nav>

//                 </div>



//             </section>






//         </>
//     );
// };

// export default Header;







import { Link } from "react-router-dom";
import { useState } from "react"; // Import useState
import Home from "./Home";


const Header = () => {
    const [showHome, setShowHome] = useState(false);



    const handleHomeClick = () => {
        setShowHome(true); // Set to true when Home is clicked
    };



    return (
        <>
            <section className="nav-container">
                <div className="navbar">
                    <a className="navbar-brand" href="#">Logo</a>
                    <div className="user-icon">
                        <i className="fa-regular fa-user fs-5 fw-bold"></i>
                    </div>
                </div>

                <div className="">
                    <nav>
                        <ul>
                            <li>
                                {/* Add onClick handler to show the Home content */}
                                <Link className="nav-active" onClick={handleHomeClick}>
                                    <i className="fa fa-home"></i>&nbsp;Home
                                </Link>
                            </li>
                            <li><a href="#about"><i className="fa fa-user-circle"></i>&nbsp;Lorem ipsum</a></li>
                            <li><a href="#Portfolio"><i className="fa fa-briefcase"></i>&nbsp;Lorem ipsum</a></li>
                            <li><a href="#services"><i className="fa fa-server"></i>&nbsp;Lorem ipsum</a></li>
                        </ul>
                    </nav>
                </div>

                {/* Render the Home component based on state */}
                {showHome && (
                    <Home />
                    
                )}
            </section>
        </>
    );
};

export default Header;
