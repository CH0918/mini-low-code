import { defineComponent, ref } from 'vue';
import Demo1Child from './Demo1Child';
export default defineComponent({
  name: 'Demo1',
  components: { Demo1Child },
  setup() {
    const count = ref(1);
    const add = () => {
      count.value += 1;
    };
    const list = ['zhangsan', 'lisi', 'wangwu'];
    const flag = ref(false);
    const toggle = () => {
      flag.value = !flag.value;
      console.log('hahahh', flag.value);
    };
    const data = ref({ name: 'zhangsan' });
    const render = () => {
      return (
        <div>
          count: {count.value}
          <br />
          <button onClick={add}>+1</button>
          <br />
          {list.map((item) => (
            <div>{item}</div>
          ))}
          <br />
          {flag.value ? <div>开关开1111111</div> : <div>开关关22222</div>}
          <button onClick={toggle}>切换开关</button>
          <br />
          <Demo1Child
            count={count}
            onChangeCount={() => {
              count.value += 1;
            }}
            v-model={[data, 'userInfo']}
          />
        </div>
      );
    };
    return render;
  },
});
