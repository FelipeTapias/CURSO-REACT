import type { CSSProperties } from 'react';

const firstName = 'Felipe';

const lastname = 'Tapias';

const favoriteGames = ['Minecraft', 'Minecraft', 'Minecraft'];

const isActive = false;

const address = {
  zipCode: '123-ABC',
  country: 'Colombia',
};

const myStyles: CSSProperties = {
  backgroundColor: 'cyan',
  borderRadius: 10,
  padding: 10,
  border: '5px outset black',
  borderColor: 'black',
  display: 'flex',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100vw',
};

export const MyAwesomeApp = () => {
  return (
    <>
      <h1>{firstName} !!</h1>
      <h3>{lastname}</h3>

      <p>{favoriteGames.join(', ')}</p>
      <p>{2 + 2}</p>

      <h1>{isActive ? 'Activo' : 'No Activo'}</h1>
      <div style={myStyles}>
        <div>
          <p>
            {firstName} {lastname}
          </p>
          <p>{JSON.stringify(address)}</p>
        </div>
      </div>
    </>
  );
};

// export function MyAwesomeApp() {
//   return (
//     <>
//       <h1>Felipe</h1>
//       <h3>Tapias</h3>
//     </>
//   );
// }
