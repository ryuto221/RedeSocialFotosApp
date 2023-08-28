import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App'; // Importe o componente App
import { name as appName } from './app.json';

// Renderiza o componente raiz do aplicativo
AppRegistry.registerComponent(appName, () => App);