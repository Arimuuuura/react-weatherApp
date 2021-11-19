import axios from 'axios';

const notFoundMessage =
  '入力された郵便番号での検索はできません。他の番号を試してください。';
const unexpectedMessage =
  '予期せぬエラーが発生しました。しばらく時間を置いて、試してください。';

export const fetch = async (url) => {
  return await axios
    .get(url)
    .then((res) => {
      return res;
    })
    .catch(async (err) => {
      throw await processErrorResponse(err);
    });
};

const processErrorResponse = async (err) => {
  if (err && err.response && err.response.status) {
    const status = err.response.status;
    switch (status) {
      case 404:
        return {
          status,
          message: notFoundMessage,
        };

      default:
        return {
          status,
          message: unexpectedMessage,
        };
    }
  }
};
