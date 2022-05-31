<template>
    <v-app>
        <v-app-bar app color="red accent-3" dark>
            <div class="d-flex align-center">
                <v-img
                    alt="Vue List Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/logo.png"
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
            <HomePages />
        </v-main>
    </v-app>
</template>

<script>
import HomePages from '@/components/HomePages.vue';

export default {
    name: 'Home',
    components: {
        HomePages,
    },
};
</script>
