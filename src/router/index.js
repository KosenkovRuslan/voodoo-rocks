import { createRouter, createWebHistory } from "vue-router";
import Posts from "@/views/Posts.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
        {
			path: "/",
			name: "Posts",
			component: Posts,
		},
	],
});

export default router;