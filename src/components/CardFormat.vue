<template>
<div>
<b-container class="content-container">
  <b-card no-body bg-variant="dark" text-variant="white" class="overflow-hidden">
                    <b-row no-gutters>
                    <b-card-body :title="header">
                        <b-card-text>
                          <p class="lead">
	“{{quote}}”<br>- {{author}}
</p>
                        </b-card-text>
                    </b-card-body>
                </b-row>
                  <hr class="my-4">
    <b-row class="text-center">
  </b-row>
  <b-row class="text-center">
    <b-col></b-col>
    <b-col cols="12">
        <slot></slot>
        </b-col>
    <b-col></b-col>
  </b-row>
  </b-card>
</b-container>
</div>
</template>

<script>

export default {
  name: 'CardFormat',
  components: {
  },
  props: {
    header: {
      type: String,
      required: false,
      default: "Header",
    },
        quote: {
      type: String,
      required: false,
      default: "Quote",
    },
            author: {
      type: String,
      required: false,
      default: "Author",
    },
  },
  computed: {
  },
};
</script>
<style>
.content-container {
}

.btn-primary {
    color: #fff;
    background-color: red;
    border-color: #007bff;
}
</style>
