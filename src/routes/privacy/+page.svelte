<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | Crypto Average Down Planner</title>
  <meta name="description" content="Our commitment to your privacy: no data collection, fully client-side processing for the Crypto Average Down Planner." />
  <meta property="og:title" content="Privacy Policy | Crypto Average Down Planner" />
  <meta property="og:description" content="Our commitment to your privacy: no data collection, fully client-side processing for the Crypto Average Down Planner." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>

    <p class="post-meta">Effective Date: December 18, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>Crypto Average Down Planner</strong>, a free, open-source web utility designed to help cryptocurrency investors calculate averaging down strategies. This tool operates entirely in your browser as a <strong>stateless static site</strong>. We prioritize your privacy above all and adhere to a <em>zero-data-collection</em> policy. No personal information, usage data, or input values are ever collected, stored, or transmitted. This Privacy Policy explains our practices in clear terms to build trust.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The planner is built to function without any data gathering. Specifically, we do not collect:</p>
    <ul>
      <li><strong>Personal Information</strong>: Names, emails, IP addresses, or any identifiers.</li>
      <li><strong>Input Data</strong>: Your entered amounts, averages, or market prices remain strictly on your device.</li>
      <li><strong>Usage Analytics</strong>: No tracking of visits, sessions, browser details, or device information.</li>
      <li><strong>Cookies or Trackers</strong>: The site uses no cookies, local storage persistence, or third-party scripts for monitoring.</li>
    </ul>
    <p>All calculations happen <strong>client-side using JavaScript</strong>, ensuring complete isolation of your data.</p>

    <h2>3. How the Tool Operates</h2>
    <p>When you use the Crypto Average Down Planner:</p>
    <ul>
      <li><strong>Local Processing</strong>: Inputs are processed instantly in your browser with pure JavaScript functions.</li>
      <li><strong>No Transmission</strong>: Nothing is sent to servers, CDNs for data, or external services.</li>
      <li><strong>Temporary Only</strong>: Any transient browser memory clears on reset, reload, or closing the tab.</li>
    </ul>
    <p>This design makes the tool ideal for sensitive financial planning without privacy risks.</p>

    <h2>4. Third-Party Involvement</h2>
    <p>We use Bootstrap via CDN for styling, but it loads static assets only—no tracking. No analytics, ads, or external embeds exist.</p>

    <h2>5. Security Considerations</h2>
    <p>Since no data leaves your device, security focuses on your environment. We recommend using updated browsers and secure connections (HTTPS via hosting).</p>

    <h2>6. Children's Privacy</h2>
    <p>The tool is not directed at children under 13. We do not knowingly collect any data from minors.</p>

    <h2>7. International Compliance</h2>
    <p>Our no-collection approach complies with <strong>GDPR</strong>, <strong>CCPA</strong>, and similar laws by default.</p>

    <h2>8. Policy Updates</h2>
    <p>Changes will appear here with updated dates. Continued use implies acceptance.</p>

    <h2>9. Contact</h2>
    <p>For questions, refer to the project repository or site footer links.</p>

    <p class="italic-note">Your privacy is protected by design—<strong>no data means no risk</strong>.</p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }

  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>