<template>
    <v-container fluid>
        <div class="d-flex" style="gap: 1rem">
            <div
                class="d-flex flex-column"
                v-for="(data, index) in dataTask"
                :key="index"
                style="gap: 0.5rem"
            >
                <div v-show="data.openForm">
                    <v-slide-y-transition class="py-0">
                        <v-card
                            v-show="data.openForm"
                            width="344"
                            color="grey lighten-4"
                            rounded="lg"
                        >
                            <v-card-text
                                v-if="data.cardTitle.length > 0"
                                class="text-subtitle1 d-flex justify-space-between pa-2 font-weight-medium"
                            >
                                {{ data.cardTitle }}
                                <v-btn x-small icon color="pink">
                                    <v-icon>mdi-dots-vertical</v-icon>
                                </v-btn>
                            </v-card-text>
                            <div v-if="!data.cardTitle">
                                <v-card-text class="px-2">
                                    <v-text-field
                                        ref="form"
                                        color="red accent-2"
                                        solo
                                        label="Card Title"
                                        dense
                                        @keypress.enter="addTitleCard(index)"
                                        v-model="data.dataTitle"
                                    ></v-text-field>
                                </v-card-text>
                                <v-card-actions
                                    class="d-flex justify-space-between pt-0"
                                >
                                    <v-btn
                                        color="red"
                                        plain
                                        @click="addNewTask(index, false)"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="success"
                                        plain
                                        @click="addTitleCard(index)"
                                    >
                                        Add
                                    </v-btn>
                                </v-card-actions>
                            </div>

                            <CardList v-else :taskList="data.cardList" />
                        </v-card>
                    </v-slide-y-transition>
                </div>

                <v-card v-if="data.activeButton" width="344" rounded="lg">
                    <v-btn block @click="addNewTask(index, true)">
                        Add list
                    </v-btn>
                </v-card>
            </div>

            <!-- <div class="d-flex flex-column" style="gap: 0.5rem">
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

                    <CardList />
                </v-card>
            </div> -->
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
            dataTask: [
                {
                    cardTitle: '',
                    openForm: false,
                    dataTitle: '',
                    activeButton: true,
                    cardList: [
                        {
                            cardTitle: 'Test task first',
                        },
                    ],
                },
            ],
        };
    },
    methods: {
        addNewTask(index, value) {
            if (value) {
                this.dataTask[index].openForm = value;
                this.dataTask[index].activeButton = false;
            } else {
                this.dataTask[index].openForm = value;
                this.dataTask[index].activeButton = true;
            }
        },
        addNewList() {
            this.newList = true;
        },
        addTitleCard(index) {
            this.dataTask[index].cardTitle = this.dataTask[index].dataTitle;
        },
    },
};
</script>
