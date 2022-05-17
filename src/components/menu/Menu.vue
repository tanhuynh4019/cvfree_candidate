<template>
    <div>
        <v-menu v-for="menu in menus" :key="menu.name" transition="slide-y-transition" offset-y open-on-hover bottom
            max-width="200">
            <template v-slot:activator="{ on, attrs }">
                <v-btn dark text v-bind="attrs" v-on="on">
                    <span v-if="!menu.badge">
                        {{ menu.name }}<v-icon size="20" v-if="menu.isDropdown">mdi-menu-down</v-icon>
                    </span>
                    <v-badge v-if="menu.badge" :color="menu.badge.color" :content="menu.badge.content">
                        {{ menu.name }}
                        <v-icon size="20" v-if="menu.isDropdown">mdi-menu-down</v-icon>
                    </v-badge>
                </v-btn>
            </template>
            <v-list v-if="menu.isDropdown" dense>
                <v-list-item link v-for="item in menu.list" :key="item.name">
                    <v-list-item-title>
                        <v-icon size="20">{{ item.icon }}</v-icon><span class="ml-1">{{ item.name }}</span>
                    </v-list-item-title>
                </v-list-item>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
export default {
    name: "Menu",
    props: ['website','offset_top'],
    data() {
        return {
            menus: [
                {
                    name: "Về chúng tôi",
                    isDropdown: true,
                    link: "/",
                    list: [
                        {
                            name: "Về công ty cvfree",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                        {
                            name: "Hệ thống AI của cvfree",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                        {
                            name: "Liên hệ",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                        {
                            name: "Hỏi đáp",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                        {
                            name: "Điều khoản dịch vụ",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                        {
                            name: "Quy chế hoạt động",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                        {
                            name: "Quy định bảo mật",
                            link: "",
                            icon: "mdi-ray-start-arrow",
                        },
                    ],
                },
                {
                    name: "Việc làm",
                    isDropdown: true,
                    badge: {
                        color: "#B71C1C",
                        content: "Hot",
                    },
                    link: "/",
                    list: [
                        {
                            name: "Tìm việc làm",
                            link: "",
                            icon: "mdi mdi-briefcase-search",
                        },
                        {
                            name: "Việc làm đã ứng tuyển",
                            link: "",
                            icon: "mdi mdi-briefcase",
                        },
                        {
                            name: "Việc làm đã lưu",
                            link: "",
                            icon: "mdi-cards-heart",
                        },
                        {
                            name: "Việc làm phù hợp",
                            link: "",
                            icon: "mdi mdi-robot",
                        },
                        {
                            name: "Việc làm từ xa",
                            link: "",
                            icon: "mdi mdi-cloud",
                        },
                        {
                            name: "Việc làm IT",
                            link: "",
                            icon: "mdi mdi-code-braces-box",
                        },
                        {
                            name: "Việc làm Senior",
                            link: "",
                            icon: "mdi mdi-account-tie",
                        },
                    ],
                },
                {
                    name: "Hồ sơ & CV",
                    isDropdown: true,
                    badge: {
                        color: "#B71C1C",
                        content: "New",
                    },
                    link: "/",
                    list: [
                        {
                            name: "Quản lý CV",
                            link: "",
                            icon: "mdi-account-box",
                        },
                        {
                            name: "Quản lý Cover Letter",
                            link: "",
                            icon: "mdi-file-document-multiple",
                        },
                        {
                            name: "Mẫu CV",
                            link: "",
                            icon: "mdi-card-account-details-star",
                        },
                        {
                            name: "Mẫu Cover Letter",
                            link: "",
                            icon: "mdi-card-account-mail-outline",
                        },
                        {
                            name: "Dịch vụ tư vấn CV",
                            link: "",
                            icon: "mdi-file-document-outline",
                        },
                        {
                            name: "Hướng dẫn viết CV theo từng nghành nghề",
                            link: "",
                            icon: "mdi-file-document",
                        },
                        {
                            name: "Hệ thống AI CV",
                            link: "",
                            icon: "mdi-robot",
                        },
                        {
                            name: "TopCV Profile",
                            link: "",
                            icon: "mdi-card-bulleted",
                        },
                    ],
                },
                {
                    name: "Công ty",
                    isDropdown: true,
                    link: "/",
                    list: [
                        {
                            name: "Danh sách công ty",
                            link: "",
                            icon: "mdi-office-building",
                        },
                        {
                            name: "Top công ty",
                            link: "",
                            icon: "mdi-office-building-outline k m htg",
                        },
                    ],
                },
                {
                    name: "Blog",
                    isDropdown: false,
                    link: "/",
                    list: [],
                },
                {
                    name: "Sự nghiệp",
                    isDropdown: false,
                    link: "/",
                    list: [],
                },
            ],
        };
    },
};
</script>

<style>
.v-btn__content {
    text-transform: none;
}
</style>