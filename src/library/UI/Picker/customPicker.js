import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, ListView, YellowBox} from 'react-native';

export default class ModalPicker extends Component {
	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2,
		});
		this.state = {
			dataSource: ds.cloneWithRows(this.props.data),
			modalVisible: false,
		};
		YellowBox.ignoreWarnings(['ListView is deprecated']);
	}

	componentWillReceiveProps(nextProps) {
		if (this.state.dataSource != nextProps.dataSource) {
			this.setState({
				dataSource: this.state.dataSource.cloneWithRows(nextProps.data),
			});
		}
	}

	setModalVisible(visible) {
		this.setState({modalVisible: visible});
	}

	render() {
		// console.log('ModalPicker', this.props);
		return (
			<View
				style={{
					backgroundColor: 'transparent',
					flex: 1,
					position: 'absolute',
				}}>
				<Modal
					animationType="fade"
					transparent
					visible={this.state.modalVisible}
					onRequestClose={() => {
						this.setModalVisible(false);
					}}>
					<TouchableHighlight
						style={styles.container}
						onPress={() => this.setModalVisible(false)}
						underlayColor="#333333cc">
						<View>
							<ListView
								dataSource={this.state.dataSource}
								bounces={false}
								renderRow={(rowData, sectionID, rowID, higlightRow) => {
									return (
										<TouchableHighlight
											underlayColor="transparent"
											onPress={() => {
												this.setModalVisible(false);
												this.props.onValueChange(rowData, rowID);
											}}>
											{this.props.renderRow ? (
												this.props.renderRow(rowData, rowID)
											) : (
												<Text style={styles.itemText}>{rowData[this.props.label]}</Text>
											)}
										</TouchableHighlight>
									);
								}}
							/>
						</View>
					</TouchableHighlight>
				</Modal>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#333333cc',
		padding: 16,
	},
	itemText: {
		backgroundColor: '#fff',
		padding: 16,
		fontSize: 18,
		color: '#222',
		borderTopWidth: 1,
		borderColor: '#CCC',
	},
});
