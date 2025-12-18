<script lang="ts">
  import { base } from '$app/paths';
  import { fly } from 'svelte/transition';
  import '../app.css';

  const paypalUsername = 'AxelLab427';
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  const currentYear = new Date().getFullYear();

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }
  function closeDropdown() {
    isDropdownOpen = false;
  }

  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };
    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<header class="custom-navbar fixed-top">
  <nav class="container-fluid px-4 d-flex justify-content-between align-items-center">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" class="d-flex align-items-center text-decoration-none">
        <img src="{base}/AxelLab-Logo.ico" alt="Logo" style="height: 40px;" class="me-2" />
        <span class="fw-bold fs-4" style="color: var(--fern-green);">AxelBase</span>
      </a>

      <div class="position-relative ms-3" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button d-flex align-items-center gap-2 text-white" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20,6h-3V4c0-1.1-0.9-2-2-2H9C7.9,2,7,2.9,7,4v2H4C2.9,6,2,6.9,2,8v11c0,1.7,1.3,3,3,3h14c1.7,0,3-1.3,3-3V8C22,6.9,21.1,6,20,6z M9,4h6v2H9V4z M20,19c0,0.6-0.4,1-1,1H5c-0.6,0-1-0.4-1-1V8h16V19z"/>
          </svg>
          Buy me a coffee
        </button>

        {#if isDropdownOpen}
          <div class="dropdown-menu show shadow p-2 border-0 mt-2" 
               style="border-radius: 15px; min-width: 120px;" 
               transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a class="dropdown-item rounded-3 py-2 fw-bold text-center"
                 href="https://paypal.me/{paypalUsername}/{amount}"
                 target="_blank" rel="noopener noreferrer"
                 on:click={closeDropdown}>
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

    <ul class="nav gap-2 d-none d-lg-flex">
      <li><a class="nav-link" href="{base}/">Home</a></li>
      <li><a class="nav-link" href="{base}/#about">About</a></li>
      <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
      <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
      <li><a class="nav-link" href="{base}/blog">Blog</a></li>
    </ul>
  </nav>
</header>

<main class="container">
  <slot />
</main>

<footer class="releative bg-white border-top py-3">
  <div class="container d-flex flex-column flex-md-row justify-content-between align-items-center">
    <p class="mb-0 text-muted">&copy; {currentYear} AxelBase Crypto Average Down Planner</p>
    <div class="d-flex gap-4">
      <a href="{base}/privacy" class="text-decoration-none text-muted small">Privacy Policy</a>
      <a href="{base}/terms" class="text-decoration-none text-muted small">Terms of Service</a>
    </div>
  </div>
</footer>