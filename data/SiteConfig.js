const config = {
  siteTitle: "アジアン・チャイナエステ嬢ポータル", // Site title.
  siteTitleShort: "アジアン・チャイナエステ嬢ポータル", // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: "アジアン・チャイナエステ嬢ポータル", // Alternative site title for SEO.
  siteLogo: "/logos/logo-200.png", // Logo used for SEO and manifest.
  siteUrl: "https://kyonyu-chies.work", // Domain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: "最新のアジアン・チャイナエステ嬢情報をお届けします", // Website description used for RSS feeds/meta description tag.
  siteRss: "/rss.xml", // Path to the RSS file.
  siteFBAppID: "", // FB Application ID for using app insights
  googleAnalyticsID: "UA-155850634-1", // GA tracking ID.
  dateFromFormat: "YYYY-MM-DD", // Date format used in the frontmatter.
  dateFormat: "YYYY/MM/DD", // Date format for display.
  userName: "Lettuce Master", // Username to display in the author segment.
  userEmail: "", // Email used for RSS feed's author segment
  userTwitter: "master_lettuce", // Optionally renders "Follow Me" in the Bio segment.
  userGitHub: "", // Optionally renders "Follow Me" in the Bio segment.
  userLocation: "Japan", // User location to display in the author segment.
  userAvatar: "/avatar.png", // User avatar to display in the author segment.
  userDescription: "大きなおっ○○が大好きです", // User description to display in the author segment.
  copyright: "Copyright © 2020. All rights reserved.", // Copyright string for the footer of the website and RSS feed.
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "red" // Used for setting manifest background color.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === "/") {
  config.pathPrefix = "";
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, "")}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === "/")
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
// if (config.siteRss && config.siteRss[0] !== "/")
//   config.siteRss = `/${config.siteRss}`;

module.exports = config;
