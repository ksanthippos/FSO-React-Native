import React from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { Formik } from 'formik'
import FormikTextInput from './FormikTextInput'
import * as yup from 'yup';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 10,
    paddingRight:10,
  },
  button: {
    backgroundColor: '#4b9ed4',
    borderColor: '#3887bd',
    borderWidth: 0,
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
  },
  text: {
    color: '#ffffff',
    textAlign: 'center',
  }, 
})

const initialValues = {
  username: '',
  password: '',
}

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, 'Username length must be 3 or greater')
    .required('Username is required'),
  password: yup
    .string()
    .min(4, 'Password length must be 4 or greater')
    .required('Password is required'),
});

const SignInForm = ({ onsubmit }) => {

  return(
    <View style={styles.flexContainer}>
      <FormikTextInput 
        name="username" 
        placeholder="Username:" 
      />
      <FormikTextInput 
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
    <Formik 
      initialValues={initialValues} 
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignInForm onsubmit={handleSubmit} />}
    </Formik>
  )
};

export default SignIn;