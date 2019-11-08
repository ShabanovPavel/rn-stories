import React from 'react';
import {View, BindComponent, Text, StoryList} from '../../../library';
import Styles from './styles';

type Props = {
	styles: Object, // стили для экрана
	onClick: Function,
	onOpenStories: Function,
	onLoadStories: Function,
};

class Screen extends React.PureComponent<Props> {
	constructor(props) {
		super(props);
		const {onLoadStories, onRegisterFocusScreen} = props;
		onRegisterFocusScreen(isFocus => {
			if (isFocus) {
				/** Компонет начал отображаться на экране */
				onLoadStories();
			} else {
				/** Компонент прекратил отображение на экране */
			}
		});
	}

	render() {
		const {data, onClick, onOpenStories, styles} = this.props;

		return (
			<View safeArea style={styles.safeArea}>
				<View style={styles.mainContainer}>
					<StoryList data={data} onOpenStories={onOpenStories} />
					<View style={styles.contentContainer}>
						<Text onPress={onClick} style={[styles.textScreen, {fontSize: 45}]}>
							PlaygroundScreen
						</Text>
					</View>
				</View>
			</View>
		);
	}
}

export default BindComponent(Screen, {style: Styles, statusBar: 'light'});
