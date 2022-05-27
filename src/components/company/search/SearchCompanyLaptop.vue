<template>
    <v-card>
        <div class="p-3">
            <IndexComponent status="all" :website="website" shape="all" :cols="12"/>
        </div>
    </v-card>
</template>

<script>
import IndexComponent from "../IndexCompany.vue";
export default {
    name: 'SearchCompanyLaptop',
    props: ['website'],
    components: {
        IndexComponent
    }
}
</script>

<style>
</style>