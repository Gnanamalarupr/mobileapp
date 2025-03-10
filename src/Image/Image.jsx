import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Modal, Alert, ScrollView } from "react-native";
import styles from "./ImageStyles"; // Import styles

const products = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: "Rs 2499.99",
    image: "https://m.media-amazon.com/images/I/61bWBiusILL.jpg",
    description: "High-quality wireless earbuds with noise cancellation",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: "Rs 1999.99",
    image: "https://watchfactory.in/cdn/shop/products/12.1_f5249a33-25f0-47b2-a90f-570ab8a9f23c.jpg?v=1711788825",
    description: "Advanced smartwatch with health tracking features",
  },
];

const Img = ({ darkMode }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  const handleAddToCart = () => {
    setModalVisible(false);
    setTimeout(() => {
      Alert.alert("Added to Cart");
    }, 200);
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollView}>
      <View style={styles.imageRow}>
        {products.map((item) => (
          <TouchableOpacity key={item.id} onPress={() => openModal(item)}>
            <View style={[styles.card, darkMode && styles.darkCard]}>
              <View style={styles.imageContainer}>
                <Image source={{ uri: item.image }} style={styles.image} />
              </View>
              <View style={styles.textContainer}>
                <Text style={[styles.description, darkMode && styles.darkText]}>{item.name}</Text>
                <Text style={[styles.price, darkMode && styles.darkText]}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Modal for Product Details */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={[styles.modalContainer, darkMode && styles.darkModal]}>
          <View style={[styles.modalContent, darkMode && styles.darkModalContent]}>
            {selectedItem && (
              <>
                <Image source={{ uri: selectedItem.image }} style={styles.modalImage} />
                <Text style={[styles.modalTitle, darkMode && styles.darkText]}>{selectedItem.name}</Text>
                <Text style={[styles.modalDescription, darkMode && styles.darkText]}>{selectedItem.description}</Text>
                <Text style={[styles.modalPrice, darkMode && styles.darkText]}>{selectedItem.price}</Text>

                {/* Buttons: Add to Cart & Close */}
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.addToCartButton]}
                    onPress={handleAddToCart}
                  >
                    <Text style={styles.modalButtonText}>Add to Cart</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalButtonText}>Close</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

export default Img;
