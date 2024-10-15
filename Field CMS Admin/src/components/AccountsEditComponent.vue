<script>
import { getAccountsStore } from '@/stores/accounts';
import { getToastsStore } from './toasts/toasts';

export default {
    props: {
        title: String
    },
    data: () => { 
        return {
            account: {
                id: 'field-cms-application',
                name: 'Field CMS Application'
            }
        }
    },
    computed: { 
        accountsStore: () => {
            const accountsStore = getAccountsStore()
            return accountsStore
        }
    },

    methods: {
        impersonate() { 
            this.accountsStore.impersonate(this.account.id)
            const toastsStore = getToastsStore()
            toastsStore.toasts.push({
                id: 'impoerstation-' + this.account.id + '-' + Date.now(),
                headline: 'You are now impersonating the <strong>' + this.account.name + '</strong> admin.',
                body: 'You may exit this mode by logging out.  You will be redirected to your primary account and the account edit screen.',
                style: 'success'
            })
        }
    }
}
</script>

<template>
    <div class="pt-5 pb-5">
        <div class="title">Edit Account</div>
        <div>
            <button class="button is-info" @click="impersonate()">Impersonate</button>
            <p class="help">Impersonation allows primary FieldCMS admins to preview the FieldCMS administration website as an admin user of this account would see it.  To exit this mode, log out, and you will be taken back to the primary FieldCMS Admin account.</p>
        </div>
    </div>
    <div class="form">
        <div class="field">
            <label class="label">ID *</label>
            <div class="control">
                <input name="id" class="input" type="text" :value="this.account.id">
            </div>
            <p class="help is-success">Unique Identifier - One Word</p>
        </div>
        <div class="field">
            <label class="label">Name *</label>
            <div class="control">
                <input name="name" class="input" type="text" :value="this.account.name">
            </div>
            <p class="help is-success">Human-readable name</p>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button @click="createAccount()" class="button is-primary">Save</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>
    </div>
</template>