import Vue, { CreateElement } from "vue";
import Component from "vue-class-component"
export type Props = {};

/**
 * @title base-page
 */
@Component
export class BasePage extends Vue {

  private render(h: CreateElement) {
    return (<div class="page">
      <span class="title">this is BasePage</span>
      <router-view />
    </div>)
  }

  private mounted() { }

  private created() { }

}