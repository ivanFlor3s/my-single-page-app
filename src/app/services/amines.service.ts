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
        {
          nombre: 'Boku No Hero',
          bio: 'What would the world be like if 80 percent of the population manifested extraordinary superpowers called “Quirks” at age four? Heroes and villains would be battling it out everywhere! Becoming a hero would mean learning to use your power, but where would you go to study? U.A. High s Hero Program of course! But what would you do if you were one of the 20 percent who were born Quirkless?',
          img: 'assets/imgs/hero.jpg',
          estreno: '2020-02-12',
          genero: 'Shonen'
        },
        {
          nombre: 'Hunter x Hunter',
          bio: 'After becoming 12, Gon leaves his home and takes on the task of entering the Hunter exam, notorious for its low success rate and high probability of death to become an official Hunter. He befriends the revenge-driven Kurapika, the doctor-to-be Leorio and the rebellious ex-assassin Killua in the exam, with their friendship prevailing throughout the many trials and threats they come upon taking on the dangerous career of a Hunter.',
          img: 'assets/imgs/hxh.jpg',
          estreno: '2020-02-12',
          genero: 'Shonen'
        }
      ];

    constructor() {
        console.log('Forest CORRIENDOOOO!!!!');
    }

    getAmines(){
        return this.amines;
    }

    getAmine(index: number){
      return this.amines[index];
    }

    buscarAmines(termino: string){

      // tslint:disable-next-line: prefer-const
      let aminesArr: any[] = [];
      termino = termino.toLowerCase();

      // tslint:disable-next-line:prefer-const
      for (let amine of this.amines){

        // tslint:disable-next-line:prefer-const
        let nombre = amine.nombre.toLowerCase();

        if (nombre.indexOf(termino) >= 0){
          aminesArr.push(amine);
        }
      }
      return aminesArr;
    }
  }
