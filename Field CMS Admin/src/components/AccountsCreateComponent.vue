<script>
export default {
    props: {
        title: String
    }
}
</script>

<template>
    <div class="pt-5 pb-5">
        <div class="title">Create an Account</div>
        <p class="help">Creates a FieldCMS Account.  Users are organized under accounts, as are sites, pages, fieldsets, and records.</p>
    </div>
    <div class="form">
        <div class="field">
            <label class="label">ID *</label>
            <div class="control">
                <input name="id" class="input" type="text">
            </div>
            <p class="help is-success">Unique Identifier - One Word</p>
        </div>
        <div class="field">
            <label class="label">Name *</label>
            <div class="control">
                <input name="name" class="input" type="text">
            </div>
            <p class="help is-success">Human-readable name</p>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button @click="createAccount()" class="button is-primary">Create</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>
    </div>
</template>