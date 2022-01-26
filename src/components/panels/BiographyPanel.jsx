import { List, ListItem } from "react95";
import globeIcon from "../../img/globe.png";

import "./BiographyPanel.scss";

const BiographyPanel = ({
  showBiographyPanel,
  setShowBiographyPanel,
  displayedWindows,
  setDisplayedWindows,
  setStartMenuOpen,
}) => {
  const windowIsOpen = displayedWindows.includes("biography");
  
  return (
    <List
      className={`panel ${showBiographyPanel ? "" : "hidden"}`}
      id="biography-panel"
      onMouseEnter={() => setShowBiographyPanel(true)}
      onMouseLeave={() => setShowBiographyPanel(false)}
      onClick={() => {
        setDisplayedWindows([...displayedWindows, "biography"]);
        setStartMenuOpen(false);
      }}
    >
      <ListItem disabled={windowIsOpen}>
        <img src={globeIcon} alt="globe icon" />
        <span>Biography</span>
      </ListItem>
    </List>
  );
};

export default BiographyPanel;
