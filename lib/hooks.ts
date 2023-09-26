import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

import { useActiveSectionContext } from '../app/context/current-section-context';
import { CurrentStateType } from "./type";

export function useSectionInView(sectionName: CurrentStateType, threshold = 0.7) {
  // Get the reference to the element and whether it's in view
  const { ref, inView } = useInView({ threshold });
  const { setCurrentSection, lastTimeClick } = useActiveSectionContext();

  useEffect(() => {

    // Check if the element is in view and was clicked more than 1 second ago
    if (inView && (Date.now() - lastTimeClick) > 1000) {
      // Set the current section to the specified sectionName
      setCurrentSection(sectionName);
    }
  }, [inView, lastTimeClick]);

  return {
    ref
  };
}
