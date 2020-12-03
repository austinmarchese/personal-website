<template>
  <div class="w-full max-w-xl">
    <h1 class="subtitle">
      Contact Us
    </h1>
    <!-- TODO: Better Success handling -->
    <form
      class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      name="contact-form"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
       @submit.prevent="handleSubmit"
    >
    <input type="hidden" name="form-name" value="contact-form" />
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="email"
        >Email</label>
        <input
          id="email"
          v-model="email"
          name="email"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="email"
          placeholder="satoshi@nakamoto.com"
          data-hj-whitelist
        >
      </div>
      <div class="mb-4">
        <label
          class="block text-gray-700 text-xl font-bold mb-2"
          for="name"
        >Name</label>
        <input
          id="name"
          v-model="name"
          name="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Satoshi Nakamoto"
          data-hj-whitelist
        >
      </div>
      <div class="flex items-center justify-between">
        <button
          :disabled="!canSubmit"
          :class="
            `${!canSubmit &&
              'opacity-50 cursor-not-allowed'} bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full`
          "
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import axios from "axios"

export default {
  name: 'EmailListForm',
  data () {
    return {
      email: '',
      name: '',
    }
  },
  computed: {
    canSubmit () {
      return !!(this.email && this.name)
    }
  },

 methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit () {
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      console.log("Ye")
      axios.post(
        "/",
        this.encode({
          "form-name": "contact-form",
          "email": this.email,
          "name": this.name,
        }),
        axiosConfig
      );
    }
  }

}
</script>
<style></style>