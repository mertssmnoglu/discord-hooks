export type EmbedVideo = {
  url?: string
  proxy_url?: string
  height?: number
  width?: number
}

export type EmbedImage = {
  url: string
  proxy_url?: string
  height?: number
  width?: number
}

export type EmbedFields = {
  name: string
  value: string
  inline?: boolean
}

export type EmbedFooter = {
  text: string
  icon_url?: string
  proxy_icon_url?: string
}

export type EmbedThumbnail = {
  url: string
  proxy_url?: string
  height?: number
  width?: number
}

export type EmbedAuthor = {
  name: string
  url?: string
  icon_url?: string
  proxy_icon_url?: string
}

export type EmbedProvider = {
  name?: string
  url?: string
}
