<template>
    <div class="">
        <v-container>
            <v-card :loading="isLoadingCard">
                <v-sheet :color="website.color.tealMain.color" dark>
                    <div class="p-3">
                        <h5>Việc làm đã lưu</h5>
                        <div>
                            Xem lại danh sách những việc làm mà bạn đã lưu trước đó. Ứng tuyển ngay để không bỏ
                            lỡ cơ hội nghề nghiệp dành cho bạn.
                        </div>
                        <v-divider v-if="!isLoading"></v-divider>
                        <div v-if="favorites.length != 0 && !isLoading">Bạn đã lưu <b :style="website.color.yellowSubColor">{{ favorites.length }}</b> việc làm</div>
                        <div v-if="favorites.length == 0 && !isLoading">Hiện tại bạn không lưu việc làm nào</div>
                    </div>
                </v-sheet>
                <div class="p-2">
                    <v-row class="mt-5">
                        <v-col cols="12" v-if="isLoading">
                            <center>
                                <v-progress-circular :width="3" color="green" indeterminate></v-progress-circular>
                                <p>Đang tải dữ liệu cá nhân</p>
                            </center>
                        </v-col>
                        <v-col cols="12" v-if="favorites.length == 0 && !isLoading">
                            <center style="margin-bottom: 50px;">
                                <img src="https://www.topcv.vn/v4/image/empty.png" />
                                <p>Bạn chưa lưu công việc nào!</p>
                                <v-btn :to="{ path: '/tim-viec-lam/tat-ca-viec-lam' }" depressed dark
                                    :color="website.color.tealMain.color">Tìm việc ngay</v-btn>
                            </center>
                        </v-col>
                        <v-col cols="12" v-for="favorite in favorites" :key="favorite._id">
                            <div class="blog-card" :style="`border: 1px dashed ${website.color.redMain.color};`"
                                v-if="favorites.length != 0 && !isLoading">
                                <div class="meta">
                                    <div class="photo"
                                        :style="`background-image: url(${favorite.idJob.idCompany.srcLogo})`">
                                    </div>
                                    <ul class="details">
                                        <li>
                                            <i class="mdi mdi-account-circle">&nbsp;</i>
                                            Còn lại: {{ favorite.idJob.numberOfRecruitments }} ứng viên
                                        </li>
                                        <li class="mt-2"><i class="mdi mdi-calendar-clock">&nbsp;</i>Ngày hết
                                            hạn:
                                            {{ formatDate(favorite.idJob.deadline) }}</li>
                                        <li class="mt-2">
                                            <i class="mdi mdi-cog">&nbsp;</i>{{ favorite.idJob.mainJob }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="description">
                                    <h1>{{ favorite.idJob.name }}
                                        <span :style="website.color.tealMain">
                                            ({{ favorite.idJob.vacancies }})
                                        </span>
                                        - Ngày lưu: {{ formatDate(favorite.dateCreate) }}
                                    </h1>
                                    <div class="mt-2"><i><a>{{ favorite.idJob.idCompany.name }}</a></i></div>
                                    <h2 class="salary" :style="website.color.redMain">
                                        <a @click="linkLogin()" v-if="!user">Đăng nhập để xem lương</a>
                                        <div v-if="user">
                                            <span>{{ favorite.idJob.salaryType ? "" : "Trống" }}</span>
                                            <span v-if="favorite.idJob.salaryType == 'Trong khoảng'">
                                                <span>
                                                    {{ favorite.idJob.salaryfrom ? favorite.idJob.salaryfrom : "..." }}
                                                    -
                                                    {{ favorite.idJob.salaryTo ? favorite.idJob.salaryTo : "..." }}
                                                    {{ favorite.idJob.currency == "VNĐ" ? "triệu" : "$" }}
                                                </span>
                                            </span>
                                            <span v-if="favorite.idJob.salaryType == 'Thỏa thuận'">
                                                <span>Thỏa thuận</span>
                                            </span>
                                            <span v-if="favorite.idJob.salaryType == 'Từ'">
                                                <span>
                                                    Từ
                                                    {{ favorite.idJob.salaryfrom ? favorite.idJob.salaryfrom : "..." }}
                                                    {{ favorite.idJob.currency == "VNĐ" ? "triệu" : "$" }}
                                                    trở lên
                                                </span>
                                            </span>
                                            <span v-if="favorite.idJob.salaryType == 'Đến'">
                                                <span>
                                                    Lên đến
                                                    {{ favorite.idJob.salaryTo ? favorite.idJob.salaryTo : "..." }}
                                                    {{ favorite.idJob.currency == "VNĐ" ? "triệu" : "$" }}
                                                </span>
                                            </span>
                                        </div>
                                    </h2>
                                    <p>
                                        <i class="mdi mdi-map-marker"></i>
                                        {{ favorite.idJob.jobLocation }} ({{ favorite.idJob.workLocation }})
                                    </p>
                                    <v-btn class="mt-2" :color="website.color.tealMain.color" dark depressed small>
                                        {{ favorite.idJob.workingForm }}
                                    </v-btn>
                                    <p class="float-end">
                                        <v-btn :to="{ path: `/tim-viec-lam/review-viec-lam/${favorite.idJob.slug}` }"
                                            @click.native="scrollToTop()" text>
                                            <v-icon>mdi-arrow-collapse-right</v-icon>
                                            &nbsp;
                                            Ứng tuyển ngay
                                        </v-btn>
                                        <v-btn @click="deleteFavoriteJob(favorite)" :color="website.color.redMain.color"
                                            text>
                                            <v-icon>mdi-trash-can-outline</v-icon>
                                            &nbsp;
                                            Bỏ lưu
                                        </v-btn>
                                    </p>
                                </div>
                            </div>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-container>
    </div>
</template>

<script>
import Favorite from '../../../apis/favorite.api';

import Format from '../../../modules/Format.module';
export default {
    props: ['website', 'user'],
    name: 'MyJob',
    async created() {
        const favorites = await Favorite.getFavoriteJob({ key: 'favorite' });
        this.favorites = favorites.data;
        this.isLoading = false;
    },
    data() {
        return {
            favorites: [],
            editedIndex: -1,
            isLoadingCard: false,
            isLoading: true
        }
    },
    methods: {
        formatDate(date) {
            return Format.formatDate(date, 'vi');
        },
        async deleteFavoriteJob(item) {
            let that = this
            that.isLoadingCard = true;
            that.editedIndex = that.favorites.indexOf(item);
            that.editedItem = Object.assign({}, item);

            const deleteFavoriteJob = await Favorite.deleteFavoriteJob({ key: 'favorite' }, { slug: item.idJob.slug });
            if (deleteFavoriteJob === 'Unauthorized') {
                that.$emit('showSnackbar', { snackbar: true, text: 'Vui lòng đăng nhập trước khi hủy việc làm!' });
            }
            else {
                if (!deleteFavoriteJob.error) {
                    that.$emit('showSnackbar', { snackbar: true, text: deleteFavoriteJob.message });
                    that.isLoadingCard = false;
                } else {
                    that.$emit('showSnackbar', { snackbar: true, text: deleteFavoriteJob.message });
                    that.isLoadingCard = false;
                }
            }

            that.favorites.splice(that.editedIndex, 1);
        }
    }
}
</script>

<style scoped>
p {
    font-size: 15px;
}

.blog-card {
    display: flex;
    flex-direction: column;
    margin: -2rem auto;
    margin-bottom: 1.6%;
    background: #fff;
    line-height: 1.1;
    font-family: sans-serif;
    border-radius: 5px;
    overflow: hidden;
    z-index: 0;
}

h1 {
    font-size: 16px !important;
    font-weight: bold !important;
}

.salary {
    font-size: 14px !important;
    font-weight: bold !important;
}

.blog-card a {
    color: inherit;
}

.blog-card a:hover {
    color: #004D40;
}

.blog-card:hover .photo {
    transform: scale(1.3) rotate(3deg);
}

.blog-card .meta {
    position: relative;
    z-index: 0;
    height: 200px;
}

.blog-card .photo {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-size: 150px 120px;
    background-position: center;
    transition: transform .2s;
}

.blog-card .details,
.blog-card .details ul {
    margin: auto;
    padding: 0;
    list-style: none;
}

.blog-card .details {
    position: absolute;
    top: 0;
    bottom: 0;
    left: -100%;
    margin: auto;
    transition: left .2s;
    background: rgba(0, 0, 0, 0.6);
    color: #fff;
    padding: 10px;
    width: 100%;
    font-size: .9rem;
}

.blog-card .details a {
    text-decoration: dotted underline;
}

.blog-card .details ul li {
    display: inline-block;
}

.blog-card .details .tags li {
    margin-right: 2px;
}

.blog-card .details .tags li:first-child {
    margin-left: -4px;
}

.blog-card .description {
    padding: 1rem;
    background: #fff;
    position: relative;
    z-index: 1;
}

.blog-card .description h1 {
    line-height: 1;
    margin: 0;
    font-size: 1.7rem;
}

.blog-card .description h2 {
    font-size: 1rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #a2a2a2;
    margin-top: 5px;
}

.blog-card .description .read-more {
    text-align: right;
}

.blog-card .description .read-more a {
    color: #004D40;
    display: inline-block;
    position: relative;
}

.blog-card .description .read-more a:after {
    content: "\f061";
    font-family: FontAwesome;
    margin-left: -10px;
    opacity: 0;
    vertical-align: middle;
    transition: margin .3s, opacity .3s;
}

.blog-card .description .read-more a:hover:after {
    margin-left: 5px;
    opacity: 1;
}

.blog-card p {
    position: relative;
    margin: 1rem 0 0;
}

.blog-card p:first-of-type {
    margin-top: 1.25rem;
}

.blog-card p:first-of-type:before {
    content: "";
    position: absolute;
    height: 5px;
    background: #004D40;
    width: 35px;
    top: -0.75rem;
    border-radius: 3px;
}

.blog-card:hover .details {
    left: 0%;
}

@media (min-width: 640px) {
    .blog-card {
        flex-direction: row;
        max-width: 100%;
    }

    .blog-card .meta {
        flex-basis: 25%;
        height: auto;
    }

    .blog-card .description {
        flex-basis: 60%;
    }

    .blog-card .description:before {
        transform: skewX(-3deg);
        content: "";
        background: #fff;
        width: 30px;
        position: absolute;
        left: -10px;
        top: 0;
        bottom: 0;
        z-index: -1;
    }
}
</style>