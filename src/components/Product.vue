<template>
  <v-container>
    <v-card>
      <v-card-title
        class="pa-0 pl-2 pr-2 grey lighten-5"
        v-text="title"
      ></v-card-title>
      <v-divider></v-divider>
      <v-card-text>
        <table>
          <tbody>
            <tr>
              <td>
                <v-img :src="image" width="150" height="150" />
              </td>
              <td>
                  <div class="pa-4 pl-8">
                    <v-row><h2>{{`Precio: ${price}`}}</h2></v-row>
                    <v-row><h5>{{`Descripción: ${description}`}}</h5></v-row>
                    <v-row><h5>{{`Locación: ${location}`}}</h5></v-row>
                    <v-row>{{`Fecha de publicación: ${date_added}`}}</v-row>
                  </div>
              </td>
            </tr>
          </tbody>
        </table>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary">Comprar</v-btn>
        <v-btn color="success">Hacer oferta</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    title: String,
    image: String,
    price: Number,
    description: String,
    location: String,
    shipping: Number,
    date_added:String
  },
  data() {
    return {};
  },
};
</script>

<style></style>
