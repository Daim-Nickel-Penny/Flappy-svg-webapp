import React from "react";
import "./Contributions.css";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
function Contributions() {
  return (
    <div>
      <ul id="list">
        <li>
          <Chip
            size="small"
            label="Nicco Kunzmann"
            variant="outlined"
            avatar={<FaceIcon />}
            onClick={() => window.open("http://jugendprogrammiert.weebly.com/")}
          />
        </li>
        <li>
          <a href="https://github.com/PohSayKeong">Poh Say Keong</a>
        </li>
        <li>
          <a href="https://github.com/shashank-sharma">Shashank Sharma</a>
        </li>
        <li>
          <a href="https://github.com/anniezhou301">Annie Zhou</a>
        </li>
        <li>
          <a href="https://github.com/manastaneja">Manas Taneja</a>
        </li>
        <li>
          <a href="https://github.com/harry-7/">Hemanth Kumar Veeranki</a>
        </li>
        <li>
          <a href="https://github.com/antoniomdk">Antonio Molner Domenech</a>
        </li>
        <li>
          <a href="https://github.com/toxicdeath32">Siah Bing Ze</a>
        </li>
        <li>
          <a href="https://github.com/alan-aipe">Alan Aipe</a>
        </li>
        {/* <li>
          <a href="https://github.com/SilentFlame">Vinay Singh</a>
        </li>
        <li>
          <a href="https://github.com/mukesh14149">Mukesh Gupta</a>
        </li>
        <li>
          <a href="https://github.com/shubheksha">Shubheksha Jalan</a>
        </li>
        <li>
          <a href="https://github.com/jinankjain">Jinank Jain</a>
        </li>
        <li>
          <a href="https://github.com/kamishettysreeja25">Kamishetty Sreeja</a>
        </li>

        <li>
          <a href="https://github.com/Antrismus">Dmytro Kyrychkov</a>
        </li>
        <li>
          <a href="https://github.com/adarsh-ideal">Adarsh Kumar</a>
        </li>

        <li>
          <a href="https://github.com/Baidya99">Baidyanath Kundu</a>
        </li>
        <li>
          <a href="https://github.com/BohJieQi">Boh Jie Qi</a>
        </li>
        <li>
          <a href="https://rhemon.github.io">Ridhwanul Haque</a>
        </li>
        <li>
          <a href="https://github.com/gaeun">Gaeun Kim</a>
        </li>
        <li>
          <a href="https://github.com/Marauderer97">Soumya Vadlamannati</a>
        </li>

        <li>
          <a href="https://github.com/Abhi2424shek">Abishek V Ashok</a>
        </li>
        <li>
          <a href="https://github.com/Elgayar">Mostafa Elgayar</a>
        </li>
        <li>
          <a href="https://github.com/oanarosca">Oana Rosca</a>
        </li>

        <li>
          <a href="https://github.com/reallyly">Yusrilia H.</a>
        </li>
        <li>
          <a href="https://github.com/Heredroky">Alejandro Heredia</a>
        </li>
        <li>
          <a href="https://github.com/tripti1410">Trapti Rahangdale</a>
        </li>
        <li>
          <a href="https://github.com/hwilson2563">Hilary Matusiak</a>
        </li> */}
      </ul>
    </div>
  );
}

export default Contributions;
