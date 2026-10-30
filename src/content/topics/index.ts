// Cada matéria vive no próprio arquivo; este índice só junta tudo na ordem de exibição.
import { matematica } from './matematica'
import { fisica } from './fisica'
import { quimica } from './quimica'
import { biologia } from './biologia'
import { portugues } from './portugues'
import { literatura } from './literatura'
import { historia } from './historia'
import { geografia } from './geografia'
import { ingles } from './ingles'
import { filosofia } from './filosofia'
import { sociologia } from './sociologia'
import { enem } from './enem'
export type { Question, Topic } from './types'

export const allSubjects = ['Matemática', 'Física', 'Química', 'Biologia', 'Português', 'Literatura', 'História', 'Geografia', 'Inglês', 'Filosofia', 'Sociologia', 'ENEM e vestibulares']
export const topics = [...matematica, ...fisica, ...quimica, ...biologia, ...portugues, ...literatura, ...historia, ...geografia, ...ingles, ...filosofia, ...sociologia, ...enem]
