import React from 'react';
import Styles from './styles';
import {BindComponent} from '../../../library';
import {traking} from '../../navigation';

export default class Screen extends React.PureComponent {
	constructor(props) {
		super(props);
		BindComponent(this, {
			styles: Styles,
			statusBar: 'hide-tr',
		});
	}

	componentDidMount() {
		const {props} = this;
		const {onInit} = props;
		onInit(this);
		traking();
	}

	render() {
		return null;
	}
}
