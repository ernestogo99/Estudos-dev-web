import { FaAndroid } from "react-icons/fa";
import { FaAmazon } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import style from "./footer.module.css";
const Footer = () => {
  return (
    <footer>
      <ul className={style.social_list}>
        <li>
          <FaAndroid></FaAndroid>
        </li>
        <li>
          <FaAmazon></FaAmazon>
        </li>
        <li>
          <FaAngular></FaAngular>
        </li>
      </ul>
      <p>Nosso rodape</p>
    </footer>
  );
};

export default Footer;
