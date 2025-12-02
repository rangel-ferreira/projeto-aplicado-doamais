import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Alert, TouchableOpacity, SafeAreaView } from 'react-native';
// Caminho corrigido para buscar a config um nível acima
import { auth, db } from '../firebaseConfig'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';

export default function App() {
  // ADICIONAMOS <any> PARA O TYPESCRIPT PARAR DE RECLAMAR
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState<any>(null);
  const [novoItem, setNovoItem] = useState('');
  const [itens, setItens] = useState<any[]>([]);
  const [isLogin, setIsLogin] = useState(true); 

  // Monitorar Autenticação
  useEffect(() => {
    if (!auth) return;

    // @ts-ignore
    const unsubscribe = auth.onAuthStateChanged((u: any) => {
      setUser(u);
    });
    return unsubscribe;
  }, []);

  // Monitorar Banco de Dados
  useEffect(() => {
    if (!db) return;

    const q = query(collection(db, "doacoes"), orderBy("data", "desc"));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const lista = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setItens(lista);
    }, (error: any) => { // Adicionado :any aqui
      console.log("Erro ao ler banco:", error);
    });

    return unsubscribe;
  }, []);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, senha);
      } else {
        await createUserWithEmailAndPassword(auth, email, senha);
      }
    } catch (error: any) { // Adicionado :any aqui
      Alert.alert("Erro na Autenticação", error.message);
    }
  };

  const doarItem = async () => {
    if (novoItem.trim() === '') return;
    try {
      await addDoc(collection(db, "doacoes"), {
        nome: novoItem,
        doador: user?.email, // Adicionado ? para segurança
        data: new Date().toISOString()
      });
      setNovoItem('');
      Alert.alert("Sucesso", "Item publicado!");
    } catch (e: any) { // Adicionado :any aqui
      Alert.alert("Erro", "Falha ao salvar: " + e.message);
    }
  };

  const logout = () => {
    auth.signOut();
  };

  if (!user) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>DoaMais - {isLogin ? 'Entrar' : 'Cadastrar'}</Text>
        <TextInput 
          placeholder="Email" 
          value={email} 
          onChangeText={setEmail} 
          style={styles.input} 
          autoCapitalize="none"
        />
        <TextInput 
          placeholder="Senha" 
          value={senha} 
          onChangeText={setSenha} 
          style={styles.input} 
          secureTextEntry 
        />
        <Button title={isLogin ? "ACESSAR" : "CRIAR CONTA"} onPress={handleAuth} />
        <TouchableOpacity onPress={() => setIsLogin(!isLogin)} style={{marginTop: 20}}>
          <Text style={styles.link}>
            {isLogin ? "Não tem conta? Crie aqui" : "Já tem conta? Faça login"}
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>Olá, {user?.email}</Text>
        <Button title="Sair" onPress={logout} color="red" />
      </View>

      <View style={styles.formArea}>
        <Text style={styles.subtitle}>Quero doar um item:</Text>
        <TextInput 
          placeholder="Ex: Cadeira usada" 
          value={novoItem} 
          onChangeText={setNovoItem} 
          style={styles.input} 
        />
        <Button title="PUBLICAR" onPress={doarItem} color="green" />
      </View>
      
      <Text style={styles.listTitle}>Disponíveis:</Text>
      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nome}</Text>
            <Text style={styles.cardSub}>Doador: {item.doador}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, marginTop: 10 },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#333', marginTop: 50 },
  welcome: { fontSize: 14, fontWeight: 'bold', maxWidth: '70%' },
  subtitle: { fontSize: 18, marginBottom: 10 },
  listTitle: { fontSize: 22, fontWeight: 'bold', marginTop: 20, marginBottom: 10, color: '#444' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', padding: 12, marginBottom: 15, borderRadius: 8 },
  link: { color: 'blue', textAlign: 'center' },
  formArea: { backgroundColor: '#fff', padding: 15, borderRadius: 10, elevation: 2 },
  card: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, elevation: 1, borderLeftWidth: 5, borderLeftColor: 'green' },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardSub: { fontSize: 12, color: '#666', marginTop: 5 }
});