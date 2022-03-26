<template>
    <v-container fluid>
        <div class="d-flex" style="gap: 1rem">
            <div class="d-flex flex-column" style="gap: 0.5rem">
                <v-slide-y-transition v-show="openForm" class="py-0">
                    <v-card v-show="openForm" width="344" rounded="lg">
                        <v-card-text class="px-2">
                            <v-text-field
                                flat
                                outlined
                                ref="form"
                                color="red accent-2"
                                solo
                                dense
                                v-model="data"
                            ></v-text-field>
                        </v-card-text>
                        <v-card-actions
                            class="d-flex justify-space-between py-0"
                        >
                            <v-btn color="red" plain> Remove </v-btn>
                            <v-btn color="success" plain> Add </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-slide-y-transition>

                <v-card v-if="activeButton" width="344" rounded="lg">
                    <v-btn block @click="addNewTask"> Add list </v-btn>
                </v-card>
            </div>

            <div class="d-flex flex-column" style="gap: 0.5rem">
                <v-card width="344" rounded="lg">
                    <v-btn block> Add list </v-btn>
                </v-card>
            </div>
            <div class="d-flex flex-column" style="gap: 0.5rem">
                <v-card width="344" rounded="lg">
                    <v-card-text
                        class="text-subtitle1 d-flex justify-space-between pa-2 font-weight-medium"
                    >
                        Todo
                        <v-btn x-small icon color="pink">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-card-text>

                    <v-slide-y-transition v-show="newList" class="py-0">
                        <v-card-text v-show="newList" class="px-1 py-0">
                            <v-text-field
                                flat
                                outlined
                                class="pa-0"
                                color="red accent-2"
                                solo
                                dense
                                v-model="data"
                            ></v-text-field>

                            <div class="d-flex justify-space-between">
                                <v-btn color="red" plain> cancel </v-btn>
                                <v-btn color="success" plain> Add </v-btn>
                            </div>
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
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
export default {
    name: 'HomePages',
    data() {
        return {
            openForm: false,
            activeButton: true,
            data: '',
            newList: false,
        };
    },
    methods: {
        addNewTask() {
            this.openForm = true;
            this.activeButton = false;
            this.$refs.form.isFocused = true;
        },
        addNewList() {
            this.newList = true;
        },
    },
};
</script>
