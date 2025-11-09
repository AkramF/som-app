import { Tabs } from 'expo-router';
import { BookOpen, Info, TestTube } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#ee1b21',
        tabBarInactiveTintColor: '#8b7365',
        tabBarStyle: {
          backgroundColor: '#1f1b18',
          borderTopColor: '#3d3530',
        },
        headerStyle: {
          backgroundColor: '#ee1b21',
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontWeight: '600',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Documents',
          tabBarIcon: ({ size, color }) => (
            <BookOpen size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="demo"
        options={{
          title: 'Démo',
          tabBarIcon: ({ size, color }) => <TestTube size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'À propos',
          tabBarIcon: ({ size, color }) => <Info size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}
