<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | Crypto Average Down Planner</title>
  <meta name="description" content="Terms of use for the Crypto Average Down Planner, including disclaimers on financial calculations and tool usage." />
  <meta property="og:title" content="Terms and Conditions | Crypto Average Down Planner" />
  <meta property="og:description" content="Terms of use for the Crypto Average Down Planner, including disclaimers on financial calculations and tool usage." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>

    <p class="post-meta">Effective Date: December 18, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>Crypto Average Down Planner</strong> (the "Tool"), a free static web utility, you agree to these Terms and Conditions. If you disagree, please do not use the Tool. We reserve the right to update these terms at any time, with changes posted here.</p>

    <h2>2. Description of the Tool</h2>
    <p>The Tool provides client-side calculations to help estimate additional cryptocurrency purchases needed to achieve a target average cost. All processing occurs in your browser—no data is stored or transmitted.</p>

    <h2>3. No Financial Advice</h2>
    <p><strong>Important Disclaimer</strong>: The Tool is for <em>informational and educational purposes only</em>. It does <strong>not constitute financial, investment, or professional advice</strong>. Cryptocurrency markets are volatile, and averaging down carries risks including potential loss of capital. Always conduct your own research and consult qualified professionals before making investment decisions.</p>

    <h2>4. Accuracy and Limitations</h2>
    <p>While we strive for accurate calculations:</p>
    <ul>
      <li>Results depend on user-provided inputs—<strong>garbage in, garbage out</strong>.</li>
      <li>The Tool does not account for transaction fees, taxes, slippage, or market changes.</li>
      <li>Rounding follows common practices (8 decimals for amounts, 2 for prices) but may vary slightly from exchanges.</li>
      <li>We make no warranties about accuracy, completeness, or suitability.</li>
    </ul>
    <p>Use at your own risk. We are not liable for any losses arising from reliance on the Tool.</p>

    <h2>5. User Responsibilities</h2>
    <p>You agree to:</p>
    <ul>
      <li>Provide accurate inputs.</li>
      <li>Use the Tool lawfully and responsibly.</li>
      <li>Not misuse, reverse-engineer, or distribute the Tool without permission.</li>
    </ul>

    <h2>6. Intellectual Property</h2>
    <p>The Tool is open-source under applicable licenses (check repository). You may use it freely but attribute where required.</p>

    <h2>7. Limitation of Liability</h2>
    <p>To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool.</p>

    <h2>8. Governing Law</h2>
    <p>These terms are governed by general internet usage principles. Disputes, if any, should be resolved amicably.</p>

    <h2>9. Contact</h2>
    <p>Questions? Refer to the site or repository.</p>

    <p class="italic-note"><strong>Use responsibly</strong>—knowledge empowers, but decisions are yours.</p>
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