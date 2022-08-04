import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5001/users",
});

const state = {
  users: null,
  oldUser: null,
  isUpdate: false,
};

const getters = {
  users: (state) => state.users,
  oldUser: (state) => state.oldUser,
  isUpdate: (state) => state.isUpdate,
};

const actions = {
  async getUsers({ commit }) {
    const data = await API.get("/")
      .then((res) => res.data)
      .catch((err) => console.log(err));
    commit("getUsers", data);
  },
  async addUser({ commit }, user) {
    const data = await API.post("/", user)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    commit("addUser", data);
  },
  async updateUser({ commit }, updatedUser) {
    const { _id } = updatedUser;
    const data = await API.patch(`/${_id}`, updatedUser)
      .then((res) => res.data)
      .catch((err) => console.log(err));
    console.log(data);
    commit("updateUser", data);
  },
  async deleteUser({ commit }, id) {
    console.log(id);
    const res = await API.delete(`/${id}`);
    if (res.status === 200) {
      commit("deleteUser", id);
    }
  },
};

const mutations = {
  getUsers: (state, data) => {
    state.users = [...data];
  },
  addUser: (state, users) => {
    state.users.push(users);
  },
  updateUser: (state, updateduser) => {
    state.users = state.users.filter((user) =>
      user._id === updateduser._id ? updateduser : user
    );
    state.isUpdate = false;
    state.oldUser = null;
  },
  deleteUser: (state, id) => {
    state.users = state.users.filter((user) => {
      return user._id !== id;
    });
  },
  getOldUser: (state, user) => {
    state.oldUser = user;
    state.isUpdate = true;
  },
  removeOldUser: (state) => {
    state.oldUser = null;
    state.isUpdate = false;
  },
};
export default { state, getters, actions, mutations };
