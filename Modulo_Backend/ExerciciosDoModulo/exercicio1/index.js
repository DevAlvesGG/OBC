import { createFile} from './CreateFile.js'
import { readFile } from './ReadFile.js'
import { updateFile } from './UpdateFile.js'
import { deleteFile } from './DeleteFile.js'

createFile("Meu primeiro arquivo criado com NodeJS")
readFile()
updateFile("\nAdicionando mais conteudo ao arquivo")
readFile()
deleteFile()
