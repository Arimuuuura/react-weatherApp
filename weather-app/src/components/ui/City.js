export const City = ({ weather }) => {
  console.log(weather);
  return (
    <div>
      { weather.name }
    </div>
  )
}
