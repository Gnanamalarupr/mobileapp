import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import styles from './InputBoxStyles'; // Ensure this file exists
const TextBox = () => {
const [text, setText] = useState(''); // Changed 'number' to 'text'
return (
<View style={styles.container}>
<TextInput
style={styles.input}
onChangeText={setText} // Updated function name
value={text} // Updated variable name
placeholder="Search products..."
keyboardType="default" // Changed from 'numeric' to 'default'
/>
</View>
);
};
export default TextBox;
