import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function TabLayout() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backgroundContainer}>
        <Image
          source={require('../../assets/images/background.png')}
          style={styles.backgroundImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <View style={styles.tabBar}>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={require('../../assets/images/microsoft-edge.png')}
            style={styles.icon}
            resizeMode="contain" // Resize image while maintaining aspect ratio
          />
          <Text 
          style={styles.tabText}
          >
            Microsoft Edge
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={require('../../assets/images/mozilla-firefox.png')}
            style={styles.icon}
            resizeMode="contain" // Resize image while maintaining aspect ratio
            height={100} // Allow image to resize
          />
          <Text 
          style={styles.tabText}
          >
            Mozilla Firefox
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tab}>
          <Image
            source={require('../../assets/images/yandex-browser.png')}
            style={styles.icon}
            resizeMode="contain" // Resize image while maintaining aspect ratio
            height={100} // Allow image to resize
          />
          <Text 
          style={styles.tabText}
          >
            Yandex Browser
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
    marginTop: 30
  },
  backgroundImage: {
    width: '90%',
    height: '90%',
  },
  tabBar: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '2%',
    marginRight: '2%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 1,
    height: '90%',
    marginLeft: '2%',
    marginRight: '2%',
    marginBottom: '1%',
    borderColor: '#333333',
    backgroundColor: '#181818',
  },
  icon: {
    width: '70%',
    height: '70%',
  },
  tabText: {
    fontSize: 14,
    color: '#EFEFEF',
    marginTop: 8,
    marginBottom: 8,
    marginLeft: 8,
    marginRight: 8,
    textAlign: 'center',
    lineHeight: 20,
  },

  backgroundContainer:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    height: '100%',
  }
});