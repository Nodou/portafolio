import { Image } from 'expo-image';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from '../../components/Boton';
import { perfil } from '../../data/portfolio';
import { colors, spacing } from '../../theme';

export default function InicioScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top']}>
      <ScrollView contentContainerStyle={styles.content}>
        <Image source={perfil.foto} style={styles.foto} contentFit="cover" />

        <Text style={styles.nombre}>{perfil.nombre}</Text>
        <Text style={styles.rol}>{perfil.rol}</Text>

        <Text style={styles.texto}>{perfil.presentacion}</Text>

        <Text style={styles.dato}>Escuela: {perfil.escuela}</Text>
        <Text style={styles.dato}>Año: {perfil.grado}</Text>

        <View style={styles.botones}>
          <Boton titulo="Ver mis estudios" onPress={() => router.push('/estudios')} />
          <Boton
            titulo="Enviar un email"
            onPress={() => WebBrowser.openBrowserAsync(`mailto:${perfil.email}`)}
          />
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
  content: { padding: spacing.lg, alignItems: 'center' },
  foto: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: spacing.md,
    backgroundColor: colors.chip,
  },
  nombre: { fontSize: 22, fontWeight: 'bold', color: colors.text },
  rol: { fontSize: 15, color: colors.primary, marginTop: 2 },
  texto: {
    fontSize: 15,
    lineHeight: 22,
    color: colors.text,
    marginTop: spacing.md,
    marginBottom: spacing.md,
  },
  dato: { fontSize: 14, color: colors.text, alignSelf: 'flex-start', marginBottom: 4 },
  botones: { alignSelf: 'stretch', gap: spacing.sm, marginTop: spacing.lg },
});
