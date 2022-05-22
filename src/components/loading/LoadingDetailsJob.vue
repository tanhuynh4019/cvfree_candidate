<template>
    <div>
        <v-skeleton-loader v-bind="attrs" type="image"></v-skeleton-loader>
        <v-container>
            <v-row>
                <v-col cols="8">
                    <v-skeleton-loader v-bind="attrs" type="table-heading, list-item-two-line, image, table-tfoot,table-heading, list-item-two-line, image, table-tfoot,table-heading, list-item-two-line, image, table-tfoot">
                    </v-skeleton-loader>
                </v-col>
                <v-col cols="4">
                    <v-skeleton-loader v-bind="attrs" type="table-heading, list-item-two-line, image, table-tfoot,table-heading, list-item-two-line, image, table-tfoot,table-heading, list-item-two-line, image, table-tfoot">
                    </v-skeleton-loader>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'LoadingDetailsJob'
}
</script>

<style>
</style>