"use client";
import React, { useState } from "react";

interface CrawlerConfig {
  startUrls: string[];
  maxDepth: number;
  maxPages: number;
  requestHandlerTimeout: number;
  navigationTimeout: number;
  respectRobotsTxt: boolean;
  ignoreSslErrors: boolean;
  headless: boolean;
  waitForSelector: string;
  dataSelectors: {
    title: string;
    description: string;
    links: string;
    images: string;
  };
  outputFormat: "json" | "csv" | "jsonl";
}

const CrawlerDashboard: React.FC = () => {
  const [config, setConfig] = useState<CrawlerConfig>({
    startUrls: [""],
    maxDepth: 2,
    maxPages: 100,
    requestHandlerTimeout: 30000,
    navigationTimeout: 30000,
    respectRobotsTxt: true,
    ignoreSslErrors: false,
    headless: true,
    waitForSelector: "",
    dataSelectors: {
      title: "h1",
      description: "meta[name='description']",
      links: "a[href]",
      images: "img[src]",
    },
    outputFormat: "json",
  });

  const [activeTab, setActiveTab] = useState<"basic" | "advanced" | "selectors" | "preview">("basic");

  const handleStartUrlChange = (index: number, value: string) => {
    const newUrls = [...config.startUrls];
    newUrls[index] = value;
    setConfig({ ...config, startUrls: newUrls });
  };

  const addStartUrl = () => {
    setConfig({
      ...config,
      startUrls: [...config.startUrls, ""],
    });
  };

  const removeStartUrl = (index: number) => {
    if (config.startUrls.length > 1) {
      const newUrls = config.startUrls.filter((_, i) => i !== index);
      setConfig({ ...config, startUrls: newUrls });
    }
  };

  const handleNumberChange = (field: keyof CrawlerConfig, value: string) => {
    const numValue = parseInt(value, 10);
    if (!isNaN(numValue) && numValue >= 0) {
      setConfig({ ...config, [field]: numValue });
    }
  };

  const handleBooleanChange = (field: keyof CrawlerConfig, value: boolean) => {
    setConfig({ ...config, [field]: value });
  };

  const handleSelectorChange = (field: keyof CrawlerConfig["dataSelectors"], value: string) => {
    setConfig({
      ...config,
      dataSelectors: {
        ...config.dataSelectors,
        [field]: value,
      },
    });
  };

  const exportConfig = () => {
    const configJson = JSON.stringify(config, null, 2);
    const blob = new Blob([configJson], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "crawler-config.json";
    a.click();
    URL.revokeObjectURL(url);
  };

  const generateCodePreview = () => {
    const validUrls = config.startUrls.filter((url) => url.trim() !== "");
    return `import { CheerioCrawler } from 'crawlee';

const crawler = new CheerioCrawler({
  maxRequestsPerCrawl: ${config.maxPages},
  maxDepth: ${config.maxDepth},
  requestHandlerTimeoutSecs: ${config.requestHandlerTimeout / 1000},
  navigationTimeoutSecs: ${config.navigationTimeout / 1000},
  respectRobotsTxt: ${config.respectRobotsTxt},
  ignoreSslErrors: ${config.ignoreSslErrors},
  headless: ${config.headless},
  
  async requestHandler({ request, $, enqueueLinks }) {
    // Extract data using selectors
    const title = $('${config.dataSelectors.title}').first().text().trim();
    const description = $('${config.dataSelectors.description}').attr('content') || '';
    const links = $('${config.dataSelectors.links}').map((_, el) => $(el).attr('href')).get();
    const images = $('${config.dataSelectors.images}').map((_, el) => $(el).attr('src')).get();
    
    // Save data
    await Dataset.pushData({
      url: request.url,
      title,
      description,
      links,
      images,
    });
    
    // Enqueue links for further crawling
    await enqueueLinks({
      maxDepth: ${config.maxDepth},
    });
  },
});

await crawler.run(${JSON.stringify(validUrls)});`;
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-500 border-opacity-40">
        {[
          { id: "basic", label: "Basic Settings" },
          { id: "advanced", label: "Advanced" },
          { id: "selectors", label: "Data Selectors" },
          { id: "preview", label: "Preview & Export" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as typeof activeTab)}
            className={`px-4 py-2 font-sourceCodePro text-sm border-b-2 transition-colors ${
              activeTab === tab.id
                ? "border-primaryText text-primaryText"
                : "border-transparent text-secondaryText hover:text-primaryText"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Basic Settings Tab */}
      {activeTab === "basic" && (
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Start URLs</h3>
            <p className="text-sm leading-relaxed text-secondaryText">
              Enter the URLs where the crawler should begin. Add multiple URLs to crawl multiple sites.
            </p>
            <div className="flex flex-col gap-3">
              {config.startUrls.map((url, index) => (
                <div key={index} className="flex gap-2 items-center">
                  <input
                    type="url"
                    className="p-2 flex-1 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro text-sm focus:outline-none focus:border-opacity-100"
                    placeholder="https://example.com"
                    value={url}
                    onChange={(e) => handleStartUrlChange(index, e.target.value)}
                  />
                  {config.startUrls.length > 1 && (
                    <button
                      onClick={() => removeStartUrl(index)}
                      className="px-3 py-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro text-sm hover:border-opacity-100 transition-colors"
                    >
                      Remove
                    </button>
                  )}
                </div>
              ))}
              <button
                onClick={addStartUrl}
                className="px-4 py-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro text-sm hover:border-opacity-100 transition-colors self-start"
              >
                + Add URL
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Crawl Limits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Max Depth
                </label>
                <input
                  type="number"
                  min="0"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  value={config.maxDepth}
                  onChange={(e) => handleNumberChange("maxDepth", e.target.value)}
                />
                <p className="text-xs text-secondaryText">
                  Maximum depth to crawl from start URLs (0 = only start URLs)
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Max Pages
                </label>
                <input
                  type="number"
                  min="1"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  value={config.maxPages}
                  onChange={(e) => handleNumberChange("maxPages", e.target.value)}
                />
                <p className="text-xs text-secondaryText">
                  Maximum number of pages to crawl
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Output Format</h3>
            <div className="flex gap-4">
              {(["json", "csv", "jsonl"] as const).map((format) => (
                <label
                  key={format}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="outputFormat"
                    value={format}
                    checked={config.outputFormat === format}
                    onChange={() => setConfig({ ...config, outputFormat: format })}
                    className="cursor-pointer"
                  />
                  <span className="font-sourceCodePro text-sm text-secondaryText">
                    {format.toUpperCase()}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Advanced Settings Tab */}
      {activeTab === "advanced" && (
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Timeouts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Request Handler Timeout (ms)
                </label>
                <input
                  type="number"
                  min="1000"
                  step="1000"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  value={config.requestHandlerTimeout}
                  onChange={(e) => handleNumberChange("requestHandlerTimeout", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Navigation Timeout (ms)
                </label>
                <input
                  type="number"
                  min="1000"
                  step="1000"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  value={config.navigationTimeout}
                  onChange={(e) => handleNumberChange("navigationTimeout", e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Browser Options</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.headless}
                  onChange={(e) => handleBooleanChange("headless", e.target.checked)}
                  className="cursor-pointer"
                />
                <span className="font-sourceCodePro text-sm text-secondaryText">
                  Run in headless mode (no browser window)
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Crawling Behavior</h3>
            <div className="flex flex-col gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.respectRobotsTxt}
                  onChange={(e) => handleBooleanChange("respectRobotsTxt", e.target.checked)}
                  className="cursor-pointer"
                />
                <span className="font-sourceCodePro text-sm text-secondaryText">
                  Respect robots.txt
                </span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.ignoreSslErrors}
                  onChange={(e) => handleBooleanChange("ignoreSslErrors", e.target.checked)}
                  className="cursor-pointer"
                />
                <span className="font-sourceCodePro text-sm text-secondaryText">
                  Ignore SSL errors
                </span>
              </label>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Wait Options</h3>
            <div className="flex flex-col gap-2">
              <label className="font-sourceCodePro text-sm text-primaryText">
                Wait for Selector (optional)
              </label>
              <input
                type="text"
                className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                placeholder=".content, #main, etc."
                value={config.waitForSelector}
                onChange={(e) => setConfig({ ...config, waitForSelector: e.target.value })}
              />
              <p className="text-xs text-secondaryText">
                CSS selector to wait for before processing the page
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Data Selectors Tab */}
      {activeTab === "selectors" && (
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">CSS Selectors</h3>
            <p className="text-sm leading-relaxed text-secondaryText">
              Define CSS selectors for extracting specific data from pages. These selectors will be used to extract content during crawling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Title Selector
                </label>
                <input
                  type="text"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  placeholder="h1"
                  value={config.dataSelectors.title}
                  onChange={(e) => handleSelectorChange("title", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Description Selector
                </label>
                <input
                  type="text"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  placeholder="meta[name='description']"
                  value={config.dataSelectors.description}
                  onChange={(e) => handleSelectorChange("description", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Links Selector
                </label>
                <input
                  type="text"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  placeholder="a[href]"
                  value={config.dataSelectors.links}
                  onChange={(e) => handleSelectorChange("links", e.target.value)}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-sourceCodePro text-sm text-primaryText">
                  Images Selector
                </label>
                <input
                  type="text"
                  className="p-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro focus:outline-none focus:border-opacity-100"
                  placeholder="img[src]"
                  value={config.dataSelectors.images}
                  onChange={(e) => handleSelectorChange("images", e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Preview & Export Tab */}
      {activeTab === "preview" && (
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col gap-3 w-full">
            <div className="flex justify-between items-center">
              <h3 className="font-ibmPlexSerif text-xl text-primaryText">
                Configuration Preview
              </h3>
              <button
                onClick={exportConfig}
                className="px-4 py-2 rounded-md border border-gray-500 border-opacity-40 bg-transparent font-sourceCodePro text-sm hover:border-opacity-100 transition-colors"
              >
                Export JSON
              </button>
            </div>
            <div className="rounded-lg border border-gray-500 border-opacity-40 bg-transparent p-4 overflow-auto max-h-96">
              <pre className="font-sourceCodePro text-xs text-secondaryText whitespace-pre-wrap">
                {JSON.stringify(config, null, 2)}
              </pre>
            </div>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h3 className="font-ibmPlexSerif text-xl text-primaryText">Code Preview</h3>
            <p className="text-sm leading-relaxed text-secondaryText">
              Preview of the Crawlee code that would be generated based on your configuration.
            </p>
            <div className="rounded-lg border border-gray-500 border-opacity-40 bg-transparent p-4 overflow-auto max-h-96">
              <pre className="font-sourceCodePro text-xs text-secondaryText whitespace-pre-wrap">
                {generateCodePreview()}
              </pre>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CrawlerDashboard;

