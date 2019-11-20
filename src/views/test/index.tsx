import Vue, { CreateElement } from "vue";
import Component from "vue-class-component"
export type Props = {};

/**
 * @title test-page
 * @sort 1
 */
@Component
export class TestPage extends Vue {

  private render(h: CreateElement) {
    return (<div class="page">
      <span class="title">this is TestPage</span>
    </div>)
  }

  private mounted() { }

  private created() { }

}