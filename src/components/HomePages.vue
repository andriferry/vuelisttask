<template>
    <v-container fluid>
        <div class="d-flex" style="gap: 1rem">
            <div class="d-flex flex-column">
                <v-card width="344" rounded="lg">
                    <v-btn block> Add list </v-btn>
                </v-card>
                <v-card v-for="data in 30" :key="data" width="344" rounded="lg">
                    <v-card-text class="px-2">
                        <v-text-field
                            flat
                            outlined
                            color="red accent-2"
                            solo
                            dense
                        ></v-text-field>
                    </v-card-text>
                    <v-card-actions
                        class="d-flex justify-lg-space-between py-0"
                    >
                        <v-btn color="red" plain> Remove </v-btn>
                        <v-btn color="success" plain> Add </v-btn>
                    </v-card-actions>
                </v-card>
            </div>

            <!-- <v-card width="344" rounded="lg">
                <v-card-text class="px-2">
                    <v-text-field
                        flat
                        outlined
                        color="red accent-2"
                        solo
                        dense
                    ></v-text-field>
                </v-card-text>
                <v-card-actions class="d-flex justify-lg-space-between py-0">
                    <v-btn color="red" plain> Remove </v-btn>
                    <v-btn color="success" plain> Add </v-btn>
                </v-card-actions>
            </v-card> -->
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'HomePages',
};
</script>
