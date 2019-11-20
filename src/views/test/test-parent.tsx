import Vue, { CreateElement } from "vue";
import Component from "vue-class-component"
export type Props = {};

/**
 * @title test-parent-page
 * @parent BasePage
 */
@Component
export class TestParentPage extends Vue {
  private render(h: CreateElement) {
    return (<div class="page">
      <span class="title">this is TestParentPage</span>
    </div>)
  }

  private mounted() { }

  private created() { }

}