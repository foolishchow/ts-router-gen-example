import Vue, { CreateElement } from "vue";
import Component from "vue-class-component"
export type Props = {};

/**
 * @title index-page
 * @sort 0
 */
@Component
export class IndexPage extends Vue {

  private render(h: CreateElement) {
    return (<div class="page">
      <span class="title">this is IndexPage</span>
    </div>)
  }

  private mounted() { }

  private created() { }

}