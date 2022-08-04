<template>
  <div class="about">
    <!-- <h1 class="title">About Us</h1> -->
    <div class="about-add">
      <h1>Add new course</h1>
      <button class="add-btn" @click="$router.push({ name: 'ContactView' })">
        +
      </button>
    </div>
    <hr />
    <div class="users">
      <div class="user" v-for="user in users" :key="user._id">
        <figure class="img"><img :src="user.img" ></figure>
        <h1 v-text="user.userName"></h1>
        <p v-text="user.email" class="desc"></p>
        <p>{{ user.website }}</p>
        <p>Phone:{{ user.phone }}</p>
        <!-- <p>website:{{ user.website }}</p> -->
        
        <div class="btn">
          <button class="edit-btn" @click="handleEdit(user)">Edit</button>
          <button class="delete-btn" @click="deleteUser(user._id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";
export default {
  name: "AboutView",
  methods: {
    ...mapMutations(["getOldUser"]),
    ...mapActions(["getUsers", "deleteUser"]),
    handleEdit(user) {
      this.getOldUser(user);
      this.$router.push({ name: "ContactView" });
    },
  },
  computed: {
    ...mapGetters(["users"]),
  },
  created() {
    this.getUsers();
  },
};
</script>
