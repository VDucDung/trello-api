/* eslint-disable no-useless-catch */
import { slugify } from '~/utils/formatters'

const createNew = async (reqBody) => {
  try {
    const newBoard = {
      ...reqBody,
      slug: slugify(reqBody.title)
    }
    // Gọi tới tầng Model để luauw bản ghi
    //Làm thêm các xử lý logic khác với các Collection khác
    //Bắn email, notification về cho admin khi có một board mới được tạo
    return newBoard
  } catch (error) {
    throw error
  }
}

export const boardService = {
  createNew
}
