import React from 'react';
import { Button, TouchableWithoutFeedback, View } from 'react-native';
import Text from './Text';
import TextInput from './TextInput'
import FormikTextInput from './FormikTextInput'

const SignIn = () => {
  return (
    <View>
      <Text>Login</Text>
      <TextInput 
        placeholder="Username"
      />
      <TextInput 
        placeholder="Password"
      />
      <TouchableWithoutFeedback>
        <Button title={`Login`} />
      </TouchableWithoutFeedback>
    </View>
  );
};

export default SignIn;