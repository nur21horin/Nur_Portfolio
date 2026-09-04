import { useState, useEffect, Children, cloneElement, isValidElement, useCallback, useRef } from "react";

const TRANSITION_MS = 500;

function useResponsiveSize(defaultSize) {
  const [size, setSize] = useState(defaultSize);
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setSize(Math.min(defaultSize, 320));
      else if (w < 1024) setSize(Math.min(defaultSize, 480));
      else setSize(defaultSize);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [defaultSize]);
  return size;
}

export function Squonk({
  children,
  size = 520,
  elasticity = 1.2,
  cycleDuration = 4000,
  easing = "linear",
  squashAmount = 40,
  stretchAmount = 25,
  bounceHeight = 12,
  radius = 28,
  className = "",
  onIndexChange,
}) {
  const childArray = Children.toArray(children).filter(isValidElement);
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);
  const responsiveSize = useResponsiveSize(size);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (childArray.length > 1) {
      timerRef.current = setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % childArray.length);
      }, cycleDuration);
    }
  }, [cycleDuration, childArray.length]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeIndex, resetTimer]);

  const goTo = useCallback((index) => {
    if (index === activeIndex) return;
    setActiveIndex(index);
    resetTimer();
    if (typeof onIndexChange === "function") {
      onIndexChange(index);
    }
  }, [activeIndex, resetTimer, onIndexChange]);

  const next = useCallback(() => {
    goTo((activeIndex + 1) % childArray.length);
  }, [activeIndex, childArray.length, goTo]);

  const prev = useCallback(() => {
    goTo((activeIndex - 1 + childArray.length) % childArray.length);
  }, [activeIndex, childArray.length, goTo]);

  const squash = 1 - squashAmount / 200;
  const stretch = 1 + stretchAmount / 100;

  return (
    <div
      className={`squonk-root ${className}`}
      style={{ "--squonk-size": `${responsiveSize}px` }}
    >
      <div className="squonk-viewport">
        {childArray.map((child, index) => {
          const isActive = index === activeIndex;
          const isPrev = !isActive && index === (activeIndex - 1 + childArray.length) % childArray.length;
          const isNext = !isActive && index === (activeIndex + 1) % childArray.length;

          let transform = "scale(0.92) translateY(0)";
          let opacity = 0;
          let zIndex = 0;
          let borderRadius = `${radius}px`;

          if (isActive) {
            transform = "scale(1) translateY(0)";
            opacity = 1;
            zIndex = 2;
            borderRadius = `${radius}px`;
          } else if (isPrev) {
            transform = `scale(${squash}) translateY(-${bounceHeight}px)`;
            opacity = 0;
            zIndex = 1;
            borderRadius = `${radius * 1.1}px`;
          } else if (isNext) {
            transform = `scale(${stretch}) translateY(${bounceHeight}px)`;
            opacity = 0;
            zIndex = 1;
            borderRadius = `${radius * 0.9}px`;
          }

          const duration = isActive ? TRANSITION_MS : TRANSITION_MS * 0.7;

          return (
            <div
              key={index}
              className="squonk-panel"
              style={{
                zIndex,
                opacity,
                transform,
                borderRadius,
                transition: `all ${duration}ms cubic-bezier(${elasticity}, 0, 0.5, 1)`,
              }}
            >
              {cloneElement(child, {
                isActive,
                index,
                activeIndex,
              })}
            </div>
          );
        })}
      </div>

      {childArray.length > 1 && (
        <div className="squonk-nav">
          <button
            className="squonk-nav-btn"
            onClick={prev}
            disabled={activeIndex === 0}
            aria-label="Previous project"
          >
            ← PREV
          </button>
          <span className="squonk-counter">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(childArray.length).padStart(2, "0")}
          </span>
          <button
            className="squonk-nav-btn"
            onClick={next}
            disabled={activeIndex === childArray.length - 1}
            aria-label="Next project"
          >
            NEXT →
          </button>
        </div>
      )}
    </div>
  );
}

export function SquonkContent({ children, isActive, index, activeIndex }) {
  return <>{children}</>;
}
