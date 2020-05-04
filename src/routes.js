import RolesPage from './pages/Roles';
import LiveGamesPage from './pages/LiveGames';
import LandingPage from './pages/Landing';
import AuthPage from './pages/Auth';

const routes = [
	// {
	// 	title: '游戏记录',
	// 	link: '/',
	// },
	// {
	// 	title: '游戏日程',
	// 	link: '/',
	// },
	{
		title: '首页',
		link: '/',
		component: LandingPage,
	},
	{
		title: '规则介绍',
		link: '/roles',
		component: RolesPage,
	},
	// {
	// 	title: '在线发牌',
	// 	link: '/live',
	// 	component: LiveGamesPage,
	// },
	// {
	// 	title: '登录注册',
	// 	link: '/auth',
	// 	component: AuthPage,
	// },
	// {
	// 	title: '登录/注册',
	// 	link: '/',
	// },
];

export default routes;
