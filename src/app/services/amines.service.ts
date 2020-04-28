import { Injectable } from '@angular/core';

@Injectable()
export class AminesService {
    amines: any[] = [
        {
          nombre: 'Love is War',
          bio: 'The second season of Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen.',
          img: 'assets/imgs/love-is-war.jpg',
          estreno: '2020-11-01',
          genero: 'Romance'
        },
        {
          nombre: 'Kakushigoto',
          bio: 'Single father Kakushi Gotou has a secret. He’s a top-selling artist of popular erotic manga, but his impressionable young daughter, Hime, can never find out! Now he’s having to bend over backwards just to keep her inquisitive little mind from discovering what he does for a living. A father-daughter tale of love and laughter.',
          img: 'assets/imgs/kakushigoto.jpg',
          estreno: '2020-05-01',
          genero: 'Comedy'
        },
        {
          nombre: 'Tower of God',
          bio: 'Centers around a boy called Twenty-Fifth Bam, who has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam manages to open the door into it as well, and faces challenges at each floor of this tower as he tries to find his closest companion.',
          img: 'assets/imgs/tower-of-god.png',
          estreno: '2020-01-01',
          genero: 'Adventure'
        },
        {
          nombre: 'Yesterday wo Utatte',
          bio: 'A story of love and humanity, following four boys and girls trying to live their best lives through hardship and turmoil, in a small town on a private rail line just outside of Shinjuku. Minor misunderstandings lead to big complications, and their various feelings become entangled.',
          img: 'assets/imgs/utatte.png',
          estreno: '2020-05-01',
          genero: 'Slice of life'
        },
      ];

    constructor() {
        console.log('Forest CORRIENDOOOO!!!!');
    }

    getAmines(){
        return this.amines;
    }
}