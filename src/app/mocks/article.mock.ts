export interface Article {

    id: number;
    country: string;
    city: string;
    dateBegin: string;
    dateEnd: string;
    picture: string;
    secondaryPicture: string[];
    positifPoint: string[];
    negatifPoint: string[];
    advice: string[];
    resume: string;
    voyage: String;
    isActive: boolean;
}

export const ARTICLE: Article[] = [

    {
        id: 1,
        country: 'Grèce',
        city: 'Athène',
        dateBegin:"Du 14.04.22",
        dateEnd: " au 17.05.22 ",
        picture: 'assets/Athène.png',
        secondaryPicture: ['assets/Tunis.png', 'assets/Eljem.png', 'assets/Meterrico.png', 'assets/Guatemala.png'],
        positifPoint: [`Un pays très simple à sillonner`, 'sans embrouilles ni complexité Des habitants gentils',
            'spontanés et qui cherchent le contact Un relief vallonné', 'offrant de superbes paysages dotés de villages pittoresques'],
        advice: ['Prenez une paire de tong !'],
        negatifPoint: ['Le climat torride en juillet-août', `sauf en montagne La côte très fréquentée l’été et de plus en plus bétonnée`],
        resume: `L’Albanie est un pays que nous avons adoré visiter, 
        en grande partie grâce à l’accueil chaleureux des Albanais, mais pas seulement !
         Nous avons découvert une culture fièrement préservée, une variété de paysages captivante 
         et de nombreux coins tranquilles, y compris au mois de juillet. Seule la côte adriatique
          sature de touristes l’été. Notre conseil, si vous venez à cette saison, serait alors 
          de s’éloigner de la mer et de privilégier les villages et les montagnes dans le reste du pays, 
          où se concentre à notre avis tout le charme de l’Albanie.`,
        voyage: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tempor massa id sem iaculis, et rutrum ligula ornare.
         Etiam malesuada diam justo, nec sagittis ligula rhoncus sit amet. Fusce ac viverra nisi.
          Integer nibh urna, posuere euismod dolor ac.
          Donec commodo pellentesque sapien eu interdum.Vestibulum neque nulla,
           mattis eget hendrerit nec, tempus pharetra est.Nulla facilisi.Curabitur elit lorem,
            rhoncus quis quam et, imperdiet euismod mi.Morbi eget elit ac velit porttitor sodales.
            Nulla scelerisque risus ex, a faucibus est eleifend sed.Aliquam ac facilisis lorem, ut ornare velit.
            dignissim metus.Aliquam dignissim lorem id nisi aliquet, a sodales ipsum dignissim.`,
        isActive: true
    }
]