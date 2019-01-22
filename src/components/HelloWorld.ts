import { Component, Vue } from 'vue-property-decorator';
import WithRender from './hello-world.html';
import './HelloWorld.scss';

@WithRender
@Component
export default class HelloWorld extends Vue {

    msg : string = "Hello World!";
}
