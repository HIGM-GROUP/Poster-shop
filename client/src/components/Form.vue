<template>
  <div class="form">
    <form class="form-content" @submit.prevent="handleSubmit">
      <h1>Add new Course</h1>
      <div class="form-controller">
        <input
          type="text"
          maxlength="20"
          placeholder="write course Name"
          v-model="user.userName"
          required
        />
        <input
          type="text"
          placeholder="write description"
          v-model="user.email"
          required
        />
      </div>
      <div class="form-controller">
        <input
          type="number"
          maxlength="20"
          placeholder="write your number"
          required
          v-model="user.phone"
        />
        <input
          type="text"
          maxlength="20"
          placeholder="write teacher name"
          v-model="user.website"
          required
        />
      </div>
      <div>
        <input type="file" accept="image/*" v-on:change="handleChange">
      </div>
      <button type="submit">
        {{ isUpdate ? "Update Course" : "Add New Course" }}
      </button>
      <button @click="handleClose" v-if="isUpdate">Cancel</button>
    </form>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from "vuex";

export default {
  name: "FormComp",
  data: () => ({
    user: { userName: "", email: "", phone: "", website: "", img:"" },
  }),
  mounted() {
    if (this.oldUser) {
      this.user = this.oldUser;
    }
  },
  methods: {
    ...mapActions(["addUser", "updateUser"]),
    handleChange(e){
      console.log(e)
      const file = e.target.files[0];
      if(file){
        
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload=()=>this.user.img=reader.result;
        reader.onerror=(err)=>console.log(err);
      }
    },
    handleSubmit() {
      if (this.isUpdate) {
        this.updateUser(this.oldUser);
        this.$router.push({ name: "AboutView" });
      } else {
        this.addUser(this.user);
        this.$router.push({ name: "AboutView" });
      }
    },
    handleClose() {
      this.removeOldUser;
      this.$router.push({ name: "AboutView" });
    },
  },
  computed: {
    ...mapGetters(["oldUser", "isUpdate"]),
    ...mapMutations(["removeOldUser"]),
  },
};
</script>
