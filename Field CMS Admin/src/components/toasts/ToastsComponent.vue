<script setup>
import { getToastsStore } from './toasts';
import { storeToRefs } from 'pinia';

const toastsStore = getToastsStore();
const { toasts } = storeToRefs(toastsStore);

const dismiss = () => {
  toastsStore.dismissToast()
};

</script>

<template>
  <div id="toasts">
    <div v-if="toasts.length > 0">
      <article :id="toasts[0].id" :class="'message is-' + toasts[0].style">
        <div class="message-header">
          <p class=""><strong>{{ toasts[0].headline }}</strong></p>
          <button class="delete" aria-label="delete" @click="dismiss()"></button>
        </div>
        <div class="message-body">{{ toasts[0].body }}</div>
      </article>
      <article v-if="toasts.length > 1" :id="toasts[0].id" :class="'message is-' + toasts[1].style">
        <div class="message-header">
          <p v-html="toasts[1].healine"></p>
        </div>
      </article>
      <div id="toasts-spacer" v-if="toasts.length == 1" style="height: 6em;"></div>
      <div id="toasts-spacer" v-if="toasts.length >= 2" style="height: 2em;"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  #toasts {
    display: block;
    position: fixed;
    width: 400px;
    z-index: 1000;
    bottom: -6em;
    right: 2em;
    filter: drop-shadow(-4px 4px 12px #888);

    > div { 
      margin-bottom: 1em;
    }
  }
</style>
