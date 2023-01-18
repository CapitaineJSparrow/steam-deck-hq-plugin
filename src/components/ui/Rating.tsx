const Rating = ({ score, label }: { score: number, label: string }) => {
  return (
    <div style={{ margin: 0, fontSize: "14px" }}>
      <p style={{ display: "inline-block", margin: 0 }}>{label}</p>
      <span style={{ color: 'yellow' }}>
        {Array(score).fill("★").map(el => el)}
        {Array(5 - score).fill("☆").map(el => el)}
      </span>
    </div>
  )
}

export default Rating;