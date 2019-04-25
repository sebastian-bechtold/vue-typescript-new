import { Component, Vue } from 'vue-property-decorator';
import WithRender from './About.html';


@WithRender
@Component
export default class About extends Vue {

    msg : string = "Hello World!";
}
