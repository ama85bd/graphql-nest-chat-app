import './App.css';
import '@mantine/core/styles.css';
import { MantineProvider, Card, Text } from '@mantine/core';

function App() {
  return (
    <>
      <MantineProvider>
        <Card shadow='lg'>
          <Text>Hello</Text>
        </Card>
      </MantineProvider>
    </>
  );
}

export default App;
