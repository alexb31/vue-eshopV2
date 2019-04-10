<template>
  <div>
    <v-text-field
      v-model="value"
      @keyup="search(value)"
      class="ml-2"
      label="Search..."
      append-icon="clear"
      hide-details
    ></v-text-field>
  </div>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      value: ""
    };
  },
  methods: {
    search(value) {
      if (value.length > 0) {
        console.log("True");
      }
    }
  }
};
</script>