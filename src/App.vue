<template>
    <v-app>
        <v-main class="red accent-2 mainStyle">
            <router-view />
        </v-main>
    </v-app>
</template>

<script>
export default {
    name: 'App',
};
</script>

<style scoped>
.mainStyle {
    overflow-x: auto;
    overflow-y: auto;
    scrollbar-color: #ff1744 #ff5252;
    -webkit-overflow-scrolling: touch;
    -webkit-appearance: none;
}
</style>
