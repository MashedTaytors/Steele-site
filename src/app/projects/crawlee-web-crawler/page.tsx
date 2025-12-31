import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crawlee Web Crawler | Taylor Steele",
  description:
    "A web crawler management system built with Crawlee for efficient web scraping and data extraction.",
};

export default function CrawleeWebCrawler() {
  return (
    <div className="flex flex-col gap-6 items-center leading-relaxed font-sourceCodePro text-secondaryText w-full">
      {/* Title & intro */}
      <div className="flex flex-col gap-3">
        <h1 className="text-3xl font-ibmPlexSerif text-primaryText font-semibold">
          Crawlee Web Crawler
        </h1>
        <p className="text-base leading-relaxed text-tertiaryText">
          A web crawler management system built with Crawlee, a powerful web scraping
          and browser automation library. This project provides an efficient and
          scalable solution for extracting data from websites while respecting
          robots.txt and rate limiting.
        </p>
      </div>

      {/* Overview */}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Overview
        </h2>
        <p className="text-sm leading-relaxed text-secondaryText">
          This crawler management system leverages Crawlee&apos;s capabilities to
          handle complex web scraping tasks. It includes features for managing
          crawling sessions, handling different types of content, and processing
          extracted data efficiently.
        </p>
      </div>

      {/* Features */}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Features
        </h2>
        <ul className="text-sm leading-relaxed text-secondaryText list-disc list-inside space-y-2">
          <li>Automated web crawling with configurable depth and scope</li>
          <li>Respect for robots.txt and rate limiting</li>
          <li>Support for both static and dynamic content</li>
          <li>Data extraction and transformation pipelines</li>
          <li>Error handling and retry mechanisms</li>
          <li>Session management and monitoring</li>
        </ul>
      </div>

      {/* Technical Details */}
      <div className="flex flex-col gap-3 w-full">
        <h2 className="font-ibmPlexSerif text-2xl text-primaryText">
          Technical Implementation
        </h2>
        <p className="text-sm leading-relaxed text-secondaryText">
          Built using Crawlee, which provides a robust framework for web scraping
          with built-in support for multiple crawling strategies, request queuing,
          and data storage. The system is designed to be scalable and maintainable,
          with clear separation of concerns between crawling logic, data processing,
          and output formatting.
        </p>
      </div>
    </div>
  );
}

