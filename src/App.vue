<template>
	<div id="nav">
		<router-link to="/">Home</router-link> |
		<router-link to="/option">Option</router-link> |
		<router-link to="/composition">Composition</router-link> |
		<router-link to="/vuex">Vuex</router-link> |
		<router-link to="/vuexOption">VuexOption</router-link> |
		<router-link to="/vuexComposition">VuexComposition</router-link> |
		<router-link to="/todo">Todo</router-link> |
	</div>
	<router-view />
</template>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

#nav {
	padding: 30px;
}

#nav a {
	text-decoration: none;
	font-weight: bold;
	color: #2c3e50;
}

#nav a.router-link-exact-active {
	color: #42b983;
}
</style>
