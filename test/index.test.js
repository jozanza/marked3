import fs from 'mz/fs'
import MMark from '../src'

process.chdir(__dirname)

describe('renderer', () => {
  it('render headings', async () => {
    const mmark = new MMark()
    const actual = mmark.render(await fs.readFile('./fixtures/headings.md', 'utf8'))
    const expected = await fs.readFile('./fixtures/headings.html', 'utf8')
    expect(actual).toBe(expected)
  })
})
