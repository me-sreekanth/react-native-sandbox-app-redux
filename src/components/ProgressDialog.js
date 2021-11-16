import React from 'react';
import {
  Modal,
  View,
  StyleSheet,
  Text,
  ActivityIndicator
} from 'react-native';

import { Card, } from 'react-native-paper';

const ProgressDialog = ({ visible }) => (
  <Modal
    transparent={true}
    animationType="fade"
    visible={visible}
  >

    <View style={styles.container}>
      <View style={styles.content}>

        {/* <Text style={styles.title}>Please Wait</Text> */}
        <View style={styles.loading}>
          <Card
            mode="outlined"
            elevation={10}
            style={{
              overflow: 'hidden',
              borderRadius: 10,
              padding: 32,
              zIndex: 1100
            }}>
            <View style={styles.loader}>
              <ActivityIndicator size="large" />
            </View>
            {/* <View style={styles.loadingContent}> */}
            {/* <Text>Loading</Text> */}
            {/* </View>  */}
          </Card>
        </View>

      </View>
    </View>
  </Modal>
);

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    flex: 1,
    backgroundColor: '#00000040',
    alignItems: 'center',
    justifyContent: 'center',

  },
  content: {
    borderRadius: 10,

    backgroundColor: 'white',
    overflow: 'hidden',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {

    flexDirection: 'row',
    alignItems: 'center',
  },
  loader: {

    // flex: 1,
  },
  loadingContent: {

    flex: 3,
    fontSize: 16,
    paddingHorizontal: 10,
  }
})

export default ProgressDialog;