<script>
import { getAccountsStore } from './stores/accounts.js'
import ToastsComponent from '@/components/toasts/ToastsComponent.vue'

export default {

  computed: {
    accountsStore: () => { 
      const accountsStore = getAccountsStore()
      return accountsStore
    }
  },

  methods: {
    isImpersonating() {
      if (this.accountsStore.getImpersonatingAccountId() !== null) { 
        return true
      }
      return false
    }
  },

  components: {
    'Toasts': ToastsComponent
  }
}

</script>

<template>
  <div class="container">
    
    <!-- NAVIGATION -->
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
          <a class="navbar-item is-size-4 has-text-weight-bold" href="/">
              <img src="/field-cms-logo-prototype.png" /> FieldCMS
          </a>
          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
          </a>
      </div>

        <div id="navbarBasicExample" class="navbar-menu">
          <div class="navbar-start">
              <a v-if="isImpersonating()" href="/accounts" class="navbar-item">
                Accounts
              </a>  
              <!-- <a href="/" class="navbar-item">
                  Fields
              </a>
              <a href="/" class="navbar-item">
                  Records
              </a> -->
            </div>
        </div>

      </nav>
      <Toasts></Toasts> 
      <RouterView />
  </div>
</template>

