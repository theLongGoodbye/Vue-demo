<template>
  <div class="row">
    <input
      class="input"
      :class="inputClass"
      :name="name"
      :type="type"
      :value="text"
      :placeholder="placeholder"
      @input="update"
    />
  </div>
</template>
<script>
export default {
  computed: {
    inputClass() {
      return {
        invalid: this.invalid
      };
    }
  },
  model: { 
 prop: 'text', 
 event: 'update', 
},
  methods: {
    update(event) {
      this.$emit('update', event.currentTarget.value)
    }
  },
  props: {
    name: {
      type: String
    },
    type: {
      type: String,
      default: "text"
    },
    text: { 
 required: true, 
 },
    placeholder: {
      type: String
    },
    invalid: {
      type: Boolean,
      default: false
    }
  }
};
</script>