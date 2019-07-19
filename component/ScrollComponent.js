import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Dimensions,
  ScrollView
} from 'react-native';

export default class HZScroll extends Component {
  state = {};
  ScrollingView = item => {
    return this.props.components(item);
  };
  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        collapsable={false}
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            flex: 1
          }}
        >
          <FlatList
            {...this.props}
            style={styles.flatview}
            ref={ref => {
              this.infListRef = ref;
            }}
            onContentSizeChange={(w, h) => (this.contentHeight = h)}
            onLayout={ev =>
              (this.scrollViewHeight = ev.nativeEvent.layout.height)
            }
            pagingEnabled={true}
            data={this.props.data}
            horizontal={true}
            collapsable={false}
            renderItem={({ item, i }) => (
              <ScrollView
                key={i}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={styles.flatview}
              >
                {this.ScrollingView(item)}
              </ScrollView>
            )}
          />
        </View>
      </View>
    );
  }
}
