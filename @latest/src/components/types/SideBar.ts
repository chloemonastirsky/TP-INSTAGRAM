export type SuggestedUser = {
  id: string
  username: string
  avatarUrl: string
  reason: string   // "Te sigue" | "Nuevo en Instagram"
}

export type SidebarProps = {
  currentUser: {
    username: string
    avatarUrl: string
    fullName: string
  }
  suggestions: SuggestedUser[]
}