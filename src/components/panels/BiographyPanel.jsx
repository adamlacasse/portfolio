import { List, ListItem } from "react95";
import globeIcon from "../../img/globe.png";

import "./BiographyPanel.scss";

const BiographyPanel = ({
  showBiographyPanel,
  setShowBiographyPanel,
  displayedWindows,
  setDisplayedWindows,
  setStartMenuOpen,
}) => (
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
    <ListItem disabled={displayedWindows.includes("biography")}>
      <img src={globeIcon} alt="globe icon" />
      <span>Biography</span>
    </ListItem>
  </List>
);

export default BiographyPanel;
