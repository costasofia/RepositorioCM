import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LocalizationContext from './../services/localization/LocalizationContext';

import { createStackNavigator } from '@react-navigation/stack';
import Mapa from './../pages/Mapa';
import Login from './../pages/Login';
import StackLista from './StackLista';
import ListagemP from './../pages/ListagemP';
import InserirP from './../pages/InserirP';
import DetalhesP from './../pages/DetalhesP';
import AtualizarP from './../pages/AtualizarP';
const Stack = createStackNavigator();

function StackLogin({ navigation }) {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="StackLista" component={StackLista}
                    options={{ title: 'App', headerShown: false, }} />
                <Stack.Screen name="Mapa" component={Mapa}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="ListagemP" component={ListagemP}
                    options={{ title: 'Lista de Pontos' }} />
                <Stack.Screen name="InserirP" component={InserirP}
                    options={{ headerShown: false, }} />
                <Stack.Screen name="DetalhesP" component={DetalhesP}
                    options={{ title: 'Detalhes' }} />
                <Stack.Screen name="AtualizarP" component={AtualizarP}
                    options={{ title: 'Atualizar Nota' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackLogin; 