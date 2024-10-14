'use client';

import { useSetActiveCategory } from "@/features/Categories";
import React, { useEffect } from "react";
import { useIntersection } from "react-use";

interface Props {
  categoryId: number;
  title: string;
}

export const CategoryTrigger: React.FC<Props> = ({ categoryId, title }) => {
  const setActiveCategoryId = useSetActiveCategory(
    (state) => state.setActiveId
  );
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, {
    threshold: 1,
  });
  useEffect(() => {
    if (intersection?.isIntersecting) {
      setActiveCategoryId(categoryId);
    }
  }, [intersection?.isIntersecting, categoryId, setActiveCategoryId]);

  return <div className='w-full h-96 absolute' id={title} ref={intersectionRef}></div>;
};
