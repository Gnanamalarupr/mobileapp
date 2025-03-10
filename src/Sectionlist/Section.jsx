import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import styles from "./SectionStyles"; // Import styles from a separate file

const SECTIONS = [
  {
    title: "Electronics",
    data: [
      {
        id: "1",
        name: "Wireless Headphones",
        price: "Rs 129.99",
        image: "https://m.media-amazon.com/images/I/61bWBiusILL.jpg",
        description: "Noise-cancelling wireless headphones",
      },
      {
        id: "2",
        name: "Smart Watch",
        price: "Rs 199.99",
        image:
          "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/25074192/2023/9/21/8b00f6f6-83d8-4811-bb31-082135319c1d1695280153879-Fire-Boltt-Unisex-Smart-Watches-831695280153287-1.jpg",
        description: "Advanced smart watch with fitness tracking",
      },
    ],
  },
  {
    title: "Fashion",
    data: [
      {
        id: "3",
        name: "Leather Jacket",
        price: "Rs 249.99",
        image:
          "https://assets.ajio.com/medias/sys_master/root/20231117/cOge/65578450ddf77915198c131d/-1117Wx1400H-469457003-brown-MODEL.jpg",
        description: "Premium leather jacket for all seasons",
      },
      {
        id: "4",
        name: "Running Shoes",
        price: "Rs 89.99",
        image:
          "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/01190add819e47c8a092653b9fd29bac_9366/Runfalcon_5_Running_Shoes_Black_IH7758_HM1.jpg",
        description: "Lightweight running shoes for all-day comfort",
      },
    ],
  },
];

const placeholderImage = "https://via.placeholder.com/100";

// Formatting data for FlatList to include section headers
const formattedData = SECTIONS.flatMap((section) => [
  { type: "header", title: section.title },
  ...section.data.map((item) => ({ ...item, type: "item" })),
]);

const FlatListComponent = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const openModal = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={formattedData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) =>
          item.type === "header" ? (
            <Text style={styles.sectionHeader}>{item.title}</Text>
          ) : (
            <View style={styles.item}>
              <TouchableOpacity onPress={() => openModal(item)}>
                <Image
                  source={{ uri: item.image || placeholderImage }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={styles.details}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => openModal(item)}
                >
                  <Text style={styles.buttonText}>ADD TO CART</Text>
                </TouchableOpacity>
              </View>
            </View>
          )
        }
      />

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {selectedItem && (
              <>
                <Image
                  source={{ uri: selectedItem.image || placeholderImage }}
                  style={styles.modalImage}
                />
                <Text style={styles.modalTitle}>{selectedItem.name}</Text>
                <Text style={styles.modalDescription}>
                  {selectedItem.description}
                </Text>
                <Text style={styles.modalPrice}>{selectedItem.price}</Text>
                <View style={styles.modalButtons}>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.addToCartButton]}
                    onPress={() => {
                      Alert.alert(
                        "Success",
                        `${selectedItem.name} added to cart`
                      );
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.modalButtonText}>ADD TO CART</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.modalButton, styles.closeButton]}
                    onPress={() => setModalVisible(false)}
                  >
                    <Text style={styles.modalButtonText}>CLOSE</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default FlatListComponent;
