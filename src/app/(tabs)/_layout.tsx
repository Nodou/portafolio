import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { colors } from '../../theme';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#777777',
        tabBarStyle: {
          height: 58,
          paddingBottom: 6,
          paddingTop: 6,
          backgroundColor: '#FFFFFF',
          borderTopColor: colors.border,
        },
        tabBarLabelStyle: { fontSize: 11 },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" color={String(color)} size={size} />,
        }}
      />
      <Tabs.Screen
        name="estudios"
        options={{
          title: 'Estudios',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school" color={String(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="habilidades"
        options={{
          title: 'Habilidades',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="construct" color={String(color)} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="contacto"
        options={{
          title: 'Contacto',
          tabBarIcon: ({ color, size }) => <Ionicons name="mail" color={String(color)} size={size} />,
        }}
      />
    </Tabs>
  );
}
