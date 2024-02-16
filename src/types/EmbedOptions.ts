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

export enum EmbedColors {
  'Green' = 0x00ff00,
  'Red' = 0xff0000,
  'Blue' = 0x0000ff,
  'Yellow' = 0xffff00,
  'Orange' = 0xffa500,
  'Purple' = 0x800080,
  'Pink' = 0xffc0cb,
  'Black' = 0x000000,
  'White' = 0xffffff,
  'Gray' = 0x808080,
  'Brown' = 0x964b00,
  'Gold' = 0xffd700,
  'Silver' = 0xc0c0c0,
}
