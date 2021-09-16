import React from 'react'
import { useGetData } from '../../function/getData';

export const Every3HoursArea = () => {

  const { weeklyData } = useGetData();

  if (Object.keys(weeklyData).length === 0) return null;
  const { cod, list} = weeklyData;
  // todo cod を使ってレスポンス結果の出し分け実装 cod : 200 or 404

  const kinds = list.map((val, index) => {
    const dt = val.dt;
    const temp = val.main.temp;
    const humidity = val.main.humidity;
    const icon = val.weather[0].icon;
    const speed = val.wind.speed;

    return {
      dt,
      temp,
      humidity,
      icon,
      speed
    }
  })

  // todo 一回の map 実行でできないか
  return (
    <table>
      <tbody>
        <tr>
          <th>時間</th><td>0時</td>
        </tr>
        <tr>
          <th>天気</th>
          {
            kinds.map((val, index) => (
              index < 8 ? (
                <td key={index}><img src={`http://openweathermap.org/img/wn/${val.icon}@2x.png`} alt="アイコン" /></td>
              ) : null
            ))
          }
        </tr>
        <tr>
          <th>気温</th>
        {
          kinds.map((val, index) => (
            index < 8 ? (
              <td key={index}>{val.temp}℃</td>
            ) : null
          ))
        }
        </tr>
        <tr>
          <th>湿度</th>
          {
            kinds.map((val, index) => (
              index < 8 ? (
                <td key={index}>{val.humidity}%</td>
              ) : null
            ))
          }
        </tr>
        <tr>
          <th>風速</th>
          {
            kinds.map((val, index) => (
              index < 8 ? (
                <td key={index}>{val.speed}m/s</td>
              ) : null
            ))
          }
        </tr>
      </tbody>
    </table>
  )
}
