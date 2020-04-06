import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

export const Close = ({ onPress }) => {
	return (
		<TouchableOpacity activeOpacity={1} onPress={onPress} style={CloseStyles.closeButton}>
			<View style={[ CloseStyles.iconLine, { transform: [ { rotateZ: '45deg' } ] } ]} />
			<View style={[ CloseStyles.iconLine, { transform: [ { rotateZ: '135deg' } ] } ]} />
		</TouchableOpacity>
	);
};

const CloseStyles = StyleSheet.create({
	closeButton: {
		width: 20,
		height: 20,
		borderRadius: 0,
		position: 'absolute',
		right: 20,
		top: 7,
		backgroundColor: 'white',
		zIndex: 3,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	iconLine: {
		position: 'absolute',
		width: 18,
		height: 2,
		borderRadius: 2,
		backgroundColor: '#eee'
	}
});
