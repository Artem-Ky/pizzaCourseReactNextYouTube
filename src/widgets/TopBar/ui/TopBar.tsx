import { Categories } from "@/features/Categories";
import { SortPopup } from "@/features/SortPopup";
import { cn } from "@/shared/lib/utils";
import { Container } from "@/shared/ui";
import React from "react";
interface Props {
  className?: string;
}

export const TopBar: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "sticky top-0 bg-white py-5 shadow-lg shadow-black/5 z-10",
        className
      )}
    >
      <Container className="flex items-center justify-between ">
        <Categories />
        <SortPopup />
      </Container>
    </div>
  );
};
