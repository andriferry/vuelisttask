<template>
    <v-container fluid>
        <div class="d-flex" style="gap: 1rem">
            <div class="d-flex flex-column" style="gap: 0.5rem">
                <div v-show="openForm">
                    <v-slide-y-transition class="py-0">
                        <v-card
                            v-show="openForm"
                            width="344"
                            color="grey lighten-4"
                            rounded="lg"
                        >
                            <v-card-text
                                v-if="cardTitle.length > 0"
                                class="text-subtitle1 d-flex justify-space-between pa-2 font-weight-medium"
                            >
                                {{ cardTitle }}
                                <v-btn x-small icon color="pink">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-card-text>
                            <v-card-text class="px-2">
                                <v-text-field
                                    ref="form"
                                    color="red accent-2"
                                    solo
                                    dense
                                    @keypress.enter="addTitleCard"
                                    v-model="dataTitle"
                                ></v-text-field>
                            </v-card-text>
                            <v-card-actions
                                class="d-flex justify-space-between pt-0"
                            >
                                <v-btn
                                    color="red"
                                    plain
                                    @click="addNewTask(false)"
                                >
                                    Cancel
                                </v-btn>
                                <v-btn
                                    color="success"
                                    plain
                                    @click="addTitleCard"
                                >
                                    Add
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-slide-y-transition>
                </div>

                <v-card v-if="activeButton" width="344" rounded="lg">
                    <v-btn block @click="addNewTask(true)"> Add list </v-btn>
                </v-card>
            </div>

            <div class="d-flex flex-column" style="gap: 0.5rem">
                <v-card width="344" rounded="lg">
                    <v-btn block> Add list </v-btn>
                </v-card>
            </div>

            <div class="d-flex flex-column" style="gap: 0.5rem">
                <v-card width="344" color="grey lighten-4" rounded="lg">
                    <v-card-text
                        class="text-subtitle1 d-flex justify-space-between pa-2 font-weight-medium"
                    >
                        Todo 2
                        <v-btn x-small icon color="pink">
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </v-card-text>

                    <!-- Card list -->

                    <CardList />
                </v-card>
            </div>
        </div>
    </v-container>
</template>

<script>
import CardList from '@/components/CardList.vue';
export default {
    name: 'HomePages',
    components: {CardList},
    data() {
        return {
            openForm: false,
            activeButton: true,
            dataTitle: '',
            cardTitle: '',
        };
    },
    methods: {
        addNewTask(value) {
            if (value) {
                this.openForm = value;
                this.activeButton = false;
            } else {
                this.openForm = value;
                this.activeButton = true;
            }
        },
        addNewList() {
            this.newList = true;
        },
        addTitleCard() {
            this.cardTitle = this.dataTitle;
        },
    },
};
</script>
