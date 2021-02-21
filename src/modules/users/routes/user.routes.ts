import { Router } from 'express'
import { UserController } from '../controllers/user-controller'

const userRouter = Router()
const userController = new UserController()

userRouter.post('/', userController.create)
userRouter.put('/', userController.update)

export default userRouter
