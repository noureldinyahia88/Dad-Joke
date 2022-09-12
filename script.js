const jokEl = document.getElementById('joke')
const jokeBtn = document.getElementById('btn')

generatejoke()

jokeBtn.addEventListener('click', generatejoke)
async function generatejoke() {
    const config = {
        headers: {
            'Accept': 'application/json' }
    }
    const res = await fetch('https://icanhazdadjoke.com', config)

    const data = await res.json()
    jokEl.innerHTML = data.joke
}