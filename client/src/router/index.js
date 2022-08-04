import { createRouter, createWebHistory } from 'vue-router';
import Products from '../views/Products.vue';
import About from '../views/About.vue';
import Contact from '../views/Contact.vue';
import Courses from '../views/Courses.vue';

const routes = [
	{
		path: '/',
		name: 'CoursesView',
		component: Courses
	},
	{
		path: '/about',
		name: 'AboutView',
		component: About
	},
	{
		path: '/contact',
		name: 'ContactView',
		component: Contact
	},
	{
		path: '/poster',
		name: 'ProductsView',
		component: Products
	}
	// {
	// 	path: '/courses',
	// 	name: 'CoursesView',
	// 	component: Courses
	// }
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
});

export default router;
