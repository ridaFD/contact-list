import app from './app'
import initializeDatabase from './db'

app.listen(8080, ()=>console.log('server listening on port 8080'))

const start = async () => {
  const controller = await initializeDatabase()
  app.get('/', (req, res) => res.send("ok"));
  app.get('/contacts/list', async (req, res) => {
    const contacts_list = await controller.getContactsList()
    res.json(contacts_list)
  })
}
start()