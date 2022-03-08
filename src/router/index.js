/* routes for each view */

import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Courses from '../views/Courses.vue'
import Achievements from '../views/Achievements.vue'
import Events from '../views/Events.vue'
import Login from '../views/Login.vue'
import Profile from '../views/Profile.vue'
import MyCourses from '../views/UserCourses.vue'
import Announcement from '../views/Announcement.vue'
import Chapter from '../views/Chapter.vue'
import Forum from '../views/Forum.vue'
import HomeCourse from '../views/HomeCourse.vue'
// import Quizzes from '../views/Quize.vue'
import Syllabus from '../views/Syllabus.vue'
import Quiz from '../views/Quiz.vue'
import Problem from '../views/Problem.vue'
import Introduction from '../views/Introduction.vue'
import Signup from "../views/Signup";
import Statistics from "../views/Statistics";
import LoginFailed from "../views/LoginFailed";

const routes = [
	{
		path: '',
		name: 'Home',
		component: Home,
		meta: {
			title: 'Master CS | Home'
		}
	},
	{
		path: '/courses',
		name: 'Courses',
		component: Courses,
		meta: {
			title: 'Master CS | Courses'
		}
	},
	{
		path: '/Achievements',
		name: 'Achievements',
		component: Achievements,
		meta: {
			title: 'Master CS | Achievements'
		}
	},
	{
		path: '/Events',
		name: 'Events',
		component: Events,
		meta: {
			title: 'Master CS | Events'
		}
	},
	{
		path: '/Login',
		name: 'Login',
		component: Login,
		meta: {
			title: 'Master CS | Login'
		}
	},
	{
		path: '/Profile',
		name: 'Profile',
		component: Profile,
		meta: {
			title: 'Master CS | Profile'
		}
	},
	{
		path: '/MyCourses',
		name: 'MyCourses',
		component: MyCourses,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
    {
        path: '/Introduction',
        name: 'Introduction',
        component: Introduction,
        meta: {
            title: 'Master CS | Introduction Quiz'
        }
    },

    {
        path: '/Quiz',
        name: 'Quiz',
        component: Quiz,
        props($route) {
            return {
                title: $route.query.title,
                id: $route.query.id,
            }
        },
        meta: {
            title: 'Master CS | Quiz'
        },
        children: [
        ]
    },
    {
        name: 'Problem',
        path: '/Problem',
        component: Problem,
        props($route) {
            return {
                index: $route.query.index,
                id: $route.query.id,
            }
        },
    },
	{
		path: '/homecourse',
		name: 'MyCoursesHome',
		component: HomeCourse,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/announcements',
		name: 'MyCoursesAnnouncement',
		component: Announcement,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/chapter',
		name: 'MyCoursesChapter',
		component: Chapter,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	// {
	// 	path: '/quizzes',
	// 	name: 'MyCoursesQuizzes',
	// 	component: Quizzes,
	// 	meta: {
	// 		title: 'Master CS | My Courses'
	// 	}
	// },
	{
		path: '/syllabus',
		name: 'MyCoursesSyllabus',
		component: Syllabus,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/forum',
		name: 'MyCoursesForum',
		component: Forum,
		meta: {
			title: 'Master CS | My Courses'
		}
	},
	{
		path: '/Signup',
		name: 'Signup',
		component: Signup,
		meta: {
			title: 'Master CS | Sign Up'
		}
	},
	{
		path: '/Statistics',
		name: 'Statistics',
		component: Statistics,
		meta: {
			title: 'Master CS | User Statistics'
		}
	},
	{
		path: '/LoginFailed',
		name: 'LoginFailed',
		component: LoginFailed,
		meta: {
			title: 'Master CS | User Statistics'
		}
	}
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes
})

router.beforeEach((toRoute, fromRoute, next) => {
	window.document.title = toRoute.meta && toRoute.meta.title ? toRoute.meta.title : 'Master CS';
	next();
});

export default router
