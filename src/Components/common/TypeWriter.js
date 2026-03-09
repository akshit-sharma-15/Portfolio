import { useState, useEffect } from "react";

/**
 * TypeWriter - types out an array of lines one character at a time.
 * Props:
 *  - lines: Array of { text: string, style?: object, className?: string }
 *  - typingSpeed: ms per character (default 30)
 *  - delayBetweenLines: ms pause between lines (default 800)
 *  - showCursor: boolean (default true)
 */
function TypeWriter({ lines = [], typingSpeed = 30, delayBetweenLines = 800, showCursor = true }) {
  const [displayed, setDisplayed] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setDone(true);
      return;
    }

    const line = lines[currentLine];
    if (currentChar < line.text.length) {
      const timeout = setTimeout(() => {
        setDisplayed((prev) => {
          const updated = [...prev];
          if (updated.length <= currentLine) {
            updated.push({ ...line, text: line.text.charAt(0) });
          } else {
            updated[currentLine] = {
              ...line,
              text: line.text.substring(0, currentChar + 1),
            };
          }
          return updated;
        });
        setCurrentChar((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLine((l) => l + 1);
        setCurrentChar(0);
      }, delayBetweenLines);
      return () => clearTimeout(timeout);
    }
  }, [currentLine, currentChar, lines, typingSpeed, delayBetweenLines]);

  return (
    <div>
      {displayed.map((item, i) => (
        <p className={item.className || "line"} key={i} style={item.style}>
          {item.text}
          {showCursor && !done && i === currentLine && <span className="typewriter-cursor">|</span>}
        </p>
      ))}
      {showCursor && done && <span className="typewriter-cursor blink">|</span>}
    </div>
  );
}

export default TypeWriter;
