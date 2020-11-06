import React from 'react';
import { StyleSheet } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    marginLeft: 20,
    color: '#d73a4a',
  },
  errorColor: {
    backgroundColor: '#d3caca',
    borderColor: '#8f2c0e',
    borderWidth: 1.5,
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  normalColor: {
    backgroundColor: '#ede1e1',
    borderColor: '#999b9b',
    borderWidth: 1.5,
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        onChangeText={value => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.errorColor : styles.normalColor}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;