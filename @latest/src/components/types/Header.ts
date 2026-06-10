export type HeaderProps = {
  avatarUrl?: string
  onProfileClick?: () => void
  onCreateClick?: () => void
  onHomeClick?: () => void
  onExploreClick?: () => void
  onNotificationsClick?: () => void
  onMessagesClick?: () => void
  hasNotification?: boolean   // para el puntito rojo en la campana
}