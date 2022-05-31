<template>
    <div class="d-flex" style="height: 100vh; width: 100%">
        <v-container fluid class="d-flex align-center mx-auto">
            <div
                class="d-flex justify-center flex-column align-center mx-auto"
                style="gap: 1rem"
            >
                <v-img
                    alt="Vuetify Logo"
                    src="@/assets/logo.png"
                    transition="scale-transition"
                />

                <v-btn depressed large rounded color="" link to="/app">
                    get started
                </v-btn>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {};
</script>

<style></style>
