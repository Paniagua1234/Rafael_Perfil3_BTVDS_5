import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

 

export default function Comidas() {

  const [Comidas,setComidas] = useState(
    [
      {
        img: 'https://s3.abcstatics.com/media/gurmesevilla/2012/01/comida-rapida-casera.jpg',
        name: 'Hamburguesa',
        descripcion: 'Pan, lechuga, cebolla, tomate, queso y carne',
      },

      {
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg/273px-001_Tacos_de_carnitas%2C_carne_asada_y_al_pastor.jpg',
        name: 'Tacos',
        descripcion: 'Tortilla, carne, chirmol, cebolla y chile',
      },

      {
        img: 'https://www.recetasnestle.com.ec/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/6594a07290c4cc5ed88f682560cc2e49.webp?itok=SnY35EwD',
        name: 'Lasaña',
        descripcion: 'Pasta, salsa de tomate, queso y carne',
      },

      {
        img: 'https://www.sortirambnens.com/wp-content/uploads/2019/02/pizza-de-peperoni.jpg',
        name: 'Pizza de Pepperoni',
        descripcion: 'Pan, salsa de tomate, queso y pepperoni',
      },

      {
        img: 'https://www.goya.com/media/7017/churrasco-con-chimichurri-grilled-skirt-steak.jpg?quality=80',
        name: 'Churrasco',
        descripcion: 'carne, chimol, arroz',
      },

      {
        img: 'https://assets.unileversolutions.com/recipes-v2/247293.jpg',
        name: 'Pupusas',
        descripcion: 'Masa, frijol, queso y salsa',
      }
    ]
  );

  return (
    <View style={styles.fondo}>
      <FlatList
      data={Comidas}
      renderItem={({item}) => (
        <View style={styles.card}>
          <View style={styles.flex}>
            <View style={styles.profile}>
                <Image style={styles.img} source={{uri:"./../img/robot.png"}}/>
            </View>  
            <View style={styles.main_content}>
              <Text>Nombre: {item.name}</Text>
              <Text>Descripcion:</Text>
              <Text>{item.descripcion}</Text>
            </View>
          </View>
        </View>
      )}
      />
    </View>    
  )
}

const styles = StyleSheet.create({
  card: {
    height: 'wrap-content',
    backgroundColor: '#FFFFFF',
    padding: 8,
    paddingHorizontal: 15,
    margin: 10,
    borderRadius: 8
},

fondo:{
    backgroundColor: '#79B9E0',
    height: '100%',
    width: '100%',
    marginTop: 25

},

profile: {
    width: 40,
    height: 40,
    borderRadius: 50,
    display: 'flex',
    backgroundColor: '#CD9DE0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10
},

img: {
    height: 30,
    width: 30
},

flex:{
    display:'flex',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row'
},

})