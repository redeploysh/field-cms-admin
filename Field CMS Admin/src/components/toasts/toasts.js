import { ref } from 'vue'
import { defineStore } from 'pinia'

export const getToastsStore = defineStore('toasts', () => {
  
  const toasts = ref([
        {
            id: 'first-toast',
            headline: 'My First Toast',
            body: 'test',
            style: 'success'
        },
        {
            id: 'first-bad-toast',
            headline: 'Bad!',
            body: 'booooooo',
            style: 'warning'
        }
    ])
    
    const addToast = (style, headline, body) => {
     this.toasts.push({
        id: () => {
            return 'toast-' + Math.floor(Date.now() / 1000)
        },
        headline: headline,
        body: body,
        style: style
     }) 
    }

    const dismissToast = () => {
        toasts.value.shift()
    }

    const toast = (headline, body = null, style = 'success') => {
        this.addToast(style, headline, body)
    }

    return { toasts, addToast, dismissToast, toast }
})


