import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Title } from 'react-native-paper';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Usuário registrado com sucesso
      const user = userCredential.user;
      // Você pode realizar ações adicionais, como salvar informações adicionais do usuário no Firestore
      navigation.navigate('Feed'); // Navegar para a tela de feed após o registro
    } catch (error) {
      // Tratar erros de registro
      const errorCode = error.code;
      const errorMessage = error.message;
      // Exibir uma mensagem de erro ou lidar com o erro de outra forma
      console.error('Erro ao registrar:', errorMessage);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Title>Registro</Title>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginVertical: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ marginVertical: 10 }}
      />
      <Button title="Registrar" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;