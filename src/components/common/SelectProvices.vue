<template>
    <v-autocomplete @change="changeProvince()" :solo="solo" v-model="valueProvince" class="w-100" prepend-inner-icon="mdi-map-marker" :color="website.color.tealMain.color"
        placeholder="Tỉnh thành..." outlined dense hide-details="auto" :items="provinces">
    </v-autocomplete>
</template>

<script>
import TermApi from '../../apis/term.api';
export default {
    name: 'SelectProvices',
    props: ['website', 'solo'],
    async created() {
        const province = await TermApi.getTerm({ key: 'term', type: '2' });
        this.provinces = province.data;

        this.provinces.unshift('Tất cả tỉnh thành')
    },
    mounted() {
        this.valueProvince = this.$route.query.province;

        if(!this.$route.query.province)
        {
            this.valueProvince = 'Tất cả tỉnh thành'
        }
    },
    data() {
        return {
            provinces: [],
            valueProvince: ''
        }
    },
    methods: {
        changeProvince()
        {
            let that = this;
            that.$emit('modelProvince', that.valueProvince);
        }
    }
}
</script>

<style>
</style>