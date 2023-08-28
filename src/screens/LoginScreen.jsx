import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Usuário logado com sucesso
        const user = userCredential.user;
        // Você pode realizar ações adicionais após o login
        navigation.navigate('Feed'); // Navegar para a tela de feed após o login
      })
      .catch((error) => {
        // Tratar erros de login
        const errorCode = error.code;
        const errorMessage = error.message;
        // Exibir uma mensagem de erro ou lidar com o erro de outra forma
      });
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={{ marginBottom: 10 }}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={{ marginBottom: 10 }}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;