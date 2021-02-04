var app = new Vue ({
  el : '#app',
  data : {

    counter : 0,
    newMessage : '',

    account: [{
      name: 'Michael Alesiano',
      avatar: 'img/io.jpg',
    }],

    contacts: [
      {
        name: 'Michele',
        avatar: 'img/michele.jpg',
        online: "Ultimo accesso oggi alle " + moment().add(-30, 'minutes').format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Gioele',
        avatar: 'img/gioele.jpg',
        online: "Ultimo accesso oggi alle " + moment().format('HH:mm'),
        messages: [
          {
            date: '20/03/2020 16:30:00',
            text: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            text: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            text: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {

        name: 'Alessandra',
        avatar: 'img/alessandra.jpg',
        online: "Ultimo accesso oggi alle " + moment().add(-45, 'minutes').format('HH:mm'),
        messages: [
          {
            date: '28/03/2020 10:10:40',
            text: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            text: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            text: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Giorgio',
        avatar: 'img/giorgio.jpg',
        online: "Ultimo accesso oggi alle " + moment().add(-20, 'minutes').format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luca',
        avatar: 'img/luca.jpg',
        online: "Ultimo accesso oggi alle " + moment().add(-1, 'hours').format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Marco',
        avatar: 'img/marco.jpg',
        online: "Ultimo accesso oggi alle " + moment().format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Sara',
        avatar: 'img/sara.jpg',
        online: "Ultimo accesso oggi alle " + moment().add(-15, 'minutes').format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Stefano',
        avatar: 'img/stefano.jpg',
        online: "Ultimo accesso oggi alle " + moment().add(-10, 'minutes').format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Cristiano',
        avatar: 'img/cristiano.png',
        online: "Ultimo accesso oggi alle " + moment().add(-2, 'hours').format('HH:mm'),
        messages: [
          {
            date: '10/01/2020 15:30:55',
            text: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            text: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            text: 'Tutto fatto!',
            status: 'received'
          }
        ],
      }
    ],
  },

  methods : {
    changeChat (index) {
      this.counter = index;
    },
    pushChat () {
      this.contacts[this.counter].messages.push({date: moment().format('MM/DD/YYYY HH:mm:ss'), text:this.newMessage, status: 'sent'});
      this.newMessage = '';
      setTimeout(this.funzioneRisposta,1000);
    },
    funzioneRisposta(){
      this.contacts[this.counter].messages.push({date: moment().format('MM/DD/YYYY HH:mm:ss'), text: 'Ok', status: 'received'});
      this.contacts[this.counter].online = "Online";
      setTimeout(this.funzioneOnline,2000);
    },
    funzioneOnline(){
      this.contacts[this.counter].online = "Ultimo accesso oggi alle " + moment().format('HH:mm');
    }
  }
});
