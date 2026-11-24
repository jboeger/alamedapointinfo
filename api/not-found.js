export default function handler(req, res) {
  const requestedPath = req.query.path ? `/${req.query.path}` : req.url || "/unknown";

  const markdownBody = [
    "# 404 — Page Not Found",
    "",
    `The requested path \`${requestedPath}\` does not exist on AlamedaPointInfo.com.`,
    "AlamedaPointInfo.com was retired in 2026 and now serves as a civic archive.",
    "",
    "- **Machine-readable index:** [llms.txt](https://alamedapointinfo.com/llms.txt)",
    "- **Sitemap:** [sitemap.xml](https://alamedapointinfo.com/sitemap.xml)",
    "- **Curated Historical Archive:** [Alameda Point Environmental Report](https://alamedapointenviro.com/alameda-point-info-the-ultimate-resource-for-the-past-present-and-future-of-alameda-point/)",
    "",
  ].join("\n");

  res.status(404);
  res.setHeader("Content-Type", "text/markdown; charset=utf-8");
  res.setHeader("Cache-Control", "public, max-age=3600");
  res.send(markdownBody);
}