<template>
    <v-app-bar app color="red accent-3" dark>
        <div
            class="d-flex align-center"
            @click="$router.push('/')"
            style="cursor: pointer"
        >
            <v-img
                alt="Vuetify Logo"
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
</template>

<script>
export default {};
</script>

<style></style>
