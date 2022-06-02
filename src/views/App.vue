<template>
    <div class="d-flex" style="height: 100vh; width: 100%">
        <v-container fluid class="d-flex align-center mx-auto">
            <div
                class="d-flex justify-center flex-column align-center mx-auto"
                style="gap: 1rem"
            >
                <v-img
                    alt="taskIcon"
                    src="@/assets/taskIcon.svg"
                    eager
                    width="300"
                    height="300"
                    transition="scale-transition"
                />

                <p
                    class="mb-0 text-capitalize pb-0 text-h4 text-sm-h2 font-weight-black white--text"
                >
                    Vue list-Todo
                </p>
                <p
                    class="mb-0 pb-0 text-h6 text-center text-capitalize font-weight-black white--text"
                >
                    Vuejs App for todo list inspired by trello app
                </p>

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
