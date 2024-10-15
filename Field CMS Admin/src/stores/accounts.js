import { ref } from 'vue'
import { defineStore } from 'pinia'

export const getAccountsStore = defineStore('accounts', () => {
  const impersonation_account_id = ref(null)
  
  function impersonate(impersonation_account_id) {
    this.impersonation_account_id = impersonation_account_id
  }

  function logout() { 
    if (this.impersonation_account_id) { 
        this.impersonation_account_id = null
    }
  }

  function getImpersonatingAccountId() { 
    return this.impersonation_account_id
  }

  return { impersonation_account_id, impersonate, logout, getImpersonatingAccountId }
})
