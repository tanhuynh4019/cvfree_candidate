<template>
    <div>
        <div v-if="shape == 'all'">
            <div>Tìm thấy <b>{{ resultQueryCompanies.length }}</b> công ty phù hợp với yêu cầu của bạn</div>

            <div v-if="!isLoading && resultQueryCompanies.length == 0">
                <center>
                    <img src="../../images/Icon/database.png" class="mt-5" width="200" height="200" />
                    <p>Không tìm thấy công ty theo yêu cầu!</p>
                </center>
            </div>
            <v-form class="mt-4" v-if="offset_top < 150">
                <v-row>
                    <v-col cols="4">
                        <v-text-field v-model="formSearch.value.search" class="w-100" prepend-inner-icon="mdi-magnify"
                            :color="website.color.tealMain.color" placeholder="Nhập tên công ty bạn muốn tìm kiếm..."
                            outlined dense hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <SelectCarrersComponent :website="website" @modelCarrer="formSearch.value.carrer = $event" />
                    </v-col>
                    <v-col cols="3">
                        <SelectProvicesComponent :website="website"
                            @modelProvince="formSearch.value.province = $event" />
                    </v-col>
                    <v-col cols="2">
                        <v-btn @click="searchCompany()" class="w-100" height="44" style="margin-top: -5px;" depressed
                            :color="website.color.tealMain.color" dark>Lọc</v-btn>
                    </v-col>
                </v-row>
            </v-form>
            <v-app-bar app color="white" height="80" v-if="offset_top > 150"
                :style="`margin-top: 70px; box-shadow: none; border-bottom: 1px solid #CFD8DC !important;`">
                <v-row>
                    <v-col cols="4">
                        <v-text-field v-model="formSearch.value.search" class="w-100" prepend-inner-icon="mdi-magnify"
                            :color="website.color.tealMain.color" placeholder="Nhập tên công ty bạn muốn tìm kiếm..."
                            outlined dense hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="3">
                        <SelectCarrersComponent :website="website" @modelCarrer="formSearch.value.carrer = $event" />
                    </v-col>
                    <v-col cols="3">
                        <SelectProvicesComponent :website="website"
                            @modelProvince="formSearch.value.province = $event" />
                    </v-col>
                    <v-col cols="2">
                        <v-btn @click="searchCompany()" class="w-100" height="44" style="margin-top: -5px;" depressed
                            :color="website.color.tealMain.color" dark>Lọc</v-btn>
                    </v-col>
                </v-row>
            </v-app-bar>
            <v-row class="mt-1" v-if="isLoading">
                <v-col :cols="cols" v-for="n in 10" :key="n">
                    <v-card>
                        <div class="p-3">
                            <v-row>
                                <v-col cols="2">
                                    <v-skeleton-loader type="image" width="100%" height="80">
                                    </v-skeleton-loader>
                                </v-col>
                                <v-col cols="10">
                                    <v-skeleton-loader type="list-item-three-line">
                                    </v-skeleton-loader>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row class="mt-1" v-if="!isLoading">
                <v-col :cols="cols" v-for="company in resultQueryCompanies" :key="company.slug">
                    <v-card @click.native="scrollToTop()" :to="{ path: `/cong-ty/review-cong-ty/${company.slug}` }">
                        <div class="p-3">
                            <v-row>
                                <v-col cols="2">
                                    <v-card width="100%">
                                        <div class="p-2">
                                            <img :src="company.srcLogo" width="100%" height="80" />
                                        </div>
                                    </v-card>
                                </v-col>
                                <v-col cols="10">
                                    <h6>
                                        <router-link :style="website.color.tealMain" @click.native="scrollToTop()"
                                            :to="{ path: `/cong-ty/review-cong-ty/${company.slug}` }">{{ company.name }}
                                        </router-link> - <span>Đang tuyển 0 vị trí</span>
                                    </h6>
                                    <div>
                                        <v-icon>mdi-map-marker-multiple</v-icon>
                                        <i>Trụ sở chính:</i> {{ company.address }}.
                                    </div>
                                    <div class="mt-2">
                                        <v-icon>mdi-alert-circle-check</v-icon> <span
                                            v-html="company.introduct.length < 200 ? company.introduct : `${company.introduct.substring(0, 200)}...`"></span>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <div v-if="shape == 'mobile'">
            <div>Tìm thấy <b>{{ companies.length }}</b> công ty phù hợp với yêu cầu của bạn</div>
            <div v-if="!isLoading && resultQueryCompanies.length == 0">
                <center>
                    <img src="../../images/Icon/database.png" class="mt-5" width="100" height="100" />
                    <p>Không tìm thấy công ty theo yêu cầu!</p>
                </center>
            </div>
            <v-row class="mt-1" v-if="isLoading">
                <v-col :cols="cols" v-for="n in 10" :key="n">
                    <v-card>
                        <div class="p-3">
                            <v-row>
                                <v-col cols="4">
                                    <v-skeleton-loader type="image" width="100%" height="80">
                                    </v-skeleton-loader>
                                </v-col>
                                <v-col cols="8">
                                    <v-skeleton-loader type="list-item-three-line">
                                    </v-skeleton-loader>
                                </v-col>
                                <v-col cols="12">
                                    <v-skeleton-loader type="list-item-three-line">
                                    </v-skeleton-loader>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-app-bar app color="white" height="70"
                :style="`margin-top: 120px; box-shadow: none; border-bottom: 1px solid #CFD8DC !important;`">
                <v-row no-gutters>
                    <v-col cols="8">
                        <v-text-field v-model="formSearch.value.search" class="w-100" prepend-inner-icon="mdi-magnify"
                            :color="website.color.tealMain.color" placeholder="Nhập vào từ khóa" outlined dense
                            hide-details="auto"></v-text-field>
                    </v-col>
                    <v-col cols="2">
                        <center>
                            <v-dialog v-model="dialogSearchCompany" fullscreen hide-overlay
                                transition="dialog-bottom-transition">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-btn v-bind="attrs" v-on="on" style="margin-top: -5px;" depressed
                                        :color="website.color.tealMain.color" dark icon>
                                        <v-icon>mdi-filter</v-icon>
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-toolbar dark :color="website.color.tealMain.color">
                                        <v-btn icon dark @click="dialogSearchCompany = false">
                                            <v-icon>mdi-close</v-icon>
                                        </v-btn>
                                        <v-toolbar-title>Tìm kiếm nâng cao</v-toolbar-title>
                                    </v-toolbar>
                                    <v-list three-line subheader>
                                        <div class="p-2">
                                            <v-row class="mt-2">
                                                <v-col cols="12">
                                                    <v-text-field v-model="formSearch.value.search" class="w-100"
                                                        prepend-inner-icon="mdi-magnify"
                                                        :color="website.color.tealMain.color"
                                                        placeholder="Nhập tên công ty bạn muốn tìm kiếm..." outlined
                                                        dense hide-details="auto"></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <SelectCarrersComponent :website="website"
                                                        @modelCarrer="formSearch.value.carrer = $event" />
                                                </v-col>
                                                <v-col cols="12">
                                                    <SelectProvicesComponent :website="website"
                                                        @modelProvince="formSearch.value.province = $event" />
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-btn @click="searchCompany()" class="w-100" height="44"
                                                        style="margin-top: -5px;" depressed
                                                        :color="website.color.tealMain.color" dark>Lọc</v-btn>
                                                </v-col>
                                            </v-row>
                                        </div>
                                    </v-list>
                                </v-card>
                            </v-dialog>
                        </center>
                    </v-col>
                    <v-col cols="2">
                        <v-btn @click="searchCompany()" class="w-100" height="44" style="margin-top: -5px;" depressed
                            :color="website.color.tealMain.color" dark>Lọc</v-btn>
                    </v-col>
                </v-row>
            </v-app-bar>
            <v-row class="mt-1" v-if="!isLoading">
                <v-col :cols="cols" v-for="company in resultQueryCompanies" :key="company.slug">
                    <v-card @click.native="scrollToTop()" :to="{ path: `/cong-ty/review-cong-ty/${company.slug}` }">
                        <div class="p-3">
                            <v-row>
                                <v-col cols="4">
                                    <v-card width="100%">
                                        <div class="p-2">
                                            <img :src="company.srcLogo" width="100%" height="60" />
                                        </div>
                                    </v-card>
                                </v-col>
                                <v-col cols="8" class="font-weight-bold">
                                    <router-link :style="website.color.tealMain" @click.native="scrollToTop()"
                                        :to="{ path: `/cong-ty/review-cong-ty/${company.slug}` }">{{ company.name }}
                                    </router-link> - <span>Đang tuyển 0 vị trí</span>
                                </v-col>
                                <v-col cols="12">
                                    <div>
                                        <v-icon>mdi-map-marker-multiple</v-icon>
                                        {{ company.address }}.
                                    </div>
                                    <div class="mt-2">
                                        <i
                                            v-html="company.introduct.length < 100 ? company.introduct : `${company.introduct.substring(0, 100)}...`"></i>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>

        <div v-if="shape == 'just-pictures'">
            <v-row v-if="isLoading">
                <v-col :cols="cols" v-for="n in 12" :key="n">
                    <v-card>
                        <v-skeleton-loader type="image" width="100%" height="80">
                        </v-skeleton-loader>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col :cols="cols" v-for="company in companies" :key="company.slug">
                    <v-card style="box-shadow: none !important;" class="border" @click.native="scrollToTop()"
                        :to="{ path: `/cong-ty/review-cong-ty/${company.slug}` }" link>
                        <div class="p-3">
                            <img :src="company.srcLogo" width="100%" height="60" />
                        </div>
                    </v-card>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import CompanyApi from "../../apis/company.api";

