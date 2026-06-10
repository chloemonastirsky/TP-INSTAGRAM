export type Story = {
  id: string
  username: string
  avatarUrl: string
  seen: boolean
}

export type StoriesProps = {
  stories: Story[]
}