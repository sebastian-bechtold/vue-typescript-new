


import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld/HelloWorld';
import WithRender from './Home.html';


@WithRender
@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}

