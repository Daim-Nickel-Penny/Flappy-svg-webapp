import React from "react";
import "./Contributions.css";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";
import FaceIcon from "@material-ui/icons/Face";
import ListOfContributions from "./ContributionsList";
function Contributions() {
  return (
    <div>
      <ul id="list">
        {ListOfContributions.contriList.map((item) => {
          return (
            <li>
              <Chip size="small" icon={<FaceIcon />} label={item.name} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Contributions;
