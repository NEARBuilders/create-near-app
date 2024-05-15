let { ship } = props

  // // not needed if running this component on a live ship
  // if (!window.ship) {
  //   // id of the fakeship
  //   Urbit.ship(`${process.env.REACT_APP_FAKESHIP}`)
  //   // url and auth for a fakeship
  //   Urbit.setTestApi(
  //     `${process.env.REACT_APP_HOST}`,
  //     `${props.REACT_APP_FAKE_CODE}`
  //   )
  // }

const Label = styled.span`
  font-size: 16px`

const Form = styled.div`
  max-width: 300px
  margin: 20px auto
  text-align: center`

const Input = styled.input`
  width: 100%
  padding: 5px
  border: 1px solid #bbc0c1
  border-radius: 10px`

const Section = styled.div`
  display: flex
  justify-content: space-between
  background-color: #f5f5f5 /* Light grey background */
  padding: 20px
  border-radius: 10px
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1)`

const TextArea = styled.textarea`
  width: 100%
  height: 200px
  border: 1px solid #ccc /* Faint grey border */
  border-radius: 10px
  padding: 10px
  box-sizing: border-box
  font-family: inherit
  resize: none /* Optional: Disables resizing */`

const Button = styled.button`
width: auto
padding: 5px
padding-left:15px
padding-right:15px
margin-top: 10px
margin-bottom:10px
background-color: white
border: 1px solid #bbc0c1
color: black
cursor: pointer`

const [scryApp, setScryApp] = useState('')
const [scryPath, setScryPath] = useState('')
const [scryResponse, setScryResponse] = useState('')

const handleScryButton = (e) => {
  e.preventDefault()

  Urbit.scryUrbit(scryApp, scryPath)
  .then((res) => {
    setScryResponse(JSON.stringify(res))
    setScryApp('')
    setScryPath('')
  })
}

return (
  <Section>
    <Form>
      <Label>{`Scry to ~${ship}`}</Label>
      <br/>
      <Label>App</Label>
      <Input
        type="text"
        value={scryApp}
        onChange={(e) => setScryApp(e.target.value)}
        name="scryApp"
        placeholder="docket"
      />
      <Label>Path</Label>
      <Input
        type="text"
        value={scryPath}
        onChange={(e) => setScryPath(e.target.value)}
        name="scryPath"
        placeholder="/charges"
      />
      <Button onClick={handleScryButton}>Send Scry</Button>
    </Form>
    <TextArea value={scryResponse} readOnly></TextArea>
  </Section>
)
