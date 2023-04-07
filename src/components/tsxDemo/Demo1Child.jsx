import { defineComponent, defineEmits, computed, ref } from 'vue';

export default defineComponent({
  name: 'Demo1Child',
  props: ['count', 'userInfo'],
  emits: ['changeCount', 'update:userInfo'],
  setup(props, { emit }) {
    const dataName = computed({
      get() {
        return props.userInfo.value.name;
      },
      set(newValue) {
        return (props.userInfo.value.name = newValue);
      },
    });
    return () => (
      <div>
        props:{props.count.value}
        <button onClick={() => emit('changeCount')}>+1</button>
        <br />
        {dataName.value}
        <br />
        <button onClick={() => (dataName.value.name = 'lisi')}>
          changeName
        </button>
      </div>
    );
  },
});
