import redPizza from "../../assets/images/red_pizza.png";
import burger from "../../assets/images/red_burger.png";
import salads from "../../assets/images/red_salads.png";
import combos from "../../assets/images/red_combos.png";
import "./category.css";
import { useEffect } from "react";
import CategoryMenuItems from "./CategoryMenuItems";
function Categories() {
  useEffect(() => {
    // Get the sideMenu element
    const menu = document.querySelector(".category_menu");

    // Add event listener to the sideMenu element
    menu.addEventListener("click", function (event) {
      // Get the clicked element
      const currentElement = event.target;

      // Remove background color from all list items
      menu.querySelectorAll("li").forEach((elem) => {
        elem.classList.remove("active");
      });
      // Check if the clicked element is a list item (LI)
      console.log(currentElement.tagName);
      if (currentElement.tagName === "LI") {
        // Add background color to the clicked list item
        currentElement.classList.add("active");
      }
      // Check if the clicked element is a paragraph (P)
      else {
        currentElement.parentElement.classList.add("active");
      }
    });
  }, []);
  return (
    <div id="categories">
      <div className="container">
        <h2 className="heading">
          Our Popular <span>Categories</span>
        </h2>

        <ul className="category_menu">
          <li className="category_name active">
            <img src={redPizza} />
            Pizza
          </li>
          <li className="category_name">
            <img src={burger} />
            Burger
          </li>
          <li className="category_name">
            <img src={salads} />
            Salads
          </li>
          <li className="category_name">
            <img src={combos} />
            Combos
          </li>
        </ul>

        <CategoryMenuItems />
      </div>
    </div>
  );
}

export default Categories;
