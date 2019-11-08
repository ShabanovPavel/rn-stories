import {Theme} from './library';

export const settingsDefault = {
	layout: {
		direction: 'ltr', // Supported directions are: 'rtl', 'ltr'
		backgroundColor: 'rgb(255,255,255,0)',
		orientation: ['portrait'],
	},
	statusBar: {
		drawBehind: false,
		hideWithTopBar: false,
		backgroundColor: 'rgb(255,255,255,0)',
	},
	topBar: {
		visible: false,
		drawBehind: true,
		height: 0,
	},
	bottomTabs: {
		visible: true,
		barStyle: 'default',
		drawBehind: true,
		translucent: true,
	},
	overlay: {
		interceptTouchOutside: false,
		handleKeyboardEvents: true,
	},
};

export const rootLoadApp = {
	root: {
		stack: {
			id: 'appStack',
			children: [
				{
					component: {
						id: 'initApp',
						name: 'initApp',
					},
				},
			],
			options: {
				topBar: {
					visible: false,
					height: 0,
				},
			},
		},
	},
};

export const rootMainApp = {
	root: {
		stack: {
			id: 'appStack',
			children: [
				{
					bottomTabs: {
						currentTabId: 'mainTab',
						// backgroundColor: 'green',

						children: [
							{
								component: {
									name: 'playground',
									options: {
										bottomTab: {
											text: 'Playground',
											// icon: require('../images/two.png'),
										},
									},
								},
							},
							{
								stack: {
									id: 'presentationStack',
									children: [
										{
											component: {
												name: 'main',
												options: {
													bottomTab: {
														text: 'Presentation',
														// icon: require('../images/two.png'),
													},
												},
											},
										},
									],
								},
							},
						],
						options: {},
					},
				},
			],
			options: {
				topBar: {
					visible: false,
					height: 0,
				},
			},
		},
	},
};
