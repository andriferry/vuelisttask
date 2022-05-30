<template>
    <div>
        <v-card-text class="pa-1 pb-3">
            <v-card>
                <v-card-title class="pa-2"> Hello test </v-card-title>
            </v-card>
        </v-card-text>

        <v-slide-y-transition v-show="newList" class="py-0">
            <v-card-text v-show="newList" class="px-1 py-0">
                <v-card>
                    <v-card-text class="pa-0">
                        <v-textarea
                            flat
                            label="Task Description"
                            auto-grow
                            solo
                        ></v-textarea>
                    </v-card-text>
                </v-card>

                <v-card-actions class="d-flex justify-space-between">
                    <v-btn color="red" plain> cancel </v-btn>
                    <v-btn color="success" plain> Add </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-slide-y-transition>

        <v-card-actions
            @click="addNewList"
            v-if="!newList"
            class="d-flex justify-lg-space-between"
        >
            <v-btn icon color="pink">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
export default {
    props: {
        taskList: Array,
        default: [],
    },
    data() {
        return {
            newList: false,
            dataTitle: '',
        };
    },
    methods: {
        addNewList() {
            this.newList = true;
        },
    },
};
</script>

<style></style>
