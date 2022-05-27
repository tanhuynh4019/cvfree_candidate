<template>
    <v-autocomplete @change="changeCarrer()" v-model="valueCarrer" class="w-100" prepend-inner-icon="mdi-cog-outline" :color="website.color.tealMain.color"
        placeholder="Nghành nghề.." outlined dense hide-details="auto" :items="carrers">
    </v-autocomplete>
</template>

<script>
import TermApi from '../../apis/term.api';
export default {
    name: 'SelectCarrers',
    props: ['website'],
    async created() {
        const carrer = await TermApi.getTerm({ key: 'term', type: '1' });
        this.carrers = carrer.data;

        this.carrers.unshift('Tất cả nghành nghề')
    },
    mounted() {
        this.valueCarrer = this.$route.query.carrer;

        if(!this.$route.query.carrer)
        {
            this.valueCarrer = 'Tất cả nghành nghề'
        }
    },
    data() {
        return {
            carrers: [],
            valueCarrer: ''
        }
    },
    methods: {
        changeCarrer()
        {
            let that = this;
            that.$emit('modelCarrer', that.valueCarrer);
        }
    }
}
</script>

<style>
</style>