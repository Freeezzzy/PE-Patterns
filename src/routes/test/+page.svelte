<script>
  import PatternStripeRow from '$lib/components/Pattern-StripeRow.svelte';
  import PatternZiczacRow from '$lib/components/Pattern-ZiczacRow.svelte';
  
  let selected = $state('stripe');
</script>

<div style="padding: 20px;">
  <h1>Test Page</h1>
  <button onclick={() => selected = 'stripe'}>Stripe Pattern</button>
  <button onclick={() => selected = 'ziczac'}>Ziczac Pattern</button>
  
  <hr/>
  
  {#if selected === 'stripe'}
    <h2>Stripe Pattern:</h2>
    <PatternStripeRow />
  {:else if selected === 'ziczac'}
    <h2>Ziczac Pattern:</h2>
    <PatternZiczacRow />
  {/if}
</div>
