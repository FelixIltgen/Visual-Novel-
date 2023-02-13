namespace myNovel {
  export import ƒ = FudgeCore;
  export import ƒS = FudgeStory;
   
  export let transition = {
    fade: {
      duration: 1,
      alpha: "./Assets/Transition/fade.png",
      edge: 1
    },
    leftFade: {
      duration: 1,
      alpha: "./Assets/Transition/leftFade.jpg",
      edge: 1
    }
  };

  export let sound = {
    // themes
    cave: "./Assets/Music/cave.mp3",
    emptyCave: "./Assets/Music/emptyCave.mp3",
    run: "./Assets/Music/run.mp3",
    sunday: "./Assets/Music/sunday.mp3",
    // SFX
    closingGate: "./Assets/Sounds/doorClosing.mp3"
  };

  export let locations = {
    kidRoom: {
      name: "Kid room",
      background: "./Images/Background/kid_room.png"
    },
    livingRoom: {
      name: "Living room",
      background: "./Images/Background/living_room.png"
    },
    street: {
      name: "Street",
      background: "./Images/Background/Street.png"
    },
    cave: {
      name: "Cave",
      background: "./Images/Background/cave.png"
    },
    caveTwo: {
      name: "Cave Two",
      background: "./Images/Background/CaveTwo.png"
    },
    garage: {
      name: "Garage",
      background: "./Images/Background/garage.png"
    },
    graveyard: {
      name: "Graveyard",
      background: "./Images/Background/graveyard.png"
    },
    mineEntrance: {
      name: "Mine entrance",
      background: "./Images/Background/mineEntrance.png"
    },
    mineShaft: {
      name: "Mine shaft",
      background: "./Images/Background/mineShaft.png"
    },
    mineShaftTwo: {
      name: "Mine shaft two",
      background: "./Images/Background/mineShaftTwo.png"
    },
    newShaft: {
      name: "New Shaft",
      background: "./Images/Background/newShaft.png"
    },
    supermarket: {
      name: "Supermarkt",
      background: "./Images/Background/supermarket.png"
    },
    insideSinkhole: {
      name: "Inside of the sinkhole",
      background: "./Images/Background/insideSinkhole.png"
    },
    maze: {
      name: "Maze",
      background: "./Images/Background/maze.png"
    },
    spaceship: {
      name: "Spaceship",
      background: "./Images/Background/spaceship.png"
    },
    sinkhole: {
      name: "Spaceship",
      background: "./Images/Background/spaceship.png"
    },
    
    // Chapter Backgrounds
    begin: {
      name: "Begin",
      background: "./Images/Background/Chapter/begin.png"
    },
    chapterOne: {
      name: "Chapter One",
      background: "Images/Background/Chapter/chapterOne.png"
    },
    chapterTwo: {
      name: "Chapter Two",
      background: "Images/Background/Chapter/chapterTwo.png"
    },
    chapterThree: {
      name: "Chapter Three",
      background: "Images/Background/Chapter/chapterThree.png"
    },
    chapterFour: {
      name: "Chapter Four",
      background: "Images/Background/Chapter/chapterFour.png"
    },
    chapterfive: {
      name: "Chapter five",
      background: "Images/Background/Chapter/chapterfive.png"
    },
    chapterSix: {
      name: "Chapter Six",
      background: "Images/Background/Chapter/chapterSix.png"
    },
    chapterSeven: {
      name: "Chapter Seven",
      background: "Images/Background/Chapter/chapterSeven.png"
    },
    intro: {
      name: "Intro",
      background: "Images/Background/Chapter/intro.png"
    },
    blanko: {
      name: "Blanko",
      background: "Images/Background/Chapter/blanko.png"
    }
  };

  export let characters = {
    narrator: {
      name: ""
    },
    ben: {
      name: "Ben",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        confident: "Images/Characters/Ben/Ben_confident.png",
        moreConfident: "Images/Characters/Ben/Ben_more_confident.png",
        normal: "Images/Characters/Ben/Ben_normal.png",
        ohman: "Images/Characters/Ben/Ben_ohman.png",
        sad: "Images/Characters/Ben/Ben_sad.png",
        thinking: "Images/Characters/Ben/Ben_thinking.png"
      }
    },
    maria: {
      name: "Maria",
      origin: ƒS.ORIGIN.BOTTOMRIGHT,
      pose: {
        angry: "Images/Characters/Maria/Maria_angry.png",
        neutral: "Images/Characters/Maria/Maria_neutral.png",
        happy: "Images/Characters/Maria/Maria_happy.png",
        pleased: "Images/Characters/Maria/Maria_pleased.png",
        sad: "Images/Characters/Maria/Maria_sad.png",
        verySad: "Images/Characters/Maria/Maria_very_sad.png"
      }
    },
    valentin: {
      name: "Valentin",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        solution: "Images/Characters/Valentin/Valentin_solution.png",
        giveUp: "Images/Characters/Valentin/Valentin_giveUp.png",
        mysterious: "Images/Characters/Valentin/Valentin_mysterious.png",
        normal: "Images/Characters/Valentin/Valentin_normal.png",
        sad: "Images/Characters/Valentin/Valentin_sad.png",
        smile: "Images/Characters/Valentin/Valentin_smile.png"
      }
    },
    andrea: {
      name: "Andrea",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        argue: "Images/Characters/Weitere/Andrea_argue.png",
        mad: "Images/Characters/Weitere/Andrea_mad.png",
        normal: "Images/Characters/Weitere/Andrea_normal.png",
        ugh: "Images/Characters/Weitere/Andrea_ugh.png"
      }
    },
    polizistin: {
      name: "Polizeibeamtin",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        eyes_closed: "Images/Characters/Weitere/polizistin_eyes_closed.png",
        sorry: "Images/Characters/Weitere/polizistin_sorry.png",
        normal: "Images/Characters/Weitere/polizistin_normal.png"
      }
    },
    paula: {
      name: "Paula",
      origin: ƒS.ORIGIN.BOTTOMLEFT,
      pose: {
        eyes_closed: "Images/Characters/Weitere/paula_eyes_closed.png",
        sorry: "Images/Characters/Weitere/paula_sorry.png",
        normal: "Images/Characters/Weitere/paula_normal.png"
      }
    }
  };

  export let items = {
    feuerzeug: {
      name: "Feuerzeug",
      description: "Gut um etwas an zu zünden.",
      image: "Images/Items/feuerzeug.png",
      inInventory: false,
      static: true
    },
    seil: {
      name: "Seil",
      description: "Perfekt um runter oder hoch zu klettern",
      image: "Images/Items/seil.png",
      inInventory: false,
      static: false
    },
    tagebuch: {
      name: "Tagebuch",
      description: "Perfekt für wichtige Infos",
      image: "Images/Items/tagebuch.png",
      inInventory: false,
      static: true
    },
    taschenlampe: {
      name: "Taschenlampe",
      description: "Sorgt für Licht, wenn es mal dunkel wird.",
      image: "Images/Items/taschenlampe.png",
      inInventory: false,
      static: true
    },
    wanderschuhe: {
      name: "Wanderschuhe",
      description: "Perfekt für ein spannendes Abenteuer",
      image: "Images/Items/wanderSchuh.png",
      inInventory: false,
      static: true
    },
    wasserflasche: {
      name: "Wasserflasche",
      description: "Gut für den Durst zwischend durch",
      image: "Images/Items/wanderSchuh.png",
      inInventory: false,
      static: true
    }
  };

  export let newPositions = {
    bottomleftMaria: new FudgeStory.Position(950, -540),
    bottomleft: new FudgeStory.Position(350, -540),
    bottomright: new FudgeStory.Position(-900, -550),
    bottomcenter: new FudgeStory.Position(-50, -540),
    rightout: new FudgeStory.Position(2470, -540),
    leftout: new FudgeStory.Position(-2470, -540)
  };



  export let dataForSave = {
    nameProtagonist: ""
  };

  window.addEventListener("load", start);
  function start(_event: Event): void {
    let scenes: ƒS.Scenes = [
      //{ scene: firstScene, name: "First scene"},
      //{ scene: secondScene, name: "Second scene"},
      //{ scene: thirdScene, name: "Thrid scene"},
      //{ scene: fourthScene, name: "Fourth scene"},
      //{ scene: fifthScene, name: "Fifth scene"},
      //{ scene: sixthScene, name: "Sixth scene"},
      //{ scene: seventhScene, name: "Seventh scene"},
      //{ scene: eighthScene, name: "Eighth scene"},
      //{ scene: ninthScene, name: "Ninth scene"},
      { scene: tenthScene, name: "Tenth scene"},

      //Selcet Items
      { id: "withDairy", scene: itemSelcetionDairy, name: "Item selcetion with Dairy option"},
      { id: "noDairy", scene: itemSelcetionNoDairy, name: "Item selcetion without Dairy option"},

      //Normal Path
      { id: "afterItemSelection", scene: afterItemSelection, name: "first scene after Item selection"},

      { id: "chapterThree", scene: startChapterThree, name: "Start Chapter three"},

      { id: "ChapterThreeGood", scene: chapterThreeGood, name: "Chapter three good path"}
      //{ id: "ChapterThreeMid", scene: chapterMid, name: "Chapter three mid path"},
      //{ id: "ChapterThreeBad", scene: startChapterBad, name: "Chapter three bad path"}

      //Bad Ending
    ];

    let uiElement: HTMLElement = document.querySelector("[type=interface]");
    dataForSave = ƒS.Progress.setData(dataForSave, uiElement);

    // start the sequence
    ƒS.Progress.go(scenes);
    ƒS.Speech.hide();

    //Credits
    //<a href="https://lovepik.com/images/png-book.html">Book Png vectors by Lovepik.com</a>
    //<a href="https://www.flaticon.com/de/kostenlose-icons/wasser" title="wasser Icons">Wasser Icons erstellt von Freepik - Flaticon</a>
    //<a href="https://www.flaticon.com/de/kostenlose-icons/seil" title="seil Icons">Seil Icons erstellt von Freepik - Flaticon</a>
    //<a href="https://www.flaticon.com/de/kostenlose-icons/feuerzeug" title="feuerzeug Icons">Feuerzeug Icons erstellt von Freepik - Flaticon</a>
    //<a href="https://www.flaticon.com/de/kostenlose-icons/licht" title="licht Icons">Licht Icons erstellt von Freepik - Flaticon</a>
    //<a href="https://www.flaticon.com/de/kostenlose-icons/buch" title="buch Icons">Buch Icons erstellt von Freepik - Flaticon</a>
    //<a href="https://www.flaticon.com/de/kostenlose-icons/wandern" title="wandern Icons">Wandern Icons erstellt von Freepik - Flaticon</a>

  }
}