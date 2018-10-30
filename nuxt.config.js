module.exports = {

	head: {
		
		title: 'frontend',
		
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: 'Nuxt.js project' }
		],
		
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	css: [
		'@/assets/scss/main.scss'
	],
	
	loading: { color: '#3B8070' }

}

