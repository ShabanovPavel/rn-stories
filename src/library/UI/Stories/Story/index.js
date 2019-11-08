import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import StoryBlock from './StoryBlock';
import {Utils} from '../../../Utils';
import {View} from '../../View';
import {ActivityIndicator} from '../../ActivityIndicator';
import {Theme} from '../../../Theme';
import Styles from './styles';

const {listScreen} = Utils;

class Story extends Component {
	constructor(props) {
		super(props);
		this.TabStory = undefined;
	}

	componentDidMount() {
		const {items, storyInitKey} = this.props;
		const initialRouteName = storyInitKey || Object.keys(items || {})[0];

		setTimeout(() => {
			try {
				this.TabStory = createAppContainer(
					createMaterialTopTabNavigator(
						{...listScreen(items, StoryBlock)},
						{
							initialRouteName,
							tabBarComponent: () => null,
							animationEnabled: true,
							swipeEnabled: true,
							lazy: false,
						},
					),
				);
				this.forceUpdate();
			} catch (err) {
				console.log('Ошибка при открытии сторис', err);
			}
		}, 400);
	}

	onNavigationStateChange = (prevState, {index, routes}) => {
		const {onOpenStories} = this.props;
		const {key} = routes[index];

		onOpenStories({storyId: key});
	};

	render() {
		// Log('!LibStory', this.props);
		const {items, onOpenStories, onClose} = this.props;
		const styles = Theme.createStyles(Styles);
		const color = Theme.getColors();

		const itemsKey = Object.keys(items || {});

		if (this.TabStory && itemsKey.length > 0) {
			return (
				<this.TabStory
					screenProps={{
						onClose,
						onOpenStories,
						itemsKey,
						params: items,
					}}
					onNavigationStateChange={this.onNavigationStateChange}
				/>
			);
		}
		return (
			<View style={styles.errorView}>
				<ActivityIndicator animating size={40} color={color.WHITE} />
			</View>
		);
	}
}

Story.propTypes = {
	items: PropTypes.object, // список сторис
	onClose: PropTypes.func, // закрыть сторис
	onOpenStories: PropTypes.func, // функция вызываема при открытии стори
	storyInitKey: PropTypes.string, // id стори с которой следует начать
};

Story.defaultProps = {
	items: {},
	onClose: undefined,
	storyInitKey: undefined,
	onOpenStories: () => {},
};

export {Story};
