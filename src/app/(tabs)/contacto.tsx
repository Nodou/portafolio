import * as WebBrowser from 'expo-web-browser';
import { Linking, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from '../../components/Boton';
import { Card } from '../../components/Card';
import { perfil } from '../../data/portfolio';
import { colors, spacing } from '../../theme';

export default function ContactoScreen() {
  const enviarEmail = () => {
    Linking.openURL(`mailto:${perfil.email}`);
  };

  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.titulo}>Contacto</Text>
        <Text style={styles.texto}>Forma de contacto via gmail</Text>

        <Card>
          <Pressable
            onPress={enviarEmail}
            style={({ pressed }) => [styles.fila, pressed && { opacity: 0.6 }]}
            accessibilityRole="link"
            accessibilityLabel={`Email: ${perfil.email}`}
          >
            <Text style={styles.email}>{perfil.email}</Text>
          </Pressable>
        </Card>

        <View style={styles.botones}>
          <Boton titulo="Enviar un email" onPress={enviarEmail} />
          <Boton
            titulo="Descargar mi CV"
            variante="secundario"
            onPress={() => WebBrowser.openBrowserAsync(perfil.cvUrl)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, paddingBottom: spacing.xl },
  titulo: { fontSize: 20, fontWeight: 'bold', color: colors.text, marginBottom: spacing.sm },
  texto: { fontSize: 15, color: colors.text, marginBottom: spacing.md },
  fila: { paddingVertical: 4 },
  email: { fontSize: 15, fontWeight: '600', color: colors.primary, textDecorationLine: 'underline' },
  botones: { gap: spacing.sm, marginTop: spacing.sm },
});
