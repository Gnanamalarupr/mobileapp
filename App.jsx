import React from "react";
import { View, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import Img from "./src/Image/Image";
import Contain from "./src/Container/Container";
import TextBox from "./src/InputBox/InputBox";
import FlatListComponent from "./src/Sectionlist/Section"; 
import Mode from "./src/Mode/Mode";
const App = () => {
return (
<SafeAreaView style={styles.safeArea}> 
<ScrollView contentContainerStyle={styles.scrollView}> 
<View style={styles.container}> 
<Contain />
<Mode />
<TextBox />
<Img />
<FlatListComponent />
</View>
</ScrollView>
</SafeAreaView>
);
};
const styles = StyleSheet.create({
safeArea: {
flex: 1, // Ensures the SafeAreaView takes full height
},
scrollView: {
flexGrow: 1, 
paddingBottom: 50, // Ensures no content gets cut off at the bottom
},
container: {
alignItems: "center",
width: "100%",
paddingVertical: 20,
// Ensures spacing for scrolling
},
});
export default App;
