<template>
  <header class="app-header">
    <h1>
      Reservations
    </h1>
    <nav>
      <a href="#" @click="$emit('change', 'Scheduler')">
        Schedules
      </a>
      <a href="#" @click="$emit('change', 'Report')">Report</a>
    </nav>
  </header>
</template>

<style lang="scss">
.app-header {
  h1 {
    text-align: left;
  }
  nav {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
  }
  nav li {
  }
}
</style>
