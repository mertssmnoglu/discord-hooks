import {
  EmbedAuthor,
  EmbedFields,
  EmbedFooter,
  EmbedImage,
  EmbedProvider,
  EmbedThumbnail,
  EmbedVideo,
  EmbedColors,
} from './EmbedOptions'

type Embed = {
  title?: string
  type?: 'rich'
  description?: string
  url?: string
  timestamp?: Date
  color?: number | EmbedColors
  footer?: EmbedFooter
  image?: EmbedImage
  thumbnail?: EmbedThumbnail
  video?: EmbedVideo
  provider?: EmbedProvider
  author?: EmbedAuthor
  fields?: EmbedFields[]
}

export default Embed
