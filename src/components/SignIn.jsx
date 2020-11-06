import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: 10,
  },
  input: {
    borderColor: '#999b9b',
    borderWidth: 1.5,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4b9ed4',
    borderColor: '#3887bd',
    borderWidth: 0,
    borderRadius: 5,
    padding: 10,
    marginTop: 10,
    marginLeft: 30,
    marginRight: 30,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
  }
  
})

const initialValues = {
  username: '',
  password: '',
}

const SignInForm = ({ onsubmit }) => {

  return (
    <View style={styles.flexContainer}>
      <FormikTextInput 
        style={styles.input} 
        name="username" 
        placeholder="Username:" 
      />
      <FormikTextInput 
        style={styles.input} 
        secureTextEntry 
        name="password" 
        placeholder="Password:" 
      />
      <TouchableWithoutFeedback>
        <View style={styles.button}>
          <Text style={styles.text} onPress={onsubmit}>Login</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
} 

const SignIn = () => {
  const onSubmit = (values) => {
    console.log('username: ', values.username)
    console.log('password: ', values.password)
  }

  return(
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ handleSubmit }) => <SignInForm onsubmit={handleSubmit} /> }
    </Formik>
  )
};

export default SignIn;