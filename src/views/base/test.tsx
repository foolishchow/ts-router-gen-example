import Vue, { CreateElement } from "vue";
import Component from "vue-class-component"
export type Props = {};

/**
 * @title base-test-page
 */
@Component
export class BaseTestPage extends Vue {

  private render(h: CreateElement) {
    return (<div class="page">
      <span class="title">this is BaseTestPage</span>
    </div>)
  }

  private mounted() { }

  private created() { }

}