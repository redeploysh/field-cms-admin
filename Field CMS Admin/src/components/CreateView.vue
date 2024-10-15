<script>
export default {
    props: {
        title: String
    }
}
</script>

<template>
    
    <div class="pt-5 pb-5" style="display: flex; width: 100%; justify-content: space-between;">
        <div class="title">Create Field Set</div>
    </div>
    <div class="form">
        <div class="field">
            <label class="label">Name *</label>
            <div class="control">
                <input class="input" type="text">
            </div>
            <p class="help is-success">CamelCase name for this set of fields.  Must be unique in system.  Reservered Fields names: "Field", "Fields", or "View".</p>
        </div>
        <div class="field">
            <label class="label">Semantic Version Number *</label>
            <div class="control">
                <input class="input is-success" type="text" placeholder="Text input" value="1.0.0">
            </div>
        </div>
        <div class="field">
            <label class="label">Primary Index Field Name *</label>
            <div class="control">
                <input class="input" type="text">
            </div>
            <p class="help is-success">Required Primary Index Name for first model - data in field must be a string and must be unique (i.e. email)</p>
        </div>
        <div class="field">
            <label class="label">Secondary Index Field Name</label>
            <div class="control">
                <input class="input" type="text">
            </div>
            <p class="help is-success">Optional field name for Secondary index</p>
        </div>

        [FIXME: Add Relationships]

        <div class="field is-grouped">
            <div class="control">
                <button class="button is-primary">Create</button>
            </div>
            <div class="control">
                <button class="button is-link is-light">Cancel</button>
            </div>
        </div>
    </div>
</template>