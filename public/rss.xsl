<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" indent="yes" doctype-system="about:legacy-compat"/>
  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex"/>
        <title><xsl:value-of select="/rss/channel/title"/> &#8212; RSS</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;1,400&amp;family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&amp;family=Space+Grotesk:wght@400;500;600&amp;display=swap" rel="stylesheet"/>
        <style>
          :root {
            --bg: #dedad4;
            --bg-surface: #e2e0db;
            --text: #1a1d24;
            --text-dim: #5a6070;
            --text-ghost: #9099a8;
            --accent: #2a6dd4;
            --rule: rgba(0,0,0,0.08);
            --border: rgba(0,0,0,0.12);
            --serif: 'Cormorant Garamond', Georgia, serif;
            --mono: 'IBM Plex Mono', 'Courier New', monospace;
            --display: 'Space Grotesk', 'Arial', sans-serif;
          }
          * { box-sizing: border-box; }
          html, body {
            margin: 0;
            padding: 0;
            background: var(--bg);
            color: var(--text);
            font-family: var(--mono);
            font-size: 14px;
            line-height: 1.7;
            -webkit-font-smoothing: antialiased;
          }
          main {
            max-width: 720px;
            margin: 0 auto;
            padding: 48px 24px 96px;
          }
          .back {
            display: inline-block;
            font-family: var(--mono);
            font-size: 13px;
            font-weight: 500;
            color: var(--accent);
            text-decoration: none;
            padding: 6px 14px;
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 5px;
            box-shadow: 0 1px 2px rgba(0,0,0,0.04);
            transition: all 0.15s;
            margin-bottom: 40px;
          }
          .back:hover {
            background: #eceae5;
            transform: translateY(-1px);
          }
          .label {
            font-family: var(--display);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-ghost);
            margin: 0 0 12px;
          }
          h1 {
            font-family: var(--serif);
            font-size: clamp(32px, 6vw, 48px);
            font-weight: 400;
            line-height: 1.1;
            letter-spacing: -0.01em;
            color: var(--text);
            margin: 0 0 16px;
          }
          .desc {
            font-family: var(--serif);
            font-size: 18px;
            font-style: italic;
            font-weight: 300;
            color: var(--text-dim);
            line-height: 1.5;
            margin: 0 0 32px;
          }
          .hint {
            font-family: var(--mono);
            font-size: 12px;
            color: var(--text-ghost);
            margin: 0 0 8px;
          }
          .feed-url {
            display: block;
            font-family: var(--mono);
            font-size: 13px;
            color: var(--text);
            background: var(--bg-surface);
            border: 1px solid var(--border);
            border-radius: 5px;
            padding: 12px 16px;
            margin: 0 0 56px;
            word-break: break-all;
            user-select: all;
          }
          .items-label {
            font-family: var(--display);
            font-size: 11px;
            font-weight: 600;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-ghost);
            border-top: 1px solid var(--rule);
            padding-top: 24px;
            margin: 0 0 8px;
          }
          .items {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .items li {
            padding: 24px 0;
            border-bottom: 1px solid var(--rule);
          }
          .items li:last-child {
            border-bottom: none;
          }
          .item-title-link {
            text-decoration: none;
            color: var(--text);
            display: inline-block;
            margin-bottom: 6px;
          }
          .item-title-link:hover .item-title {
            color: var(--accent);
          }
          .item-title {
            font-family: var(--serif);
            font-size: 24px;
            font-weight: 500;
            line-height: 1.25;
            letter-spacing: -0.005em;
            transition: color 0.15s;
          }
          .item-date {
            font-family: var(--mono);
            font-size: 11px;
            color: var(--text-ghost);
            letter-spacing: 0.04em;
            margin: 0 0 10px;
          }
          .item-desc {
            font-family: var(--mono);
            font-size: 13px;
            color: var(--text-dim);
            line-height: 1.7;
            margin: 0;
          }
          @media (max-width: 640px) {
            main { padding: 32px 16px 72px; }
            .back { margin-bottom: 32px; }
            h1 { font-size: 32px; }
            .desc { font-size: 16px; margin-bottom: 24px; }
            .feed-url { margin-bottom: 40px; font-size: 12px; }
            .item-title { font-size: 20px; }
          }
        </style>
      </head>
      <body>
        <main>
          <a href="/" class="back">&#8592; Back to archive</a>
          <p class="label">RSS Feed</p>
          <h1><xsl:value-of select="/rss/channel/title"/></h1>
          <p class="desc"><xsl:value-of select="/rss/channel/description"/></p>
          <p class="hint">Paste this URL into your feed reader to subscribe:</p>
          <code class="feed-url"><xsl:value-of select="/rss/channel/link"/>rss.xml</code>
          <p class="items-label">Entries (<xsl:value-of select="count(/rss/channel/item)"/>)</p>
          <ol class="items">
            <xsl:for-each select="/rss/channel/item">
              <li>
                <a class="item-title-link">
                  <xsl:attribute name="href"><xsl:value-of select="link"/></xsl:attribute>
                  <span class="item-title"><xsl:value-of select="title"/></span>
                </a>
                <p class="item-date"><xsl:value-of select="pubDate"/></p>
                <p class="item-desc"><xsl:value-of select="description"/></p>
              </li>
            </xsl:for-each>
          </ol>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
