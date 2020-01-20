<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">About</router-link> |
      <router-link to="/buttons">Buttons</router-link> |
      <router-link to="/notifications">Notifications</router-link> |
      <router-link to="/avatar">Avatar</router-link> |
      <router-link to="/tabs">Tabs</router-link> |
      <router-link to="/charts">Charts</router-link> |
      <router-link to="/date-pickers">DatePickers</router-link> |
      <router-link to="/components">Components</router-link> |
      <router-link to="/labels">Labels</router-link> |
      <router-link to="/inputs">Inputs</router-link> |
      <router-link to="/tables">Tables</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
