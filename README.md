# 写一个玩具低代码平台

## vue3 使用 jsx 语法

- v-model 语法

```js
// 父组件
// 正常的template中写v-model:userInfo,jsx中要放在[]中，数组第一项是
// 绑定的数据源，第二项是自定义的名称
<Demo1Child v-model={[data, 'userInfo']} />;
// 子组件
// 使用直接访问props中的userInfo，更改的话直接修改就可以
const dataName = computed({
  get() {
    return props.userInfo.value.name;
  },
  set(newValue) {
    return (props.userInfo.value.name = newValue);
  },
});
```
