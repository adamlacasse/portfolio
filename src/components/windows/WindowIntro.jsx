import { useEffect, useState, useRef } from "react";
import {
  Window,
  Button,
  WindowHeader,
  WindowContent,
  Divider,
} from "react95";

import "./WindowIntro.scss";

import moveElement from "../../helpers/moveElement";

export default function WindowIntro(props) {
  useEffect(() => {
    const returnObj = moveElement(props.windowId);

    return () => {
      const { windowHeader, handleWindowMove } = returnObj;
      windowHeader.removeEventListener('mousedown', handleWindowMove);
    }
  }, [props.windowId]);

  const [windowHasFocus, setWindowHasFocus] = useState(true);
  const windowRef = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = e => {
      if (windowRef.current && !windowRef.current.contains(e.target)) {
        setWindowHasFocus(false);
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [windowHasFocus]);

  return (
    <Window 
      className="window" 
      id={props.windowId} 
      ref={windowRef} 
      onMouseDown={() => setWindowHasFocus(true)}
      style={{ zIndex: windowHasFocus ? 1 : 0 }}
    >
      <WindowHeader active={windowHasFocus} className="window-header">
        <span>Hi, I'm Adam 👋</span>
        <Button onClick={() => props.setDisplayedWindows(props.displayedWindows.filter(window => window !== props.windowId))}>
          <span className="close-icon">X</span>
        </Button>
      </WindowHeader>
      <WindowContent>
      <article>
          <p>
            I'm a{" "}
            <span className="emphasized-words">
              full stack software engineer
            </span>
            , currently employed full time on an award-winning team at{" "}
            <a
              href="https://www.libertymutual.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Liberty Mutual Insurance
            </a>
            . I specialize in <span className="emphasized-words">React.js</span>{" "}
            and <span className="emphasized-words">Redux</span> front-ends, and{" "}
            <span className="emphasized-words">Java Spring Boot</span> or <span className="emphasized-words">Node.js</span> back-ends
            with <span className="emphasized-words">PostgreSQL</span> databases
            - all spun up on <span className="emphasized-words">AWS</span>. I
            also have experience in a potpourri of other technologies.
          </p>
          <br />
          <Divider />
          <br />
          <h2 className="emphasized-words">Welcome to my portfolio site!</h2>
          <div className="separator" />
          <p>
            Please take a look around.
            {" This site was created with React.js and Sass and a nifty component library called "}
            <a
              href="https://react95.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React95
            </a>
            {". "}
            It is intended to mimic the look and feel of the Windows95 desktop from back in the day.
            Use the start menu above to open various windows. You can move them around the "desktop" by
            dragging from the header. You can also resize them by dragging from the lower right corner, and
            you can close them by clicking the X in the top right corner.
          </p>
        </article>
      </WindowContent>
    </Window>
  );
}
