/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'
import { boardModel } from '../models/boardModel'
const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Gọi tới tầng Model để lưu bản ghi
    const createdBoard = await boardModel.createNew(newBoard)
    const getNewBoard = await boardModel.findeOneById(createdBoard.insertedId)
    //Làm thêm các xử lý logic khác với các Collection khác
    //Bắn email, notification về cho admin khi có một board mới được tạo
    return getNewBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}
