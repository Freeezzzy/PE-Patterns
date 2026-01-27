<script>
  import PatternStripeRow from '$lib/components/Pattern-StripeRow.svelte';
  import PatternZiczacRow from '$lib/components/Pattern-ZiczacRow.svelte';
  
  let currentPattern = $state('none');
  let error = $state(null);
  
  function testStripe() {
    try {
      currentPattern = 'stripe';
      error = null;
    } catch (e) {
      error = 'Stripe Error: ' + e.message;
      console.error('Stripe Error:', e);
    }
  }
  
  function testZiczac() {
    try {
      currentPattern = 'ziczac';
      error = null;
    } catch (e) {
      error = 'Ziczac Error: ' + e.message;
      console.error('Ziczac Error:', e);
    }
  }
</script>

<div style="padding: 20px; font-family: monospace;">
  <h1>Pattern Debug Page</h1>
  
  <div style="margin: 20px 0;">
    <button onclick={testStripe} style="padding: 10px 20px; margin: 5px; font-size: 16px;">
      Test Stripe Pattern
    </button>
    <button onclick={testZiczac} style="padding: 10px 20px; margin: 5px; font-size: 16px;">
      Test Ziczac Pattern
    </button>
    <button onclick={() => currentPattern = 'none'} style="padding: 10px 20px; margin: 5px; font-size: 16px;">
      Clear
    </button>
  </div>
  
  {#if error}
    <div style="background: #f88; padding: 20px; margin: 20px 0; border: 2px solid red;">
      <h2>ERROR:</h2>
      <pre>{error}</pre>
    </div>
  {/if}
  
  <div style="margin: 20px 0;">
    <strong>Current Pattern:</strong> {currentPattern}
  </div>
  
  <hr/>
  
  {#if currentPattern === 'stripe'}
    <h2>Stripe Pattern</h2>
    <div style="border: 2px solid blue; padding: 10px;">
      <PatternStripeRow />
    </div>
  {:else if currentPattern === 'ziczac'}
    <h2>Ziczac Pattern</h2>
    <div style="border: 2px solid green; padding: 10px;">
      <PatternZiczacRow />
    </div>
  {:else}
    <p>Click a button to test a pattern</p>
  {/if}
</div>
