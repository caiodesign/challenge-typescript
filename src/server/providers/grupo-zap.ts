import CONST from 'config/constants'
import axios from 'axios'

export async function getGrupoZapProperties() {
  return await axios.get(CONST.API_URL)
}
