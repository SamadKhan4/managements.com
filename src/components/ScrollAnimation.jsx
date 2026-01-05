/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";

const ScrollAnimation = ({
  children,
  animation = "fade-up",
  duration = 600,
  delay = 0,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  threshold = 0.2,
  once = false,
}) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const lastY = useRef(0);

  useEffect(() => {
    // Accessibility: reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const currentY = entry.boundingClientRect.y;
        const direction = currentY < lastY.current ? "down" : "up";
        lastY.current = currentY;

        if (entry.isIntersecting) {
          setVisible(true);
        } else if (!once) {
          setVisible(false);
        }

        ref.current?.setAttribute("data-direction", direction);
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      data-animation={animation}
      className={`scroll-animate ${visible ? "show" : ""}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
        transitionTimingFunction: easing,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
