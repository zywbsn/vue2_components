<template>
  <div>
    <el-container>
      <el-header class="bg-gray-500">vue2_components</el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu active-text-color="#ffd04b" background-color="#545c64" class="el-menu-vertical-demo"
            :default-active="active" text-color="#fff" router @select="selectMenu">
            <div v-for="item in routerList" :key="item.path">
              <el-submenu v-if="item.children" :index="item.path">
                <template slot="title">
                  <span>{{ item.meta.title }}</span>
                </template>
                <el-menu-item v-for="i in item.children" :index="item.path + '/' + i.path">
                  {{ i.meta.title }}
                </el-menu-item>
              </el-submenu>

              <el-menu-item v-else :index="item.path">
                <span>{{ item.meta.title }}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
          </el-main>
          <!--<el-footer>Footer</el-footer>-->
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import router from "@/router/index.js";

export default {
  name: "layouts",
  data() {
    return {
      routerList: [],
      active: "",
    };
  },
  methods: {
    selectMenu(_, indexPath) {
      this.$router.replace(indexPath[0] + "/" + indexPath[1])
    }
  },
  created() {
    let routes = router.options.routes.filter((item) => {
      if (item.meta?.isShow) return item;
    });
    this.routerList = routes;
    this.active = this.$router.currentRoute.path;
  }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  height: calc(100vh - 60px);
}

.el-header {
  height: 60px;

  .el-row {
    display: flex;
    align-items: center;

    .el-col {
      text-align: center;
    }
  }
}
</style>
