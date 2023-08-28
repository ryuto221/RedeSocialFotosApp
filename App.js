import React from 'react';
import { View } from 'react-native';
import ImageUploadComponent from './ImageUploadComponent';

const App = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ImageUploadComponent />
        </View>
    );
};

export default App;
