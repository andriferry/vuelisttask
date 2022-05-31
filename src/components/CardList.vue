<template>
    <div>
        <draggable :list="taskList"  :group="{ name: 'g1' }">
            <v-card-text
                v-for="(data, index) in taskList"
                :key="index"
                class="pa-1"
            >
                <v-slide-y-transition>
                    <v-card>
                        <v-card-title class="pa-2">
                            {{ data.cardTitle }}
                        </v-card-title>
                    </v-card>
                </v-slide-y-transition>
            </v-card-text>
        </draggable>

        <v-slide-y-transition hide-on-leave v-show="newList" class="py-0">
            <v-card-text v-show="newList" class="px-1 py-0">
                <v-text-field
                    label="Task Description"
                    solo
                    @keypress.enter="addNewTask"
                    v-model="dataTitle"
                ></v-text-field>

                <v-card-actions class="d-flex justify-space-between">
                    <v-btn color="red" plain @click="newList = !newList">
                        cancel
                    </v-btn>
                    <v-btn color="success" plain @click="addNewTask">
                        Add
                    </v-btn>
                </v-card-actions>
            </v-card-text>
        </v-slide-y-transition>

        <v-card-actions v-if="!newList" class="d-flex justify-lg-space-between">
            <v-btn @click="newList = !newList" icon color="pink">
                <v-icon>mdi-plus</v-icon>
            </v-btn>
        </v-card-actions>
    </div>
</template>

<script>
import draggable from 'vuedraggable';
export default {
    components: {draggable},
    props: {
        taskIndex: {
            type: Number,
        },
        taskList: {
            type: Array,
        },
    },
    data() {
        return {
            newList: false,
            dataTitle: '',
        };
    },
    methods: {
        addNewTask() {
            try {
                this.$emit('newTask', {
                    index: this.taskIndex,
                    title: this.dataTitle,
                });
            } catch (e) {
                throw e;
            }
            this.dataTitle = '';
        },
    },
};
</script>

<style></style>
