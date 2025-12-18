<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    { href: '/blog/posts/post1', title: 'What is Averaging Down in Crypto?', description: 'An introduction to the averaging down strategy and why it’s a popular technique among cryptocurrency holders during market dips.' },
    { href: '/blog/posts/post2', title: 'How the Average Down Calculation Works', description: 'A clear breakdown of the mathematical formula used to determine exactly how much more crypto to buy to reach your target average price.' },
    { href: '/blog/posts/post3', title: 'Using the Crypto Average Down Planner', description: 'Step-by-step guide on entering your current holdings, average price, target average, and market price to get instant results.' },
    { href: '/blog/posts/post4', title: 'Common Scenarios and Examples', description: 'Real-world examples showing how averaging down applies to Bitcoin, Ethereum, and altcoins in volatile markets.' },
    { href: '/blog/posts/post5', title: 'When Not to Average Down', description: 'Important warnings and logical checks: why the tool prevents calculations when market price isn’t below target average.' },
    { href: '/blog/posts/post6', title: 'Precision and Rounding Explained', description: 'Details on how the planner handles decimal places for crypto amounts and fiat costs to ensure accurate, readable results.' },
    { href: '/blog/posts/post7', title: 'Best Practices for Dollar-Cost Averaging', description: 'Tips on combining this planner with long-term strategies, risk management, and emotional discipline in crypto investing.' },
  ];
</script>

<svelte:head>
  <title>Blog | Crypto Average Down Planner</title>
  <meta name="description" content="Insights, tutorials, and strategies for using the Crypto Average Down Planner to make smarter buying decisions in cryptocurrency markets." />
</svelte:head>

<div class="container mt-5 blog-index">
  <header class="text-center mb-5">
    <h1 class="display-4">Blog: Crypto Average Down Insights</h1>
    <p class="lead text-muted">
      Practical guides, formula explanations, and investment strategies for using the Crypto Average Down Planner effectively.
    </p>
  </header>

  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
    {#each posts as post}
      <div class="col">
        <a href="{base}{post.href}" class="text-decoration-none">
          <div class="card h-100 shadow-sm hover-shadow transition">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title text-primary">{post.title}</h5>
              <p class="card-text text-secondary flex-grow-1">{post.description}</p>
              <span class="text-accent mt-2 fw-bold">Read more →</span>
            </div>
          </div>
        </a>
      </div>
    {/each}
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }

  .card {
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.1) !important;
  }

  .text-accent {
    color: #007bff;
  }

  .text-accent:hover {
    color: #0056b3;
  }
</style>