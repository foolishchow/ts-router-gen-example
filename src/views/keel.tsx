import Vue, { CreateElement } from "vue";
import Component from "vue-class-component"
import { AppMenuRoutes, RouterMenus } from "../router";
export type Props = {};

/**
 * this is ignored
 */
@Component
export class AppKeel extends Vue {

  private render(h: CreateElement) {
    return (<div class="wrap">
      <div class="menu">
        {AppMenuRoutes.map((item) => this.renderItem(item))}
      </div>
      <div class="main">
        <router-view></router-view>
      </div>
    </div>)
  }

  private renderItem(item: RouterMenus) {
    let child = null
    if (item.children) {
      child = <div>
        {item.children.map(this.renderItem)}
      </div>
    }
    return <div class="menu-item" key={item.path}>
      <span onClick={() => this.go(item)}>{item.name}</span>
      {child}
    </div>
  }

  private go(item: RouterMenus) {
    this.$router.push({
      path: item.path
    })
  }
  private mounted() { }

  private created() { }

}