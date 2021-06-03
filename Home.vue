<template>
  <div class="card container" style="width: 18rem">
    <img src="run.jpg" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title">Користь Бігу</h5>
      <p class="card-text">
        Цей блог допоможе вам ознайомитися з найцікавішими і найбільшими
        дослідженнями на тему бігу і заткнути за пояс будь-якого читача
        клікбейтних заголовків.
      </p>
    </div>
    <ul class="list-group list-group-flush">
      <comment
        v-for="item in $store.state.model.items"
        :key="item"
        v-bind:item="item"
      />
    </ul>
    <div>
      <div class="container">
        <input
          v-model="text"
          type="text"
          class="comment-input"
          placeholder="Comment"
          name="comment"
          required
        />
        <button @click="addComment()" type="submit" class="registerbtn">
          Comment
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import comment from "../components/comment.vue";
export default {
  name: "Home",
  data() {
    return {
      text: "",
    };
  },
  components: { comment },
  methods: {
    addComment() {
      console.log(this.text);
      this.$store.commit("ADD_COMMENT", this.text);
    },
  },
};
</script>
