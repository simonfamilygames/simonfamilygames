import './pages/hk-score'
document.querySelector<HTMLElement>('#app')!.innerHTML = `
  <h1>港股打新评分器</h1>
  <form id="score-form">
    <label>基石投资者质量: <input name="score1" type="number" min="0" max="10" value="2" /></label><br>
    <label>所属行业热度: <input name="score2" type="number" min="0" max="10" value="8" /></label><br>
    <label>盈利能力/成长性: <input name="score3" type="number" min="0" max="10" value="8" /></label><br>
    <label>定价合理性: <input name="score4" type="number" min="0" max="10" value="8" /></label><br>
    <label>市场情绪: <input name="score5" type="number" min="0" max="10" value="4" /></label><br>
    <button type="submit">计算得分</button>
  </form>
  <p id="result"></p>
`

document.querySelector('#score-form')!.addEventListener('submit', (e) => {
  e.preventDefault()
  const scores = Array.from(document.querySelectorAll<HTMLInputElement>('input[type=number]'))
    .map((input) => parseInt(input.value))
  const total = scores.reduce((sum, s) => sum + s, 0)
  const suggestion = total >= 40 ? '✅ 推荐：可打！' : '❌ 不打：风险偏高'
  document.querySelector('#result')!.textContent = `总分：${total} 分，建议：${suggestion}`
})
