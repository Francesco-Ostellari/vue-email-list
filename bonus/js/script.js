// Descrizione:
// Attraverso l’apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all’interno di una lista.

const app = new Vue(
  {
    el: '#app',
    data: {
      emails: []
    },
    created() {
      this.email();
    },
    methods: {
      // creo la funzione per generare le emails
      email: function () {
        for (let index = 0; index < 10; index++) {
          axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {
              this.emails.push(response.data.response);
            })
            .catch((error) => {
              console.log(error);
            })
        }
      }
    },
  }
)