import { ActivityIndicator, View } from 'react-native'
import { styles } from './styles'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.loadIndicator} />
    </View>
  )
}
