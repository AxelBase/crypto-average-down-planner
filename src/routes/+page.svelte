<script>
  import { calculateAverageDown } from '$lib/calculator.js';
  import { base } from '$app/paths';
  import { fade } from 'svelte/transition';

  let currentAmount = '';
  let currentAverage = '';
  let targetAverage = '';
  let marketPrice = '';
  let result = null;
  let error = '';

  function handleSubmit(event) {
    event.preventDefault();
    error = '';
    result = null;
    const calcResult = calculateAverageDown({ currentAmount, currentAverage, targetAverage, marketPrice });
    if (calcResult.error) { error = calcResult.error; }
    else { result = calcResult; }
  }

  function resetForm() {
    currentAmount = currentAverage = targetAverage = marketPrice = '';
    result = error = null;
  }
</script>

<svelte:head>
  <title>Crypto Average Down Planner</title>
  <meta name="description" content="Free, privacy-first tool to calculate exactly how much cryptocurrency to buy to lower your average cost during market dips." />
  <meta property="og:title" content="Crypto Average Down Planner" />
  <meta property="og:description" content="Free, privacy-first tool to calculate exactly how much cryptocurrency to buy to lower your average cost during market dips." />
  <meta property="og:url" content="{base}/" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="row justify-content-center">
  <div class="col-md-8 col-lg-6">
    <section id="home" class="py-5">
      <h1 class="text-center mb-4 fw-bold" style="color: var(--fern-green);">Crypto Average Down Planner</h1>
    
      <div class="card p-4 shadow-sm">
        <form on:submit={handleSubmit}>
          <div class="mb-3">
            <label for="currentAmount" class="form-label fw-semibold">Current Amount Held</label>
            <input type="number" class="form-control" id="currentAmount" bind:value={currentAmount} required step="any">
          </div>
          <div class="mb-3">
            <label for="currentAverage" class="form-label fw-semibold">Current Average Price ($)</label>
            <input type="number" class="form-control" id="currentAverage" bind:value={currentAverage} required step="any">
          </div>
          <div class="mb-3">
            <label for="targetAverage" class="form-label fw-semibold">Target Average Price ($)</label>
            <input type="number" class="form-control" id="targetAverage" bind:value={targetAverage} required step="any">
          </div>
          <div class="mb-4">
            <label for="marketPrice" class="form-label fw-semibold">Current Market Price ($)</label>
            <input type="number" class="form-control" id="marketPrice" bind:value={marketPrice} required step="any">
          </div>
          <div class="d-flex gap-2">
            <button type="submit" class="btn btn-primary w-100 py-3">Calculate Now</button>
            <button type="button" class="btn btn-outline-secondary rounded-pill px-4" on:click={resetForm}>Reset</button>
          </div>
        </form>
      </div>

      {#if error}
        <div class="alert alert-danger mt-4 rounded-4" transition:fade>{error}</div>
      {/if}

      {#if result}
        <div class="card mt-4 bg-white border-0 shadow" transition:fade>
          <div class="card-body p-4">
            <h5 class="fw-bold mb-3" style="color: var(--fern-green);">Results</h5>
            <div class="row g-3">
                <div class="col-6"><small class="text-muted d-block">Amount to Buy</small> <strong>{result.amountToBuy} units</strong></div>
                <div class="col-6"><small class="text-muted d-block">New Total</small> <strong>{result.newTotalAmount} units</strong></div>
                <div class="col-6"><small class="text-muted d-block">New Total Cost</small> <strong>${result.newTotalCost}</strong></div>
                <div class="col-6"><small class="text-muted d-block">New Average</small> <strong>${result.newAverage}</strong></div>
            </div>
            <hr>
            <p class="card-text small text-muted italic">{result.explanation}</p>
          </div>
        </div>
      {/if}
    </section>

    <hr class="my-5">

    <section id="about" class="py-5">
      <h2 class="fw-bold" style="color: var(--fern-green);">About the Crypto Average Down Planner</h2>
      <p>The Crypto Average Down Planner is a free, privacy-focused web tool designed specifically for cryptocurrency investors who want to lower their average cost per unit during market dips. Built as a completely client-side, stateless static application, it empowers users to make precise, data-driven decisions without sending any information to servers. All calculations happen instantly in your browser, ensuring full control and confidentiality over your inputs.</p>

      <p>Averaging down—also known as cost averaging into a falling position—is a time-tested strategy used by long-term holders to reduce their breakeven price when an asset they believe in experiences a temporary decline. Instead of trying to time the exact bottom, investors gradually increase their position at lower prices. This approach aligns especially well with the volatile nature of cryptocurrencies like Bitcoin, Ethereum, and various altcoins, where sharp corrections are common.</p>

      <p>This planner addresses a frequent question among holders: <em>“How much more do I need to buy at the current price to bring my average down to my desired target?”</em> Manual calculations are prone to error, especially with decimal-heavy crypto amounts and fluctuating prices. The tool eliminates guesswork by using a mathematically proven formula that balances your existing position with new purchases to achieve exactly the target average you specify.</p>

      <p>Key principles behind the tool include accuracy, transparency, and user safety. It performs rigorous input validation—requiring positive numbers, ensuring the target average is below the current average, and confirming the market price is lower than the target—to prevent impossible or counterproductive results. When conditions aren’t met, clear error messages guide you toward valid scenarios.</p>

      <p>Privacy is non-negotiable. No data—neither your holdings, averages, nor calculation history—is ever stored, logged, or transmitted. There are no cookies, analytics, or third-party trackers beyond static Bootstrap styling. You can even use the tool offline after the initial load, making it reliable in any environment.</p>

      <p>The output is designed for immediate action: it shows the exact amount to buy (to eight decimal places, standard for crypto precision), new total holdings, new total cost, and verified new average price. A plain-language explanation summarizes the recommended action, helping both beginners and experienced investors execute their strategy confidently.</p>

      <p>Whether you're holding through a bear market, scaling into a promising altcoin, or simply exploring cost-averaging scenarios, this planner provides the mathematical clarity needed to act with conviction. It supports responsible, informed decision-making without offering financial advice—results are purely computational and depend entirely on the accuracy of your inputs.</p>

      <p>By combining precision, privacy, and simplicity, the Crypto Average Down Planner serves as a trusted companion for anyone navigating the opportunities presented by cryptocurrency market cycles.</p>
    </section>

    <hr class="my-5">

    <section id="how-to-use" class="py-5">
      <h2 class="fw-bold" style="color: var(--fern-green);">How to Use the Crypto Average Down Planner</h2>
      <p>Using the planner is straightforward and requires only four inputs. The entire process happens instantly in your browser, delivering accurate results in seconds. Follow this step-by-step guide to get the most out of the tool.</p>

      <p>First, gather accurate data from your exchange, wallet, or portfolio tracker. You’ll need your current cryptocurrency holding amount and your existing average purchase price in USD (or your base fiat currency). These values form the foundation of the calculation.</p>

      <p>Next, decide on your <strong>target average price</strong>—the lower cost basis you aim to achieve. This should be realistic: higher than the current market price but lower than your current average. Many investors choose a round number or a psychologically significant level based on their conviction in the asset.</p>

      <p>Then check the <strong>current market price</strong> of the cryptocurrency. Use a reliable source like a major exchange spot price. The tool requires this to be below your target average; otherwise, buying more would raise, not lower, your average.</p>

      <p>Enter the values into the form:</p>
      <ul>
        <li><strong>Current Amount Held</strong>: Your total units (e.g., 1.25 BTC or 15.7 ETH). Supports precise decimals.</li>
        <li><strong>Current Average Price ($)</strong>: Your existing cost basis per unit.</li>
        <li><strong>Target Average Price ($)</strong>: The desired lower average you want to reach.</li>
        <li><strong>Current Market Price ($)</strong>: The price at which you would execute the additional buy.</li>
      </ul>

      <p>Click <strong>Calculate Now</strong>. The tool instantly computes the exact amount you need to purchase to hit your target. Results include:</p>
      <ul>
        <li>Amount to buy (to 8 decimal places for crypto precision)</li>
        <li>New total holdings</li>
        <li>New total cost in USD</li>
        <li>Confirmed new average price (matches your target exactly)</li>
        <li>A clear explanation sentence summarizing the action</li>
      </ul>

      <p>The planner includes smart validation. If inputs are invalid—for example, negative numbers, target not below current average, or market price too high—you’ll receive a clear error message. This prevents mistaken calculations and encourages logical scenarios.</p>

      <p>Use the <strong>Reset</strong> button to clear all fields and start fresh for new scenarios. You can run multiple calculations quickly to test different target averages or market price assumptions.</p>

      <p><em>Pro tip</em>: Always double-check your current average from your actual transaction history. Consider transaction fees separately, as they slightly increase effective cost (the tool shows ideal amounts before fees). For best results, use conservative targets and maintain cash reserves for potential further dips.</p>

      <p>The responsive design works seamlessly on mobile devices, so you can plan on the go. Since everything runs locally, your data never leaves your device—perfect for privacy-conscious users.</p>

      <p>Whether you're averaging down on Bitcoin during a correction, scaling into Ethereum after a pullback, or managing an altcoin position, this tool gives you mathematical clarity to execute your strategy with precision and confidence.</p>
    </section>

    <hr class="my-5">

    <section id="faq" class="py-5 mb-5">
      <h2 class="fw-bold" style="color: var(--fern-green);">Frequently Asked Questions</h2>

      <div class="accordion" id="faqAccordion">
        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
              Is this tool providing financial advice?
            </button>
          </h3>
          <div id="faq1" class="accordion-collapse collapse show" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              <strong>No.</strong> This is strictly a mathematical calculation tool. It performs objective computations based on the inputs you provide and does not recommend buying, selling, or holding any asset. Cryptocurrency investing carries significant risk. Always conduct your own research and consider consulting a financial advisor.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
              Is my data private and secure?
            </button>
          </h3>
          <div id="faq2" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes, completely. The tool runs 100% client-side in your browser. No data is sent to any server, stored, logged, or shared. There are no cookies, analytics, or tracking. Your inputs disappear when you reset or close the page.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
              Why can't I calculate when market price is above target average?
            </button>
          </h3>
          <div id="faq3" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Buying at a higher price than your target would increase your average cost, not decrease it. The tool blocks such inputs to prevent illogical results and encourage valid averaging-down scenarios.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
              Does the tool account for trading fees or taxes?
            </button>
          </h3>
          <div id="faq4" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              No. Results show ideal mathematical amounts before fees, taxes, or slippage. In practice, add a small buffer to cover exchange fees, which slightly raise your effective cost.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
              Can I use this for any cryptocurrency or token?
            </button>
          </h3>
          <div id="faq5" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes. The formula works for any asset priced in fiat (usually USD). Whether Bitcoin, Ethereum, Solana, or a smaller altcoin, as long as you have accurate price data, the calculation applies.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq6">
              Why are crypto amounts shown to 8 decimals?
            </button>
          </h3>
          <div id="faq6" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Eight decimal places match Bitcoin’s smallest unit (satoshi) and provide ample precision for nearly all cryptocurrencies and position sizes while keeping output readable.
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h3 class="accordion-header">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq7">
              Can I use this offline or on mobile?
            </button>
          </h3>
          <div id="faq7" class="accordion-collapse collapse" data-bs-parent="#faqAccordion">
            <div class="accordion-body">
              Yes to both. After initial load, the static site works offline. The responsive design adapts perfectly to phones and tablets.
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</div>

<style>
  .italic {
    font-style: italic;
  }
</style>