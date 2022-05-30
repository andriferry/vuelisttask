<template>
    <v-app>
        <v-app-bar app color="red accent-3" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="./assets/logo.png"
                    transition="scale-transition"
                    width="40"
                />
            </div>

            <v-spacer></v-spacer>

            <v-btn
                href="https://github.com/andriferry/vuelisttask"
                target="_blank"
                text
            >
                <v-icon large>mdi-github</v-icon>
            </v-btn>
        </v-app-bar>

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
