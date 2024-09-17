import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import logo from './assets/logonet.png'; // Substitua pelo caminho da sua logo
import Dev from './assets/desenvolvimento-web.png';
import Qa from './assets/qa.png';
import Ad from './assets/analista.png';
import Ux from './assets/ux.png';
import Desc from './assets/descubra.png';
import Chat from './assets/bate-papo.png';
import Loja from './assets/loja.png';

// Você pode instalar a fonte "Roboto" ou qualquer outra fonte chamativa via expo-font ou pelo projeto diretamente.
const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>TI</Text>
        <Text style={styles.titleSub}>COMUNICA</Text>
      </View>
      <Text style={styles.descricao}>Aqui você consegue se conectar com diversos estudantes e profissionais do mundo TECH</Text>

      <View style={styles.iconsContainer}>
        <View style={styles.iconBox}>
          <Image source={Dev} style={styles.iconImage} />
          <Text style={styles.iconLabel}>DESENVOLVEDORES</Text>
        </View>

        <View style={styles.iconBox}>
          <Image source={Ux} style={styles.iconImage} />
          <Text style={styles.iconLabel}>DESIGNERS</Text>
        </View>

        <View style={styles.iconBox}>
          <Image source={Ad} style={styles.iconImage} />
          <Text style={styles.iconLabel}>ANALISTA DE DADOS</Text>
        </View>

        <View style={styles.iconBox}>
          <Image source={Qa} style={styles.iconImage} />
          <Text style={styles.iconLabel}>QA</Text>
        </View>
      </View>

      <View style={styles.footer}>
        <View style={styles.footerItem}>
          <Image source={Desc} style={styles.footerIcon} />
          <Text style={styles.footerLabel}>Descubra</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={Chat} style={styles.footerIcon} />
          <Text style={styles.footerLabel}>Chats</Text>
        </View>
        <View style={styles.footerItem}>
          <Image source={Loja} style={styles.footerIcon} />
          <Text style={styles.footerLabel}>Loja</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1ff72',
    justifyContent: 'flex-start', // Ajustado para alinhar o conteúdo no topo
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginTop: 30, // Subi a logo para mais perto do topo
    marginBottom: 10,
  },
  titleContainer: {
    alignItems: 'center',
    marginTop: 10, // Ajustado para subir o nome
    marginBottom: 20,
  },
  title: {
    fontSize: 70, // Aumentado o tamanho da fonte
    color: '#8e2de2', // Roxo
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto', // Fonte mais chamativa, você pode ajustar conforme necessário
    marginBottom: -40, // Ajusta o espaço entre "TI" e "COMUNICA"
  },
  titleSub: {
    fontSize: 70, // Aumentado o tamanho da fonte
    color: '#4a00e0', // Lilás
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Roboto', // Fonte mais chamativa
  },
  descricao: {
    color: 'purple',
    fontSize: 15,
    textAlign: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
  },
  iconsContainer: {
    marginTop: 20,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  iconImage: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    borderWidth: 4,
    borderColor: '#6a0dad', // Roxo mais forte
    borderRadius: 40,
    padding: 10,
    marginRight: 15,
  },
  iconLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  footerLabel: {
    fontSize: 18,
  },
});

export default App;