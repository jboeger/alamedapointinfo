export default function handler(req, res) {
    const markdownBody = [
      "# Alameda Point Info (2009–2026)",
      "",
      "> The past, present, and future of Alameda Point.",
      "",
      "Located in the heart of the Bay Area on the island City of Alameda, Alameda Point (a former naval air station) is a neighborhood in transition. Creative reuse of military buildings and plans for new construction are in progress. Offering panoramic views of the San Francisco skyline, Alameda Point is home to historic buildings, important wildlife habitat, and a unique shoreline and open space landscape on the San Francisco Bay.",
      "",
      "## About the Project (2009–2026)",
      "",
      "AlamedaPointInfo.com was started by a small volunteer group of Alameda residents who believed that, in order for good decisions to be made about the future of Alameda Point, the public needs easy access to important information. The AlamedaPointInfo website was their contribution to that effort.",
      "",
      "The original version of the website was launched in July of 2009. It provided daily updates on city meetings and news stories. It was a central repository of key documents regarding redevelopment, years before the city set up its own webpage.",
      "",
      "The site was retired in 2026. The historical record of events from that effort is distilled in a timeline of events, along with various key documents and maps, and are now hosted on the **Alameda Point Environmental Report**.",
      "",
      "## Links & Resources",
      "",
      "- **Curated Archive & Timeline:** [Alameda Point Environmental Report](https://alamedapointenviro.com/alameda-point-info-the-ultimate-resource-for-the-past-present-and-future-of-alameda-point/)",
      "- **About:** [https://alamedapointinfo.com/about](https://alamedapointinfo.com/about)",
      "- **Contact:** [https://alamedapointinfo.com/contact](https://alamedapointinfo.com/contact)",
      "- **Privacy Policy:** [https://alamedapointinfo.com/privacy](https://alamedapointinfo.com/privacy)",
      "- **Machine-Readable Index:** [llms.txt](https://alamedapointinfo.com/llms.txt)",
      "- **Sitemap:** [sitemap.xml](https://alamedapointinfo.com/sitemap.xml)",
      "",
    ].join("\n");
  
    res.status(200);
    res.setHeader("Content-Type", "text/markdown; charset=utf-8");
    res.setHeader("Vary", "Accept");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(markdownBody);
  }