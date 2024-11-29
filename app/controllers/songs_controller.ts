import type { HttpContext } from '@adonisjs/core/http'
import Song from '#models/song'

export default class SongsController {

  async index({response}: HttpContext) 
  {
    const songs = await Song.all()
    return response.ok({message: 'Canciones obtenidas', data: songs})
  }

  async store({ request, response }: HttpContext) 
  {
    const song = new Song()
    const { nombre, album, autor } = request.only(['nombre', 'album', 'autor']);
    song.nombre = nombre;
    song.album = album;
    song.autor = autor;
    await song.save()
    return response.created({message: 'Canción agregada', data: song})
  }

  async update({ params, request, response }: HttpContext) 
  {
    const song = await Song.findOrFail(params.id)
    const { nombre, album, autor } = request.only(['nombre', 'album', 'autor']);
    song.nombre = nombre;
    song.album = album;
    song.autor = autor;
    await song.save()
    return response.ok({message: 'Canción actualizada', data: song})
  }

  async destroy({ params, response }: HttpContext) 
  {
    const song = await Song.findOrFail(params.id)
    await song.delete()
    return response.ok({message: 'Canción eliminada', data: null})	
  }
}