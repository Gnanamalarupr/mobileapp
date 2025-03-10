import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
container: {
flex: 1,
backgroundColor: "#f5f5f5",
padding: 10,
width:400,
},
sectionHeader: {
backgroundColor: "#6200EA", // Purple color similar to the image
color: "white",
fontSize: 18,
fontWeight: "bold",
paddingVertical: 10,
paddingHorizontal: 15,
marginVertical: 5,
borderRadius: 5,
overflow: "hidden",
},
item: {
flexDirection: "row",
backgroundColor: "#fff",
padding: 10,
marginVertical: 5,
borderRadius: 8,
shadowColor: "#000",
shadowOpacity: 0.1,
shadowOffset: { width: 0, height: 2 },
shadowRadius: 4,
elevation: 3,
},
image: {
width: 100,
height: 100,
borderRadius: 8,
marginRight: 10,
},
details: {
flex: 1,
justifyContent: "center",
},
name: {
fontSize: 18,
fontWeight: "bold",
color: "#000",
},
price: {
fontSize: 16,
color: "purple",
marginVertical: 5,
fontWeight:"bold",
},
button: {
backgroundColor: "#6200EA",
padding: 8,
borderRadius: 5,
alignItems: "center",
marginTop: 5,
},
buttonText: {
color: "white",
fontWeight: "bold",
},
modalOverlay: {
flex: 1,
backgroundColor: "rgba(0, 0, 0, 0.5)",
justifyContent: "center",
alignItems: "center",
},
modalContent: {
width: 300,
backgroundColor: "#fff",
padding: 20,
borderRadius: 10,
alignItems: "center",
},
modalImage: {
width: 150,
height: 150,
borderRadius: 10,
marginBottom: 10,
},
modalTitle: {
fontSize: 20,
fontWeight: "bold",
color: "#000",
},
modalDescription: {
fontSize: 16,
textAlign: "center",
marginVertical: 5,
color: "#555",
},
modalPrice: {
fontSize: 16,
fontWeight: "bold",
color: "purple",
marginVertical: 5,
},
modalButtons: {
flexDirection: "row",
marginTop: 10,
},
modalButton: {
flex: 1,
padding: 10,
borderRadius: 5,
alignItems: "center",
marginHorizontal: 5,
},
addToCartButton: {
backgroundColor: "#6200EA",
},
closeButton: {
backgroundColor: "green",
},
modalButtonText: {
color: "#fff",
fontWeight: "bold",
},
});
export default styles;

