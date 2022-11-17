import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Menu: undefined;
  Classic: undefined;
  Puzzle: { id: string };
  Solve: undefined;
  Generator: undefined;
};

export type Props = NativeStackScreenProps<RootStackParamList>;

