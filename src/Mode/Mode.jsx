import { Switch, View, StyleSheet } from 'react-native';
import React, { useState } from 'react';
const Mode = () => {
const [isEnabled, setIsEnabled] = useState(false);
return (
<View style={styles.container}>
<Switch
value={isEnabled}
onValueChange={setIsEnabled}
trackColor={{ false: '#d3d3d3', true: 'blue' }}
thumbColor={'#f4f3f4'}
ios_backgroundColor="transparent"
/>
</View>
);
};
const styles = StyleSheet.create({
container: {
position: 'absolute',
top: 20, 
right: 20, 
zIndex: 10, 
},
});
export default Mode;


