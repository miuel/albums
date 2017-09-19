# albums
Simple App para IOs desarrollada en React Native, con axios hice un fetch a la url de rallycoding
para traerme un array con una pequeña lista de albunes de Taylor Swift. 

`axios.get('https://rallycoding.herokuapp.com/api/music_albums')`

con el metodo map() recorro todos los registros del array y les asigno un diseño para enseñarlos en pantalla.

Luego el diseño se desarrolla en componentes funcionales como AlbumDeatil, CardSection ó Card.


Wireframe:

![alt text](https://github.com/miuel/albums/blob/master/patronesUI/wireframeAlbumPorject.png)

Diseño Final

![alt text](https://github.com/miuel/albums/blob/master/patronesUI/printScreenApp.png)

## Para correr la app

descargar el proyecto ó hacer git clone https://github.com/miuel/albums.git en la terminal

npm install

npm install -g react-native-cli

react-native init

react-native run-ios