import SelectCarrersComponent from "../../components/common/SelectCarrers.vue";
import SelectProvicesComponent from "../../components/common/SelectProvices.vue";

export default {
    name: 'IndexCompany',
    props: ['status', 'website', 'shape', 'cols', 'limit', 'offset_top'],
    components: {
        SelectCarrersComponent,
        SelectProvicesComponent
    },
    async created() {
        const company = await CompanyApi.getCompany({ key: 'company', status: this.status, limit: this.limit });
        this.companies = company.data;

        this.isLoading = false;
    },
    computed: {
        resultQueryCompanies() {
            const { search, carrer, province } = this.$route.query;
            if (search || carrer || province) {
                const companies = this.companies.filter(company => (search ? company.name.toLowerCase().includes(search.toLowerCase()) : company.name.toLowerCase().includes(''))
                    && (carrer && carrer !== 'Tất cả nghành nghề' ? company.career.toLowerCase().includes(carrer.toLowerCase()) : company.career.toLowerCase().includes(''))
                    && (province && province !== 'Tất cả tỉnh thành' ? company.address.toLowerCase().includes(province.toLowerCase()) : company.address.toLowerCase().includes('')))
                return [...companies];

            } else {
                return this.companies;
            }
        },
    },
    data() {
        return {
            companies: [],
            formSearch: {
                value: {
                    search: '',
                    carrer: '',
                    province: ''
                }
            },
            isLoading: true,
            dialogSearchCompany: false,
        }
    },
    mounted() {

    },
    methods: {
        searchCompany() {
            let that = this;
            that.$router.push({
                name: 'SearchCompany',
                query: {
                    search: that.formSearch.value.search,
                    carrer: that.formSearch.value.carrer,
                    province: that.formSearch.value.province
                }
            })
            window.scrollTo(0, 0);
            that.dialogSearchCompany = false;
        },
        scrollToTop() {
            window.scrollTo(0, 0);
        },
    }
}
</script>

<style scoped>
a {
    text-decoration: none;
}

.v-card {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px !important;
}

.v-card:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px !important;
}
</style>