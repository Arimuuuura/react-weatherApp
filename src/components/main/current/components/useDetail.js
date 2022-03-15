import { useState } from 'react'

export const useDetail = () => {
  const [isDetail, setIsDetail] = useState(false);
  const onClickDetail = () => {
    setIsDetail(!isDetail);
  }
  return {
    isDetail,
    onClickDetail,
  }
}
