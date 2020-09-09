import React from 'react';

import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import SpecialInput from './src/component/Input';
import Button from './src/component/Button';


const SignIn = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.ViewLogo]}>
        <Image style={styles.logo} source={require('./logo.png')} />
      </View>
      <SpecialInput placeHolder={'Email adresini giriniz'} />
      <SpecialInput placeHolder={'Şifrenizi giriniz'} />
      <View style={styles.space} ></View>
      <View style={[styles.commonfl1]}>
        <Text style={styles.pass}>şifremi unuttum</Text>
      </View>
      <Button text={"Giriş Yap"}></Button>
      <View style={[styles.commonfl1, { justifyContent: 'center' }]}>
        <Text
          style={{ color: '#515C6F', fontWeight: 'bold', alignSelf: 'center' }}>
          Veya
        </Text>
      </View>
      <View style={[styles.ViewLoginAnother]}>
        <TouchableOpacity style={styles.differentButton}>
          <Image
            style={styles.differentButtonImage}
            source={require('./g.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.differentButton}>
          <Image
            style={styles.differentButtonImage}
            source={require('./f.png')}
          />
        </TouchableOpacity>
      </View>
      <View style={[styles.commonfl1, styles.sozlesme]}>
        <TouchableOpacity style={[styles.loginButton]}>
          <Text style={styles.loginButtonText}>
            üye değil misiniz o halde kayıt ol
          </Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.commonfl1, styles.sozlesme]}>
        <Text>gizlili sözleşmesini onaylıyorum</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  ViewLogo: {
    flex: 4.5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: { width: 300, height: 250 },
  space: {
    flex: 2,
  },
  commonfl1: { flex: 1 },
  pass: { alignSelf: 'flex-end', marginHorizontal: 30, color: '#515C6F' },
  sozlesme: { justifyContent: 'center', alignItems: 'center' },
  loginButtonText: { color: '#FD7E77', fontSize: 16, fontWeight: 'bold' },
  differentButton: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'rgba(112, 112, 112, 0.2)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  ViewLoginAnother: {
    flex: 1.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default SignIn;