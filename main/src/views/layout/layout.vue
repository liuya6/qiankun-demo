<script lang="tsx">
import { defineComponent } from 'vue'
import { RouterLink } from 'vue-router'

import { pathList } from './config'

export default defineComponent({
  components: {
    RouterLink
  },
  setup() {
    return () => (
      <div class="layout">
        <div class="slider">
          <div class="name">某某后台系统</div>
          <ul>
            {pathList.map((item) => {
              return (
                <li>
                  <RouterLink to={item.path}>{item.name}</RouterLink>
                </li>
              )
            })}
          </ul>
        </div>
        <div class="mainContainer">
          <div class="nav"></div>
          <div class="content">
            <router-view />
            <div id="subContainer"></div>
          </div>
        </div>
      </div>
    )
  }
})
</script>

<style scoped lang="scss">
.layout {
  display: flex;
  > div {
    height: 100vh;
  }
  .slider {
    width: 180px;
    background-color: black;
    color: #fff;
    .name {
      line-height: 60px;
      text-align: center;
      font-size: 22px;
    }
    > ul {
      line-height: 38px;
      text-align: center;
      font-size: 18px;
      a {
        color: #fff;
        &.router-link-active {
          color: red;
        }
      }
    }
  }
  .mainContainer {
    flex: 1;
    overflow-y: scroll;
    .nav {
      height: 60px;
      background-color: black;
      color: #fff;
      position: fixed;
      top: 0;
      right: 0;
      left: 180px;
    }
    .content {
      padding: 70px 5px 10px 5px;
    }
  }
}
</style>
