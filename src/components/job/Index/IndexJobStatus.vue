<template>
    <div v-resize="onResize">
        <div v-if="isLaptop || isIpad">
            <v-row>
                <v-col cols="6" md="4" v-for="job in jobs" :key="job._id" class="mt-5">
                    <v-card link>
                        <v-row>
                            <v-col cols="3">
                                <center>
                                    <v-card width="50" height="50">
                                        <img :src="job.idCompany.srcLogo" width="50" height="50" />
                                    </v-card>
                                </center>
                            </v-col>
                            <v-col cols="9">
                                <h6 class="font-weight-bold">{{ job.name }}</h6>
                            </v-col>
                            <v-col cols="12">
                                <div style="padding: 0px 20px;">
                                    <div>{{ job.idCompany.name }}</div>

                                    <div>
                                        <v-row>
                                            <v-col cols="6">
                                                <v-icon :color="website.color.tealMain.color">mdi-cash</v-icon>
                                                <a @click="linkLogin()" v-if="!user">Đăng nhập để xem lương</a>
                                                <span v-if="user" style="font-size: 12px;">
                                                    <span>{{ job.salaryType ? "" : "Trống" }}</span>
                                                    <span v-if="job.salaryType == 'Trong khoảng'">
                                                        <span>
                                                            {{ job.salaryfrom ? job.salaryfrom : "..." }}-{{
                                                                    job.salaryTo ? job.salaryTo : "..."
                                                            }}
                                                            {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                        </span>
                                                    </span>
                                                    <span v-if="job.salaryType == 'Thỏa thuận'">
                                                        <span>Thỏa thuận</span>
                                                    </span>
                                                    <span v-if="job.salaryType == 'Từ'">
                                                        <span>
                                                            Từ {{ job.salaryfrom ? job.salaryfrom : "..." }}
                                                            {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                            trở lên
                                                        </span>
                                                    </span>
                                                    <span v-if="job.salaryType == 'Đến'">
                                                        <span>
                                                            Lên đến {{ job.salaryTo ? job.salaryTo : "..." }}
                                                            {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                        </span>
                                                    </span>
                                                </span>
                                            </v-col>
                                            <v-col cols="6">
                                                <v-icon size="20" :color="website.color.tealMain.color">mdi-map-marker
                                                </v-icon>
                                                <span style="font-size: 12px;">
                                                    {{ job.workLocation }}
                                                </span>
                                            </v-col>
                                        </v-row>
                                    </div>

                                    <v-divider></v-divider>
                                    <b style="font-size: 13px !important">Còn 32 ngày để ứng tuyển</b>
                                </div>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </div>
        <div v-if="isMobile">
            <vueper-slides :arrows="false" :bullets="false" class="no-shadow" :visible-slides="1" :slide-ratio="1 / 1.3" :dragging-distance="90">
                <vueper-slide v-for="job in jobs" :key="job._id">
                    <template #content>
                        <v-card link class="mt-4">
                            <v-row>
                                <v-col cols="3">
                                    <center>
                                        <v-card width="50" height="50">
                                            <img :src="job.idCompany.srcLogo" width="50" height="50" />
                                        </v-card>
                                    </center>
                                </v-col>
                                <v-col cols="9">
                                    <h6 class="font-weight-bold">{{ job.name }}</h6>
                                </v-col>
                                <v-col cols="12">
                                    <div style="padding: 0px 20px;">
                                        <div>{{ job.idCompany.name }}</div>
                                        <div>
                                            <v-row>
                                                <v-col cols="6">
                                                    <v-icon :color="website.color.tealMain.color">mdi-cash</v-icon>
                                                    <a @click="linkLogin()" v-if="!user">Đăng nhập để xem lương</a>
                                                    <span v-if="user" style="font-size: 12px;">
                                                        <span>{{ job.salaryType ? "" : "Trống" }}</span>
                                                        <span v-if="job.salaryType == 'Trong khoảng'">
                                                            <span>
                                                                {{ job.salaryfrom ? job.salaryfrom : "..." }}-{{
                                                                        job.salaryTo ? job.salaryTo : "..."
                                                                }}
                                                                {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                            </span>
                                                        </span>
                                                        <span v-if="job.salaryType == 'Thỏa thuận'">
                                                            <span>Thỏa thuận</span>
                                                        </span>
                                                        <span v-if="job.salaryType == 'Từ'">
                                                            <span>
                                                                Từ {{ job.salaryfrom ? job.salaryfrom : "..." }}
                                                                {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                                trở lên
                                                            </span>
                                                        </span>
                                                        <span v-if="job.salaryType == 'Đến'">
                                                            <span>
                                                                Lên đến {{ job.salaryTo ? job.salaryTo : "..." }}
                                                                {{ job.currency == "VNĐ" ? "triệu" : "$" }}
                                                            </span>
                                                        </span>
                                                    </span>
                                                </v-col>
                                                <v-col cols="6">
                                                    <v-icon size="20" :color="website.color.tealMain.color">
                                                        mdi-map-marker
                                                    </v-icon>
                                                    <span style="font-size: 12px;">
                                                        {{ job.workLocation }}
                                                    </span>
                                                </v-col>
                                            </v-row>
                                        </div>

                                        <v-divider></v-divider>
                                        <b style="font-size: 13px !important">Còn 32 ngày để ứng tuyển</b>
                                    </div>
                                </v-col>
                            </v-row>
                        </v-card>
                    </template>
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';
export default {
    name: 'IndexJobStatus',
    props: ['website', 'user'],
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            jobs: [
                {
                    "_id": "624ab1725573caef775050ba",
                    "name": "Nhân Viên CSKH Kiêm Telesale Cho Mobifone - Đi Làm Ngay",
                    "vacancies": "Marketing Manager",
                    "workLocation": "Hồ Chí Minh",
                    "mainJob": "Kinh doanh / Bán hàng",
                    "sideProfessions": [
                        "Kinh doanh / Bán hàng",
                        "Marketing / Truyền thông / Quảng cáo"
                    ],
                    "numberOfRecruitments": 5,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "Chưa có kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 7,
                    "salaryfrom": 5,
                    "jobLocation": "Hồ Chí Minh",
                    "jobDescription": "<p>Trực tiếp thực hiện nghe cuộc gọi, tư vấn, hướng dẫn, giải đáp, ghi nhận đầy đủ các yêu cầu của khách hàng về sản phẩm, dịch vụ Mobifone</p><p>Thực hiên các yêu cầu liên quan khác của đơn vị quản lý khi được phân công</p><p>Địa điểm làm việc: 270A Lý Thường Kiệt Phường 14, Quận 10, Tp Hồ Chí Minh</p><p>Thời gian làm việc: Giờ hành chính Thứ 2 – Thứ 7 (08:00 – 17:00)</p>",
                    "candidateRequirements": "<p>Tốt nghiệp Cao Đẳng trở lên</p><p>Có kỹ năng giao tiếp, xử lý công việc nhanh và hiệu quả</p><p>Sử dụng thành thạo tin học văn phòng</p><p>Không có vấn đề gì về ngôn ngữ, phát âm, không nói ngọng, nói lắp...</p><p>Ưu tiên các ứng viên đã có kinh nghiệm trả lời khách hàng</p>",
                    "skills": [
                        "",
                        "Giao tiếp"
                    ],
                    "benefit": "<p><strong>Thu nhập: 6 triệu/tháng đã trừ BHXH</strong></p><p>Tham gia BHXH đầy đủ.</p><p>Môi trường làm việc chuyên nghiệp, năng động</p><p>Được đào tạo chuyên môn và kỹ năng phục vụ công việc.</p><p>Có hoa hồng thêm khi bán vượt doanh thu</p>",
                    "deadline": "2022-04-04T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "_id": "624aacb45573caef77505083",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweW3sWZjVyPxnxx6UyBhoIsh3C5Bj5pmQLwZgMF3qxJxXSlGUpGSlx6jIpx2kHCLk1WdbVNkNdbEP1k5oUohCdynxgCX1T3vFPjww50_SKbS1OGQiL2jzcXWSPAthZ9BbPA0hpHu1xML4g7IXKD-oGpcYCPz9Jo36HJhw1dsYcbANrKy5_WnmkDw0Ee4Xzc3NYzMCB-2pZIrr7KxW3xGVSqAoaCDDDTTXnpGhfDOE9nqej_DDDMwzakZtDdBjGcFYCGPdpiYAlNNMHkwueG6W_mpvedADUVdTKMclqfvIIyPZ8Mpa-k3tp134XI-i4QT00_W_c09-jwPaMJxbUrVB-pexmErfdXioJXmRTFcbrfFWUm9WCIHxPxd1cuPHDbs5lqQ1jdcZwX8kNu1CTHaUlFNp3M6bnjQvrkDTqambGxDM1Q5829ySQ6wHTQRGayCx6wLlcFHD2Ty5mC5_9Bt430nWHjQBhHGv22e81nMffjeqrNpFU4OOZk6khlb5SsCIA8631yh7DR879-RvndvkN51QeIMibsB06i3jd0-zgR5m8Hs9zUBDIOScsf0q1N4ahGm7N4Wr2AMoCen6CJBLHnQjTpIgpeyFuC5bEhjzUJvfuWwtanA-n6Ult021--wJlf_goEKVy6qKiwl2m0oPA5XLusIcFljHpf11aTP2tRG_49ubQ1iEl4WFalZRsnxGSOY1CjM-8hndRvLhf5tVVqTpQSongKNB5MGPufrvR6dWJVptXfa9sR08i9RiYg1YU6bYTUbRmB65KeBqSA=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweVF4UU8ymrQjusDxIN9t-4WYPJShBVeVX5KzEB1LM91WpwRGrb1a6JISZbXiY0CzNR2vPsticaI3tOYaLsex5lIwZLhnByqgupiyq6Oj11SyaVfd-wLy8z0RaMdphqRxXwXDTSVYa3FbXZg1399AHJd2UQfy_LL4PjiTM5ms9scUvFx-zXqL8wXv4Wt_uvgS1pmqbBrAUanh1URKsconVcjyQY835MDXLcXBp6mDtpKu8kPJTKaNnrC9TB2ax_eIa7TIi7gtyLVRE_6V_m5x5OXvVOeUpLsu0kACN3i9yGfRYVxZqzay-UnGcB0ZCcvnuEwtc_UUWydHwY1Z3nEIenqXyatmzdwuqpW3dfynxnSEwxa-R7WGsWb04dL2oGy0VGt-5Sn_EPFT_X8dOaMb9pMAubJzMo8JlINm_ofD9HTLljHOgxWn25ReBK8Ef3p2Bcyj99vw-pWOc8dRffMLjFWXo-DIJFO7BYsLvqrf38pW4lzLaHnDogugqZ3ekLjHfj8n9JRIUJgUxgkTroQGVcYPrxMjPgoFf_a-c6ma1pv4sHLtdd5RuFMj6lCBXQXO_duS0lSUmYcE3MQKh1ZRb5SEVzAP6I5GYDEVhmEL0AkzhQ93_WSwPPHCLptgX8kWtOGTOfbDW-xy-z60BDsB05kPh3_gb5LH8peOlApxU9bzjPeFKExQQeq19xTnx3faT_LR0G61EnB00jyFo9BADONZnEatH5WHqSye7KUakt6zFne0fBJLM5tvtUuHwX4mfndoLEnYRKRuDKF59c=w1920-h961",
                        "name": "Trung tâm Dịch vụ số MobiFone - Chi nhánh Tổng Công ty Viễn Thông Mobifone",
                        "introduct": "<p>Trung tâm Dịch vụ sốMobiFone là đơn vị trực thuộc Tổng Công ty Viễn thông MobiFone với chức năng phát triển và kinh doanh các dịch vụ giá trị gia tăng, đa phương tiện, quảng cáo, thanh toán, tài chính trên mạng viễn thông MobiFone.</p><p><strong>Tầm nhìn</strong></p><p>Với những thay đổi mang tính chiến lược, tầm nhìn của MobiFone được thể hiện rõ nét trong thông điệp “Kết nối giá trị, khơi dậy tiềm năng”. Tầm nhìn này phản ánh cam kết của chúng tôi hướng đến sự phát triển toàn diện và bền vững dựa trên ba mối quan hệ trụ cột: với khách hàng, với đối tác, và với từng nhân viên.</p><p><strong>Sứ mệnh</strong></p><p>Với MobiFone, sứ mệnh của chúng tôi là đem lại những sản phẩm và dịch vụ kết nối mỗi người dân, gia đình, doanh nghiệp trong một hệ sinh thái, nơi những nhu cầu trong cuộc sống, công việc, học tập và giải trí được phát hiện, đánh thức và thỏa mãn nhằm đạt được sự hài lòng, phát triển và hạnh phúc. Phát triển trong nhận thức, trong các mối quan hệ, trong cơ hội kinh doanh và hạnh phúc vì được quan tâm, được chăm sóc, được khuyến khích và được thỏa mãn. Tăng trưởng và hạnh phúc là động lực phát triển của các cá nhân cũng như toàn xã hội.</p><p>Bên cạnh đó, MobiFone có trách nhiệm đóng góp lớn trong cơ cấu GDP của quốc gia, thể hiện vị thế và hình ảnh quốc gia trong lĩnh vực công nghệ-truyền thông-tin học.</p>",
                        "foundedYear": 2008,
                        "averageAge": 25,
                        "companySizeStart": 100,
                        "companySizeEnd": 499,
                        "srcVideoYoutube": "https://www.youtube.com/embed/mL79RzTgh54",
                        "phone": "0329498488",
                        "website": "https://www.mobifone.vn/",
                        "address": "Số 01 phố Phạm Văn Bạch, Phường Yên Hoà, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=01+pho+Pham+Van+Bach,Phuong+Yen+Hoa,Quan+Cau+Giay,Thanh+pho+Ha+Noi,Viet+Nam&zoom=15&language=vi",
                        "career": "Dịch vụ khách hàng",
                        "careers": [
                            "Dịch vụ khách hàng",
                            "Tư vấn"
                        ],
                        "location": "Hà Nội",
                        "locations": [
                            "Hà Nội"
                        ],
                        "idEmployer": "624a99a15573caef7750506f",
                        "isActive": true,
                        "dateCreate": "2022-04-02T13:28:58.338Z",
                        "dateEdit": "2022-05-14T05:34:53.655Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "trung-tam-dich-vu-so-mobifone-chi-nhanh-tong-cong-ty-vien-thong-mobifone",
                        "__v": 0,
                        "color": "#0060B7",
                        "view": 0
                    },
                    "dateEdit": "2022-04-04T08:54:49.333Z",
                    "dateCreate": "2022-04-02T13:28:58.378Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "nhan-vien-cskh-kiem-telesale-cho-mobifone-di-lam-ngay",
                    "__v": 0
                },
                {
                    "_id": "6248e9a15573caef77504fb3",
                    "name": "CTV Tổng Đài Chăm Sóc Khách Hàng",
                    "vacancies": "Tư vấn",
                    "workLocation": "Hà Nội",
                    "mainJob": "Dịch vụ khách hàng",
                    "sideProfessions": [
                        "Tư vấn",
                        "Ngân hàng / Tài chính",
                        "Dịch vụ khách hàng"
                    ],
                    "numberOfRecruitments": 10,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "Chưa có kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Đến",
                    "salaryTo": 10,
                    "salaryfrom": 0,
                    "jobLocation": "Tòa nhà MB, Tầng 3, 102 Bàu Cát, P12, Tân Bình, HCM",
                    "jobDescription": "<p>1. Thực hiện cuộc gọi kiểm tra chính xác thông tin của khách hàng so với hồ sơ giải ngân</p><p>2. Tiếp nhận cuộc gọi và giải đáp thắc mắc của khách hàng về dịch vụ tài chính</p><p>3. Địa điểm làm việc: Số 1 Phùng Chí Kiên, Cầu Giấy, Hà Nội</p>",
                    "candidateRequirements": "<p>1. Trình độ học vấn:</p><p>- Tốt nghiệp Trung cấp trở lên.</p><p>2. Kinh nghiệm làm việc:</p><p>- Không yêu cầu kinh nghiệm, nếu trúng tuyển sẽ được đào tạo chuyên môn và kỹ năng</p><p>- Ưu tiên ứng viên có kinh nghiệm trong tổ chức Call Center</p><p>3. Kỹ năng:</p><p>- Kỹ năng giao tiếp qua điện thoại</p><p>- Kỹ năng xử lý tình huống</p><p>- Kỹ năng giải quyết vấn đề</p><p>- Kỹ năng lắng nghe</p>",
                    "skills": [
                        "",
                        "Giao tiếp"
                    ],
                    "benefit": "<p>&nbsp;- Được đào tạo</p><p>- Thăng tiến</p><p>- 3-6 tháng làm tốt có thể lên Nhân viên tổng đài CSKH</p>",
                    "deadline": "2022-04-03T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "view": 0,
                        "_id": "6248e89c5573caef77504f96",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweUCBLka-QEJqGV7JqwurZBGB9yGfXHr3a63qTwAoSpJmT9NOZWmRniN6RsSOFdhFzosHMOM29lbWQTA5QOrU_cHL3nlReeFXgHKKx0Yb3BNPH36f3Jn2Z2rSzfncGslsptKkMcsK5Hsc1QNWHgDUegCC48NoRPl6hU6TNfelB4b3DWCY4DOOzFeTEK2gbj4XvRUB_df3O1AV5uJC5dXH9pnN3XR56uuSL3V9mJhY1VgAhajOVvoVhSpyvfCpdeD6pq6ylyBKelo56OuhNlktJluW3E9ccrxblXT0pWpN544oix--aT6FC5o865m1GRJmlh2ebzwpeG8BuvuUymCUZDQDdPGTjbwoL-09Nmki28bZQfB9ZPIKB-_6ZVKmsuyfYG8ntFbe3wzpgKaVqmCXtDcJtRuLGKo8IA8CN1G-eNDU2OGwwECRdtB5I42fd7SkF7YJs9ZpEtXtLTpP4QgWCcF51-oJW9js5-bVE29Zoqa8wFssE-gADHrRoI_x7ThiKO3gDA62sabIJtyQG6AuiuNIijh8-H-BxGOjamt3_3GQSc7CIbEKsX3Ba_NxESmQOMd1ZcKWGfrfzia_KFhmtM5rsOaPKUHpomtdjsrkTeNT6P_8T0iOC18487fX2hcaSfiYoRyg1IXE86s4kT291jnqtACJgemMZw41sl5prZ7MsQ54J98RIbr8wLkChSFPJL-cWdF5ok7BZ6uoZvaP3UiPnw6R6hZ39IFbBe8n1wpxqU_CtlLFKIE23e9jYWk7RNy0ZwukpJiYl8hnlQ=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweVR6dMP0Venc55gZ_grBUBdWO3n4UzOJAkKNOrfVom3HgEYafBBwZLpyERolP4lpV1GwlYWcAOgtrpFiKhNzMsyfpPHK7UJ2KdDrqgngOQkINAmvLMwEKeVknWZOJ5BPCWzfffcqW7YvLINfr6vkIUtEcGKMuPG6Dr2BkDhTYGmE49NbTcINl3GzCiirfmnxEqcQQRyF_v49X6VSe8hQ-GjcNogRY9WO2xqETI16aeuhxvxArABOXIAMqVR_ulTaw89FXX5pAD95nLNyogl0GhVjVO_I1hYXh3b8OZXJRRPMpfVU8_Ay13n_04odiD7YcLd9Q1gDDwI9MESp-XHMXVEpPDwebwfPUG4aSuPLPUW_uK22CPrN-OpU2l0Stw_4SifKTReUYbIlgZHtZbBdlSr6CkSAuf2J2aR-kAnhcmETxmEtpECY91xNqd6B1UqtNCjbnnRXmCFhEm3oNaNl-vyW9GI41In1kuHRE9IYIcs0SsB-v9q5z7d9yqDQYp8Yka3EyIAXGEcbuz0_6o7WD3ERc0o4rH9L0tXAuftE4IMFt2ocLC8wbZwjYI7P5Lgih7eUJT6u2AsDXX7ikkXGLYU7rvKRa9DeaXniQ9YCxZVxQoW2lygHQtLfg89xhxaERMOGFrP11WeO7F1TR8wJkg9zXcliqsdNigfXIYKk3EmoArUumpTrco1IaJdvmqY0ZByyIhvA-lehFzGy-vM515PBWet8EF87EMZRR8z30Dk2xxdEuq3EbHQefYnxRv9ZqRgGLEnUTQRBQK4vK8=w1920-h961",
                        "name": "Công ty Tài chính TNHH MB SHINSEI (Mcredit) ",
                        "introduct": "<p>Mcredit trao cho bạn một tương lai tài chính vững vàng, ngay KHI BẠN CẦN</p><p>Được thành lập từ năm 2016, Công ty Tài chính TNHH MB Shinsei (Mcredit) là công ty tài chính liên doanh giữa Ngân hàng TMCP Quân đội (thuộc MB Group) và Ngân hàng Shinsei (Nhật Bản).</p><p>Nhất quán với chiến lược kinh doanh “Khách hàng là trung tâm”, Mcredit cung cấp các giải pháp tài chính thuận tiện cho khách hàng bằng ứng dụng công nghệ số thông minh, chiến lược sản phẩm toàn diện và trải nghiệm khách hàng tốt nhất. Các sản phẩm của Mcredit là: Cho vay tiền mặt, Cho vay trả góp, Thẻ tín dụng với lợi thế sản phẩm vượt trội, thủ tục xét duyệt nhanh gọn, dịch vụ chăm sóc hậu mãi tận tâm, lãi suất cạnh tranh. Đồng thời, để tạo thuận lợi tối đa trong việc thanh toán của khách hàng, Mcredit đã kết nối hơn 150.000 điểm thanh toán Payoo, MoMo, Viettel, VnPost và hệ thống chi nhánh, phòng giao dịch của MBBank trên toàn quốc.</p><p>Mcredit tin tưởng rằng, với những thế mạnh nền tảng vững chắc từ các cổ đông lớn là Ngân hàng TMCP Quân đội (MBBank) và Shinsei Bank (Nhật Bản), định hướng chiến lược rõ ràng, sự dẫn dắt của đội ngũ lãnh đạo trong và ngoài nước giàu kinh nghiệm, tràn đầy nhiệt huyết cùng đội ngũ nhân viên trẻ trung, sáng tạo, môi trường làm việc linh hoạt (Agile), Mcredit sẽ trở thành Công ty cung cấp dịch vụ tài chính số thuận tiện nhất cho khách hàng.</p>",
                        "foundedYear": 2016,
                        "averageAge": 25,
                        "companySizeStart": null,
                        "companySizeEnd": null,
                        "srcVideoYoutube": "https://www.youtube.com/embed/6S_iE1801co",
                        "phone": "02471086888",
                        "website": "http://www.mcredit.com.vn",
                        "address": "Tòa nhà MB, Tầng 3, 102 Bàu Cát, P12, Tân Bình, HCM",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+nha+MB,Tang+3,102+Bau+Cat,P12,Tan+Binh,HCM&zoom=15&language=vi",
                        "career": "Dịch vụ khách hàng",
                        "careers": [
                            "Dịch vụ khách hàng",
                            "Ngân hàng / Tài chính",
                            "Tư vấn"
                        ],
                        "location": "Hồ Chí Minh",
                        "locations": [
                            "Hồ Chí Minh"
                        ],
                        "idEmployer": "6248e7425573caef77504f8a",
                        "isActive": true,
                        "dateCreate": "2022-04-02T13:28:58.338Z",
                        "dateEdit": "2022-04-02T13:28:58.338Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit",
                        "__v": 0,
                        "color": "#0C5DE6"
                    },
                    "dateEdit": "2022-04-03T00:27:31.289Z",
                    "dateCreate": "2022-04-02T13:28:58.378Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "ctv-tong-dai-cham-soc-khach-hang",
                    "__v": 0
                },
                {
                    "_id": "6248e68c5573caef77504f57",
                    "name": "Nhà phát triển Front- End",
                    "vacancies": "Nhà phát triển Front- End",
                    "workLocation": "Hà Nội",
                    "mainJob": "IT phần mềm",
                    "sideProfessions": [
                        "IT phần mềm",
                        "Ngành nghề khác"
                    ],
                    "numberOfRecruitments": 3,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "2 năm kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 60,
                    "salaryfrom": 22,
                    "jobLocation": "Tầng 12, 12 A và phòng 1602 tầng 16 tòa nhà Thăng Long, Số 98 Ngụy Như Kon Tum, phường Nhân Chính Quận Thanh Xuân, Hà Nội",
                    "jobDescription": "<ul><li>Chuyển nhu cầu kinh doanh (câu chuyện của người dùng) thành yêu cầu kỹ thuật (ứng dụng chức năng</li><li>Tương tác từ xa hoặc trực tiếp với các thành viên ở lại Đức</li><li>Thiết kế, xây dựng và duy trì mã HTML5 / CSS3, JavaScript và / hoặc TypeScript hiệu quả, có thể tái sử dụng và đáng tin cậy sẽ được triển khai trong ứng dụng dựa trên Đám mây</li><li>Đảm bảo hiệu suất, chất lượng và khả năng đáp ứng tốt nhất có thể của các ứng dụng</li><li>Xác định các nút thắt cổ chai và lỗi, đồng thời đưa ra giải pháp cho những vấn đề này</li><li>Duy trì chất lượng mã, tổ chức và tự động hóa</li><li>Viết và duy trì các bài kiểm tra tự động hóa chất lượng cao với dưa chuột, selen, karma, jasmine, thước đo góc…</li><li>Thực hiện đánh giá mã</li><li>Thực hành Agile Scrum và DevOps với các công cụ CI / CD được hỗ trợ như Jenkins, GitLab, Azure DevOps ..</li><li>Tuân thủ các tiêu chí chấp nhận và Định nghĩa Hoàn thành&nbsp;</li></ul>",
                    "candidateRequirements": "<ul><li><strong>Hơn 2 năm kinh nghiệm làm việc trong Angular 2 + / Vuejs</strong></li><li>Có khả năng giao tiếp rõ ràng với các thành viên trong nhóm kỹ thuật và phi kỹ thuật bằng tiếng Anh</li><li>Trình độ tiếng Anh tương đương chứng chỉ B1 hoặc TOEIC 700+</li><li>Chủ động và tự tổ chức</li></ul><p>Tốt đẹp khác có:</p><ul><li>Thành thạo phát triển giao diện người dùng với JavaScript / TypeScript trong NodeJS, có kiến ​​thức tốt về hệ sinh thái của nó</li><li>Hiểu biết sâu sắc về lập trình hướng đối tượng và các nguyên tắc phát triển (ví dụ: SOLID, DRY, KISS…)</li><li>Quen thuộc với các mẫu thiết kế và kiến ​​trúc khác nhau (ví dụ như các thành phần sáng tạo, cấu trúc, hành vi, vùng chứa và trình bày…)</li><li>Kỹ năng viết thư viện JavaScript / TypeScript có thể tái sử dụng</li><li>Có kiến ​​thức về quản lý trạng thái Ứng dụng (ví dụ: NGXS, NGRS, Redux)</li><li>Triển khai các nền tảng thử nghiệm tự động và thử nghiệm đơn vị như jasmine / karma, selen</li><li>Trải nghiệm với văn hóa Agile Scrum hoặc DevOps</li><li>Quen thuộc với RxJS hoặc ExtJS, Gherkins / Cucumber, Serenity JS, Thước đo góc, WebDriver</li><li>Quen thuộc với Confuence, Jira, GitLab</li><li>Làm việc từ xa với khách hàng Đức</li><li>Sẵn sàng đi du lịch Châu Âu ngắn hạn hoặc dài hạn</li></ul>",
                    "skills": [
                        "Angular JS",
                        " VueJS"
                    ],
                    "benefit": "<ul><li>Lương: 22tr - 60tr / tháng</li><li>Lương trọn gói: 13 tháng thu nhập mỗi năm</li><li>Bồi thường OT: lên đến 400%</li><li>Thưởng sinh nhật, đêm giao thừa, 30/4 &amp; 1/5, 2/9: 500.000VNĐ</li><li>Quyền lợi trẻ em: 500.000 đồng / tháng (từ 7 đến 24 tháng tuổi)</li><li>Voucher mua sắm hoặc du lịch 5.000.000VNĐ dành cho nhân viên chính thức làm việc trên 1 năm và được đánh giá thành tích xuất sắc</li><li>Teambuilding hàng năm: du lịch hè, nhiều hoạt động trong nhà và ngoài trời như câu lạc bộ yoga, câu lạc bộ bóng đá, câu lạc bộ bơi lội,…</li><li>Môi trường làm việc chuyên nghiệp và năng động</li><li>Có rất nhiều cơ hội làm việc ở nước ngoài cho những người có khả năng ngoại ngữ tốt.</li><li>Gói bảo hiểm đầy đủ phù hợp với luật lao động</li><li>12 lá hàng năm mỗi năm</li><li>Thời gian làm việc: 08:45 AM - 12:15 PM, 01:30 PM - 06:00 PM, từ thứ Hai đến thứ Sáu. Người lao động được nghỉ 2 ngày / tuần (thứ 7 và chủ nhật).</li></ul>",
                    "deadline": "2022-04-03T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "view": 0,
                        "_id": "6248e4f55573caef77504f3a",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweXiUNj-Znpi4UTcBDJ00kETJQql7mWdTNn3wmdihBMq2tDvDRIF0wnMhOHX75rObOCtgelfJBSH5nA-16eoqxgtwxjnQHTBjhHM1eLupiRQIQBp53bqRZB5wzxaIXHOUbNfIhcMn4aM6ygDfxLBLIUfSvLgrsb72zRaxHj32xZvIWljUhf5PN03hK0-tZu9diR-6dC5CNdU3jXwWwsBHzuYXoPCOQ5cPogGxcmZBFzSjh03IpneLJeSk5exsqRBHtpEqINvDoNg5ng8xYEfjfCKzkd47FCWdsTiBRdFx_bdB3OyVoi5HukaggZQxqtPpCkTUc1FVUH8gRzkcYGCX4JQ5drcPkFALziJumU1PLWhHaA00BRvic88I5SDUgJ-T4WS0D-yzU-QXCI6RfR_C3nwhAkpfA5FhDHrJrLtR5evi6LyGD4PN1UlwnPFIjqqTaJdUPNA77_1FiaJRVhsuN6Aaf0niF30Ku2JvuyXqppxmxmziSbKvdAZtUBQQZsrfz7LEknVSrNB2OYf1vxS3kSoZpHC03TLvO7-s1WpIsjCp2-PiYL8PBJKqZZP0fVEZCzCvbsjOn7sInPK4NXX-nP0SJ7Xi1Z-A4VCO8F0OH-BFLiXotcBMdzNoO7w62YSAn_87idXFTcf38JY9-o7ZZFmOc-GKhlUcTaJqaAz1N7AfllgqcLjsfzJAqDokTAj5eDbHQdDLPT5g8JUM1b2Ao5iZUx29CaTL4otMpTL_8wjIIcOyUuytW-Tn8DhYccsuVae66HdVLI6mGJUj0A=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweWrIIbDhZuFlgIJ25GoXAjMXn3p6tc3aPIe0-8fiZVNbDkpHIQEnqkLUllnQzLF8trIgBSAz2nxtEAP_kS96EgKh6Nz1BnX_fxbSQy8fQhW8S19M7j_lvDjP_P7L_tAnow0GePUk4t0XDnU8dN5eoyu078oeUxdh07v9KLYktO0ZnL9AggXGuJo-BLkI6PhdIpXDcCD6BW2u4I4ka9nCgdD_AZwYXJQS_NVrjw8nagGlTmeC005TKpLfyN6LaJXUNYkgVxLQdR8rGH1zsdkRz6UA2EqTg43M0k5bWpt8vTCFvH2-45pE1Qnps2fQGseji6gKW3ftdN9JFlZVto1tVRg_raKYihV10bLKBg_XO43D-PX4kde2_gMtdLmlGoHMZ6ce7T36gaFwAEtV87D37GenbFWAFpujFNvEYqkfvvMJARMh0xPuxgBlR47WVRxuUgC8nGBigXV_C50nchx_VQ5MvrQv-FGsS3CPZlqt8lV72Ms8iqqhaMWlwuec0bKWjfxP92G2EOzBrCKZ_zHlZvK5zCNoz8Ycdcg9Dm1dML2saulFwAAaFo5IkwZoBJTv9gE5P3i9CMahaPbbs9R6YgIE39Ktft_2Cc2TmXZ_J_WxUXnGBGz4fAHFGzxSH9DE3owIdjqTxQbVTWjHbok0oyYNuBNs8F1i06iBkWnYLisDKbswgRF2IrvIfBbZaD4ZB67ALGVLBhrV2yK5-nTC9aFtHLfi_M_kZQvd4iGrv7-RJ_VNBMcI_9HQTG1imYwAEy6GX4P-VXfR5ED64k=w1920-h961",
                        "name": "Công ty TNHH Giải pháp Tin học IFI SOLUTION JSC",
                        "introduct": "<p>Công ty IFI Solution là công ty thành viên thuộc nhánh Châu Âu của Tập đoàn NTT Data, tập đoàn Top 10 Thế giới và Số 1 Nhật Bản về Dịch vụ CNTT. IFI Solution chuyên thực hiện các dự án phát triển và kiểm thử Web/ Clouds Application, Master Data Management, IoT &amp; Big Data platform, Mobile Apps, chủ yếu cho các khách hàng Châu Âu như Pháp, Đức, Romania, Thụy Sỹ, Italia. IFI Solution có một môi trường làm việc chuyên nghiệp, thân thiện với cơ sở vật chất hiện đại, tiện ích. IFI Solution tự hào mang đến cho bạn một chế độ phúc lợi hấp dẫn và thú vị.</p><p>Chào đón bạn đến với IFI Solution. Hơn 250 đồng nghiệp đang chờ đợi bạn !</p>",
                        "foundedYear": 2003,
                        "averageAge": 22,
                        "companySizeStart": 100,
                        "companySizeEnd": 499,
                        "srcVideoYoutube": "https://www.youtube.com/embed/iMlkhIKzftQ",
                        "phone": "0382020858",
                        "website": "https://www.ifisolution.com/?fbclid=IwAR0nz-b4HNt4assTgXRoebKcHOPxt07mxRMvymVrw1fFeLe4VwqlYIXFxbk",
                        "address": "Tầng 12, 12 A và phòng 1602 tầng 16 tòa nhà Thăng Long, Số 98 Ngụy Như Kon Tum, phường Nhân Chính Quận Thanh Xuân, Hà Nội",
                        "srcMap": "",
                        "career": "IT phần mềm",
                        "careers": [
                            "IT phần mềm"
                        ],
                        "location": "Hà Nội",
                        "locations": [
                            "Hà Nội"
                        ],
                        "idEmployer": "624849e6265148ced181a71d",
                        "isActive": true,
                        "dateCreate": "2022-04-02T13:28:58.338Z",
                        "dateEdit": "2022-05-16T04:37:41.641Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-tnhh-giai-phap-tin-hoc-ifi-solution-jsc",
                        "__v": 0,
                        "color": "#F68B3C"
                    },
                    "dateEdit": "2022-04-02T13:28:58.378Z",
                    "dateCreate": "2022-04-02T13:28:58.378Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "nha-phat-trien-front-end",
                    "__v": 0
                },
                {
                    "_id": "624840ca265148ced181a67a",
                    "name": "Chuyên Viên Tư Vấn Bán Hàng Mỹ Phẩm Cao Cấp (Tại Tttm Hà Nội) (Thu Nhập Từ 8-20M)",
                    "vacancies": "Chuyên Viên Tư Vấn Bán Hàng Mỹ Phẩm Cao Cấp",
                    "workLocation": "Hà Nội",
                    "mainJob": "Hành chính / Văn phòng",
                    "sideProfessions": [
                        "Kinh doanh / Bán hàng",
                        "Mỹ phẩm / Trang sức",
                        "Hành chính / Văn phòng"
                    ],
                    "numberOfRecruitments": 4,
                    "workingForm": "Toàn thời gian",
                    "gender": "Nữ",
                    "level": "Nhân viên",
                    "exp": "1 năm kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 20,
                    "salaryfrom": 8,
                    "jobLocation": "Tầng 17, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, P. 25, Quận Bình Thạnh, TP.HCM",
                    "jobDescription": "<p>- Bán hàng tại Showroom mỹ phẩm cao cấp trong TTTM Vincom<br>- Mời khách trải nghiệm dùng thử sản phẩm tại showroom<br>- Làm test thử mỹ phẩm chăm sóc da cho khách hàng tại showroom<br>- Tư vấn sản phẩm phù hợp cho khách hàng<br>- Làm việc Fulltime theo ca - xoay ca (ca 1: 9:30-17:30, ca 2: 14:00-22:00, nghỉ giữa ca 45 phút).</p>",
                    "candidateRequirements": "<p>- Ưa nhìn, mặt không mụn<br>- Có thể làm việc theo ca<br>- Có ít nhất 1-2 năm kinh nghiệm bán hàng trực tiếp<br>- Đam mê sales, % Hoa hồng lớn<br>- Chưa có kinh nghiệm về mỹ phẩm/làm đẹp sẽ được đào tạo từ A-&gt;Z<br>- Nếu có thể giao tiếp tiếng Anh mức lương cơ bản sẽ cao hơn</p>",
                    "skills": [
                        "kỹ năng bán hàng",
                        " Tư vấn",
                        " Tiếng Anh"
                    ],
                    "benefit": "<p><strong>- Nhân viên Bán hàng không biết tiếng anh: Lương cứng (tính theo số ngày số giờ làm việc ở công ty) + HH + Bonus = 8-15 triệu/ tháng</strong></p><p><strong>- Nhân viên Bán hàng biết tiếng Anh : Lương cứng 7-8 triệu (tính trên số ngày số giờ làm việc ở công ty) + hoa hồng + hot bonus = 10-20 triệu/tháng + chế độ phúc lợi đầy đủ</strong></p><p>- Không trừ lương, không áp doanh số trên lương cứng nhé</p><p>- Nghỉ 4 - 5 ngày/1 tháng</p><p>- Đầy đủ BHXH, BHYT, BHTN sau thử việc</p><p>- Gói bảo hiểm sức khỏe cá nhân PVI, khám sức khỏe định kỳ</p><p>- Cơ hội phát triển thăng tiến (Nhân viên --&gt; Cửa hàng trưởng)</p><p>- Được đào tạo kiến thức sản phẩm và kỹ năng bán hàng, kiến thức về da</p><p>- Cơ hội đào tạo kỹ năng sales bởi trainer nước ngoài</p><p>- Được làm việc trực tiếp với các chuyên viên bán hàng, best salers người nước ngoài bao gồm Israel, Singapore</p>",
                    "deadline": "2022-04-02T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "view": 0,
                        "_id": "62483e5f265148ced181a63e",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweX5nORRk4ld4yntz3cG9cI_YnVErhbDBooVEyo_IJuKbtoYEblic1XZhBOVkQ2fcZA4QPTGFojUGI0k-v3iyYKvHLWIwtVf1gdGZj4YhejUCpIohappZc3HHxwqZisKyzEkeP3DEUJqeYljd_eU6Ak_apw3VKUXwPifWoGFKlYbaDhrkBTS_uBxzq8HTsaJf2TUtnaWkGdVs5CzH-ItONC1WzGYnvcFHL2QGyHJuNO2nR6k1fORcxsumQA-lVGhPtvIg4z7wCbjD-7vk56zJVmxa5acxxf8w9UowodbTBSHVj2I-kPLfrX7EIKh-NcgB6RCndsBtVSWegSt3I-Do7r-JgTVuOXiMkRCx-5NEDbAL1vAcx2aKkszPW1GACSanRUQ-NnQo4ZqlZZr4OiZw7A96KfndVrSATTH2SrOt4CnzpLchenbKv8x8Qo2uPreXs3cM6cq8Fd3IG-nSz97Le6NWh0zXJS8IakorgeAa4g-WsqAgAJU22UdoZObZKmLFEcmbhUR5XFHxlcVmvd9Ffn6t-FUPpeiJxuJ-0a89DZs9iHx7giQQcDZc52LwWgtSv6LNT7zoognhiwFyXLzomw6EqT1SGSrmIqAvsJb52ScWCE-pJmyR1vgs_34pec3Htt_5ckWX54s6Jt_kGgf04RLIEZGT5uUpq6jTvd0Kyh3Z9I-PnlVH9EvMps0kq4cYE6kHD6GPEy381-1lDgMoUyQtiAzmhVzjW493VQd_Tdtp1ZWA0DWjB-xcXAPSiYAXiMkYQ8BYztB8ZIipBU=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweUVNhsMOM21hJpxkjcyxc3oWR9ntICqydFic2kP2GO-U_hWwqhPiiVy_IAFaA1cQIcAeDlPdOCmGLE7EzMtD3H-y7FDkVrNx79NR-rX7rm6yue9RmNA2JCSXNxtgYMcfbDzJ6WMbIpXN-e2rCdwf--Blg9X_FfdCLus3sh49o_BkDYC_7y3r9Bw3gyZBzo8XDX8R7mCiSh-drVhtJgj_AVwuQVeX7v04jbfA12wyQF-shDCo1Sd_lDd13BjJo4W21683tc9OiqShLymOcnC5Sm7zVorJlN2kzRVr4EIl-_3dAaMXJkquYd48TrPXAHLayWcICLv8A7IBSng5SVNDmRWlpT0RS4DC-UaPBWv2E_7PEdrCTnlFzBqMBEi9PRSr_PyTJj83-N8Xo8RHb_YylvijMlBKtLx5F0AgYhod9FQKWl6HxD6iUuByfHoi3Cjidv5_UVE-rw-7GrYo3I7Zx5ENDJAjE6VucKd81fv19jOig_8KwClHkMNoIvwkJsw6I1WKxsbKdSNQ9JpoK0iOuMG4QUNGsnnc87sZxzEIqgghrZFfBlLlnuI1549jkpY3k8DWCSuT9y2V3xHOuJrAh-_TYfZYoteR6lmwhhTD1Cjy8OdZxoHYpRGcjBw9tiFwJrRfLyru9ejqluDPFoGCVQLvxzloXRfnAyjuyBhkv9o2xfNAXn_5uHNp6eIb2rCjmvSpUTNBWXQWePlUEOpH1Bn20F_3OPc9DH5D7mMXrP06YjbW-MFMq6cmL9h3jrxn0A0oQKuvuZRtsHZjSA=w1920-h961",
                        "name": "Công ty TNHH Milensea Retail",
                        "introduct": "<p>“Cuộc sống là sẻ chia”, với phương châm sống này, từ năm 2010, Ông Tal Siman Tov cùng vợ là Bà Sima Siman Tov, 2 người con của vùng đất thánh Jerusalem, đã mang những bí truyền làm đẹp từ quê hương sở tại đi khắp khu vực Đông Nam Á với mong muốn chăm sóc và giữ gìn vẻ đẹp cùng làn da cho người phụ nữ Á Đông.</p><p>Đem chuông đi đánh xứ người, Tal và Sima đã mang những thương hiệu mỹ phẩm cao cấp nhất, những bí truyền làm đẹp quý nhất từ Israel đến Singapore rồi Thái Lan và đều tạo được tiếng vang cùng sự trung thành từ khách hàng và người tiêu dùng.</p><p>Năm 2015, sau chuyến du lịch đến Việt Nam, Tal và Sima đã yêu đất nước hình chữ S với nét văn hóa đặc biệt và đa dạng cùng sự thân thiện của con người nơi đây. Đây là động lực khiến Tal và Sima quyết định dừng con thuyền viễn du Đông Nam Á của họ và thả neo.</p><p>Ngày 18 tháng 11 năm 2016, CTY TNHH MILENSEA RETAIL chính thức được thành lập tại Thành Phố Hồ Chí Minh.</p><p>Đến cuối năm 2020, MilenSea đã có hệ thống 17 cửa hàng phân phối mỹ phẩm từ Biển Chết tại các trung tâm thương mại lớn trên toàn quốc.</p><p>Tại thị trường Việt Nam, MilenSea LÀ NHÀ PHÂN PHỐI ĐỘC QUYỀN CÁC THƯƠNG HIỆU MỸ PHẨM CAO CẤP: Aqua Mineral, Botanifique, Gold Elements.</p>",
                        "foundedYear": 2015,
                        "averageAge": 25,
                        "companySizeStart": 100,
                        "companySizeEnd": 499,
                        "srcVideoYoutube": "https://www.youtube.com/embed/aM161p5MYr8",
                        "phone": "02839112191",
                        "website": "https://milensea.com.vn/",
                        "address": "Tầng 17, Tòa nhà Pearl Plaza, 561A Điện Biên Phủ, P. 25, Quận Bình Thạnh, TP.HCM",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+17,Toa+nha+Pearl+Plaza,561A+Dien+Bien+Phu,P.+25,Quan+Binh+Thanh,TP.HCM&zoom=15&language=vi",
                        "career": "Hành chính / Văn phòng",
                        "careers": [
                            "Kinh doanh / Bán hàng",
                            "Mỹ phẩm / Trang sức"
                        ],
                        "location": "Hồ Chí Minh",
                        "locations": [
                            "Hồ Chí Minh"
                        ],
                        "idEmployer": "62480710265148ced181a621",
                        "isActive": true,
                        "dateCreate": "2022-04-02T06:56:27.491Z",
                        "dateEdit": "2022-04-02T12:16:22.960Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-tnhh-milensea-retail",
                        "__v": 0,
                        "color": "#5D432A"
                    },
                    "dateEdit": "2022-04-02T12:34:38.034Z",
                    "dateCreate": "2022-04-02T06:56:27.523Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "chuyen-vien-tu-van-ban-hang-my-pham-cao-cap-tai-tttm-ha-noi-thu-nhap-tu-8-20m",
                    "__v": 0
                },
                {
                    "_id": "62459c77203080b18ec3e73d",
                    "name": "Nhân Viên Tư Vấn Tài Chính Lương Cứng 7 Triệu (Hỗ Trợ Data Nóng Miễn Phí) - Không Yêu Cầu Kinh Nghiệm",
                    "vacancies": "Nhân Viên Tư Vấn Tài Chính ",
                    "workLocation": "Hồ Chí Minh",
                    "mainJob": "Bất động sản",
                    "sideProfessions": [
                        "Bảo hiểm",
                        "Tư vấn"
                    ],
                    "numberOfRecruitments": 15,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "Chưa có kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 20,
                    "salaryfrom": 7,
                    "jobLocation": "144 Bạch Đằng , phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh",
                    "jobDescription": "<p><i><strong>Công việc đơn giản, theo quy trình:</strong></i></p><ol><li>Tiếp nhận Data khách hàng có sẵn từ bộ phận Marketing, không cần tìm kiếm bên ngoài; data chất lượng đã có nhu cầu quan tâm.&nbsp;</li><li>Liên hệ bằng ứng dụng có sẵn để giới thiệu về Công ty; tư vấn các sản phẩm Đầu tư Tài chính. (Trung bình chỉ 5-10 cuộc gọi/ngày)</li><li>Gửi thông tin sản phẩm đến khách hàng qua Zalo/Facebook; chăm sóc, giải đáp các thắc mắc nhằm đảm bảo độ hài lòng, tin cậy của khách.</li><li>Đăng các bài viết về sản phẩm, chương trình, tin tức liên quan.... lên tài khoản Zalo/Facebook công ty đã được phòng Marketing thiết lập.</li><li>Lưu trữ thông tin khách hàng lên hệ thống; báo cáo lên Trưởng nhóm/Trưởng phòng kết quả công việc cá nhân</li></ol>",
                    "candidateRequirements": "<ol><li>Giao tiếp tốt; giọng nói dễ nghe.</li><li>Có laptop cá nhân để hỗ trợ công việc.</li><li>Sử dụng vi tính văn phòng căn bản.</li></ol>",
                    "skills": [
                        ""
                    ],
                    "benefit": "<ol><li>Lương cứng: 7.000.000 VNĐ; thử việc 02 tháng. Hưởng các khoản phụ cấp (chuyên cần...).</li><li>Được đào tạo kiến thức và kỹ năng nghiệp vụ trong 07 ngày đầu tiên; hỗ trợ chi phí học việc (300.000đ).</li><li>Xét duyệt tăng lương định kỳ 6 tháng, 12 tháng một lần.</li><li>Cơ hội thăng tiến trở thành team leader, quản lý với cơ chế hấp dẫn; lương cứng + phụ cấp (quản lý đội nhóm) + thưởng &nbsp;từ 7.000.000 - 50.000.000 VNĐ.</li><li>Môi trường làm việc chuyên nghiệp; trang thiết bị đẳng cấp.</li><li>Chế độ phúc lợi khác theo quy định của Bộ luật Lao động và quy định của Công ty;</li><li>Được tham gia BHXH đầy đủ và các chế độ chăm sóc sức khỏe; nghỉ dưỡng, đi du lịch hàng năm trong và ngoài nước;</li><li>Môi trường làm việc siêu năng động, thoải mái, sẵn sàng “ăn chơi nhảy múa” sau những giờ làm việc căng thẳng;</li><li>Tham gia các hoạt động thể thao vui chơi, bóng đá, cầu lông, team building, du lịch biển 3 tháng/ lần</li></ol>",
                    "deadline": "2022-03-31T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "view": 0,
                        "_id": "624597f9203080b18ec3e63b",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweWSG1UJf3w1L6QSgzqnftIwJQdNDKPMlQ5ZxhZnXQcSKi9qDH7B26LAwhXPo6THIO9OgG0qaMGia-0Jo48IbYvf_0LW40SpIL-Gul4y6YFEGLrqeXHLOs43TAjh7N4E0KAVK28_09gs1cHnpJd0DpMp8_mK_RgWP6zkV-OLFwIUDVIsK_hmkPLeiZR75Wdo1cxIpucll45EwZxXMGQGiq8odpd8fTBcug9gOwhifQr1X5-4oQdC2M1qR24e0OYo57muYXiP1gdRa81ZLb1F8TYduR3LlfD3tYzIEmuQ9h1VZk8tkKwlD83qKNrMNkuxTEX-vhjRm6R1xyuMUjyaqw4EI_-VCCniXbQlQr4RxoMfnWhXzvJ5uKUQzj7PBCnI0vZuFz9qgcXWtjxgpJTdfQvKBghCHZGKMTh3e1v7DSPgJZVrd-jA0BLLMBCiRJ0uDuzkimEi2RKc8tZaMy0dKzzx8EAWnSuXIdXeti3bUAXc_0e9VDCMi7qzzm9dx1qlcXAxDbICEHmfwBfiMeyrYB7RAVvi3u0lbAQsi_hE9craNADDe5yOld6tnSiLGnbgOfX-bMFoM7i69M7Qol98yTfBofzCILRRRlcWVekRhZ7w0lvN67aZDY1r2n9dEs9gWppHEWyne6AfDxOARg23Mm0PI_1d6uC1mFN8-uhRWlUv2mna5Zf0GXqQvYDnqrDgsoe1WA2JLCeGA19nW1NkPi_AFZcyP-eoBAax0p0cDxdU1G069-F7xxi5e9Kd0Il5e8j2BE6n6wTNajbUB6k=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweV-mOVhkv8TBvD5wULzTmmvjqsuto6LOm416FurBuDK9unzaKg6IwgmJcFjc4peOzz2mp68z9SyPRiJ4mYd_DsklMP77gL1KyNm40W3Pz-eParkyesP6xFQqnG5NkDF_ExqgDZVa5MwALSK7Fan_eZeqemp199T5Ih_ZuOWaePwqcU_4AkekWImkkGd_Wwqr6CK3C2pd7O9ptr0q5jryj2LfmPvBTn4ZB8_YCDiRMCWaAGEj2Xo9Ku4Pff2XSVduqbI6BCts_ZzALHMx3Kp0uJ3OO5zTthSyzoBWQqhWBPgo5sRLrPWeacqTHshShG0MnoQsqhn0T1wat-wrkFb3JaC3ILtlEpGU-NKaD_4ESaAiEY8bDgxHzYFtZ-rAGrKMjUx1NxHcDTlPzg5dOOwmLgYqvDgMSfqRYW5ddwsIlaJNDIlD9kyKOUDo-u8aPPks2_tV0Q7IRDRSvVwhsDS8lO4hYka7JUwuVdVHcEVo66FU_7LPL8rTWSXbtPVLKF_BR2d1YmFpM9qnjM1_k5-chkAaP3YBeCby4PuwhVytdNuDXjnj_PLMg8hh9agsoY1JMocuK0QHn20pDgqm_ExhwVz78jgV3AzMKAOn75211EGXYzBhkr19XkRoSrvclj-dter9U_G-XDXa4aWRQW01hA_IuKhaqmFd8ZRgtLSLDD9e1ppQ90ENDIl9SgfXI_EvuuaKmO_Jgl16rY9XFmnvkkaG5UiDcObKPeDqgYGx2nwTm8Nn0Nn8vDaRx3OCF2b1DZIjpv2m0z5x1DHh_4=w1920-h961",
                        "name": "CÔNG TY CỔ PHẦN TẬP ĐOÀN ITP",
                        "introduct": "<p>Công ty Cổ phần Tập đoàn ITP (ITP Group) là tập đoàn công nghệ tiên phong hỗ trợ toàn diện các doanh nghiệp SME trong cộng đồng Việt toàn cầu.</p><p>Trong suốt 2 năm hình thành và phát triển với phương châm TÂM - TẦM - TÀI - TỐC - TRÍ, ITP Group đã có hơn 100 dự án hoàn thành, hơn 1000 khách hàng thân thiết là những tập đoàn lớn nhỏ đã hợp tác cùng ITP và hoàn thành các dự án thành công vang dội; hàng chục công ty thành viên và văn phòng đại diện trên toàn quốc cùng đội ngũ hơn 500 nhân sự. Song song đó đồng hành cùng các doanh nghiệp để tạo ra các chiến binh xuất sắc nhất trong ngành Digital như ADS, SEO,...<br>&nbsp;</p><p>Tính tới nay, ITP Group sở hữu một hệ sinh thái đa dạng trên các lĩnh vực: Đầu tư Tài chính – Bất động sản – Công nghệ – Truyền thông &amp; Marketing. ITP Group có Tầm nhìn<br>&nbsp;</p><p>– Sứ mạng không chỉ mang lại giá trị lợi ích thiết thực cho đối tác, khách hàng, cộng đồng mà còn hướng tới là một nơi làm việc tốt nhất, với mức lương thưởng cao so với thị trường với các chính sách đãi ngộ, thu hút nhân sự đủ Đức và Tài. ITP đặt mục tiêu: Con người tinh hoa – Sản phẩm, Dịch vụ tinh hoa – Cuộc sống tinh hoa – Xã hội tinh hoa.</p><p>Tinh thần không ngừng đổi mới, sáng tạo, nắm bắt xu hướng phát triển công nghệ tài chính từ nền tảng fintech, ITP Group mong muốn kiến tạo nên hệ sinh thái sản phẩm, dịch vụ đẳng cấp, vươn lên vị trí top đầu tại Việt Nam và khu vực.</p>",
                        "foundedYear": 2019,
                        "averageAge": 25,
                        "companySizeStart": 500,
                        "companySizeEnd": 1000,
                        "srcVideoYoutube": "https://www.youtube.com/embed/whTptMo8Mfk",
                        "phone": " 02899989999",
                        "website": "https://itp29.com/",
                        "address": "144 Bạch Đằng , phường 2, Quận Tân Bình, Thành phố Hồ Chí Minh",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=144+Bach+Dang,phuong+2,Quan+Tan+Binh,Thanh+pho+Ho+Chi+Minh&zoom=15&language=vi",
                        "career": "Bất động sản",
                        "careers": [
                            "Bất động sản",
                            "Marketing / Truyền thông / Quảng cáo",
                            "Tài chính / Đầu tư"
                        ],
                        "location": "Hồ Chí Minh",
                        "locations": [
                            "Hồ Chí Minh"
                        ],
                        "idEmployer": "62458961203080b18ec3e62d",
                        "isActive": true,
                        "dateCreate": "2022-03-31T10:49:07.211Z",
                        "dateEdit": "2022-03-31T10:49:07.211Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-co-phan-tap-doan-itp",
                        "__v": 0,
                        "color": "#FA8440"
                    },
                    "dateEdit": "2022-03-31T10:49:07.249Z",
                    "dateCreate": "2022-03-31T10:49:07.249Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "nhan-vien-tu-van-tai-chinh-luong-cung-7-trieu-ho-tro-data-nong-mien-phi-khong-yeu-cau-kinh-nghiem",
                    "__v": 0
                },
                {
                    "_id": "62453a50f3f8e0ebbd52a677",
                    "name": "Nhân Viên Kinh Doanh BĐS (Lương Cứng + Hoa Hồng + Phụ Cấp + Thưởng 30-200 Triệu)",
                    "vacancies": "Nhân Viên Kinh Doanh BĐS",
                    "workLocation": "Hồ Chí Minh",
                    "mainJob": "Kinh doanh / Bán hàng",
                    "sideProfessions": [
                        "Kinh doanh / Bán hàng",
                        "Bất động sản",
                        "Tư vấn"
                    ],
                    "numberOfRecruitments": 20,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "Chưa có kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 200,
                    "salaryfrom": 30,
                    "jobLocation": "http://dkravega.vn/",
                    "jobDescription": "<p>- Quản lý Data khách hàng được giao, giới thiệu, hướng dẫn và tư vấn cho khách hàng các thông tin liên quan đến sản phẩm, dự án mà công ty phân phối (căn hộ, nhà phố, đất nền, biệt thự nghỉ dưỡng,…)</p><p>- Phối hợp với bộ phận Marketing thực hiện các chương trình sự kiện quảng bá sản phẩm;</p><p>- Bán các dự án đất nền, nhà phố, chung cư, khu biệt thự, nhà cao cấp, khu nghỉ dưỡng tại Tp.HCM và các tỉnh lân cận.</p>",
                    "candidateRequirements": "<p>- Độ tuổi: 20-35 tuổi;</p><p>- Không yêu cầu kinh nghiệm, sẽ được đào tạo các kỹ năng, nghiệp vụ bán hàng.</p><p>- Đam mê kinh doanh và kiếm tiền;</p><p>- Ưu tiên ứng viên có kinh nghiệm trong lĩnh vực BĐS, Bảo hiểm, Ô tô, Chứng khoán, Dịch vụ khách hàng, Marketing,…</p>",
                    "skills": [
                        "Nhân Viên Kinh Doanh BĐS "
                    ],
                    "benefit": "<p>- Thu nhập theo năng lực kinh doanh, bao gồm:<br>&nbsp;</p><p>+ Lương cơ bản từ <strong>6.500.000</strong> đến <strong>24.000.000 đồng/tháng</strong></p><p>+ Hoa hồng <strong>CHI TRẢ NGAY từ 1,5% đến 3%</strong> giá trị sản phẩm + Thưởng lên đến 300 triệu</p><p><strong>+ Thưởng nóng lên đến 100tr/sản phẩm;</strong></p><p><strong>+ Thưởng Best Seller</strong></p><p><strong>- Thưởng doanh thu mỗi Quý lên đến 10 tháng lương</strong></p><p><strong>- Thưởng chiến dịch thi đua : Xe Mercedes, Xe Mazda</strong></p><p><strong>- Đặc quyền dành cho TOP SELLER năm</strong></p><p>- Hỗ trợ Phí Marketing;</p><p>- Hỗ trợ 100% chi phí điện thoại, xăng Xe;</p><p>- Hỗ trợ data khách hàng;</p><p><strong>- ĐÀO TẠO FREE </strong>các kỹ năng và chuyên môn: Bán hàng, chốt deal, marketing,.. và cấp chứng nhận sau khóa học;</p><p><strong>- KỸ NĂNG: </strong>Được đào tạo <strong>đầy đủ cấp độ, lộ trình từ nhân viên lên quản lý</strong></p><p><strong>- KIẾN THỨC CHUYÊN MÔN: </strong>Được đào tạo bởi các chuyên gia, Ban quản lý cao cấp, Bộ phận nghiên cứu thị trường và bộ phận Pháp lý chuyên biệt.</p><p><strong>- PHÚC LỢI:&nbsp;</strong>Chính sách phúc lợi tốt: BHXH, thưởng Lễ/Tết, hiếu hỷ, thưởng tháng 13+, sinh nhật, ốm đau, thưởng thâm niên + Phúc lợi cho gia đình nhân viên + du lịch.</p><p><strong>- THĂNG TIẾN:</strong> Lộ trình thăng tiến rõ ràng sau 6 -12 tháng, tạo cơ hội phát huy tốiđa năng lực, phát triển lên hạt giống lãnh đạo;</p><p><strong>- MÔI TRƯỜNG: </strong>Chuyên nghiệp, năng động, cởi mở, văn hóa làm việc đội nhóm hỗ trợ lẫn nhau, vinh danh xứng đáng công bằng, đề cao tinh thần Team work.</p>",
                    "deadline": "2022-03-31T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "view": 0,
                        "_id": "62448494438e7dd2fb2d62d3",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweUphvrpUilbB23DHAe46ZpO38ICUOqq_Svx_YjN3cRKLWrfN7EQvhuieP7YRbMMd3Wlo3ZUCw10DXSw0abiLkrG-25zatqUvOVc_F0MYVl6C8-U512qiumLJpLZdXPgjAZU0d2lrW799OfJXe3ok11HzwyQLqmOEPirtA8-blQFL_g42Hs81Yjc8lP2bND-ljY1vuhOVi-1ByIbr0ktO4l6DatC5keSoJpiXNiXKeUyXA26u_TYsQHWO6-FCa7wNneLxaT_ELrcU-hQNuVZc7V_zlfVfmCiDExsV3VBj35yWyT7ZZqawwQ_HXHq388w5OjDxv5gcwcXG8BlZqawNYsQtzKGt5bDw45Ueiuv4ol9C93Qbo0UoUubvFNXfZqY0kE1lmFFIQtFCFwLQcsHv0b4S_fc8DHr3qDN-NUwlxLFeAYq9eXKeD-PViwTV9ZXzFyvu_zyolN9vgeqxx9URBTgW4BWZej-FEIVKIm3yf6UGdYPzeqFWiP-rI60S4KP9REBlN01XQBjhkPBq1LsKJM8i_Itel82gqS5mQXMGQEoQoDIWKHo1ze8YB2MKGd2YHNavWZGyIfWC-ahwvDVHgr7kgeakI5uC2M9j671YD2ngG8sNWG2QTdyViV4_oaxcx8pVVG_WmLzqubgxB3UfAq25C-Tza3O1Helv8hctb9E9kdjZfq-D91eL_zpjp1VnTUbECBaEdX54sSf_tVeRjaQLpZB7rbLbx3EDR8rBPgqvtCp7eGQMMlZZ5JeO75d8_5iYRt27szmVZTnXiY=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweW5UK4o8mn4cig9BDXw8HAobGch9PEym8fsD6Qr-tzlankzh0xvDhRliQECNz-gT5qJI548ID45DmOVGAVW8G9tvyVCtwp5-32yY78V9ZHzsWX5Iq-CE-vuYFLW0sbQb-AYZVhCCpLSz5r2RmMT4Lt5tym4zHxTe1z2SzTZosdVKVmRWsiLboPu8WzGUlKtDhiYLjl_mroclDAmrhU0IgE1IBjisqjRWPJeQB2IWVpBVwZq134WXxB9cl9KA8tn9AnqxpThXz1jWeNr6NhRb-j7xN3BXn-aD51Bwzg82zPWI_Pjkv8f8iKK-ATRp2Cs3cm4gJ8J_-2h2SSDhy5I2AjlM_K2sPz9QVYKEuGIBk8QtsvRLQNiZl1yJugUPlDlLwoaLS6LIeNoiFuO-zlnxNKRAq7PAfPyN5RVThje5qppchy4YBJSufebaa4KDzFP2D0Js64TjBx6ppO_6qV7rO7y0CWsomftgdKILraEfDQJf2xqDh8fWyU1hJ4R97CkHrflfELmqE5uxh1RDmSu9WPLHz198Tue31BB386FR08Eck-Maop6ci1F3kMffVM8cdEB4pmacgm8rQ71ItXy2ny7ZQvV3HSg5RPq-jRs1kCMtVMcrb09LM4hpg4LnCNufKGodmNVh3ov3IsGEAKrsrRPSEQu72jep-eZbETWfWlp23QVSULEi9mjBIRVyqapQ9eWnCDZ3r0svt-otTdZ4iL1I_tfYasKr7sFFyDH7db0Jzx0ufVfIMOy-KVe-NZ5iF_iI5j8EUH-RDEnryI=w1920-h961",
                        "name": "CÔNG TY CỔ PHẦN DKRA VEGA",
                        "introduct": "<p>Công ty Cổ phần DKRA Vega – thành viên hệ thống DKRA Vietnam, được thành lập năm 2018. Thừa hưởng hệ giá trị cốt lõi và nền tảng kinh doanh vững chắc từ hệ thống, DKRA Vega đặt mục tiêu chiến lược là đơn vị cung cấp dịch vụ tư vấn, phân phối và tiếp thị các dự án bất động sản uy tín, mang đến những sản phẩm chất lượng, trở thành thương hiệu dịch vụ Bất động sản được tin tưởng lựa chọn đầu tiên tại Việt Nam.</p>",
                        "foundedYear": 2018,
                        "averageAge": 25,
                        "companySizeStart": 100,
                        "companySizeEnd": 499,
                        "srcVideoYoutube": "https://www.youtube.com/embed/lcCiwcBhsF0",
                        "phone": "0888825353",
                        "website": "https://www.topcv.vn/brand/dkravega",
                        "address": "Số 30, đường Tân Thắng, Phường Sơn Kỳ, Quận Tân Phú Thành phố Hồ Chí Minh 7000",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=CONG+TY+CO+PHAN+DKRA+VEGA&zoom=15&language=vi",
                        "career": "Kinh doanh / Bán hàng",
                        "careers": [
                            "Kinh doanh / Bán hàng"
                        ],
                        "location": "Hồ Chí Minh",
                        "locations": [
                            "Hồ Chí Minh"
                        ],
                        "idEmployer": "62445aa188542af26b890e49",
                        "isActive": true,
                        "dateCreate": "2022-03-30T15:37:09.399Z",
                        "dateEdit": "2022-05-11T06:46:18.277Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-co-phan-dkra-vega",
                        "__v": 0,
                        "color": "#EA1C24FF"
                    },
                    "dateEdit": "2022-03-31T07:06:29.672Z",
                    "dateCreate": "2022-03-31T04:43:45.569Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "nhan-vien-kinh-doanh-bds-luong-cung-hoa-hong-phu-cap-thuong-30-200-trieu",
                    "__v": 0
                },
                {
                    "_id": "62431fb988542af26b890d9f",
                    "name": "Nhân Viên Phân Tích Nghiệp Vụ (Ba) - Trung Tâm Ví Điện Tử",
                    "vacancies": "Nhân Viên Phân Tích Nghiệp Vụ (Ba) - Trung Tâm Ví Điện Tử",
                    "workLocation": "Hà Nội",
                    "mainJob": "IT phần mềm",
                    "sideProfessions": [
                        "IT phần mềm",
                        "Tài chính / Đầu tư",
                        "Ngành nghề khác"
                    ],
                    "numberOfRecruitments": 2,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "1 năm kinh nghiệm",
                    "currency": "$",
                    "salaryType": "Thỏa thuận",
                    "salaryTo": null,
                    "salaryfrom": null,
                    "jobLocation": "22 Láng Hạ, Đống Đa, Hà Nội",
                    "jobDescription": "<p>- Khảo sát, thu thập yêu cầu; nghiên cứu, đề xuất xây dựng/ cải tiến các hệ thống Core, Backend phục vụ nhu cầu các bộ phận Kinh doanh, Phát triển sản phẩm, Vận hành hệ thống.<br>- Đầu mối nghiệp vụ tích hợp với các hệ thống trong và ngoài VNPAY.<br>- Hỗ trợ, đào tạo các bộ phận sử dụng các hệ thống Backend.<br>- Phân tích và định nghĩa phạm vi yêu cầu nghiệp vụ, yêu cầu người dùng, yêu cầu chức năng các sản phẩm, dịch vụ với Khách hàng, đối tác hoặc các bộ phận yêu cầu.<br>- Xây dựng, mô tả/đặc tả chức năng, nghiệp vụ cho các sản phẩm/dịch vụ: URD, SRS.<br>- &nbsp;Đánh giá tài liệu nghiệp vụ theo checklist đã thống nhất.<br>- &nbsp;Rà soát và đánh giá sản phẩm trước khi bàn giao cho người ra yêu cầu (nếu có).<br>- &nbsp;Quản lý các hồ sơ, tài liệu bản mềm của dự án phụ trách.<br>- Chịu trách nhiệm làm thư ký, giám sát tiến độ các dự án tham gia (nếu cần). Thực hiện tốt các công việc khác khi được giao.</p>",
                    "candidateRequirements": "<p>- Tốt nghiệp đại học chuyên ngành: CNTT, Toán tin, Điện tử viễn thông, Thương mại điện tử, Tài chính, Ngân hàng, kế toán.<br>- Có khả năng nghiên cứu, đọc hiểu các tài liệu bằng tiếng Anh.<br>- Có ít nhất 2 năm kinh nghiệm làm việc tại vị trí BA/ SA/ Tester/ PO/ Phát triển sản phẩm IT hoặc các vị trí tương đương<br>- Có kinh nghiệm làm việc với các giải pháp thanh toán trực tuyến và phần mềm trên mobile hay PC liên quan đến Tài chính/ Kế toán/ Ngân hàng/ Chứng khoán… là một lợi thế lớn.<br>- Có kỹ năng và kinh nghiệm test là một lợi thế.<br>- Nhanh nhẹn, có khả năng tư duy logic và phân tích tình huống tốt, ham học hỏi, tương tác tốt, có tinh thần trách nhiệm cao<br>- Có kiến thức về nghiệp vụ Tài chính ngân hàng, Ví điện tử.&nbsp;<br>- Kỹ năng kỹ năng tư vấn và thuyết phục khách hàng.<br>- Khả năng giao tiếp hiệu quả, làm cầu nối giữa đối tác triển khai, nhà cung cấp giải pháp, các nhóm nội bộ và bộ phận khác để thu thập và trao đổi các yêu cầu nghiệp vụ/chức năng.<br>- Có khả năng tư vấn trên góc độ nghiệp vụ dựa vào các phân tích và nghiên cứu của mình.<br>- Khả năng suy luận, tư duy logic tốt về phân tích hệ thống, quy trình nghiệp vụ và đặc tả yêu cầu.<br>- Khả năng làm việc, nghiên cứu độc lập các domain/ kiến thức mới phục vụ yêu cầu công việc.<br>- Có tinh thần làm việc theo nhóm, tinh thần trách nhiệm cao, đặt hiệu quả và thời hạn công việc lên hàng đầu.<br>- Có khả năng làm việc dưới áp lực cao</p>",
                    "skills": [
                        "Business Analyst"
                    ],
                    "benefit": "<p>– Mức lương thỏa thuận theo năng lực.</p><p>– Chế độ đãi ngộ hấp dẫn cạnh tranh với các công ty khác trên thị trường: hỗ trợ cơm trưa (40.000đ/ngày), cung cấp hoa quả và đồ uống miễn phí tại văn phòng, hỗ trợ trang điểm cho nhân viên nữ</p><p>– Môi trường làm việc cởi mở, trẻ trung, thân thiện, nhiều cơ hội thăng tiến trong công việc, cùng học hỏi với 1000 đồng nghiệp trẻ trung thân thiện với bề dày thành tích hoạt động hơn 15 &nbsp;năm trong lĩnh vực giải pháp thanh toán</p><p>– Chế độ thưởng hấp dẫn vào các dịp lễ Tết, thưởng hàng năm theo thâm niên và kết quả kinh doanh của công ty.</p><p>– Hưởng đầy đủ các chế độ BHXH, được tham gia bảo hiểm sức khỏe cao cấp theo chính sách riêng của công ty với rất nhiều quyền lợi dành cho người lao động và người thân khi tham gia bảo hiểm.</p><p>– Được tham gia các chương trình teambuilding, nghỉ mát, du xuân, ngày hội gia đình do công ty tổ chức hàng năm tại các địa điểm du lịch, resort cao cấp.</p><p>– Được tham gia nhiều hoạt động tập thể sáng tạo, CLB tennis, bóng đá, bơi lội, cầu lông, bóng bàn, hoạt động thiện nguyện …</p>",
                    "deadline": "2022-03-29T00:00:00.000Z",
                    "fullname": "Trần Thanh Thuận",
                    "emails": [
                        "tranthanhthuan24041997@gmail.com"
                    ],
                    "phone": "0866904049",
                    "idCompany": {
                        "view": 0,
                        "_id": "6242f5c988542af26b890c35",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweWUtv_RE6xZ6ltUisd0Ymmi0CvK-EmX18D4L5u9DK1uw5QsAQiwRTOCMf1XxfThOvNfifzc_g4Km1joqRKORvqMZhdY30bf5KZXR1ME5w_FJDmL5P1YRdNc-clwm3Gvf6ZRQf1Afo2OLkgjFntrdpJewdQbisr4xP2T93NIMCaWXQWmML_yzI-y7i7tXSw-2U3CJ0_YXbbrTDOyBdL5Y36iohilxTc1SkaQO5vyjNV9vCEksoY1mVrXCTf-vujPYqOF9a6m8rrzYB583VJnBpx6KL2QRYY8y17Cu9eqM56kumLywSxgO9PEo0lDLz0nBeF2MpfBRNGKwcpmXFDHXiRGUw9X_-g6wqF6kVyfrF7eiEbtZT_iaUJ49AtcsDbmpgvbI1UrjNddioClVOWk3S1_AyiiLc_domhIHPc6FBhYauysSy20pTX8O2G5Sxw-2HzSDW-YX6q9SPKE_cKzZ4pNzJnDO52DoxkXRex3N_pu2VySvg2eIMef9RenpaEM46oBqlueCsrsAyElJLZ1j0F3U4d_LqbVA-GkoG3ocGJRvYzBbIopkpwqteihH_KUod7ZKVDlDslQu1DheHuIKaVVXDm9JpFv3C0oHIJy-jprwwQGD9ViRPWDrX-IzzBUAVvB4L8TMjppB6dZUQBJ2YGCNPn0vza0Dulxevyl-2m2TrpfsDQDBojTt0bC72HJSc0S72CzJN8yEWiOXS617MtC9FdMq_sIYBF9aOvqie1MESdfw_vCVLMw7GWA-Q26EpwIQiRu4K5P9ptZiQg=w1920-h961",
                        "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweUX6FSAP5Sfbs1lTMNta47x0BLPpS_PqFE-CALIacaQO8yTIuaxWMjjITSDPm7pJKNhhuldM81cQY0Yc8DkyYwagtau-bm0dEUV6JFpjbilnlBU50i-auHH41Eu3Li_gQ0A9LeUG6goaxGVR-QivSuEbf1ziL5Frge8NDdOmHYAOHhriUgd0eIwmwCQA7n-AWJM2TC-gi4C9hX7BD9cpJ6h540tNd1LB3wBVxV_voFxblu0rY5xTopJXLulTLMaid0bHm5NABdIpqNBpKOfUR74LZOgKnLewF90wal46it6RTue8_W3kYjnOenCY2_3Swuwb0WX5I9fRdhRihQV1wUMviUU831JooPjhkrybVb5N9bw0RaOjLzd_3_QiVEk8XkHXHfZLqxjo51Jog9xXgUReZuEl6KWU3r3eI3acXOer5NaLOF5za2SR3vtzO2ffdNxvndwJVOG0V_ZyRHzJ004_drDkhqyjJCZHkFA5084yj6N808x7_DUayeD7gY5nDFSawc0wlgzr_5u5wEekpXiQefI6s5J8iP1UKtQgDrEIJ7aYEei7L_YjT6eSPcYztgdVV7eSqhWWegx0wB-RvYFodCwa9nt0wHKUB6Q9hlAt-L-5HyEJB6vzzKzHRrQOCJWiZT5Q8CJ2xvRAgLmQb8KuvKgwApfOUqeWuqcJv1HBB2-JMxagzjY_qZNPlRVw0DAmh_-ahJLxV8t8nWxbOIx1lGiXlZLgo0HwedyjHuJtDo2HwN-tKn8JuYYQJ2IJ9IPauPEyP0N3p_Ulxo=w1920-h961",
                        "name": "Công ty CP Giải pháp Thanh toán Việt Nam (VNPAY)",
                        "introduct": "<p>Công ty Cổ phần Giải pháp Thanh toán Việt Nam (VNPAY) được thành lập từ tháng 03/ 2007 và hiện là công ty hàng đầu trong lĩnh vực Thanh toán điện tử tại Việt Nam.</p><p>Với lĩnh vực kinh doanh cốt lõi Tài chính – Ngân hàng, Công nghệ thông tin – Viễn thông, VNPAY đã cung cấp dịch vụ tới hơn 40 ngân hàng tại Việt Nam, 5 công ty viễn thông đầu ngành và hơn 20.000 doanh nghiệp trên cả nước. VNPAY đã và đang đưa ra nhiều giải pháp thanh toán tiện lợi như: Ứng dụng Mobile Banking, Cổng thanh toán VNPAYQR, VNPAYQR, Mua sắm trực tuyến trên ứng dụng Mobile Banking (VnShop), Website thanh toán hóa đơn và mua hàng trực tuyến Vban.vn, Tổng đài bán vé máy bay VnTicket, Nạp tiền điện thoại (VnTopup), SMS Banking, Thanh toán hóa đơn (VnPayBill), Ví điện tử VnMart, dịch vụ Mobile Marketing...<br>&nbsp;</p><p>Chúng tôi luôn cố gắng không ngừng trong nhiều năm qua nhằm đem đến những sản phẩm, dịch vụ chất lượng tốt nhất cho khách hàng, điều đó đã được ghi nhận bằng sự đánh giá cao của khách hàng và đối tác dành cho VNPAY. VNPAY đã vinh dự nhận nhiều danh hiệu cao quý, cúp, bằng khen, giấy chứng nhận… do các tổ chức kinh tế - xã hội có uy tín trong và ngoài nước trao tặng như: “Thương hiệu phát triển bền vững, Sản phẩm chất lượng cao Việt Nam”, “Chứng nhận Doanh nghiệp phát triển bền vững - Sustainable Development Business”, \"\"Thương hiệu nổi tiếng ASEAN\"\", \"\"Top 100 Nhãn hiệu nổi tiếng Việt Nam\"\", “Sản phẩm, dịch vụ Việt Nam được tin dùng\"\", “Lọt top 10 doanh nghiệp có năng lực 4.0 tiêu biểu”, “Đạt top 10 Giải Sao Khuê cho giải pháp thanh toán VNPAYQR, hệ thống quản lý thanh toán QR-MMS…</p>",
                        "foundedYear": 2007,
                        "averageAge": 28,
                        "companySizeStart": 500,
                        "companySizeEnd": 1000,
                        "srcVideoYoutube": "https://www.youtube.com/embed/UMzkM9ukEk0",
                        "phone": "0437764668",
                        "website": "https://www.topcv.vn/brand/vnpay",
                        "address": "22 Láng Hạ, Đống Đa, Hà Nội",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=22+Lang+Ha,Dong+Da,Ha+Noi&zoom=15&language=vi",
                        "career": "Ngân hàng / Tài chính",
                        "careers": [
                            "Bưu chính - Viễn thông",
                            "Ngân hàng / Tài chính",
                            "Công nghệ thông tin"
                        ],
                        "location": "Hà Nội",
                        "locations": [
                            "Hà Nội"
                        ],
                        "idEmployer": "6242ec7a88542af26b890c1a",
                        "isActive": true,
                        "dateCreate": "2022-03-29T11:08:10.297Z",
                        "dateEdit": "2022-03-29T12:44:34.511Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-cp-giai-phap-thanh-toan-viet-nam-vnpay",
                        "__v": 0,
                        "color": "#F60002FF"
                    },
                    "dateEdit": "2022-03-29T11:08:10.332Z",
                    "dateCreate": "2022-03-29T11:08:10.332Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "nhan-vien-phan-tich-nghiep-vu-ba-trung-tam-vi-dien-tu",
                    "__v": 0
                },
                {
                    "_id": "6238b36543b980c440bcaaf2",
                    "name": "Marketing Manager",
                    "vacancies": "Marketing Manager",
                    "workLocation": "Hà Nội",
                    "mainJob": "Marketing / Truyền thông / Quảng cáo",
                    "sideProfessions": [
                        "Marketing / Truyền thông / Quảng cáo",
                        "Giáo dục / Đào tạo"
                    ],
                    "numberOfRecruitments": 1,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Trưởng / Phó phòng",
                    "exp": "1 năm kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 25,
                    "salaryfrom": 20,
                    "jobLocation": "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
                    "jobDescription": "<p>1. Xây dựng kế hoạch, chiến lược Marketing theo tháng/quý/năm;<br>2. Tổ chức triển khai và đánh giá hiệu quả các hoạt động tiếp thị, truyền thông;<br>3. Nghiên cứu, phân tích, đánh giá thị trường, đối thủ, khách hàng, dịch vụ của công ty nhằm đưa ra chiến lược, kế hoạch Marketing ngắn hạn, trung hạn, dài hạn hiệu quả;<br>4. Thiết lập ngân sách marketing, chịu trách nhiệm trong phạm vi ngân sách được giao;</p><p>5. Quản lý 5-7 nhân viên marketing mảng performance.</p>",
                    "candidateRequirements": "<p>1. Tốt nghiệp Đại học trở lên các chuyên ngành liên quan đến Marketing<br>2. Có ít nhất 02 năm kinh nghiệm ở vị trí Trưởng phòng Marketing, ngoại hình ưa nhìn. Ưu tiên<br>ứng viên có kinh nghiệm trong ngành POD, thời trang, giáo dục, đồ gia dụng.<br>3. Là người năng động, chịu được áp lực công việc, có khả năng cống hiến và làm việc nhóm tốt.<br>4. Có năng lực lãnh đạo, quản lý và tổ chức công việc, tác phong làm việc quyết đoán và chuyên<br>nghiệp.<br>5. Có khả năng nhận diện khách hàng mục tiêu, lên kế hoạch sáng tạo và dẫn dắt các chiến dịch<br>marketing theo hướng thu hút, mang tính giáo dục và truyền động lực.</p><p>6. Có kinh nghiệm thành lập và tối ưu chiến dịch.<br>7. Khả năng làm việc với các con số, đọc hiểu số liệu và xử lý bảng tính.</p>",
                    "skills": [
                        "Marketing"
                    ],
                    "benefit": "<ul><li>Lương thỏa thuận: 15-20 triệu/tháng (Thu nhập up to 25-30 triệu).</li><li>Phụ cấp theo chính sách công ty.</li><li>Bảo hiểm theo quy định nhà nước, thuế TNCN công ty hỗ trợ.</li><li>Các quyền lợi, chế độ khác theo hiện hành của Công ty.</li><li>Thưởng lễ tết theo quy định của Nhà Nước, tham gia câu lạc bộ Bi-a, bóng đá,...</li></ul>",
                    "deadline": "2022-03-31T00:00:00.000Z",
                    "fullname": "Huỳnh Minh Tấn",
                    "emails": [
                        "laptring@gmail.com"
                    ],
                    "phone": "0924404019",
                    "idCompany": {
                        "view": 0,
                        "_id": "6238b04024287b15ec8139c3",
                        "srcBanner": "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
                        "srcLogo": "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
                        "name": "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
                        "introduct": "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
                        "foundedYear": 2019,
                        "averageAge": 25,
                        "companySizeStart": 100,
                        "companySizeEnd": 499,
                        "srcVideoYoutube": "https://www.youtube.com/embed/clNtRFe3LwQ",
                        "phone": " 0967156741",
                        "website": "https://vuihoc.vn/",
                        "address": "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
                        "career": "Giáo dục / Đào tạo",
                        "careers": [
                            "Giáo dục / Đào tạo"
                        ],
                        "location": "Hà Nội",
                        "locations": [
                            "Hà Nội"
                        ],
                        "idEmployer": "6238af9d24287b15ec8139b7",
                        "isActive": true,
                        "dateCreate": "2022-03-21T16:53:24.418Z",
                        "dateEdit": "2022-05-05T16:27:10.875Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
                        "__v": 0,
                        "color": "#E91E63FF"
                    },
                    "dateEdit": "2022-03-21T17:13:29.494Z",
                    "dateCreate": "2022-03-21T17:13:29.494Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "marketing-manager",
                    "__v": 0
                },
                {
                    "_id": "6238b20356299e0e9cdfe45b",
                    "name": "Nhân Viên Tư Vấn - Telesales Lĩnh Vực Giáo Dục",
                    "vacancies": "Chuyên Viên Tư Vấn Khóa Học",
                    "workLocation": "Hà Nội",
                    "mainJob": "Giáo dục / Đào tạo",
                    "sideProfessions": [
                        "Giáo dục / Đào tạo",
                        "Kinh doanh / Bán hàng",
                        "Tư vấn"
                    ],
                    "numberOfRecruitments": 15,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "Dưới 1 năm kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 20,
                    "salaryfrom": 10,
                    "jobLocation": "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
                    "jobDescription": "<p>-Lan toả mô hình giáo dục chất lượng cao VUIHOC tới hàng triệu học sinh Việt Nam trên&nbsp;<br>khắp các tỉnh thành<br>- Liên hệ và tư vấn các khóa học trực tuyến cho phụ huynh học sinh theo danh sách&nbsp;<br>khách hàng có sẵn được cung cấp từ Marketing .<br>- Data khách hàng nóng hổi từ nhiều nguồn, khả năng chốt sale rất cao (trên 25%)<br>- Sản phẩm được đầu tư bài bản (giáo viên nổi tiếng, giao diện thông minh, bài giảng&nbsp;<br>đẹp) chất lượng thực sự tốt so với mặt bằng thị trường, sản phẩm đại chúng nhu cầu cao.<br>- Hỗ trợ chăm sóc khách hàng khi cần thiết</p>",
                    "candidateRequirements": "<p>* Nam/nữ có độ tuổi: 23 - 32<br>* Giọng nói dễ nghe, giao tiếp tốt<br><strong>* Có kinh nghiệm làm Sale/ telesale &gt; 3 tháng</strong><br>* Hoặc từng làm công việc fulltime bất kỳ trên 2 năm</p>",
                    "skills": [
                        "Tư vấn",
                        "Marketing"
                    ],
                    "benefit": "<p>- Data nóng được công ty cung cấp (tỷ lệ chốt &gt; 60%)<br><strong>- Lương cứng theo rank tối thiểu: 6 - 10 triệu + %KPI (tăng dần)</strong><br><strong>- Thu nhập hấp dẫn, từ 10tr – 20tr++/ tháng&nbsp;</strong><br>- Được cung cấp thiết bị làm việc (nếu UV có laptop riêng thì được phụ cấp 300k/ tháng)<br>- Được tham gia BHXH, BHYT, BHTN theo luật hiện hành<br>- Được đào tạo bài bản từ A đến Z để trở thành một telesales chuyên nghiệp</p>",
                    "deadline": "2022-03-31T00:00:00.000Z",
                    "fullname": "Huỳnh Minh Tấn",
                    "emails": [
                        "huynhminhtan4019@gmail.com"
                    ],
                    "phone": "0924404019",
                    "idCompany": {
                        "view": 0,
                        "_id": "6238b04024287b15ec8139c3",
                        "srcBanner": "https://static.topcv.vn/company_covers/I8AiDcfx3eWuttlWfUyF.jpg",
                        "srcLogo": "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong-61a05758415e1.jpg",
                        "name": "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
                        "introduct": "<p>Chỉ sau 3 năm thành lập, VUIHOC đã vươn lên mạnh mẽ, lọt vào TOP các Công ty trong lĩnh vực EdTech, trở thành nền tảng học tập trực tuyến hàng đầu dành cho học sinh từ lớp 1 đến lớp 12, cung cấp các khoá học online gồm Toán, Tiếng Việt, Tiếng Anh, Lý, Hoá, Sinh</p><p>VUIHOC cũng vinh dự là đơn vị giáo dục duy nhất lọt vào vòng chung kết cuộc thi sáng tạo toàn cầu Viet Solution 2019. Đặc biệt, tháng 8.2021, VUIHOC chính thức nhận khoản đầu tư của quỹ đầu tư danh tiếng Do Ventures<br><br>Các sản phẩm của VUIHOC<br>- App học tập trực tuyến vuihoc trên android và iOS<br>- Website học tập https://vuihoc.vn và website học tiếng anh https://tienganhvuihoc.vn<br>- Hệ thống CRM nội bộ quản trị toàn bộ hoạt động marketing, sales, CSKH</p>",
                        "foundedYear": 2019,
                        "averageAge": 25,
                        "companySizeStart": 100,
                        "companySizeEnd": 499,
                        "srcVideoYoutube": "https://www.youtube.com/embed/clNtRFe3LwQ",
                        "phone": " 0967156741",
                        "website": "https://vuihoc.vn/",
                        "address": "Tòa Rivera Park, 69 Vũ Trọng Phụng, Thanh Xuân, Hà Nội.",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Toa+Rivera+Park,69+Vu+Trong+Phung,Thanh+Xuan,Ha+Noi.&zoom=15&language=vi",
                        "career": "Giáo dục / Đào tạo",
                        "careers": [
                            "Giáo dục / Đào tạo"
                        ],
                        "location": "Hà Nội",
                        "locations": [
                            "Hà Nội"
                        ],
                        "idEmployer": "6238af9d24287b15ec8139b7",
                        "isActive": true,
                        "dateCreate": "2022-03-21T16:53:24.418Z",
                        "dateEdit": "2022-05-05T16:27:10.875Z",
                        "isBin": false,
                        "isBrowser": true,
                        "slug": "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
                        "__v": 0,
                        "color": "#E91E63FF"
                    },
                    "dateEdit": "2022-03-21T17:06:19.410Z",
                    "dateCreate": "2022-03-21T17:06:19.410Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "slug": "nhan-vien-tu-van-telesales-linh-vuc-giao-duc",
                    "__v": 0
                },
                {
                    "_id": "62372cc1a5fbe513d0708e24",
                    "name": "Nhân Viên Kinh Doanh Giải Pháp Marketing Tại Hà Nội ( Không Yêu Cầu Kinh Nghiệm - Được Đào Tạo )",
                    "vacancies": "Nhân viên kinh doanh",
                    "workLocation": "Hà Nội",
                    "mainJob": "Marketing / Truyền thông / Quảng cáo",
                    "sideProfessions": [
                        "Kinh doanh / Bán hàng",
                        "Tư vấn",
                        "Marketing / Truyền thông / Quảng cáo"
                    ],
                    "numberOfRecruitments": 10,
                    "workingForm": "Toàn thời gian",
                    "gender": "Không yêu cầu",
                    "level": "Nhân viên",
                    "exp": "Chưa có kinh nghiệm",
                    "currency": "VNĐ",
                    "salaryType": "Trong khoảng",
                    "salaryTo": 15,
                    "salaryfrom": 10,
                    "jobLocation": "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
                    "jobDescription": "<ul><li>Làm việc tại trụ sở Hà Nội&nbsp;</li><li>Tìm kiếm, tiếp cận những khách hàng tiềm năng, có nhu cầu về dịch vụ Digital Marketing.</li><li>Tiếp nhận yêu cầu marketing của khách hàng.</li><li>Hỗ trợ vấn chiến lược, kế hoạch Digital Marketing cho khách hàng.</li><li>NHÂN VIÊN MỚI ĐƯỢC ĐÀO TẠO VỀ DIGITAL MARKETING TRƯỚC KHI TIẾP NHẬN CÔNG VIỆC</li></ul>",
                    "candidateRequirements": "<ul><li>Nam, nữ: 22 - 25 tuổi.</li><li>Tốt nghiệp Cao đẳng, Đại học các ngành kinh tế, quản trị kinh doanh....</li><li>Tự tin trong giao tiếp, thuyết trình.</li><li>Khả năng làm việc nhóm tốt.</li><li>Có Laptop cá nhân để làm việc</li><li>Ngoại hình ưa nhìn là một lợi thế</li></ul>",
                    "skills": [
                        "Kỹ năng giao tiếp",
                        "Kỹ năng thuyết phục",
                        "Kỹ năng thuyết trình"
                    ],
                    "benefit": "<ul><li>Tổng thu nhập : 10.000.000 - 15.000.000đ + Thưởng</li><li>Thu nhập không giới hạn, tùy thuộc vào năng lực.</li><li>Cơ chế thưởng rõ ràng, chế độ BHXH đầy đủ cho nhân viên chính thức.</li><li>Được đào tạo, tham gia huấn luyện để trở thành những chuyên gia tư vấn trong lĩnh vực Digital Marketing khách hàng Doanh nghiệp.</li><li>Cơ hội thăng tiến rộng mở</li><li>Được làm việc trong môi trường 9x năng động, thân thiện, cởi mở.</li><li>Được tham gia summer trip, spring trip, teambuilding hàng quý do Công ty tổ chức</li></ul>",
                    "deadline": "2022-03-24T00:00:00.000Z",
                    "fullname": "Huỳnh Minh Tấn",
                    "emails": [
                        ""
                    ],
                    "phone": "0924404019",
                    "idCompany": {
                        "view": 0,
                        "_id": "6237285ef9ea36d7b8e66e61",
                        "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweVytsim3eiwBRlak1qpSB1iUrLV0mHoGaUSdxsbFBsZTmCmViD-pVS8NRgdmNij6DDsVDxWOb6fx61wrRXywfqpZBr_jXnsHdSzF2ByFBprIrFllgyJ_xwvAjyIS9EsjEz-sUrm0RcM8CIK5qX6vtLWQQ-5UN4t9QIS97lI2XU6D8c4sWaHl7mgoTinth3QMTmp5gnbJWw4K_5lON9y9nyLE0pej0avvcrabQdywPpY_xIC9SRH4HwHilo_5Rvmw95ZdLk9nWXfDp8wCuRFeVrtTpybnrLE0OF7GwpEwyVQuag70tdrM_X8PbCG7WQAIDN7ml6hlRgs73PHzFBmq25pJTpvU2ZUyhJ3W0I1POp7xPO15oroWgy4aAZJynKiJiZ-4XNaDGgFJqf6wsRmpysBqRjuaoCBpMEDUoxJYgykHgZOY3C9-FI7BqnPlU8yOl2r-7DK18cPNoHSgpy1OcAq9GNb1gtD5lwtuEaVFiYUo2PGeJ8bQ66VTTqdEAtJ2Yp8od2juDfkP1pkXWU_Gsv6YuNZaTuVaImY3bcFhmr39Lx7IQMLIJ98lUfYqV8BssnzPkjVPwpPDE6sDYhl4sJXN9H3Zcb79JyyWGPVlcdX8TkNasXcks1_Z0wUNA9jQUoxY7PSnJnupsEVRDXOyjk0PB1rHJOwxbwc0IYDZUNeAfJFDQGSJiEQMa0GtSrnf0hTp29zz1x8kwlK7MmRSBM-BJXlyazB5QG_6D1ESadj2Sh0qvWKMf4dKBgLkWzchQ8RajjwFmwcCRAfevk=w1920-h960",
                        "srcLogo": "https://cdn.topcv.vn/140/company_logos/0nYRCJkvZma8FPK2BdE1bwB4pcgdIoKN_1640681331____dfe0b1a72b854e2789781605104ac806.png",
                        "name": "Công ty cổ phần truyền thông và công nghệ rao thuê",
                        "introduct": "<p>Thiết kế web giá rẻ là một trong những nhu cầu cấp thiết cho các cá nhân, doanh nghiệp mới khởi nghiệp. Tận dụng sự tiếp cận khách hàng hiệu quả với website là sự lựa chọn thông minh.</p><p>Dịch vụ thiết kế website giá rẻ của webRT là lựa chọn tin cậy dành cho các doanh nghiệp. Với hơn 10 năm kinh nghiệm, webRT tự hào mang đến cho bạn website chất lượng, giá siêu rẻ.</p>",
                        "foundedYear": 2011,
                        "averageAge": 25,
                        "companySizeStart": 25,
                        "companySizeEnd": 95,
                        "srcVideoYoutube": "",
                        "phone": "0924404019",
                        "website": "https://webrt.vn/",
                        "address": "34 Cù Chính Lan, Thanh Xuân, Hà Nội",
                        "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=34+Cu+Chinh+Lan,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
                        "career": "IT phần mềm",
                        "careers": [
                            "IT phần mềm",
                            "IT Phần cứng / Mạng"
                        ],
                        "location": "Hà Nội",
                        "locations": [
                            "Hà Nội"
                        ],
                        "idEmployer": "6237218c7a4a53c9acf602c4",
                        "isActive": true,
                        "dateCreate": "2022-03-20T13:11:08.785Z",
                        "dateEdit": "2022-04-29T13:21:42.040Z",
                        "isBin": false,
                        "isBrowser": true,
                        "__v": 0,
                        "color": "#0863F5FF",
                        "slug": "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue"
                    },
                    "dateEdit": "2022-03-20T13:15:06.489Z",
                    "dateCreate": "2022-03-20T13:15:06.489Z",
                    "view": 0,
                    "isActive": true,
                    "isBin": false,
                    "isDelete": false,
                    "isBrowser": true,
                    "__v": 0,
                    "slug": "nhan-vien-kinh-doanh-marketing"
                }
            ],
            isMobile: false,
            isLaptop: false,
            isIpad: false,
        }
    },
    mounted() {
        this.onResize()
    },
    methods: {
        onResize() {
            let that = this;
            that.windowSize = { x: window.innerWidth, y: window.innerHeight }

            that.resetOnsize();
            if (that.windowSize.x < 600) {
                that.isMobile = true;
            }
            else if (that.windowSize.x < 960) {
                that.isIpad = true;
            }
            else {
                that.isLaptop = true;
            }
        },
        resetOnsize() {
            let that = this;
            that.isMobile = false;
            that.isLaptop = false;
            that.isIpad = false;
        }
    }
}
</script>

<style scoped>
.v-card {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px !important;
}

.v-card:hover {
    box-shadow: rgba(17, 17, 26, 0.1) 0px 0px 16px !important;
}

.vueperslide {
    white-space: normal;
    background-size: cover;
    flex-shrink: 0;
    display: block;
    width: 92%;
    padding: 0px 8px;
    position: relative;
}
</style>