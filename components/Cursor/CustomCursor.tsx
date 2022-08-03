import { motion } from "framer-motion";
import * as gasp from "gsap";
import { useContext, useEffect } from "react";

import { CursorContext } from "@lib/context";
import styles from "@styles/components/Cursor/CustomCursor.module.scss";

/**
 * @todo
 * - Add videos
 * - Add text
 * - Remove eventlisteners
 */
export const CustomCursor = () => {
  const { cursor, setCursor } = useContext(CursorContext);

  // Move position
  const moveMouse = (event: MouseEvent) => {
    if (event !== null) {
      setCursor({
        ...cursor,
        position: {
          x: event.clientX || cursor.position.x,
          y: event.clientY || cursor.position.y,
        },
      });
    }
  };

  // Event listeners
  useEffect(() => {
    const node = cursor.parentRef.current as HTMLElement;

    node.addEventListener("mousemove", (e) => moveMouse(e), false);
    addVisible(node, cursor.cursorRef.current.classList);
    addCursorColor(cursor.cursorRef.current.classList, "white");
    addScaleCursor(cursor.cursorRef.current.classList);
    addExclusionCursor(cursor.cursorRef.current.classList);
    addScaleGifCursor(cursor.cursorRef.current.classList);

    () => {
      node.removeEventListener("mousemove", (e) => moveMouse(e), false);
      rmVisible(node, cursor.cursorRef.current.classList);
      rmCursorColor(cursor.cursorRef.current.classList, "white");
      rmScaleCursor(cursor.cursorRef.current.classList);
      rmExclusionCursor(cursor.cursorRef.current.classList);
      rmScaleGifCursor(cursor.cursorRef.current.classList);
    };
  }, [addVisible, rmVisible]);

  return (
    <motion.div
      id="cursor"
      ref={cursor.cursorRef}
      className={styles["cursor"]}
      animate={{
        x: cursor.position.x,
        y: cursor.position.y,
        transition: { type: "tween", duration: 0.3, ease: "easeOut" },
      }}
    >
      <motion.div className={styles["cursor-gif"]}>
        {/* <img id="premium" src="/gif-1.gif" />
        <img id="affordable" src="/gif-2.gif" /> */}

        <img id="best" src="/gif-3.gif" />
      </motion.div>
    </motion.div>
  );
};

/**
 * Visible
 */

const addVisible = (node: HTMLElement, classList: any) => {
  node.addEventListener("mouseenter", () => classList.add(styles["visible"]));
  node.addEventListener("mouseleave", () =>
    classList.remove(styles["visible"])
  );
};

const rmVisible = (node: HTMLElement, classList: any) => {
  node.removeEventListener("mouseenter", () =>
    classList.add(styles["visible"])
  );
  node.removeEventListener("mouseleave", () =>
    classList.remove(styles["visible"])
  );
};

/**
 * Cursor color
 */

const addCursorColor = (classList: any, color: string) => {
  const nodes = document.querySelectorAll(`.cursor-${color}`);
  console.log(nodes);

  nodes.forEach((n: Element) => {
    n.addEventListener("mouseenter", () =>
      classList.add(styles[`cursor-${color}`])
    );
    n.addEventListener("mouseleave", () =>
      classList.remove(styles[`cursor-${color}`])
    );
  });
};

const rmCursorColor = (classList: any, color: string) => {
  const nodes = document.querySelectorAll(`.cursor-${color}`);
  nodes.forEach((n: Element) => {
    n.removeEventListener("mouseenter", () =>
      classList.add(styles[`cursor-${color}`])
    );
    n.removeEventListener("mouseleave", () =>
      classList.remove(styles[`cursor-${color}`])
    );
  });
};

const addScaleCursor = (classList: any) => {
  const nodes = document.querySelectorAll(`.cursor-scale`);
  nodes.forEach((n: Element) => {
    n.addEventListener("mouseenter", () => classList.add(styles[`scale`]));
    n.addEventListener("mouseleave", () => classList.remove(styles[`scale`]));
  });
};

const rmScaleCursor = (classList: any) => {
  const nodes = document.querySelectorAll(`.cursor-scale`);
  nodes.forEach((n: Element) => {
    n.removeEventListener("mouseenter", () => classList.add(styles[`scale`]));
    n.removeEventListener("mouseleave", () =>
      classList.remove(styles[`scale`])
    );
  });
};

const addExclusionCursor = (classList: any) => {
  const nodes = document.querySelectorAll(`.cursor-exclusion`);
  nodes.forEach((n: Element) => {
    n.addEventListener("mouseenter", () => classList.add(styles[`exclusion`]));
    n.addEventListener("mouseleave", () =>
      classList.remove(styles[`exclusion`])
    );
  });
};

const rmExclusionCursor = (classList: any) => {
  const nodes = document.querySelectorAll(`.cursor-exclusion`);
  nodes.forEach((n: Element) => {
    n.removeEventListener("mouseenter", () =>
      classList.add(styles[`exclusion`])
    );
    n.removeEventListener("mouseleave", () =>
      classList.remove(styles[`exclusion`])
    );
  });
};

const addScaleGifCursor = (classList: any) => {
  const nodes = document.querySelectorAll(`.cursor-scale-gif`);
  nodes.forEach((n: Element) => {
    n.addEventListener("mouseenter", () => {
      const src = n.getAttribute("data-gif-src");
      const img = document.getElementById(src);
      console.log(img);
      // let siblings = getSiblings(img);

      if (img?.id === src) {
        img.style.zIndex = "10";
        img.style.opacity = "1";
      }

      classList.add(styles[`cursor-scale-gif`]);
    });
    n.addEventListener("mouseleave", () =>
      classList.remove(styles[`cursor-scale-gif`])
    );
  });
};

const getSiblings = (e: HTMLElement) => {
  // for collecting siblings
  let siblings: ChildNode[] = [];
  // if no parent, return no sibling
  if (!e.parentNode) {
    return siblings;
  }
  // first child of the parent node
  let sibling = e.parentNode.firstChild;
  // collecting siblings
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== e) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
};

const rmScaleGifCursor = (classList: any) => {
  const nodes = document.querySelectorAll(`.cursor-scale-gif`);
  nodes.forEach((n: Element) => {
    n.removeEventListener("mouseenter", () =>
      classList.add(styles[`cursor-scale-gif`])
    );
    n.removeEventListener("mouseleave", () =>
      classList.remove(styles[`cursor-scale-gif`])
    );
  });
};
