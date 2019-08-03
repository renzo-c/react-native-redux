import React from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  counterIncrement,
  counterDecrement,
  counterClear,
  counterSet,
  pressButton,
} from './actions';

const App = props => {
  console.log("props", props);
  const {
    count,
    counterClear,
    counterDecrement,
    counterIncrement,
    counterSet,
    pressButton,
    hello,
  } = props;
  return (
    <View style={styles.container}>
      <TextInput
        value={count.toString()}
        onChangeText={counterSet}
        style={{ width: 40, height: 40, borderWidth: 1 }}
      />
      <View style={{ flexDirection: 'row' }}>
        <Button title="+" onPress={counterIncrement} />
        <Text>{count}</Text>
        <Button title="-" onPress={counterDecrement} />
      </View>
      <Button title="clear" onPress={counterClear} />
      <Text>{hello.helloText}</Text>
      <Text>Do you want to press the button? {hello.buttonPressed.toString()}</Text>
      <Button title="Enjoy the magic!" onPress={pressButton} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
});

const mapStateToProps = state => {
  return { count: state.counter, hello: state.hello };
};

export default connect(
  mapStateToProps,
  { counterIncrement, counterDecrement, counterClear, counterSet, pressButton }
)(App);
