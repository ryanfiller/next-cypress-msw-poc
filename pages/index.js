const Index = (props) => {
  const { fetchedData } = props

  return (
    <main style={{
      height: '100vh',
      display: 'grid',
      gridTemplateRows: '1fr auto 1fr',
      gridTemplateColumns: '1fr auto 1fr'
    }}>
      <pre style={{ gridArea: '2 / 2 / 3 / 3' }}>{JSON.stringify(fetchedData, null, 2)}</pre>
    </main>
  )
}

export async function getStaticProps() {
  const response = await fetch('https://cat-fact.herokuapp.com/facts')
  const json = await response.json()
  const data =  json[Math.floor(Math.random() * (json.length))]

  return {
    props: {
      fetchedData: data
    }
  }
}

export default Index
