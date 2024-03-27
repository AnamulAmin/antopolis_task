import { useEffect, useState } from "react";
import soppingCart from "../../assets/images/shopping_cart.png";
import menuIcon from "../../assets/images/fi_menu.png";
import { IoMdClose } from "react-icons/io";
import "./navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu open/close
  const [isDesktop, setIsDesktop] = useState(false); // State for desktop/mobile view

  let menuStyle; // Variable to dynamically style menu

  // Determine menu style based on desktop/mobile view
  if (!isDesktop) {
    menuStyle = isMenuOpen ? { width: "100%" } : { width: "0%" };
  }

  // Effect hook to handle menu interaction and screen resizing
  useEffect(() => {
    // Get the sideMenu element
    const menu = document.querySelector(".menu");

    // Add event listener to the sideMenu element
    menu.addEventListener("click", function (event) {
      // Get the clicked element
      const currentElement = event.target;

      // Check if the clicked element is a list item (LI)
      if (currentElement.tagName === "A") {
        // Remove background color from all list items
        menu.querySelectorAll("li a").forEach((elem) => {
          elem.classList.remove("active");
        });
        // Add background color to the clicked list item
        currentElement.classList.add("active");
      }
      // Check if the clicked element is a paragraph (P)
      else {
        // Add background color to the parent list item of the clicked paragraph
        currentElement.parentElement.classList.add("bg-blue-950");
      }
    });

    // Function to track screen size
    const trackScreen = () => {
      const screen = window.innerWidth;

      // Checking if screen size is greater than 640px
      if (screen > 768) {
        setIsDesktop(true); // Set isDesktop to true
      } else {
        setIsDesktop(false); // Set isDesktop to false
      }
    };

    // Initial call to track screen size
    trackScreen();

    // Event listener for screen resize
    window.addEventListener("resize", trackScreen);

    // Cleanup function for removing event listener
    return () => {
      window.removeEventListener("resize", trackScreen);
    };
  }, []); // Empty dependency array to run the effect only once

  // JSX for rendering the navigation bar
  return (
    <nav>
      <div className="container navigation">
        <a href="#" className="logo">
          <button className="menu_icon" onClick={() => setIsMenuOpen(true)}>
            <img src={menuIcon} style={{ width: "1.5rem" }} />
          </button>
          Taste now
        </a>
        <ul className="menu" style={menuStyle}>
          <li className="menu_logo">
            <a href="#">Taste now</a>
          </li>
          <li>
            <a href="#" className="active">
              home
            </a>
          </li>
          <li>
            <a href="#">About us</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <li className="shopping_cart">
            <img src={soppingCart} style={{ width: "1.5rem" }} />
          </li>
          <button className="menu_btn">Sign Up</button>
          {/* Button to close menu */}
          {isMenuOpen ? (
            <button className="close_icon" onClick={() => setIsMenuOpen(false)}>
              <IoMdClose style={{ fontSize: "2rem" }} />
            </button>
          ) : null}
        </ul>
        <button className="shopping_cart_lg">
          <img src={soppingCart} style={{ width: "1.5rem" }} />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
