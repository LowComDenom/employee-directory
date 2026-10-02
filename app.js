import express from 'express'

import employees from './db/employees.js'

const app = express()

app.route('/').get((req, res) => {
  res.send(`Hello employees!`)
})

app.route('/employees').get((req, res) => {
  res.send(employees)
})

app.route('/employees/random').get((req, res) => {
  const randID = Math.floor(Math.random() * (10 - 1 + 1) + 1)
  const random = employees.find((e) => e.id === randID)
  res.send(random)
})

app.route('/employees/:id').get((req, res) => {
  const { id } = req.params
  const employee = employees.find((e) => e.id === Number(id))
  if (!employee) return res.status(404).send(`No employee with this ID.`)
  res.send(employee)
})

export default app
