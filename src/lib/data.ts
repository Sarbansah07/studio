import type { Brand, DashboardData, AuditData } from "@/lib/types";

export const brands: Brand[] = [
  { id: "acme", name: "Acme Corp", logo: "https://picsum.photos/seed/acme-logo/40/40" },
  { id: "globex", name: "Globex Corporation", logo: "https://picsum.photos/seed/globex-logo/40/40" },
];

export const dashboardData: DashboardData[] = [
  {
    brandId: "acme",
    aiVisibilityScore: 82,
    trustScore: 91,
    keywordCoverage: 75,
    lastAudit: "2024-07-28T10:00:00Z",
  },
  {
    brandId: "globex",
    aiVisibilityScore: 74,
    trustScore: 85,
    keywordCoverage: 68,
    lastAudit: "2024-07-27T14:30:00Z",
  },
];

export const auditData: AuditData[] = [
  // --- ACME CORP DATA ---
  {
    brandId: "acme",
    moduleId: "technical-seo",
    score: 88,
    keyInsights: ["Excellent mobile performance.", "Sitemap is comprehensive and up-to-date."],
    issues: ["A few broken internal links detected.", "Some images lack ALT tags."],
    recommendations: ["Implement a regular check for broken links.", "Ensure all new images have descriptive ALT tags."],
  },
  {
    brandId: "acme",
    moduleId: "content-structure",
    score: 78,
    keyInsights: ["Strong use of header tags to structure content.", "Product pages have detailed descriptions."],
    issues: ["FAQ schema is missing on several key pages.", "Blog posts lack a clear internal linking strategy."],
    recommendations: ["Deploy FAQ schema across all service and product pages.", "Develop a topic cluster model for internal linking."],
  },
  {
    brandId: "acme",
    moduleId: "brand-authority",
    score: 92,
    keyInsights: ["High number of authoritative backlinks.", "Strong brand presence on social media."],
    issues: ["Author bios are missing on blog articles.", "Limited reviews on third-party platforms."],
    recommendations: ["Add detailed author bios to all posts to boost E-E-A-T.", "Launch a campaign to encourage customer reviews."],
  },
  {
    brandId: "acme",
    moduleId: "semantic-relevance",
    score: 85,
    keyInsights: ["Content covers a wide range of relevant entities for 'enterprise software'.", "Core topics are well-defined."],
    issues: ["Under-utilization of related terms and synonyms.", "Knowledge Graph presence is weak."],
    recommendations: ["Expand content to include more semantically related terms.", "Optimize for Google's Knowledge Graph by using structured data."],
  },
  {
    brandId: "acme",
    moduleId: "user-experience",
    score: 80,
    keyInsights: ["Fast page load times (Good CWV).", "Low bounce rate on landing pages."],
    issues: ["Complex navigation on mobile devices.", "Call-to-action buttons are not consistently placed."],
    recommendations: ["Simplify the mobile navigation menu.", "Standardize the placement and design of CTAs across the site."],
  },
  {
    brandId: "acme",
    moduleId: "competitive-landscape",
    score: 75,
    keyInsights: ["Leading competitor has stronger AI-search visibility.", "Opportunity to capture 'AI-powered analytics' keywords."],
    issues: ["Losing ground in non-branded search queries.", "Competitors are more frequently cited in AI overviews."],
    recommendations: ["Create a content series targeting 'AI-powered analytics'.", "Analyze competitor strategies for getting featured in AI answers."],
  },
  {
    brandId: "acme",
    moduleId: "ai-readiness",
    score: 89,
    keyInsights: ["Content is structured in a Q&A format, which is good for AI.", "Use of clear, concise language."],
    issues: ["Data tables are rendered as images, making them inaccessible to AI.", "Lack of summary sections in long-form content."],
    recommendations: ["Convert all data tables to HTML.", "Add 'Key Takeaways' or 'tl;dr' sections to long articles."],
  },
  // --- GLOBEX CORPORATION DATA ---
  {
    brandId: "globex",
    moduleId: "technical-seo",
    score: 72,
    keyInsights: ["Robots.txt is correctly configured.", "Good use of canonical tags."],
    issues: ["Slow server response time.", "Several large, unoptimized CSS files."],
    recommendations: ["Upgrade server hosting or implement a CDN.", "Minify and combine CSS files to reduce requests."],
  },
  {
    brandId: "globex",
    moduleId: "content-structure",
    score: 81,
    keyInsights: ["Product schema is correctly implemented.", "Consistent content formatting."],
    issues: ["Meta descriptions are often truncated or missing.", "Inconsistent heading structure on blog posts."],
    recommendations: ["Rewrite meta descriptions to be within the character limit.", "Enforce a strict H1-H2-H3 structure for all new content."],
  },
  {
    brandId: "globex",
    moduleId: "brand-authority",
    score: 84,
    keyInsights: ["Good press coverage in industry publications.", "Active on LinkedIn."],
    issues: ["Website lacks a dedicated 'About Us' or 'Team' page.", "Backlink profile is heavily reliant on a few domains."],
    recommendations: ["Create a comprehensive 'About Us' page with team bios.", "Diversify backlink acquisition efforts."],
  },
  {
    brandId: "globex",
    moduleId: "semantic-relevance",
    score: 70,
    keyInsights: ["Strong focus on core product keywords."],
    issues: ["Content is not optimized for question-based queries.", "Fails to cover related sub-topics."],
    recommendations: ["Create FAQ sections and content that directly answers user questions.", "Broaden content strategy to include shoulder topics."],
  },
  {
    brandId: "globex",
    moduleId: "user-experience",
    score: 78,
    keyInsights: ["Simple and intuitive desktop navigation.", "Good contrast ratios."],
    issues: ["Cumulative Layout Shift (CLS) is high on some pages.", "Pop-ups are intrusive on mobile."],
    recommendations: ["Specify image dimensions to prevent layout shifts.", "Use less intrusive banners instead of pop-ups on mobile."],
  },
  {
    brandId: "globex",
    moduleId: "competitive-landscape",
    score: 68,
    keyInsights: ["Stronger brand recognition than new entrants.", "Opportunity in niche long-tail keywords."],
    issues: ["Main competitors are outranking on high-volume keywords.", "Voice search visibility is low."],
    recommendations: ["Focus on long-tail keywords to build momentum.", "Optimize content for natural language and voice search queries."],
  },
  {
    brandId: "globex",
    moduleId: "ai-readiness",
    score: 75,
    keyInsights: ["Use of structured data for events and articles.", "Content is factual and well-researched."],
    issues: ["Overly complex sentence structures.", "Key information is buried deep in paragraphs."],
    recommendations: ["Simplify language and shorten sentences.", "Use bullet points and bold text to highlight key information."],
  },
];
