
<template>
  <div>
    <div class="box">
      <h2>后台管理系统</h2>
      <div class="inp">
        <p><input type="text" placeholder="姓名" v-model="list.username" /></p>
        <p>
          <input type="password" placeholder="密码" v-model="list.password" />
        </p>
        <button @click="add">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
import { querySignin } from "../requery/api.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      list: {
        username: "",
        password: "",
      },
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    // 请求数据
    add() {
      // 请求数据
      if (this.list.username && this.list.password) {
        querySignin(this.list).then((res) => {
          // 存储数据token令牌
          sessionStorage.setItem("token", res.token);
          console.log(res, "111");
          // 判空和跳转
          if (this.list.username == "admin" && this.list.password == "123456") {
            this.$router.push("/");
          } else {
            alert("请正确填写");
            return false;
          }
        });
      }
    },
  },
};
</script>
<style scoped lang='scss'>
.box {
  width: 400px;
  height: 300px;
  border: 1px solid #000;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  h2 {
    text-align: center;
  }
  .inp {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    padding: 30px 100px;
    p {
      line-height: 50px;
      input {
        width: 100%;
        height: 30px;
      }
    }
    button {
      width: 100%;
      height: 40px;
      background-color: rgb(57, 143, 214);
    }
  }
}
</style>
