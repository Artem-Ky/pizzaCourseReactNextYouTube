"use client";

import { cn } from "@/shared/lib/utils";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/shared/ui/Container";

import { ProductSearchInput } from "@/features/ProductSearchInput";
import { CartButton } from "@/features/Cart";

interface Props {
  hasSearch?: boolean;
  hasCart?: boolean;
  className?: string;
}

export const Header: React.FC<Props> = ({ hasCart = true, className }) => {
  return (
    <header className={cn("border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <Link href="/">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Logo" width={35} height={35} />
            <div>
              <h1 className="text-2xl uppercase font-black">Next Pizza</h1>
              <p className="text-sm text-gray-400 leading-3">
                вкусней уже некуда
              </p>
            </div>
          </div>
        </Link>

        <div className="mx-10 flex-1">
          <ProductSearchInput/>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          {hasCart && <CartButton />}
        </div>
      </Container>
    </header>
  );
};
