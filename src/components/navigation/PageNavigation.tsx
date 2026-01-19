"use client";

import React from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { NAV_ITEMS } from "@/data/navigation";
import "./PageNavigation.css";

type PageNavigationProps = {
  currentPage: string;
};

export default function PageNavigation({ currentPage }: PageNavigationProps) {
  // Add home to the navigation items and filter disabled items and external links (like resume)
  const allPages = [
    { id: "home", label: "Home", href: "/" },
    ...NAV_ITEMS.filter((item) => !item.disabled && !item.external),
  ];

  const currentIndex = allPages.findIndex((page) => page.href === currentPage);

  if (currentIndex === -1) {
    return null; // Invalid page
  }

  // Calculate previous and next indices with circular logic
  const previousIndex =
    currentIndex === 0 ? allPages.length - 1 : currentIndex - 1;
  const nextIndex = currentIndex === allPages.length - 1 ? 0 : currentIndex + 1;

  const previousPage = allPages[previousIndex];
  const nextPage = allPages[nextIndex];

  return (
    <nav className="page-navigation">
      <Link href={previousPage.href} className="page-nav-link prev">
        <ChevronLeft size={20} />
        <span className="page-nav-text">{previousPage.label}</span>
      </Link>

      <Link href={nextPage.href} className="page-nav-link next">
        <span className="page-nav-text">{nextPage.label}</span>
        <ChevronRight size={20} />
      </Link>
    </nav>
  );
}
