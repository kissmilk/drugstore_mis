<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  *:before, *:after {
    box-sizing: inherit;
  }
  body, html {
    height: 100%;
    overflow: hidden;
  }
  body, ul, h3, h4, p {
    margin: 0;
    padding: 0;
  }
  input, textarea, button, a {
    outline: 0;
  }
  a {
    color: #0366d6;
    cursor: pointer;
  }
  body {
    color: #4d4d4d;
    font: 14px/1.4em 'Helvetica Neue', Helvetica, 'Microsoft Yahei', Arial, sans-serif;
    background: #f5f5f5 url('./assets/bg3.jpg') no-repeat center;
    background-size: cover;
    -webkit-font-smoothing: antialiased;
  }
  ul {
    list-style: none;
  }
  input {
    outline: none;
  }
  ::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background: rgba(195,195,195,.3) !important;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 50px;
  }
</style>
