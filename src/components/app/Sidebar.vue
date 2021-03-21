<template>
  <ul class="sidenav app-sidenav" :class="{open: value}">
    <li
      v-for="item in menu"
      :key="item.text"
    >
      <button
        class="waves-effect waves-orange pointer"
        @click.prevent="goTo(item.path)"
      >
        {{ item.text }}
      </button>
    </li>
  </ul>

</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      menu: [
        {
          text: 'Счет',
          path: '/'
        },
        {
          text: 'История',
          path: '/history'
        },
        {
          text: 'Планирование',
          path: '/planning'
        },
        {
          text: 'Новая запись',
          path: '/record'
        },
        {
          text: 'Категории',
          path: '/categories'
        },
      ]
    }
  },
  methods: {
    goTo: function(path) {
      this.$router.push({ path });
    }
  }
};
</script>

<style lang="scss" scoped>
button {
  width: 100%;
  padding: 14px;
  text-align: left;
  background: transparent;
  border: none;
}
</style>