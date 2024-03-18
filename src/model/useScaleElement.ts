import React, { useState, useEffect } from 'react';

interface UseScaleElementProps {
  contentRef: React.RefObject<HTMLDivElement>;
}

export const useScaleElement = ({ contentRef }: UseScaleElementProps) => {
  const [scale, setScale] = useState<number>(1);

  const handleResize = () => {
    const getContentWidth = (ref: React.RefObject<HTMLDivElement>) => {
      return ref.current ? ref.current.scrollWidth : 0;
    };

    const getContentHeight = (ref: React.RefObject<HTMLDivElement>) => {
      return ref.current ? ref.current.scrollHeight : 0;
    };

    const contentWidth = getContentWidth(contentRef);
    const contentHeight = getContentHeight(contentRef);
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    // Determine scaling based on whether the content fits both width and height
    const widthFit = screenWidth > contentWidth;
    const heightFit = screenHeight > contentHeight;

    let newScale = 1;
    if (!widthFit && !heightFit) {
      // If neither width nor height fit, scale down based on the smaller dimension
      newScale = Math.min(
        screenWidth / contentWidth,
        screenHeight / contentHeight
      );
    } else if (!widthFit) {
      // If only width doesn't fit, scale down based on the width
      newScale = screenWidth / contentWidth;
    } else if (!heightFit) {
      // If only height doesn't fit, scale down based on the height
      newScale = screenHeight / contentHeight;
    }

    setScale(newScale);
  };

  useEffect(() => {
    // Initial scale on mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    return () => {
      // Clean up the event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, [contentRef]); // Re-run the effect when the contentRef changes

  return scale;
};
