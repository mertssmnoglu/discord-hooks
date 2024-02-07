import Embed from './types/Embed'
import { EmbedFields } from './types/EmbedOptions'

function embedLimitCheck(embed: Embed) {
  if (embed.title && embed.title.length > 256)
    throw new Error('Embed title cannot be longer than 256 characters')
  else if (embed.description && embed.description.length > 4096)
    throw new Error('Embed description can not be longer than 4096 characters')

  const embedLimit = 6000
  let sumLength = 0

  if (embed.title) sumLength += embed.title.length
  if (embed.description) sumLength += embed.description.length
  if (embed.footer?.text) sumLength += embed.footer.text.length
  if (embed.author?.name) sumLength += embed.author.name.length

  sumLength += embedFieldsLimitCheck(embed.fields || [])

  return sumLength <= embedLimit
}

function embedFieldsLimitCheck(fields: EmbedFields[]) {
  const fieldsLimit = 25
  let sumLength = 0
  if (fields.length > fieldsLimit) throw new Error('Embed fields cannot be more than 25')

  for (const field of fields) {
    if (field.name.length > 256)
      throw new Error('Embed field name cannot be longer than 256 characters')
    else if (field.value.length > 1024)
      throw new Error('Embed field value cannot be longer than 1024 characters')

    sumLength += field.name.length + field.value.length
  }

  return sumLength
}

export { embedLimitCheck, embedFieldsLimitCheck }
