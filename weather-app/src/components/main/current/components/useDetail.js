import { useState } from 'react'

export const useDetail = () => {
  const [isDetail, setIsDetail] = useState(false);
  const onClickDetail = () => {
    // todo ゆっくりアニメーションできない
    setIsDetail(!isDetail);
  }
  return {
    isDetail,
    onClickDetail,
  }
}
