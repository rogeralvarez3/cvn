<template>
  <v-app>
    <v-navigation-drawer app clipped v-model="drawer">
      <v-list>
        <v-list-item v-for="item in menu" :key="item.text" @click="item.action">
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app clipped-left color="primary" dark>
      <v-app-bar-nav-icon
        v-show="!drawer"
        @click="drawer = true"
      ></v-app-bar-nav-icon>
      <v-toolbar-title
        ><div>
          <div class="title-text">CVN</div>
        </div>
        <div>
          <div class="small-text">Compra Venta Nicaragua</div>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="search">
        <v-text-field
          dense
          outlined
          rounded
          placeholder="Buscar..."
          prepend-inner-icon="mdi-magnify"
          v-if="$router.currentRoute.path == '/'"
        ></v-text-field>
      </div>
      <v-btn fab small text>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-icon large v-on="on">mdi-account-circle</v-icon>
          </template>
          <v-list>
            <v-list-item v-for="item in menu2" :key="item.text">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>
    <v-dialog v-model="$store.state.dlgAddProduct" width="600" persistent>
      <v-card>
        <v-card-title class="grey lighten-4 pa-0 pl-2 pr-2"
          >Publicar producto</v-card-title
        >
        <v-divider></v-divider>
        <v-card-text>
          <table>
            <tr>
              <td>
                <img class="imageProduct"/>
                <span>Haga click en el cuadro para agregar imágenes</span>
              </td>
              <td width="400" style="padding:2px">
                <v-text-field dense
                  label="Nombre"
                  v-model="product.name"
                ></v-text-field>
                <v-text-field
                  dense
                  label="Descripción"
                  v-model="product.description"
                ></v-text-field>
                <v-text-field
                  dense
                  label="Cantidad disponible"
                  v-model="product.stock"
                ></v-text-field>
                <v-text-field
                  dense
                  label="Precio por unidad"
                  v-model="product.price"
                ></v-text-field>
                <v-select
                  dense
                  label="Estado"
                  v-model="product.status"
                  :items="product_status"
                ></v-select>
              </td>
            </tr>
          </table>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">Publicar</v-btn>
          <v-btn @click="$store.commit('addProduct', false)">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router/index";
import store from "./store/index";
export default {
  name: "App",

  data: () => ({
    menu: [
      {
        icon: "mdi-home",
        text: "Inicio",
        action: () => {
          router.push("/").catch(() => {});
        },
      },
      {
        icon: "mdi-cart-arrow-up",
        text: "Vender",
        action: () => {
          store.commit("addProduct", true);
        },
      },
      {
        icon: "mdi-cogs",
        text: "Opciones",
        action: () => {},
      },
      {
        icon: "mdi-location-exit",
        text: "Salir",
        action: () => {
          //this.signOut()
          store.dispatch("signOut");
        },
      },
    ],
    menu2: [
      { icon: "mdi-help", text: "Ayuda" },
      { icon: "mdi-card-account-details-outline", text: "Acerca de..." },
      { icon: "mdi-email-edit-outline", text: "Enviar sugerencia o denuncia" },
      { icon: "mdi-help", text: "mdi-location-exit" },
    ],
    drawer: null,
    dlgAdd: false,
    product: {
      name: "",
      description: "",
      stock: 1,
      price: 0,
      status: [],
    },
  }),
  methods: {
    signOut: function () {
      console.log("cerrar sesión");
    },
  },
  computed: {
    product_status: function () {
      let result = [{ value: 0, text: "" }];

      return result;
    },
  },
};
</script>
<style scoped>
.title-text {
  font-size: 24px;
  font-weight: bolder;
  text-shadow: 1px 1px 1px #333;
}
.small-text {
  font-size: 8px;
  margin-top: -5px;
}
.search {
  width: 300px;
  margin-right: 100px;
  margin-top: -10px;
  padding: 0;
  height: 30px;
}
.imageProduct {
  width: 250px;
  height: 250px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 2px;
  cursor: pointer;
}
</style>