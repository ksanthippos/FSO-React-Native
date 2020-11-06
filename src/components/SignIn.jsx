import React from 'react';
import { Button, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import Text from './Text';
import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
  heading: {
    fontSize: 30,
  }
})

const initialValues = {
  username: '',
  password: '',
}

const SignInForm = ({ onsubmit }) => {
  return (
    <View>
      <Text style={styles.heading}>Login</Text>
      <FormikTextInput name="username" placeholder="Weight (kg)" />
      <FormikTextInput secureTextEntry name="password" placeholder="Height (m)" />
      <TouchableWithoutFeedback>
        <Button title={`Login`} onPress={onsubmit} />
      </TouchableWithoutFeedback>
    </View>
  );
} 

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('username: ', values.username)
    console.log('password: ', values.password);
  }

  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onsubmit={handleSubmit} /> }
    </Formik>
  )
};

export default SignIn;