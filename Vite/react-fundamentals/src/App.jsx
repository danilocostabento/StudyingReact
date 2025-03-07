function sum(a, b) {
  return a + b
}

// PascalCase camelCase
function Title() {
  const tech = "React"
  return (
    <h1>{tech} is awesome!</h1>
  )
}

export default function App() {
  const status = true

  return (
    <div>
      <Title />
      <h2>It's easy, like 1 + 1 is {sum(1 + 1)}</h2>
      <h2>Current status: {status ? "ON" : "OFF"}</h2>
    </div>
  )
}