<template>
  <li class="list-group-item">
    <div class="text d-flex flex-row">
      <a href="profile.html">Vlad</a>: {{ item.text }}
      <button
        @click="deleteItem()"
        style="padding: 0px; margin-left: 10px"
        id="delete"
      >
        ×
      </button>
    </div>
    <div style="font-size: 10px">{{ item.time }}</div>
  </li>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
    },
  },
  methods: {
    deleteItem() {
      this.$store.commit("DELETE", this.id);
    },
  },
};
</script>