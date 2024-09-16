import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, FlatList, StyleSheet } from 'react-native';

const DropdownExample = () => {
  const [isVisible, setIsVisible] = useState(false); // To toggle dropdown
  const [selectedItem, setSelectedItem] = useState(null); // To hold the selected item

  const data = [
    { id: '1', label: 'JavaScript' },
    { id: '2', label: 'Python' },
    { id: '3', label: 'Java' },
  ];

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsVisible(false); // Hide dropdown when an item is selected
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select a Programming Language:</Text>

      {/* Trigger to open dropdown */}
      <TouchableOpacity style={styles.dropdownButton} onPress={() => setIsVisible(true)}>
        <Text style={styles.dropdownButtonText}>
          {selectedItem ? selectedItem.label : 'Choose an option'}
        </Text>
      </TouchableOpacity>

      {/* Dropdown modal */}
      <Modal visible={isVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.dropdown}>
            <FlatList
              data={data}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.item}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.itemText}>{item.label}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </View>
      </Modal>

      {/* Render the selected item */}
      {selectedItem && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultText}>You selected: {selectedItem.label}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  dropdownButton: {
    width: '80%',
    padding: 10,
    backgroundColor: '#007bff',
    borderRadius: 5,
  },
  dropdownButtonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // To dim the background
  },
  dropdown: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 16,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default DropdownExample;
