
<template>
  <div>
    <!-- 框架 -->
    <el-container>
      <!-- 头部 -->
      <el-header>Header</el-header>
      <el-container>
        <!-- 左边 -->
        <el-aside :width="isCollapse == true ? '70px' : '200px'">
          <!-- 级联 -->
          <i class="el-icon-s-tools" @click="isCollapse = !isCollapse"></i>

          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu :index="item.path" v-for="(item, index) in list" :key="item.id">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title"> {{ item.title }}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item :index="it.pach" v-for="it,i in item.children">{{it.title}}</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { home } from "../requery/api.js";
export default {
  name: "",
  components: {},
  data() {
    return {
      isCollapse: true,
      list: [],
    };
  },
  computed: {},
  created() {
    // 请求数据
    home().then((res) => {
      console.log(res.permissionList, "侧边栏");
      this.list = res.permissionList;
    });
  },
  mounted() {},
  methods: {
    // 点击级联
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style scoped lang='scss'>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  height: 80px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  height: 100vh;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 100vh;
}
.el-menu,.el-submenu,.el-menu-item-group{
  background-color: #b3c0d1;
}
</style>
