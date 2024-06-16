import { StackScreenProps } from '@react-navigation/stack';
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

interface Props extends StackScreenProps<any, any> {}


export const CounterScreen = ({navigation}:Props) => {
  const [contador, setContador] = useState<number>(0);
  const [botonPresionado, setBotonPresionado] = useState<boolean>(false);

  // Referencia para el intervalo del contador
  const intervaloRef = useRef<NodeJS.Timeout | null>(null);

  // Función para sumar al contador
  const sumarContador = () => {
    setContador((prevContador) => prevContador + 1);
    setBotonPresionado(true);
  };

  // Función para reiniciar el contador si se mantiene presionado el botón
  const reiniciarContador = () => {
    setContador(0);
    setBotonPresionado(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textoContador}>{contador}</Text>
      <TouchableOpacity
        style={botonPresionado ? styles.botonPresionado : styles.boton}
        onPress={sumarContador}
        onLongPress={reiniciarContador}
        onPressOut={() => setBotonPresionado(false)}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  textoContador: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  boton: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 10,
  },
  botonPresionado: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 10,
  },
  textoBoton: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});