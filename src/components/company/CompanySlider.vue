<template>
    <div>
        <v-container>
            <div class="text-center" style="margin-top: 30px;">
                <h2 :style="website.color.tealMain">Các công ty chất lượng</h2>
            </div>
            <vueper-slides :arrows="false" class="no-shadow mt-10" :visible-slides="6" slide-multiple :gap="3" :slide-ratio="1 / 10"
                :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }">
                <vueper-slide v-for="company in companies" :key="company._i" :image="company.srcLogo" />
            </vueper-slides>
        </v-container>
    </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
    name: 'CompanySlider',
    props: ['website'],
    components: { VueperSlides, VueperSlide },
    data() {
        return {
            companies: [
                {
                    "_id": "62777906735a2881288fbecc",
                    "srcBanner": "https://static.topcv.vn/company_covers/Usz3dt4QIabubPZbTMiH.jpg",
                    "srcLogo": "https://cdn.topcv.vn/135/company_logos/cong-ty-co-phan-topcv-viet-nam-5f33477c4e78b.jpg",
                    "name": "Công ty Cổ phần TOPCV Việt Nam",
                    "introduct": "<p>TopCV được thành lập từ 2014, chỉ sau 7 năm TopCV đã dẫn đầu thị trường Việt Nam trong mảng cung ứng nhân sự trẻ chất lượng cao cho các doanh nghiệp. Với 2 sản phẩm mũi nhọn là công cụ tạo CV online và kênh việc làm chất lượng cao, TopCV đã kết nối hàng triệu bạn trẻ đang có nhu cầu tìm việc với các nhà tuyển dụng uy tín.</p><p>Với đội ngũ nhân sự trẻ trung nhưng đầy tài năng, chúng tôi luôn nỗ lực từng ngày để cải thiện chất lượng nhân sự &amp; thay đổi thị trường Tuyển dụng - Việc làm tại Việt Nam ngày một tốt hơn.</p><p>Cùng với tinh thần cầu thị, tư duy đổi mới, sáng tạo liên tục, chúng tôi tin tưởng rằng mình sẽ luôn là người dẫn đầu trong việc thúc đẩy sự phát triển chung của xã hội bằng những công nghệ nền tảng tiên tiến.</p><p><strong>Sản phẩm của TopCV:</strong> Website topcv.vn, viecngay.vn và testcenter.vn</p><p><strong>1. Tầm nhìn</strong></p><p>Trở thành đơn vị cung cấp giải pháp Công nghệ giúp kết nối và phát triển nguồn nhân lực hàng đầu tại Việt Nam.</p><p><strong>2. Sứ mệnh</strong><br>&nbsp;</p><p>Kết nối, nâng cao chất lượng nguồn nhân lực cho thị trường lao động giúp các doanh nghiệp Việt Nam phát triển bền vững.<br>&nbsp;</p><p><strong>3. Giá trị cốt lõi</strong><br>&nbsp;</p><p>Intergrity -Chính trực và cam kết<br>Open Minded - Cởi mở và tích cực<br>People First - Tập trung vào con người<br>Excellence - Hướng tới sự xuất sắc<br>Innovation - Liên tục thay đổi để dẫn đầu<br>Move Fast - Phát triển nhanh</p>",
                    "foundedYear": 2014,
                    "averageAge": 24,
                    "companySizeStart": 100,
                    "companySizeEnd": 499,
                    "srcVideoYoutube": "",
                    "phone": "0356891929",
                    "website": "https://www.topcv.vn/",
                    "address": " Tầng 3, tòa FS, Tòa nhà Gold Season, 47 Nguyễn Tuân,P. Thanh Xuân Trung, Q. Thanh Xuân, Hà Nội",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+3,toa+FS,Toa+nha+Gold+Season,47+Nguyen+Tuan,P.+Thanh+Xuan+Trung,Q.+Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
                    "career": "Marketing / Truyền thông / Quảng cáo",
                    "careers": [
                        "IT phần mềm",
                        "Kinh doanh / Bán hàng",
                        "Marketing / Truyền thông / Quảng cáo"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội",
                        "Hồ Chí Minh"
                    ],
                    "idEmployer": {
                        "_id": "62777828735a2881288fbeb1",
                        "email": "dinhtienlinh@gmail.com",
                        "fullname": "Đinh Tiến Linh",
                        "phone": "0332192079",
                        "gender": "Nam",
                        "company": "Công ty Cổ phần TOPCV Việt Nam",
                        "position": "Trưởng nhóm",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0332192079",
                        "isCompany": true,
                        "isActive": false,
                        "isBin": false,
                        "coin": 100,
                        "dateEdit": "2022-05-13T14:42:30.735Z",
                        "dateCreate": "2022-05-08T07:55:38.978Z",
                        "businessPoints": 200,
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-05-08T07:55:38.993Z",
                    "dateEdit": "2022-05-08T08:44:20.401Z",
                    "isBin": false,
                    "isBrowser": true,
                    "color": "#004D40",
                    "view": 0,
                    "slug": "cong-ty-co-phan-topcv-viet-nam",
                    "__v": 0
                },
                {
                    "_id": "6270e440e3479aca530f8a4e",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweXMwyBAxnH1vdyuNGp98uz2_pIDqnB8HIooPvT1oItggfQkxrdYFtASRAgWjK5_tIfF38iZDBCXCxqF0edlRr6ocpnAsNXuoUrwreRdr-jGYsZUWGvnx6JnCC5qrSp9m7cDFRaeSrexqzNL5idJaaS_nOEnRvSniUS0WImOuyE-ag2vi0LRTDGZYNJ1T1EnQwM-vAIwwhm7cC4aVMTuptWlwFqXqWqgqakRccI0Wb6owbm_1ejhaVkuPQ2Wzsxy-_DrQfSH0phBjgqznVmr6XS1fX9yPlZxa_8o2_S2zJiDveo97YeWdK3jXBofnYlSQJKyVpi77OdYnmi5ptDTnwEt-tGR4cj2H3JrtfmSH3CaVGHAdDEi2CBZhvouk0LDzF-1ARvEDxNxX540SC8FGre5ALyQPTL8syoummEJqTT7-M2kqqWWvRDeKKWRmACcUYIwR4a0bNYxvMMwBX0NEdQCcPz8NQ_JBTiCjTnZEcl6CkIu8pFn41DcWeZ3_twu8m-lAYRUCCpfYN6Znx9Kdr9_qX9Ocu0MszxjVA0QjBtwgn_r1Kblc0lmYiF71QF8-_3Qc7GsTXCefEmViE7BHrJw_D4oPZ_LOGdBTJaN1Cz80QuYMGMoxtaCCA2QS3XbNWpU_x5AGIPRmiSzyd7aHJ1TDE0gjPoZ3lDiq4CTwJah8JlAjvF3Buat_HW8PCJ7w7D22dg4vaNESiD7mGfUuy0-8vqVzLPeuN43FMfycBwP_Z95xmS54tSx0TsAmQA1uUFnAN9U9a-pQB3V5F8=w1920-h960",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweVDKP182D1qI7jWjEyIlWtvs0pKeNhXZ8fanWCiyaxRQgz5uZIMlAqxWHe3B2fyJYH6r4KjclCB3SSAM3-j7mZfWgXlh2JT1h6VotOifpYrcaqMYQiNjy5PHTsWPWssbxIm455ik84tjD_NQvXm4wbZ_fvDfYY50kgza6081Vd5UIaxKASPQWORAFJ98Jj76buRQS4Gd2M0gcZd-63reiqErx3EwlhXH4KgZe0TkenZnCfNdfZbfrJfgFeHcrwXrr4I_-o-Cj6L4tuiiUJRX4Cgay3cw5og7UntACXLMPwkPdaciZ-J8EXGuc_By1DvJsueOim8_SqSRI8cy4Vor8iVHlfMMXeoVaRbTRXLZ24n9l3bNNwZAExRhP73khWqMRRzj1EP7JoagPE28_PgIvLwJKpDE1kW73MEDLlD7IVtYPKlKeF7nLR6gEA6vx35DRNP_CJvhueKnVIQZ1-OXpSA-IgTdYu0ZEFzQ608yVVe9kZZOvRGdb_AcXK6iMiek8p6jOgvj8B9Tv4v9uXiuVJrw4lW9TCgqtsPbjwL96UmClra_k0F9xj6mNdDQq1XUP1Z7gx-jyO6Xj57ewK3CsF7cHyintbPQmRZiVE6Fbyfhn1wvGhY6Nppbur5NOVenSZbdXtGSRLWDnOgjXkoTKJJUNGmxhgS0rYpablio5mlgVgmR3FPuQJFh_qJ4MLSu5z73n_5CjXCHuxrav3gF8Poulq82FDyOdZFLM1e3LXweym3_14rpv0peMpcJi0bHDgl8akWivh1qgmS5M4=w1920-h960",
                    "name": "Công ty TNHH AEON Việt Nam",
                    "introduct": "<p>Công ty TNHH AEON Việt Nam hiện đang đầu tư và kinh doanh nhiều lĩnh vực bán lẻ đa dạng như: Trung tâm Mua sắm, Trung tâm Bách hóa tổng hợp và Siêu thị, Cửa hàng Chuyên doanh, Thương mại điện tử. Khởi đầu bằng trung tâm mua sắm AEON Tân Phú Celadon vào đầu năm 2014, đến đầu năm 2021 AEON Việt Nam đang vận hành và kinh doanh 3 Trung tâm mua sắm, 3 Trung tâm Bách hóa Tổng hợp &amp; Siêu Thị, 24 cửa hàng chuyên doanh, trang thương mại điện tử AEON Eshop.</p>",
                    "foundedYear": 2011,
                    "averageAge": 25,
                    "companySizeStart": 1000,
                    "companySizeEnd": 10000,
                    "srcVideoYoutube": "https://www.youtube.com/embed/XSIYoVD0Yag",
                    "phone": "0332179797",
                    "website": "https://www.aeon.com.vn/tuyen-dung/",
                    "address": "Trụ sở chính: 30 Bờ Bao Tân Thắng, phường Sơn Kỳ, quận Tân Phú, Tp. HCM VP phía Bắc: 27 Cổ Linh, Quận Long Biên, Thành phố Hà Nội",
                    "srcMap": "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d125386.84883722421!2d106.60777453716021!3d10.861797927350677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e6!4m3!3m2!1d10.918297599999999!2d106.72865279999999!4m3!3m2!1d10.801792899999999!2d106.61781909999999!5e0!3m2!1svi!2s!4v1652184360290!5m2!1svi!2s",
                    "career": "Nhân sự",
                    "careers": [
                        "Nhân sự",
                        "Dịch vụ khách hàng",
                        "Hành chính / Văn phòng"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "_id": "6270deeee3479aca530f8a47",
                        "email": "aeon@gmail.com",
                        "fullname": "Trần Thanh Thuận ",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công ty TNHH AEON Việt Nam",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isCompany": true,
                        "isActive": true,
                        "isBin": false,
                        "coin": 200,
                        "dateEdit": "2022-05-03T07:45:24.194Z",
                        "dateCreate": "2022-05-03T07:45:24.194Z",
                        "businessPoints": 0,
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-05-03T07:45:24.320Z",
                    "dateEdit": "2022-05-12T17:31:00.463Z",
                    "isBin": false,
                    "isBrowser": false,
                    "color": "#A91E79",
                    "slug": "cong-ty-tnhh-aeon-viet-nam",
                    "__v": 0,
                    "view": 0
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "624a99a15573caef7750506f",
                        "email": "mobifone@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Trung tâm Dịch vụ số MobiFone - Chi nhánh Tổng Công ty Viễn Thông Mobifone",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-02T13:28:58.266Z",
                        "dateCreate": "2022-04-02T13:28:58.266Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
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
                {
                    "view": 0,
                    "_id": "626275a565d62a1f115ce9b8",
                    "srcBanner": "https://salt.topdev.vn/5KVAz6cd7UD6EZMYw4GJXkLJM3NZtKQPhbPr0pOBwCM/fill/286/240/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ltYWdlcy8yMDIyLzA0LzEyL1RvcERldi0yNjgzMDEzNjUzOTk3MDU5MDgwMzk3ODE3ODc2NDU3NDIwNTE1MDY1MzcyMW4tV1ZOR0EtMTY0OTczNTEyMS5qcGc",
                    "srcLogo": "https://salt.topdev.vn/15Zk6jXXmZhQpI_NE3hK1-Ico-UHME99yaOtLLBtjps/fit/148/68/ce/1/aHR0cHM6Ly9hc3NldHMudG9wZGV2LnZuL2ZpbGVzL2xvZ29zLzZlY2Y1YzQ3OWExMTNiYWJkZmEwNzE5YjM5MjBjMjRlLmpwZw",
                    "name": "RiverCrane Vietnam",
                    "introduct": "<ul><li>Cùng với chiến lược toàn cầu hóa của tập đoàn RiverCrane, công ty RiverCrane Việt Nam được thành lập từ năm 2012. Với mục tiêu tạo dựng những dịch vụ IT có giá trị không chỉ ở Việt Nam mà trên toàn thế giới.</li><li>RIVERCRANE VIỆT NAM với 100% vốn đầu tư từ nước ngoài là một trong những thành viên của Tập đoàn toàn cầu RiverCrane với trụ sở chính tại Tokyo và các văn phòng, công ty con khác tại Yokohama, Đài Loan, Thái Lan, Hong Kong, Philippines, Ấn Độ, Trung Quốc, Ý...</li><li>RIVERCRANE hoạt động trong lĩnh vực nghiên cứu và phát triển các giải pháp về phần mềm và hệ thống thương mại điện tử.</li></ul>",
                    "foundedYear": 2015,
                    "averageAge": 25,
                    "companySizeStart": 25,
                    "companySizeEnd": 99,
                    "srcVideoYoutube": "",
                    "phone": "0866904049",
                    "website": "https://rivercrane.vn/",
                    "address": "Tòa Nhà Havana, 132 Hàm Nghi, Phường Bến Thành, Quận 1, Thành phố Hồ Chí Minh",
                    "srcMap": "",
                    "career": "IT phần mềm",
                    "careers": [
                        "IT phần mềm"
                    ],
                    "location": "Hồ Chí Minh",
                    "locations": [
                        "Hồ Chí Minh"
                    ],
                    "idEmployer": {
                        "_id": "6262746c65d62a1f115ce9a8",
                        "email": "rivercranevietnam@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "RiverCrane Vietnam",
                        "position": "Nhân viên",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0866904049",
                        "isCompany": true,
                        "isActive": true,
                        "isBin": false,
                        "coin": 300,
                        "dateEdit": "2022-04-22T09:05:01.464Z",
                        "dateCreate": "2022-04-22T09:05:01.464Z",
                        "businessPoints": 0,
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-22T09:05:01.840Z",
                    "dateEdit": "2022-04-22T09:05:01.840Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "rivercrane-vietnam",
                    "__v": 0,
                    "color": "#27303A"
                },
                {
                    "view": 0,
                    "_id": "624fecbbf2299d98aa07beb7",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweWcva-GwFkm9j-QpBZ9tjrdbhcK7OSKZYE0AgU--tcAE3Oy-_AejufVx5u0hhuyUXaqOs4lr2M8T36B7tWv5TemAk4Vr5mLNQxjUfF5HXjUYXL8l8b-tq-SG72C2i9Shw6pXOLcDZA2uFMRo8UWaRp-a4cc-yTD3YvRP0iwZUAfC5Wfi656wnHSt-IA2Xcg1842VQKY0_8eg-vpykkpz3pfe7GxTVKV7UviqQ0ieBfqgpjSEgEoirPSixP7giybTU1vhiMInSvMesybejAkvZDyuFsZCQwXhRrY35ZMxKJl4T9YntcW5VRfJ01UbRqNfblmeiuoKE8dvbSwjV2uL35m3QfzyM-xcqNA_69Dp6Z5OygjNggs0P91QgD3VX5tf-ib6tAJTLNN6KuV85Cedh7UuzPTGM31r4Gq9rolXdnJOj-3_gvrCSLl8ea4g6pJKYQzp1oQkCH6wIsfrP54XR5SWErvBm3i71PdhYSacd3W8xrKx8R-sRXTrAJmAr-iXeMw3_bVAzPsEFiiZzPH69MA8utiHO1I--mpkC-Nfnk-trLNObkoFNUiCebrxoqHdgCfEUxknx2MYSM7ojdzln4a6U_9gzpvf6HMCtNscWh2XH3pwOxGiJeYhevH9Srv52kZMb-5tvkMRojPQmO7pYw-YaD8IwGjfB-EqxRyYHKclgF3Rr9rw1COjaOQB8a-UM7YLEWFTqkqEODzMxj3A23z6UM2UU7_HN6fQDxX80jWYEHRc9ghwVdI_yDv4QZDI-ZTgllBr8RpbTf9zGk=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweXABzszFQwziCUSSjjNDiMyNK1Jo-pe0Pz7CM7UoZtRqTXrr-awyw6BWPW6vdz5vFHMoD9QgQAw7FJ_TB3oykbAJCybY7DjS9EGm5pv3sXQrN_h1960Sr4MqRQBa4ISRgnIBt7ZzBvenSupOWAyE234nOjUsZ6p2_kPfdv4Qu6UlpFIQ4RWCRt9-Z9UY7XmATnPUmpyKWDSsCt1ESLn-FZhIOfcLm3P9zg4Od6yb2sGCpoPFHEVKlG__FQM4yp9mCFHGtkneHd1gxlGOB76z27JMzhtBItmbuAokHj6xaIqOx9eGIvmJ24ZC4-3E72V_72h4idEPUvfL-OnRuCLDX9jnE1VWYzteTe6JWX0JmAFvrGjdrsREJ3PE61C7hfNE-nNOy2egt5-nV7O27emq0fom05dEFhLhLUiSVG809JIjCjh3Y5SM1dLtstIGn6X7EAA6oBU7m0CKc6zbnKSj6qgxbnIIC3-pPRI6CIW51TVF0qMd1eNxCSmPrjFW_nsm12-6VVbCBEGdXZr77CHrbW7PryeSBHQUvfPjVxIX4eaSkpudTyGbq7j70uAuUtPj-9LoVMKLXGL1qzhzQbPxVb4LRlmGJnX0UJYOF0zNJlhnFlKWnO49-muDvCqCaASe9GRnqi8g4Q3S8UuIMXb0igzM1r5WfOwwyw-gBxj-jBNrYCKXeFvwpZ4gjy4hBvJNcX0tbfb6k6qdZ7cKEp1abvXQPG5IHiBcoyFBEZNCTZNIlma6guF8_TjaJarfq8uqMUHDfSmqkMULFnbZaU=w1920-h961",
                    "name": "NAB phối hợp với Công ty Tư duy Tích cực tại Việt Nam",
                    "introduct": "<p>Ngân hàng trong một tương lai bất ngờ</p><p>NAB phối hợp với Công ty Tư duy Tích cực đã ra mắt Trung tâm Công nghệ cho NAB tại Việt Nam. Đây là một trung tâm hiện đại dành riêng cho Phát triển Công nghệ Cao và Nhanh nhẹn. Kể từ khi thành lập vào năm 2019, Trung tâm NAB tại Việt Nam là một nơi tuyệt vời để làm việc, nơi các kỹ sư công nghệ trong nước phát triển mạnh mẽ.</p><p><strong>ĐÁM MÂY ĐẦU TIÊN</strong></p><p>NAB đang trải qua quá trình chuyển đổi công nghệ \"Cloud First\" đầy thú vị bằng cách tận dụng các công cụ và kỹ thuật mới nhất được sử dụng bởi các công ty công nghệ và kỹ thuật số hàng đầu trên toàn cầu. Nhưng không chỉ về Công nghệ, chúng tôi còn đầu tư rất nhiều vào con người của mình, vì vậy nếu bạn muốn học hỏi, phát triển và nâng tầm những người xung quanh mình, thì đây là nơi dành cho bạn!</p><p><strong>ĐÓ HƠN TIỀN!</strong></p><p>Chúng tôi tin tưởng vào những người có ý tưởng và ước mơ, và chúng tôi muốn bạn đạt được nguyện vọng của mình. Chúng tôi sẽ làm việc cùng nhau để cung cấp các sản phẩm và kết quả đặc biệt vượt qua giới hạn nguyện vọng của chúng tôi. Niềm đam mê của chúng tôi trong việc tạo ra giá trị và vượt quá mong đợi của khách hàng có nghĩa là chúng tôi không ngừng nỗ lực để xác định lại các tiêu chuẩn xuất sắc của mình. Bạn sẽ có sự hỗ trợ của chúng tôi để phát triển và sự khuyến khích của chúng tôi để khám phá, nhận ra và phát huy hết tiềm năng của bạn.</p>",
                    "foundedYear": 2019,
                    "averageAge": 25,
                    "companySizeStart": 501,
                    "companySizeEnd": 1000,
                    "srcVideoYoutube": "",
                    "phone": "0983131351",
                    "website": "love@itlamviec.com",
                    "address": "E. Town Central, 11 Đoàn Văn Bơ Quận 4 Hồ Chí Minh",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyAMccvlWFDk8E9b5Bk6YdPh1ZUht-JPcqU&q=E.+Town+Central%2C+11+Doan+Van+Bo%2C+District+4%2C+Ho+Chi+Minh",
                    "career": "Công nghệ thông tin",
                    "careers": [
                        "Công nghệ thông tin"
                    ],
                    "location": "Hồ Chí Minh",
                    "locations": [
                        "Hồ Chí Minh"
                    ],
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "624fe31e7d82511cd12ba578",
                        "email": "nab@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "NAB phối hợp với Công ty Tư duy Tích cực tại Việt Nam",
                        "position": "Nhân viên",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-07T13:39:22.282Z",
                        "dateCreate": "2022-04-07T13:39:22.282Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-08T07:49:34.928Z",
                    "dateEdit": "2022-04-08T07:49:34.928Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "nab-phoi-hop-voi-cong-ty-tu-duy-tich-cuc-tai-viet-nam-2sQAyYChF",
                    "__v": 0,
                    "color": "#000000"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "6248e7425573caef77504f8a",
                        "email": "mbshinsei@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công ty Tài chính TNHH MB SHINSEI (Mcredit) ",
                        "position": "Nhân viên",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-02T13:28:58.266Z",
                        "dateCreate": "2022-04-02T13:28:58.266Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-02T13:28:58.338Z",
                    "dateEdit": "2022-04-02T13:28:58.338Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-tai-chinh-tnhh-mb-shinsei-mcredit",
                    "__v": 0,
                    "color": "#0C5DE6"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "_id": "6238af9d24287b15ec8139b7",
                        "email": "vuihoc@gmail.com",
                        "fullname": "Huỳnh Minh Tấn",
                        "phone": "0924404019",
                        "gender": "Nam",
                        "company": "Công ty cổ phần Giáo Dục và Công Nghệ Hùng Vương",
                        "position": "Tổng giám đốc",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0924404019",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 100,
                        "dateEdit": "2022-03-21T16:53:24.387Z",
                        "dateCreate": "2022-03-21T16:53:24.387Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-03-21T16:53:24.418Z",
                    "dateEdit": "2022-05-05T16:27:10.875Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-giao-duc-va-cong-nghe-hung-vuong",
                    "__v": 0,
                    "color": "#E91E63FF"
                },
                {
                    "view": 0,
                    "_id": "6262d9f076e6179773f4a9e6",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweXHtk-nEzmuOhjBMk7mMjehZnUN8Ha96eM-Nde8vfCpqKgeV0yts3wN2PoNZeXN-hEJdW79I7GXinG0Fp1E0K2NTrSYtl58S72NVtAQt09mIh3jCxUEfOWWPWyfKAM66sShgr-i06TOQakSihcOgTFd8XlBlx61sSCyIv8LUpEiaoBmerhA8JYsIibxuJED0joSiUUfG7tWsIjoty-eAo1F4BifR58PYXZjevGCwVYNh_-ekaEVmyyVCcr3tzYBd0GtZVAAdyPQqK2JdPl107vIpPI1T4uljMMFjGU5mp6JJi_IgEPcwEuNSh_0JQFk4nnBOFwAo7ADbvdJJYyDX-mok4qQC_CAgeBKLV9QLCgW1sIsChSmWCkMtxrD9h0bqk0bfHihDAZ2nDxihpDhJsOeb2CG4yACI9QyWVjba3T0kxIafzXSoQQzQvQVc_2oOXje0heMwCT_AMNBT1dIaNmCiCq6XTiDXiXAIDuUMVzXOtoyOOst47A9W5IOsuPU90LlJTgjh2Rbz7FbROaAHjdP1xnGkCsY7nhnih_pwcC8V253XQP2zr96FWyGFKmwXl3l05XRKlQSoNmsed-J51R0NCd0QkDJVtK5xTC9pT605YiuQgpUpWYMoXnUSp4GRucOmvTKbGTtKCKt5lyM9Mc8TxqlO-_U4ZWGQ9lQGTRZnnI1yknNiFsRvLBym-FSWr05TEipx7wa3Dr3YM3H4N5cb9AKaTHHaIwziKulbhNWM6gjFaHBzBR_hxAFUS4bzTAphMQWE4AN8h_E7_Y=w1920-h960",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweWXvr2cVRT924wL-83BI2l2PDiZFCDEWMHIeDEwaJJZb1arjOtr2wTZU4MwEX78nDel5VFU-PBCkAixD16ju-qrMxiSm3jgTNerHkKhTVb31DYvYSvcA2C7vBnYnDnvRCd1f3Wba4mYOz5Xjk773eb0wxhEpCz2Ysu9c6v-Ka9wGGgfo_BJrQulFJFwg3wJmdAT-c2TeYRlnfYL_7r6SW4DENDggyaENi9O7FZ_MVwQ3Lf2zqBgFtmx1Wj56O9B9kx4qPAjzMNtGPCv0V89udYpF9Xqawd3BYDp3z-iAaEqFkKct-3-FgP9q74cMl5n7QxnJ1t8Di4QcV9M2MjWDZ_ORaa74FuyoOubJnX00l4QxU4sRVICcWP3ofro3Op9GF13LGZmPGHJNIHLBqSZ_VntDSEXKr5iDmRDCRdfwsEFPqKY-tQ2GbDUIpwOwcfn9RWzzbGndgnMCJIf0H2T_8HUeqORJgRs3ecuQA9-OD0fj2nF8yLH0_smrkgJrhab9jG09YUq7Afb3TqxBxcdvRJ0H0P7vA44p9APWn8loFiaDMJcZSvIzf7SICKjLAribgH_54BtMIURbK2jJ9SPeiwi83FcvkvhmcMFoijQaspRi9n9ENIRjKKNbG3v1WL5f0mI9mrzfw4_Pmzqg_3dtB8XFCWS_9JYA27atTQkBRNSPuoUoyYuCgUr-QHs1cb6VQFXcyWrH9G12zW7d33qPUbEbVA9stjfl52fsT2SJBPIr2Gw_NxUplR_kGSMbHBwdugbwwRn04308rP0n9c=w1920-h960",
                    "name": "NTT DATA Vietnam",
                    "introduct": "<p>Nhà sáng tạo toàn cầu đáng tin cậy</p><p>NTT DATA hợp tác với khách hàng để điều hướng và đơn giản hóa sự phức tạp hiện đại của kinh doanh và công nghệ, cung cấp thông tin chi tiết, giải pháp và kết quả quan trọng nhất. Chúng tôi mang lại kết quả kinh doanh hữu hình bằng cách kết hợp kiến ​​thức chuyên môn sâu trong ngành với các đổi mới ứng dụng trong kỹ thuật số, đám mây và tự động hóa trên một danh mục toàn diện gồm các dịch vụ tư vấn, ứng dụng, cơ sở hạ tầng và quy trình kinh doanh.</p>",
                    "foundedYear": 2008,
                    "averageAge": 25,
                    "companySizeStart": 100,
                    "companySizeEnd": 499,
                    "srcVideoYoutube": "",
                    "phone": "0866904049",
                    "website": "https://www.nttdata.com/vn/en/",
                    "address": "R202, HITC Building, 239 Xuan Thuy, Phường Dịch Vọng Hậu, Quận Cầu Giấy, Thành phố Hà Nội",
                    "srcMap": "",
                    "career": "IT phần mềm",
                    "careers": [
                        "IT phần mềm"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "_id": "6262d30576e6179773f4a9c3",
                        "email": "nttdatavietnam@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "NTT DATA Vietnam",
                        "position": "Nhân viên",
                        "workLocation": "Đà Nẵng",
                        "district": "Đà Nẵng",
                        "accountSkype": "0866904049",
                        "isCompany": true,
                        "isActive": true,
                        "isBin": false,
                        "coin": 200,
                        "dateEdit": "2022-04-22T15:49:58.558Z",
                        "dateCreate": "2022-04-22T15:49:58.558Z",
                        "businessPoints": 0,
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-22T15:49:58.863Z",
                    "dateEdit": "2022-04-22T15:49:58.863Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "ntt-data-vietnam",
                    "__v": 0,
                    "color": "#152D9C"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "62458961203080b18ec3e62d",
                        "email": "itp@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "CÔNG TY CỔ PHẦN TẬP ĐOÀN ITP",
                        "position": "Nhân viên",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-03-31T10:49:07.011Z",
                        "dateCreate": "2022-03-31T10:49:07.011Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-03-31T10:49:07.211Z",
                    "dateEdit": "2022-03-31T10:49:07.211Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-tap-doan-itp",
                    "__v": 0,
                    "color": "#FA8440"
                },
                {
                    "view": 0,
                    "_id": "624bf0fbb5984de94ce6a291",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweX0TepBF36ZD4XW8z9T3g8qgDtmF_QMOpL7jVqlw0meiW5AgxhR6rPVEp0Wd3jL4UmIP8Z7KEV434WsrfNCl3rHslkhPCykan1HW8S29cN5cNlVyMqWwsXYS4LqMPYbqkvIEfqGHjqwwMRCIZ079TgLvHrJRN7PcthnTv3w0RRpSVIMBmaDny891saeMNKl5SxHLcXM4cxz3vCw7cydhfD0i0mwxHMkbl6BppCbUaSCBrIJ2xC3jVSODctzw_9HeATN972u6O2Tgo7OQ0olXWOt9WduSKhPrAHaDzrRoay3WOyiuN1stLGg0CZXa4F1UTl9MiBC_feKPlbKMrM65_NgWANi11cSKWeLmfrQ-1UhxpubsMLxgcduJhpkXoJ_qpNjxN-3oHbwBwR5kdnh0QLetz46VCdaTlNO9nyHHGVitzDWD2D9CRHBHNHpK549bwNaaSp0oRt9-D4T2R-k3JzsMva8ykpBW1ZCjryOmVZJNEcI61Qu3EdFUHFDFDjX65kXh-XkcSBB7PHNB0DTrgz4MgDLMo1tLW7liBFWffErOFk1xVBHpAXAxSGeD0HoYfZ8_VhErLVA72IvdlzGjz8jOfkg3JO6EAu2lwmgR6Mjr-Mrb5zbJ350N7aulQSiT4bW7Bt3eS8OSqTtzVWK1rLCorRhNN_92FiFodpg74MtKWClKrHhLME2T9MmAN_v8xeeX__a6CGdsvtxJtNHR6Lzwd4YG6NIG4daBLADd6mXkOSx54_OWaA47SjjvY_15LW72n3gxQjak9Q_8y8=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweXeznApbMtnCHxWeTDNkBMZGTmWrLGCQmTzXRMXztvBkluwsdW2SGqfE3-YqC8N40ATOb27zShluGcmv0azb4Y9G0jEPaWKeY4v-yJ32W9qprWPNI2cyJ3KAYAP5TuoAPVhR7MxYsxZMoVIXXBLqnFkOINCcHNjzwhWWTc8sGZg7RFue7JOt2_FhlCbyJJOKaVNbGLAVq9DR_bi34n8v1WCM0FbSj5JJAQpytn4EV3-VKpoWb_QECay59qyuOqqEMPrh-FKvnLEgf2V-VDUppY0hMz_6ZP3rj1tqMvyS0LvAwatVWRtZuoqpr1dwsNMCr07TZ5SbpZjwqg4FCzxwx9G4lq2iKWCR9foUsZi6aPmMT91Qf_0zpizwocHcZoVWGHQYx53srYK1rtqQY1XyXLYrc2bpFCE6bkAAX2VGZ_FzeJL8Bjk-0BLjnevv0RGen4eKrtFt7MXYtJKFf-mAsaw4mtyWedXBt6YIsHHRSZifhDSgHjKa8ZLg-DhM3JwjXWe0DriWe71oahjzF-s08KXY-YrfjWtviTmDWBt8-ZgPrPOgXiDZs6r0-Q02UWPLkLTVNoRpfTyoCgCFKVVpH_QvqXZfmfdwah49ptab3mdAM2WmjQ6jh3yu7ygB7DGlnl71CrNp1mfqBFakHyCpGLPw5_bFpR-V6PIbTTJLFESx6z2lXGV1aPyafMRYQI9JlBZz-RNyo4AFX09Md4FM4LXCjdxznU-IUknzNSOyvaEX8OLqslOugWFaOX2zybMtNqi8zsnhNRgAcEe3dQ=w1920-h961",
                    "name": "CÔNG TY CỔ PHẦN PARALINE SOFTWARE",
                    "introduct": "<p>Paraline Software được sáng lập bởi những thành viên từng học tập, làm việc tại Nhật Bản. Chúng tôi hứa sẽ cung cấp đến khách hàng những sản phẩm có chất lượng theo tiêu chuẩn Nhật Bản tại Việt Nam. Với mục tiêu trở thành một trong những công ty hàng đầu Việt Nam về phần mềm, dịch vụ IT và mong muốn viết tên \"VIỆT NAM\" trên bản đồ IT Thế giới chúng tôi đang nỗ lực không ngừng từng ngày để thực hiện mục tiêu đó</p>",
                    "foundedYear": 2012,
                    "averageAge": 30,
                    "companySizeStart": 100,
                    "companySizeEnd": 499,
                    "srcVideoYoutube": "",
                    "phone": "0973889620",
                    "website": "https://paraline.com.vn",
                    "address": "Tầng 5, Tòa nhà Tây Hà, Số 19, Đường Tố Hữu, Phường Trung Văn, Quận Nam Từ Liêm, Thành phố Hà Nội, Việt Nam",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=Tang+5,Toa+nha+Tay+Ha,So+19,Duong+To+Huu,Phuong+Trung+Van,Quan+Nam+Tu+Liem,Thanh+pho+Ha+Noi,Viet+Nam&zoom=15&language=vi",
                    "career": "IT phần mềm",
                    "careers": [
                        "IT phần mềm",
                        "Công nghệ cao"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "_id": "624bef56b5984de94ce6a288",
                        "email": "paralinesoftware@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "CÔNG TY CỔ PHẦN PARALINE SOFTWARE",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-05T07:21:04.450Z",
                        "dateCreate": "2022-04-05T07:21:04.450Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false,
                        "businessPoints": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-05T07:21:04.499Z",
                    "dateEdit": "2022-04-05T07:41:00.017Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-paraline-software",
                    "__v": 0,
                    "color": "#3AB483"
                },
                {
                    "view": 0,
                    "_id": "624bf928b5984de94ce6a34b",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweUkabRpIJS5_Y5jOtk3lIv-ZvPN9ELYABgIqWxlbowxoZso5kbfr9XKts2FVluO3PCO7PHzOBrRnhFh9rlwSSFJansuMdyVNeraNfgMKTCLJvAlAtuC_dsmRH--aJJHATCHi8GXeUwnw4olVf1UYJrEPpb5IUmcyi1_Q8Qa_kjgf4UVZzYhOpOcTkqxtx2y38Bcx1I-evX3rw6AZvwd8SV_OVkTicWtJnGBrVn0L-hSG6PYfdN-3C--aY4N4TTfW_1NUyuFozQNluZNvVFrv7bi6Z9h8GZEVZqOZI36FNSxm1U1CfF8-mhF5F_v1On_KvyLQDBCrFjoOHguM77BtCKgadq0JctjsKOePEVk265Z0hEjmJTrnUyWSo4ACltkl74h6rtJl7MlIhhC7sGcWmc1I6cC9NvaGDvkm-55LzrXT_XxWsv936yHLmCsgeGVXJ5wsOodDKDPEBDdRvmF9tvlJ3Zz6_rN1rsaRPYsYLwXvN0dDxgQUYNEmIzYJcybiiQZoZzbJQTpst600pm1XrxZzVBsZzxuktK2uw3bxzybKrk02Vst_DnldElknUTxcf3Q-P5OSXr_9Mp9B8gRF4f2JEp-YpwJ3-8tkSNDxnJg1E6xbm7V1nyFDbn3e-hDXhahlWCu4AahA8i64QsCKDxq8POWMwrj9p6j-4xH41jyhcvH_TrNuVRMhKTiQm1TA2tM-jdPwFo2GrjOK3DBfWeZdAT4CmyXPymepUVHtnSAGz0mAWd5UCSKcS5YrEK5thTqQYJp_Y1BjhQ0awk=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweU-IMay7F-q1tOqLmoS6frCDZI-6rQLwthmDSxnCbICKGNHukFh2ctTjd1tmyb_7BOnAo-N4Lpujwz7VGB_005081GpxwqIpHeqtuwE52-_iH9o6NSvlUkEXs51N8NEvrBSEwXFpPJRDp-AXa2RsXo7QR4YgtdAfRjU88F6sG3H0gldWsZUjNu4klirsd8WcaFnyrJdiZqMzaX1__juiclxE1edxNMQ7ejB1cHNpujY9pXrXlJ5aWEiWyg8WbsrYYPtyAtO5XKugZNHb5oLvRpza8AUshG5CoDHtMsaroFJqPqpl6ErC9JNDyO12sV_tvFxQrDfZub7womu3P_gFEvJbfBh914mtLARyaJC05SprwQjdque6JyEy_PbpYjj86Xb3g7zfYkHaXIC_PnsXt5UsREXmDd3UJ8JaEbflN8CQkZ5t3_qQ-mIsKZNRnJvqqKg4Btg_AYZ70qgnjiLIQCOCTTIgVuKU5rGzawCrkd7cqS2flBBE9B-sCWmj8aK7l1B_lsKxXQQBognPiT5HBS_p_dU_FcRevpC7udhVhGA4KZkYnY0bb549zLCP54kZfzIz76ffQ6Mz0oHhx7LBTW_M2UQXmxyr5Z66VR1V1nc7PXYn9DVQe6FTkGBV3IRoPAuQRbYipM3u1ADweMxebZHAcqWqlBkT2bGJL98qZWvW8vgL17jzeioMWszrMVz6waGHVv6a_qNhrWEsYaRB4eAryvmy3w9ac-aSMxP0jN00H56FTv83nY4zgWFYnNgpsr4FmYHMM8ZOiLQZFU=w1920-h961",
                    "name": "CÔNG TY CỔ PHẦN TẦM NHÌN QUỐC TẾ ALADDIN",
                    "introduct": "<p>Aladdin là công ty sở hữu hệ thống nhà hàng mang thương hiệu Bò Tơ Quán Mộc, các nhà hàng theo phong cách Việt những năm của thập niên 80 . Với kiến trúc độc đáo, gần gũi với thiên nhiên, các nhà hàng của Aladdin là điểm nhấn độc và lạ giữa cuộc sống đô thị nhộn nhịp hiện đại.</p><p>Sứ mệnh của Aladdin là xây dựng cộng đồng Aladdin hạnh phúc viên mãn, mang lại những trải nghiệm hạnh phúc cho khách hàng.</p><p>Tầm nhìn của Aladdin là năm 2025 sở hữu 100 nhà hàng khắp Việt Nam, năm 2028 là công ty ẩm thực số 1 Việt Nam.</p><p>Cộng đồng Aladdin luôn sống với 6 giá trị cốt lõi:</p><p>1.Đặt khách hàng là trung tâm</p><p>2. Integrity</p><p>3.Coi mình là gốc rễ</p><p>4.Luôn yêu thương và hỗ trợ đồng đội</p><p>5.Cầu tiến</p><p>6.Trung thực</p>",
                    "foundedYear": 2017,
                    "averageAge": 25,
                    "companySizeStart": 100,
                    "companySizeEnd": 499,
                    "srcVideoYoutube": "",
                    "phone": "0979555095",
                    "website": "https://www.facebook.com/BoToQuanMoc.Aladdin",
                    "address": "88 Tố Hữu, Vạn Phúc, Hà Đông, Hà Nội",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=88+To+Huu,Van+Phuc,Ha+Dong,Ha+Noi&zoom=15&language=vi",
                    "career": "Báo chí / Truyền hình",
                    "careers": [
                        "Báo chí / Truyền hình",
                        "Marketing / Truyền thông / Quảng cáo"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "_id": "624bf7afb5984de94ce6a342",
                        "email": "aladdin@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "CÔNG TY CỔ PHẦN TẦM NHÌN QUỐC TẾ ALADDIN",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-16T18:23:48.951Z",
                        "dateCreate": "2022-04-05T07:21:04.450Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false,
                        "businessPoints": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-05T07:21:04.499Z",
                    "dateEdit": "2022-05-13T12:47:59.881Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-tam-nhin-quoc-te-aladdin",
                    "__v": 0,
                    "color": "#CD5505"
                },
                {
                    "view": 0,
                    "_id": "624e6e7e0dbf4e3955903b02",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweXHMo9zNjY0RBxpS72ACiifpdfj5J6gtQFk34fOszJTKpGIQIuokN0cSTtMYL2oWJjX2O2oUvIC8OkH5Oo7XODQYy5GjNtSpOhCDhaBfnKMmVnco0rxsUMJQuowiDp2TPfstDLf2wdtoIr6RgpOs2zslsXe4ftZDe_xYdklm09qR_gE_B4gM3MvVxaT8WR0nOZer2noqob6LIdEJpE0rp9X1ACQ0hOsBnVcUCQ2ohAI91tIhppFt8gmV0FTO1a4D65qSU_HVvsoc1DbEQOSgIzYKKOugUi1RNu7SCTeaRiZKMSIDBwSmTc_qYuqLTVUsa0b85UtindF6UHksbCU_GlcitLLbPY1949fxzRJmqNbGQyRULm-x-L9k-4_iIhjsGkUn4WaVVNpbU0Jk3R_qCe1JON70ysZImsox6fvOJKnsQQ81B-dH70hLidxgTuVF5HWUkYQPRYPDRc-WTXMx57rAu1Yubr-Gy9MamluRu0AdzZ4aA-3gMkXZ19UIvZobbF_uj4CBA5DgzfOLs7Sm1qgXzSuSRxFS7RkvmGr---Xkngciq3SPZNb-2q2CCMM3xHZOEwWAcCb91ZqLTJwD2zIjN5hk-oQEZWeDvCwVuq6uTB6MO5gaWrYX3FdHrSYtVzTGr0OjHAcHYxBXWMpxFY-CrSp6ngdJ1qbZieHCdV1fvKBgrRq3dJAhIIxPV25D0BL16u6-IIKQV-MXssmoKiAO25wmxRz6qXF-G_hH19ka7UNOJPNoSYKt4ddXTQVwRdN9cU9DZibWMY1X3U=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweWoNoClXaVVZXfgiHXKVcWamNxZ0z_IGK-mHZci238GA0BaGyY-0l-SgLpL0-UcDU3319AZR4wZTOGiX3LivWwDlCar7jnx1gYSQ7vY1Zw5a5T71o5jI4bdkwvEHTJHgeGcvCKpDCszoyuFW4nrDg7AXNPXWAsHzvgF-zduWPTn0eU9Q7hIpA8F02H5ESjqvbkj1V5HPewje6FKvXl-7SmyC3xG-3N3nHMiBXEaTB8KgOHnLWwFg6A4Z2423I-DC00h46uhYMNsf-278wftE3lwqfg2KDdoQdnzcN7ydnQcX0qNwLWlFPS8X01EHArRtWztnSDFutKiZmWViHOJFI9k65hSJGgGv0ktLnuZVP-xNybNDtdC_3wHHuSEcDJzG5gHdRkhsrxj-JTscUn5kuBd4CJAtkdGVHdNh9El0YSPZllGNrFDAbJSXkqJShDz7la0KO9NfjDVQyeEU5R1vas4QEZmIDDDCJs_xgdyH99Lfif9N-ZjdInv6ye3O3GIogQqg19dGzd_0wXhp5M99i1_Yx9lRjMCohbpu98GRBMZ_ZCmNGbC-WVRs2Ll6f2SQCEppVctPFmLdNAIIpPZmj9mYCx2mTrt2qHRGzVux7Yy0eM3zf0J4MBTbwuTY0l5Kkn3kiSrw_tpvIB3y6jB8r07zg3aszxX8CZAQJC3fojGOpwfFLBCWL-TEvgthDwF_xtd_iXqpzOSnBv3HbYHK-NQ0v1cQ62FWIkEFf4chqTBsUGoPKzT8ohbPOhDmFzHbwJjvtec9cXebcrDQf8=w1920-h961",
                    "name": "QORVO VIỆT NAM",
                    "introduct": "<p>Chúng tôi là Qorvo.</p><p>Qorvo là tất cả xung quanh bạn! Chúng tôi sản xuất các giải pháp RF sáng tạo ở trung tâm kết nối để cho phép các ứng dụng hiệu suất cao cho các thiết bị không dây tiên tiến, mạng có dây và không dây cũng như radar quốc phòng và truyền thông cho mạng 5G, điện toán đám mây, Internet of Things và các ứng dụng mới nổi khác. Chúng tôi là một công ty toàn cầu phát triển mạnh trên nền văn hóa đổi mới, đa dạng và hòa nhập. Con người của chúng tôi luôn là cốt lõi trong sự đổi mới của Qorvo. Qorvo là nơi để mở rộng trí tưởng tượng của bạn và vượt qua ranh giới để đạt được thành công.</p>",
                    "foundedYear": 2004,
                    "averageAge": 25,
                    "companySizeStart": 5000,
                    "companySizeEnd": 9999,
                    "srcVideoYoutube": "https://www.youtube.com/embed/qVdLHt1ZMMI",
                    "phone": "",
                    "website": "",
                    "address": "Tầng 5, Tòa nhà CIC, số 02 ngõ 219 Trung Kính, Phường Yên Hòa, Quận Cầu Giấy, Hà Nội",
                    "srcMap": "",
                    "career": "Điện / Điện tử / Điện lạnh",
                    "careers": [
                        "Điện / Điện tử / Điện lạnh"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "624e6838b5984de94ce6a685",
                        "email": "qorvo@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "QORVO VIỆT NAM",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-05T07:21:04.450Z",
                        "dateCreate": "2022-04-05T07:21:04.450Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-07T04:38:18.136Z",
                    "dateEdit": "2022-04-07T04:38:18.136Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "qorvo-viet-nam",
                    "__v": 0,
                    "color": "#1C1C1C"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "624849e6265148ced181a71d",
                        "email": "ifisolutionjsc@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công ty TNHH Giải pháp Tin học IFI SOLUTION JSC",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-02T06:56:27.152Z",
                        "dateCreate": "2022-04-02T06:56:27.152Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-02T13:28:58.338Z",
                    "dateEdit": "2022-05-16T04:37:41.641Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-tnhh-giai-phap-tin-hoc-ifi-solution-jsc",
                    "__v": 0,
                    "color": "#F68B3C"
                },
                {
                    "view": 0,
                    "_id": "62504497a53c0c47b1558823",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweWxUd8WbB3e5TLof2CyYfhTSJjp5q-EcJtPLonCu7hSw75BoqXPYLKylyy4YUvvo01wmDshDKk5X4VUczU9lvxSUTPbnJdPxojhgEo7avpH3xTop8TZlEObVPlNc3SsRG6Y7NzWhQhkONw7-wW_642r98xYwQUUJK1D14TKXJU7Hdw_3fGyh2hDydQv0vlFVQ4rRgLQSRBAwOJvwmPDBOpIMx9u7g8m0-13bfe1ao17q0mSQ4z2qcFt8-lHQ3Bxy8-NiXOVaWjdzeeGcR-845cLN3hF_mpTlW93O7gt1V_fentY05gMIn8Ip5VPa8uCmlJl62jW1T94QWjkARlY9HYvtafqUngXHk869ivPS8dWuXeR1ekf96cFpG6J7Qkqw1zuB7Jz-K45hRFll-GS_EETQubII2N4sDC-9c3tJbKb4IRJHXzJzdI4fN6Eg6Nzi00rYzT0z_fjhAhjEMDizi2AelyIH8UOouKedNKJVlTPWrD4RtfyEN-9DrZRd9drZ1Q6ddIWWM3_Zk11mvx2ztCdXzqzuYJyl2ebRT8G6QAuw7-6-EuHz9odp82fjs2hVwX81X-T9nQlLa5J6uUn7_-3DLyT-HPMYb_1Lg73b6YqdrgNk-FNnNeiyDB2F7u4UiOx78j1SzQ0E1nMx_jG_F7ehGxUyfb3jZYVxzq9lWmLnLz8Ko4p3y_aUAuporrMCKIadReOpilw2d8xTO_uzVLjss0WBgZ7vIdvytCprIQNg8YCvlQQ--BZZb599u6amNrcfNQ1kHdokS5RjUU=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweU60wifcW9ZNgi1UApaxcSLORKUVvfZmRWqfGSFE6D6UzCdiZuL2sEbYrj_1AQDa4_p8Uu2A83TNwlZmQyQFpDJbGRu4a9xK2-Vk7HDn-zZpuiqRW1skjoIGe2jh_W0ACreTzFOUStuMCTfgJeCXjU4eznn5LTDnhj5gGoJwQqDsK6IYTrcyPYfXEY0rzJ7Oba4IgeTF2KIPHcgAHwBZGjye7d5qPEvjGL13L9wsYB8dEROadI5Cg6SzbwJJn957qkxq1zVl5GniCDIIOSd-GfmVZ_iWxk5mTTmCdVZxKgf7Zvw4u1RrY6daEB-IhOTpOUGkg-yyRHBHZAoLjsNJlhNGxo6UfN5pbTX7XvNnNw9QNWecvsGIo1TPjoOU8HInStG3dml4QPNXz27yHtSbhdIsXbEpsgiNOYte-vd4kOdqeLtFuN6nO6MF40OPva42xNgPM8JZhXnPhCZcCYlDiNEZN5irH6xrTatwmwgICR6T6ynJk99maUfty8VqDViXjsnwFhhyat5x47qY11AZCEZP8pcixtKnrDehwZqRQS5wn5Bg7AKeBtqloXLcGGDmOW6mqoXZ028P4WN_iuUfJy6ZKmetuPhyc2HBfH-sJiO3eXUiWufCvhQ_GKxX69xdF8-D6jGuuDKoEgmK7bul-knpFw9BjO6XFQuoEUlYtODL3VMfY2LCkuOHFLVFcd9JghKaKtdGk6Sjx9u0XzpJx6sNVi-4rkxHjTzVPw0C4iostPQTLsB2YxGiDzIfPAlDduj_bCxVNVbBuEEg80=w1920-h961",
                    "name": "Công Ty CNTT Parcel Perform",
                    "introduct": "<p>Parcel Perform là nền tảng trải nghiệm giao hàng hàng đầu cho các doanh nghiệp trên toàn thế giới.</p><p>Parcel Perform là nền tảng trải nghiệm giao hàng hàng đầu. Nó cho phép các doanh nghiệp thương mại điện tử hiện đại tạo ra các hành trình khách hàng đầu cuối độc đáo và tối ưu hóa hoạt động hậu cần với tích hợp dữ liệu mạnh mẽ, theo dõi bưu kiện, thông báo giao hàng và báo cáo hiệu suất hậu cần trong thời gian thực.</p><p>Nền tảng SaaS có thể mở rộng của Parcel Perform thực hiện hơn 100 triệu bản cập nhật bưu kiện hàng ngày và tích hợp với hơn 800 nhà cung cấp dịch vụ. Công ty sử dụng dữ liệu đầu tiên tiên phong trong các trường hợp sử dụng ML / AI sáng tạo trong hậu cần thương mại điện tử bao gồm cả công cụ dự đoán 'Ngày đến'. Parcel Perform là đối tác được lựa chọn của các thương hiệu, thị trường và nhà cung cấp dịch vụ hàng đầu trên tất cả các ngành dọc lớn trên toàn cầu. Vào tháng 8, chúng tôi đã bảo đảm thành công 20 triệu đô la Mỹ trong các khoản đầu tư Series A do các nhà đầu tư blue-chip dẫn đầu như Cambridge Capital và SoftBank Ventures Asia.</p><p>Chúng tôi có một đội ngũ đa dạng và quốc tế gồm hơn 135 thành viên trên khắp Singapore, Việt Nam, Đức và Mỹ. Trung tâm công nghệ Parcel Perform Tech của chúng tôi có trụ sở tại Thành phố Hồ Chí Minh nhằm xây dựng một đội ngũ tài năng tập trung vào kỹ thuật, phát triển phần mềm và thành công của khách hàng. <strong>Tham gia cùng chúng tôi trong việc phát triển công nghệ theo dõi bưu kiện, nuôi dưỡng tài năng của chúng tôi và cùng nhau trở thành một nhóm toàn cầu.</strong></p>",
                    "foundedYear": null,
                    "averageAge": 25,
                    "companySizeStart": 151,
                    "companySizeEnd": 300,
                    "srcVideoYoutube": "",
                    "phone": "0983131351",
                    "website": "https://www.parcelperform.com/",
                    "address": "Quận 7, Hồ Chí Minh",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyAMccvlWFDk8E9b5Bk6YdPh1ZUht-JPcqU&q=.%2C+District+7%2C+Ho+Chi+Minh",
                    "career": "IT phần mềm",
                    "careers": [
                        "Công nghệ thông tin"
                    ],
                    "location": "Hồ Chí Minh",
                    "locations": [
                        "Hồ Chí Minh"
                    ],
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "6250406fa53c0c47b155881a",
                        "email": "thuchienbuukien@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công Ty CNTT Parcel Perform",
                        "position": "Nhân viên",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-08T13:44:06.072Z",
                        "dateCreate": "2022-04-08T13:44:06.072Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-08T13:44:06.380Z",
                    "dateEdit": "2022-04-08T13:44:06.380Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-cntt-parcel-perform",
                    "__v": 0,
                    "color": "#001B3A"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "62445aa188542af26b890e49",
                        "email": "dkravega@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "CÔNG TY CỔ PHẦN DKRA VEGA",
                        "position": "Nhân viên",
                        "workLocation": "Hồ Chí Minh",
                        "district": "Hồ Chí Minh",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-03-29T11:08:10.033Z",
                        "dateCreate": "2022-03-29T11:08:10.033Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "__v": 0,
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-03-30T15:37:09.399Z",
                    "dateEdit": "2022-05-11T06:46:18.277Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-dkra-vega",
                    "__v": 0,
                    "color": "#EA1C24FF"
                },
                {
                    "view": 0,
                    "_id": "6247f266823ee1dd950acbf3",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweWgcHzRxv5GeT9CdOMdGS2pmdYL6MbzK2R34VEaPuSfzlKdo-HBv3aTswQiT51ZKmstCMlaRr5C34VtgGuqi5F6lrcbZGayt5caMqescGV3cQYUbIi9hLY8LltOV2pzsT1TBI_a9-2sQhRBZL7X3sHFXG0Ap6RFYudxmidLaJUiAs8q-QUkv-5ohB7sJQBftijjZbwNQDEc1zFq7F49XSu8LEuLZEItBAj3JzaTUnCBAsbhcS-HzvOtRK8O8rBHmczNWs04SPhVnT_CjWw3MMX01HX1fmWaPzOqBvPd_eEVloW1tsvzlE3Z1DsOFumm75GJ5Hzzp--k41lnaYeHsfI0Yvk42kyc2DWNXmCxdRwtg6ObcPIHubqZSFAEChO3TlIHzpxgo5qVhvPpg8STOxmoHsM-5SRW31z4pFYqs6y0HX-f7aw9fJbP-dZ6DpFRsMs6q8SJ_DI2tXtfab3rTTTEqQmxvEhqGGQRRPLzRHDkapUmCvIyRnrMAn7Khx9V5V0ULp4MJGfEe51fMi_sJmaCX4WgX8u4BPMWHFqj69OIfIaC-bmVsgN_64lLe8VKCBF5HilsWPQnABnXpmloztn16Lvkfd-FE5rIYCeONcOe16wRpY-OAF6Di9LjZ2Lq7BTt4v6pHFaFuek-ord33A7KRDPmM7VxS3L7rMp9poRZYhx3wHF8MGDdDD8hQbpdD7KY2GA_nnzx4lWucFu8tc81i76dufjmpMa20YuCh-4GM7rOYvyEjWsflQsFxy4yehUIZ9r3osvaZotfMss=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweW9jVRN69lsEEPRVg6YXePO-GpayVf90YQDBQmXGrpgNYa5gQKI57lUfEUp11scyWkSNrIHGPXw60GVTE9AZjNhdXnNhSMXM7buIVFDosCF_-jmCk4oAVZoL6GxydGUSVd5Gn4IDnQgXZRb916dgJ-oC0Hm8mXXniRAvwxBP5hkJHbqq7D26Va00-trHivlVi3JHdvkjGxCLm-KwzsUsGwWCWTOw6p6jTZbLgX8ETbHLDmtWGIsGLxLCO_V9ioTvJOi6vh8C9y3-d_WQFg0BZ_5HPvtu9zVQFp88oXyfEyyVmHRgt9GvFY3euBXbOJxcRGpdQIpxQBHhRrIK1092v9GgSzUenjG4Ve5O8t5QdZfxSzOpB5YAUQuXkXdk1Q0DplID55ao24WQBmxEWt90mASRWq9GVKJsOSrvbZomFIspr7YPs_bSt466k6FNhHHs0j-XZxLz78rbIoFFSg3T6qaQc4fqi6WuryHFXw24B9365LxWE5OSExp35OfzDUNLsfbbk4BnNOWbQJpQttPsZLVEuueEp3Y5xZx6gMCCsEDxr5IPjyUW4zWqSmc7smLGnAlrMMsycvImoaha2PSxLU_WKURlZx9p7uNg28In2DbeQ9NuNn6GhqIKZ8JJwVRfLMqBl8z3VB0jOJWCK6dzdRZxsH7jCJU0DoqX_S1xvh2uduMauYWca3iBXOldqvsJXy4jD6gSSJM1WwrSVTUTEneGraH0Hsa95TK82qJloP_EnTf5Q0jMzKvUWK5VsRxokOtd6RG57-ZleaBQ78=w1920-h961",
                    "name": "Công ty EDUPIA",
                    "introduct": "<p>Được thành lập năm 2018, Edupia là thương hiệu hàng đầu trong lĩnh vực Edtech tại Việt Nam. Qua 4 năm hoạt động Edupia hiện có hàng trăm ngàn học viên tại Việt Nam và Đông Nam Á. Edupia cũng vinh dự nhận giải thưởng Ứng dụng số tốt nhất trong lĩnh vực đào tạo 2018, Top 50 Thương hiệu vàng ASEAN 2019 và đứng #6 trong Top 50 doanh nghiệp start-up hứa hẹn nhất Việt Nam (theo Techinasia đánh giá vào tháng 8/2021).</p><p>Thông qua các giải pháp công nghệ đột phá, các sản phẩm Tiếng Anh online của Edupia giúp cho hàng triệu học sinh dù ở điều kiện kinh tế nào đều có cơ hội học Tiếng Anh với chất lượng tốt nhất góp phần mang lại <i><strong>\"một thế hệ học sinh với tương lai tốt đẹp hơn\"</strong></i>.</p>",
                    "foundedYear": 2018,
                    "averageAge": 25,
                    "companySizeStart": 700,
                    "companySizeEnd": 2000,
                    "srcVideoYoutube": "https://www.youtube.com/embed/IFR0-N4p_KQ",
                    "phone": "024.6295.4629",
                    "website": "https://edupia.vn/tuyen-dung",
                    "address": "Tầng 6, tòa Comatce, 61 Ngụy Như Kon Tum, Quận Thanh Xuân, Hà Nội",
                    "srcMap": "",
                    "career": "Kinh doanh / Bán hàng",
                    "careers": [
                        "Giáo dục / Đào tạo",
                        "Tư vấn"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "6247ee1c823ee1dd950acbe4",
                        "email": "edupia@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công ty EDUPIA",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-02T06:31:17.085Z",
                        "dateCreate": "2022-04-02T06:31:17.085Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-02T06:31:17.325Z",
                    "dateEdit": "2022-04-02T07:58:23.420Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-edupia",
                    "__v": 0,
                    "color": "#0263A1"
                },
                {
                    "view": 0,
                    "_id": "624d0f8eb5984de94ce6a452",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweWsegymT068xOFsLz8IkNruD6SmFPaioqgk9OlLoVVLZjQMkd2UzzWN6g32FD3nj5aI9H0wmWC0cjoFwlVWJIpXCCLnsTs1V32U2-flDOentEJ3sGvz2TPkE1Lrok2reHOZzE0Hk1bxhatq7IAyepkVxodL8TiT_n-_-b4Dl6C0Pt1_ZmeFORxbbBFENxufFLgCbxr-RxiNFkqFinaxUwcN9E7koQpaXuwYbxCyca4Loi1bbUxUPS-kh2wXe53BJrHjoO7Hal_OQKLp5LLXZ5_Ktdwk2LkSokNSoSRymKn4CoIc6r84drYeFo592lxAXkVBADGHg0cQ2nAQcn8BEhR6sGL5jmgbzmajWyPa-30B2e_qzY4vYzHbLo07YxQyHoKnGpPiSRl8i6hRfSbbgPTAsUlpq6lyUyeJiBj45Bz7ORRDbY5dOEQCaIXsVCri3DBdGxYuBJCjvWp9T1-GJwrVIh65b9lW6BqnbIwF-mfHorootkH_BWG85xZVkHLf3CDwKehGahBnWrGswVHYrvaRvD5_QIXzV9PcDf0AS9qSm6XaEc9sS34O_rZNrKBAHWryUlbcnEH-LEZ160yXKrSvNMBfiIOosCfECQyjK88RkWPafl2MchGoZiKsGWRKOC3_cSAeTQI2NHL1Y5p4rwswUS3i9bAkUe4RmYXRS99sXRNoIMRrGT9UiRkBhGYV_4o8BxtOxzgTs-Di4loXMHRobIItoI4BtD8eEGn1GmdaFw6Ai8xVRUjLe9Z6zt69INllS86pc0dpAsgVHpY=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweXK4SQCcs_nhinFAXHfYmw4n__JrMpiAfK7E-jtVoBXpLEEyiH36SEFd1QUK2yrfLK10I9Q68BALEEsFpsuVvEC3Dg2_en3DRDktnp9axFP2LRk6d-feLE-Hg7bonBFoGLZSQL5aV88fRF3fKJoOqTxO5SqHlEqnP5h0VfF5U4V88CkePW9hMhQGM6A_9CAVzPBqD_fqMxUX0YZJVU5HjX5-0vSTPbxeNxsAMXSx27_SN-0DlmZDkWub4JXj03AHoNx8i71exdUc--QdqNHVaIb6Z2Lu0egDG6k0LjC3H5PEZouolDPlpl2kJs6S00Nij_ZdB_qwNSZ9lBSlzPNxOP6NbRABWayus4lkUK7-6g1RB01wO-IvIo6DJiOUDNgqV-aQrWEB0oa6Rfb3oLHZ1qmPKqHcBRctJe7H6SHfzpsd4IARZX-IzDX5Hbs3UuAMTj_Vz45AxntDfwmw4L3EvXriz5DqRHB0OmuIgmTjlrRBb8W4AGgujfvG9AB7SRATzYOgiBzKZityQzXWUQYO9ZQ4qj6UrhtpNl3tb_XeUhjJbu-uIbLxYkTjGvSQOEwX6MXyQdgMT3DbbrFTfAIWJWTSCtK9NYrHLKJdcezUBbZ_8cThQSt6l5AGRQMYLjnLgVd2GMdcbBLxzofuf8tA0sYmCCcMGilcS2RC3YnuM8okqUBhcAOntdbvO70esNpSm4INprQdPnbD-a7jzOFJm8VUuUcFPLB5IPO_nLicbV_kD_RchgdBD8ECfnxz9JyoChkKCBh_l6CCq4bkDM=w1920-h961",
                    "name": "CÔNG TY CỔ PHẦN CQ TDT ASIA",
                    "introduct": "<p>Năm 2017 đánh dấu sự ra đời của TDT Asia với tư cách là một công ty dựa trên sản phẩm CNTT với tầm nhìn cung cấp phần mềm và hệ thống thông tin tài chính sáng tạo cho thị trường châu Á nói riêng và thị trường toàn cầu nói chung.</p><p>&nbsp;TDT nổi bật là công ty duy nhất tại Việt Nam chuyên cung cấp nền tảng tài chính cho các khách hàng B2B của chúng tôi từ các nước phát triển.</p>",
                    "foundedYear": 2017,
                    "averageAge": 26,
                    "companySizeStart": 100,
                    "companySizeEnd": 499,
                    "srcVideoYoutube": "",
                    "phone": "0962503246",
                    "website": "https://tdt.asia/",
                    "address": "P.305-306, tầng 3, tòa nhà 48B Keangnam, đường Phạm Hùng, Q. Nam Từ Liêm, HN",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=P.305-306,tang+3,toa+nha+48B+Keangnam,duong+Pham+Hung,Q.+Nam+Tu+Liem,HN&zoom=15&language=vi",
                    "career": "Nhân sự",
                    "careers": [
                        "Hành chính / Văn phòng",
                        "Nhân sự",
                        "Công nghệ thông tin"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "_id": "624d0e86b5984de94ce6a449",
                        "email": "cqtdtasia@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "CÔNG TY CỔ PHẦN CQ TDT ASIA",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-15T19:02:16.683Z",
                        "dateCreate": "2022-04-05T07:21:04.450Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false,
                        "businessPoints": 0
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-05T07:21:04.499Z",
                    "dateEdit": "2022-04-22T08:04:43.967Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-cq-tdt-asia",
                    "__v": 0,
                    "color": "#072B42"
                },
                {
                    "view": 0,
                    "_id": "624d12f8b5984de94ce6a4b1",
                    "srcBanner": "https://lh3.googleusercontent.com/fife/AAWUweUq8MSos2ns_ZZtMFkdapd_x8hd4n41FGeuE0txZDS5NF8WSEX9FW1IXsn98W2CbDTHxDQOo6fb4ajDG_Zs5Coup2rS4INIe4s4lupjoXrMJXvQSF1Vb2W1ctZHid8eNGhOW2gLS5rpVQPk6C2kWzqln8XmdMBxZkiQVvkPxdrxwrnXC5MgTeVkgF1jkeYpGiYGcA2d6OmWtHbQJ-UUjbCMb9Qo2AeanWD18n4xsGKxcLWL0dMkEHAmBosvuRRgjHkNMIVoXfJZY4jnF7dcjLl-f9eilkGkhMT7NBkRYhCK1E3VXPixgBCeJYZTOFu0pMSy5e72dEzmGDFmx73_8yMgsei7T_6XbaKqkBmFy9xeAPC2OdW-CwEGVsKJ8kb1n9QmxAFKOVc-0rVrBv0iWewEdGUgXl-l1FewnRMH2-hnJzTv9bgF-9v5Id2PUfowvx-pm0DhhZCtv9pK7iTE5p0In0fIcW_zrzOWabz1_U3bcntesTiMlfIzH-jOzRpUXZsLTZacDkrPcK5u8UzDh5nQwEQuyarUUkcqruEbqjNprR7bfzVzNmJEYftUA_mdWYPrJByubdH4SXW9zmVY1RorXrOfpyWXTyUaNV6_xt9jB7g5cgPqoXoaYqp8uKJWXXiZrwdQCo-k8I6wGp03tMEcJKDKV-mmHQ4JqnSeScFAzIO90jYv5s3xCitwI6oPFdVQ9z3Q564hcS6Q1dNo69O1b02uMstJfXq7y8sQYRYEhPtLLLRS1s6Q4Qc-ZcitHECMYdKWQGNAh7-8EVg=w1920-h961",
                    "srcLogo": "https://lh3.googleusercontent.com/fife/AAWUweUSKary-ee3SDatwAyR9U2ThxPb-dtfV3yXZTSoL_AZKmzsqTKTAOnYEa6TFWnffjrn61-FOJoEzPjKNxh9crm9bhh_MmEFP3UiNHJQDGqkDyyRPOren5iPuAkhFVv4ZHwoQIF0imgoYJHM4bmZApWRu0wMfaj4GeCBkSyd14mH0d5YBYB4pRh-8P9A-YYw0P9EoCBHZPfFX2WSvCOYo3HO_TIS6oZ_L-xa4htm715H-kQIhyXHQ8w4EQu8jdw4osXks4lM1KO8i8iYpLsD7PZZV3P9aCoiEWNYcTNypbbGR1MOiDlQklYM1iDl9SuDudqeJ4GjeuycCLD2hbsJVIz0qpyoXvGy-Iby-FIn-mG-J6naA1eGDEU0ljkNLLqP9F0ghkHKqaYMv1MrGkPGBRR7LfF8ndL8-wEt1J3ruSQo73uVNankh0Xw3irwqNlma8_3FbhOHSU07D-evlT22HcvvJcDHqFh1N4ZRtXlHFukjSDNWW5PFMniga4zjHFpQ7vOcao3WkUWGOtxCpZ1LtAWDqb4pIND8ihjx_SJAyqLph3u55pO0Dd8Cr8xM06n5aRgOt5e9RylxbFKZ9nGnxxizDzTezHBGXv803L3gCevPSEoCketEPRZlMMt6qODrOuoI01UDyNErmbEMFJKpwkny3D61kPBCBYXkLClXzQQjUek3lsi5oDQTrAaXwHAWCczg3JBB-MY_WFbc2RiD9CIrAkOSQbsuPSw9IQG_ddwcWr1XCLRNxddlTf6UeHktvcKEaDKAizPEV7aAlM=w1920-h961",
                    "name": "Công ty Cổ phần Tập đoàn G",
                    "introduct": "<p>G-Group là một trong các Tập đoàn Công nghệ hàng đầu của Việt Nam, có trụ sở chính đặt tại Hà Nội và chi nhánh tại TP. Hồ Chí Minh. G-Group chú trọng ứng dụng và đầu tư mạnh mẽ cho công nghệ và con người, nhằm tăng chất lượng trải nghiệm cuộc sống của người Việt. Chúng tôi tập trung đầu tư phát triển trong 3 lĩnh vực: Tài Chính Công Nghệ, Truyền Thông Công Nghệ và An Ninh Công Nghệ, với hơn 1000 nhân sự, hoạt động với Hệ sinh thái 11 công ty thành viên và đang tiếp tục mở rộng.</p><p>G-Group mang trong mình Sứ mệnh tạo ra sự chuyển hóa mạnh mẽ giúp các công ty công nghệ hiện thực hóa Tầm nhìn &amp; Sứ mệnh của mình, từ đó mang lại lợi ích cho khách hàng, nhân viên và nhà đầu tư. Tầm nhìn đến năm 2023 là Tập đoàn đầu tư Công nghệ khởi nghiệp số 1 Việt Nam.<br>&nbsp;</p><p>Trong bối cảnh dịch bệnh Covid-19 đang diễn biến phức tạp trên toàn thế giới, G-Group luôn ưu tiên đóng góp giá trị cho xã hội, cộng đồng thông qua các hoạt động như trao tặng 1000 HANET AI Camera cho hơn 300 bệnh viện và khu cách ly trên cả nước; Làm chủ việc nghiên cứu, sản xuất vòng đeo tay thông minh G-Track giúp quản lý người nhập cảnh và giám sát F0, F1 cách ly tại nhà, đóng vai trò quan trọng khi triển khai áp dụng trên nhiều tỉnh thành; Tài trợ miễn phí tài khoản GapoWork tích hợp Zoom cho 1000 trường học từ cấp mầm non đến đại học trên toàn quốc; Hưởng ứng Chương trình “Sóng và máy tính cho em” do Bộ TT&amp;TT phát động, G-Group triển khai dự án phi lợi nhuận cung cấp 1 triệu máy tính bảng HANET Smart Edu, giúp các em học sinh đang ở vùng có dịch Covid-19, gặp hoàn cảnh khó khăn có điều kiện để học tập trực tuyến hiệu quả.… Vì vậy, Tập đoàn Công nghệ G-Group đã được tôn vinh với danh hiệu “Doanh nghiệp trách nhiệm Châu Á 2021”, do Enterprise Asia – tổ chức phi chính phủ hàng đầu về tinh thần kinh doanh có trách nhiệm ở châu Á trao tặng</p>",
                    "foundedYear": 2016,
                    "averageAge": 28,
                    "companySizeStart": 500,
                    "companySizeEnd": 1000,
                    "srcVideoYoutube": "https://www.youtube.com/embed/UrZX8c2tc3w",
                    "phone": "02473066222",
                    "website": "https://g-group.vn/",
                    "address": "275 Nguyễn Trãi, Thanh Xuân, Hà Nội",
                    "srcMap": "https://www.google.com/maps/embed/v1/place?key=AIzaSyCVgO8KzHQ8iKcfqXgrMnUIGlD-piWiPpo&q=275+Nguyen+Trai,Thanh+Xuan,Ha+Noi&zoom=15&language=vi",
                    "career": "Công nghệ thông tin",
                    "careers": [
                        "Công nghệ cao",
                        "Công nghệ thông tin"
                    ],
                    "location": "Hà Nội",
                    "locations": [
                        "Hà Nội"
                    ],
                    "idEmployer": {
                        "businessPoints": 0,
                        "_id": "624d1174b5984de94ce6a4a8",
                        "email": "tapdoang@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công ty Cổ phần Tập đoàn G",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-04-05T07:21:04.450Z",
                        "dateCreate": "2022-04-05T07:21:04.450Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-04-05T07:21:04.499Z",
                    "dateEdit": "2022-04-05T07:21:04.499Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-co-phan-tap-doan-g",
                    "__v": 0,
                    "color": "#FFC220"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "_id": "6237218c7a4a53c9acf602c4",
                        "email": "webrt@gmail.com",
                        "fullname": "Huỳnh Minh Tấn",
                        "phone": "0924404019",
                        "gender": "Nam",
                        "company": "Công ty cổ phần truyền thông và công nghệ rao thuê",
                        "position": "Tổng giám đốc",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0924404019",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-03-20T12:39:48.097Z",
                        "dateCreate": "2022-03-20T12:39:48.097Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-03-20T13:11:08.785Z",
                    "dateEdit": "2022-04-29T13:21:42.040Z",
                    "isBin": false,
                    "isBrowser": true,
                    "__v": 0,
                    "color": "#0863F5FF",
                    "slug": "Cong-ty-co-phan-truyen-thong-va-cong-nghe-rao-thue"
                },
                {
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
                    "idEmployer": {
                        "businessPoints": 0,
                        "vipTopMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopPro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopManager": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopSalary": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopIT": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTopEco": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplatePro": {
                            "isActive": false,
                            "deadline": null
                        },
                        "vipTemplateMax": {
                            "isActive": false,
                            "deadline": null
                        },
                        "_id": "6242ec7a88542af26b890c1a",
                        "email": "vnpay@gmail.com",
                        "fullname": "Trần Thanh Thuận",
                        "phone": "0866904049",
                        "gender": "Nam",
                        "company": "Công ty CP Giải pháp Thanh toán Việt Nam (VNPAY)",
                        "position": "Nhân viên",
                        "workLocation": "Hà Nội",
                        "district": "Hà Nội",
                        "accountSkype": "0866904049",
                        "isTeamOfService": true,
                        "isCompany": true,
                        "coin": 200,
                        "dateEdit": "2022-03-29T11:08:10.033Z",
                        "dateCreate": "2022-03-29T11:08:10.033Z",
                        "avatar": "https://www.jing.fm/clipimg/detail/398-3981675_avatar-for-login-form.png",
                        "member": 1,
                        "__v": 0,
                        "isActive": true,
                        "isBin": false
                    },
                    "isActive": true,
                    "dateCreate": "2022-03-29T11:08:10.297Z",
                    "dateEdit": "2022-03-29T12:44:34.511Z",
                    "isBin": false,
                    "isBrowser": true,
                    "slug": "cong-ty-cp-giai-phap-thanh-toan-viet-nam-vnpay",
                    "__v": 0,
                    "color": "#F60002FF"
                }
            ]
        }
    }
}
</script>

<style scoped>
.container {
    max-width: 1250px;
}

.vueperslide {
    background-size: 100% 100%;
}
</style>